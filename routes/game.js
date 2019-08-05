const express = require('express');
const router = express.Router();
// Load Game model
const Game = require('../models/Game');

const {
  ensureAuthenticated
} = require('../config/auth');

var state = {
  account: '',
  lobbies: 'active',
  about: ''
}

// Display game
router.get('/', ensureAuthenticated, (req, res) => {
  res.render('game', {
    user: req.user,
    state: state
  });
});

router.get('/new', ensureAuthenticated, (req, res) => {
  res.render('new_game', {
    state: state,
    user: req.user
  })
})

// Create a game
router.post('/new', ensureAuthenticated, (req, res) => {
  var {
    title,
    visibility,
    user_id,
    user_name
  } = req.body;
  if (visibility == 'true') {
    visibility = true;
  } else {
    visibility = false;
  }
  let errors = [];
  if (!title) {
    errors.push({
      msg: 'Please fill out a title'
    })
  }
  if (title.length < 3) {
    errors.push({
      msg: 'Title must be at least 3 characters'
    })
  }
  if (errors.length > 0) {
    var state = {
      account: '',
      lobbies: 'active',
      about: ''
    }
    res.render('new_game', {
      user: req.user,
      state: state
    })
  } else {
    const newGame = new Game({
      title,
      visibility,
      user_id,
      user_name
    });
    newGame.save((err) => {
      if (err) {
        console.log(err);
        req.flash('error_msg', 'Something went wrong with making the game!');
      } else {
        console.log('Successfully created a new game!');
        req.flash('success_msg', 'Successfully created a new game');
        res.redirect(`/game/${newGame._id}`);
      }
    })
  }
})

router.get('/:id', ensureAuthenticated, (req, res) => {
  var id = req.params.id;
  Game.findOne({_id: id}, (err, data) => {
    if (err) {
      console.log(err);
      req.flash('error_msg', "Couldn't find the game!");
    } else {
      console.log('Successfully connected user to game!');
      res.render('game', {
        state: state,
        user: req.user,
        game: data
      })
    }
  })
})

router.post('/:id/delete', ensureAuthenticated, (req, res) => {
  var id = req.params.id;
  Game.findOne({_id: id}, (err, data) => {
    if (err) {
      console.log(err);
      req.flash('error_msg', "Couldn't find the game to delete!");
    } else {
      if (data.user_id == req.user._id) {
        console.log('Deleting game lobby...');
        Game.deleteOne({_id: id}, (err) => {
          if (err) {
            console.log("Couldn't delete the game...", err);
          } else {
            console.log('Successfully deleted game!');
            res.redirect('/lobbies');
          }
        })
      }
    }
  })
})

module.exports = router;
