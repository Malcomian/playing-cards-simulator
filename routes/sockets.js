const Game = require('../models/Game');

module.exports = (socket) => {
  socket.on('start', (data) => {
    console.log(`User connected in lobby ${data.lobby_id}!`);
    Game.findOne({ _id: data.lobby_id }, (err, game) => {
      if (game.state) {
        socket.emit(`load:${data.lobby_id}`, game);
      } else {
        // console.log('saving game...');
        // console.log(data);
        game.state = data;
        game.save((err) => {
          if(err) console.log('there was a problem saving the game', err);
        });
        var load = {
          state: 0
        }
        load.state = data;
        socket.emit(`load:${data.lobby_id}`, load);
      }
    })
  })
  socket.on('save_game', (data) => {
    // console.log('saving game...');
    // console.log(data);
    // data = JSON.stringify(data);
    Game.updateOne({_id: data.lobby_id}, {$set: {state: data}}, (err) => {
      if(err) console.log(err);
    })
    // Game.findOne({_id: data.lobby_id}, (err, game) => {
    //   if (game.state) {
    //     // console.log(data);
    //     console.log(game);
    //     game.state.game = data.game;
    //     game.state.bicycle = data.bicycle;
    //     game.state.playArea = data.playArea;
    //     game.save((err) => {
    //       console.log('there was a problem saving the game!!!!', err);
    //     })
    //   } else {
    //     // idk
    //   }
    // })
  })
  socket.on('reset', (data) => {
    socket.broadcast.emit(`reset:${data.lobby_id}`, data);
  })
  socket.on('deck_position', (data) => {
    socket.broadcast.emit(`update_deck_position:${data.lobby_id}`, data);
  })
  socket.on('draw_card', (data) => {
    socket.broadcast.emit(`update_draw_card:${data.lobby_id}`, data);
  })
  socket.on('card_position', (data) => {
    socket.broadcast.emit(`update_card_position:${data.lobby_id}`, data);
  })
  socket.on('shuffle', (data) => {
    socket.broadcast.emit(`update_shuffle:${data.lobby_id}`, data);
  })
}
