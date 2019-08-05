const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Game = require('../models/Game');

const {
  ensureAuthenticated
} = require('../config/auth');

// Welcome Page
router.get('/', (req, res) => {
  res.render('welcome')
});

class State {
  constructor() {
    this.resetState();
  }
  resetState() {
    this.account = '';
    this.lobbies = '';
    this.about = '';
    return this;
  }
}

var state = new State();

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  state.resetState();
  res.render('dashboard', {
    user: req.user,
    state: state
  })
})

// Account
router.get('/account', ensureAuthenticated, (req, res) => {
  state.resetState().account = 'active';
  res.render('account', {
    user: req.user,
    state: state
  })
})

// Lobbies
router.get('/lobbies', ensureAuthenticated, (req, res) => {
  state.resetState().lobbies = 'active';
  Game.find().exec((err, games) => {
    res.render('lobbies', {
      user: req.user,
      state: state,
      games: games
    })
  })
})

// About
router.get('/about', ensureAuthenticated, (req, res) => {
  state.resetState().about = 'active';
  res.render('about', {
    user: req.user,
    state: state
  })
})

module.exports = router;
