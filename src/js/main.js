var bicycle = new Deck();
// var player = new Player('Player One');
var playArea = $('#play-area');

playArea.append(bicycle.deck);

var deck = $('#play-area .deck');

var game = {
  drawn: 0,
  dragged: 0,
  lobby_id: $(location).attr('pathname').split('/')[2]
}

console.log(game.lobby_id);

// sockets
var socket = io();
socket.emit('start', {
  lobby_id: game.lobby_id,
  game: game,
  bicycle: bicycle,
  playArea: playArea.html()
});

function saveGame() {
  socket.emit('save_game', {
    lobby_id: game.lobby_id,
    game: game,
    bicycle: bicycle,
    playArea: playArea.html()
  })
}

socket.on(`load:${game.lobby_id}`, function (data) {
  loadGame(data);
})

function resetGame() {
  let html = `
  <div class="deck">
  <div class="card back">
  <div class="symbol d-flex flex-wrap justify-content-center align-items-center">
  <img src="/img/back.svg">
  </div>
  </div>
  <div class="card back shift">
  <div class="symbol d-flex flex-wrap justify-content-center align-items-center">
  <img src="/img/back.svg">
  </div>
  </div>
  </div>
  `;
  let data = {
    state: {
      bicycle: new Deck(),
      game: {
        lobby_id: game.lobby_id,
        drawn: 0,
        dragged: 0
      },
      playArea: html,
    }
  }
  loadGame(data);
}

$('#reset').click(function(){
  resetGame();
  socket.emit('reset', {lobby_id: game.lobby_id})
  saveGame();
})

socket.on(`reset:${game.lobby_id}`, (data) => {
  resetGame();
})

function loadGame(data) {
  console.log('loading game state...');
  console.log(data);
  playArea.html(data.state.playArea);
  bicycle.cards = data.state.bicycle.cards;
  game = data.state.game;
  deck = $('#play-area .deck');
  // make deck draggable
  deck.draggable({
    start: function (event, ui) {
      $(this).css('transition', 'none');
      console.log(ui);
      // socket.emit();
    },
    stop: function (event, ui) {
      console.log(ui);
      $(this).css('transition', 'all 0.2s');
      let id = 'deck';
      // let position = ui.position;
      let position = $(this).offset();
      console.log('id: ' + id + ', position: ' + position.left + 'x ' + position.top + 'y');
      socket.emit('deck_position', {
        lobby_id: game.lobby_id,
        position: position
      });
      saveGame();
    }
  }, {
    containment: "#play-area",
    scroll: false
  });

  // draw a card
  deck.click(function () {
    let position = deck.position();
    let card = bicycle.deal();
    if (card) {
      game.drawn++;
      let html = '<div id="' + game.drawn + '" class="drawn">';
      html += card.html;
      html += '</div>';
      playArea.append(html);
      // draw a card for all other players!
      socket.emit('draw_card', {
        lobby_id: game.lobby_id
      });
      $('#' + game.drawn).offset(position);
      $('#' + game.drawn).draggable({
        start: function () {
          $(this).css('transition', 'none');
          game.dragged++;
          $(this).css('z-index', '' + game.drawn + game.dragged);
        },
        stop: function (event, ui) {
          $(this).css('transition', 'all 0.2s');
          // let position = ui.position;
          let position = $(this).position();
          position.id = $(this).attr('id');
          socket.emit('card_position', {
            lobby_id: game.lobby_id,
            position: position
          });
          saveGame();
        }
      }, {
        containment: "#play-area",
        scroll: false
      });
    }
    saveGame();
  })

  // make all cards draggable
  $('.drawn').draggable({
    start: function () {
      $(this).css('transition', 'none');
      game.dragged++;
      $(this).css('z-index', '' + game.drawn + game.dragged);
    },
    stop: function (event, ui) {
      $(this).css('transition', 'all 0.2s');
      // let position = ui.position;
      let position = $(this).position();
      position.id = $(this).attr('id');
      socket.emit('card_position', {
        lobby_id: game.lobby_id,
        position: position
      });
      saveGame();
    }
  }, {
    containment: "#play-area",
    scroll: false
  });
}

$('#shuffle').click(function () {
  bicycle.shuffle();
  socket.emit('shuffle', {
    lobby_id: game.lobby_id,
    bicycle: bicycle.cards
  });
  saveGame();
})

socket.on(`update_shuffle:${game.lobby_id}`, function (data) {
  console.log('updating deck!');
  bicycle.cards = data.bicycle;
})

socket.on(`update_deck_position:${game.lobby_id}`, function (data) {
  console.log('got updated position: ' + data.position.left + 'x ' + data.position.top + 'y');
  // $('#play-area .deck').css('transform', `translate(${data.position.left}px, ${data.position.top}px)`);
  $('#play-area .deck').offset({
    left: data.position.left,
    top: data.position.top
  });
})

socket.on(`update_draw_card:${game.lobby_id}`, function (data) {
  console.log('another user drew a card!');
  // let position = deck.position();
  let card = bicycle.deal();
  if (card) {
    game.drawn++;
    let html = '<div id="' + game.drawn + '" class="drawn">';
    html += card.html;
    html += '</div>';
    playArea.append(html);
    $(`#${game.drawn}`).offset(deck.position());
    // $(`#${game.drawn}`).css('transform', `translate(${position.left}px, ${position.top}px)`);
    $(`#${game.drawn}`).draggable({
      start: function () {
        $(this).css('transition', 'none');
        game.dragged++;
        $(this).css('z-index', '' + game.drawn + game.dragged);
      },
      stop: function (event, ui) {
        $(this).css('transition', 'all 0.2s');
        // let position = ui.position;
        let position = $(this).position();
        position.id = $(this).attr('id');
        socket.emit('card_position', {
          lobby_id: game.lobby_id,
          position: position
        });
        saveGame();
      }
    }, {
      containment: '#play-area',
      scroll: false
    });
  }
})

socket.on(`update_card_position:${game.lobby_id}`, function (data) {
  console.log('got updated card position: ID: ' + data.position.id + ', ' + data.position.left + 'x, ' + data.position.top + 'y');
  game.dragged++;
  $(`#${data.position.id}`).offset({
    left: data.position.left,
    top: data.position.top
  }).css('z-index', `${game.drawn + game.dragged}`);
  // $(`#${data.position.id}`).css('transform', `translate(${data.position.left}px, ${data.position.top}px)`).css('z-index', `${game.drawn + game.dragged}`)
})