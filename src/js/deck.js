class Deck {
  constructor() {
    // this.build();
    this.back = "\n<div class=\"card back\">\n<div class=\"symbol d-flex flex-wrap justify-content-center align-items-center\">\n<img src=\"/img/back.svg\">\n</div>\n</div>\n";
    this.deck = "\n<div class=\"deck\" style=\"transition: all 0.2s\">\n<div class=\"card back\">\n<div class=\"symbol d-flex flex-wrap justify-content-center align-items-center\">\n<img src=\"/img/back.svg\">\n</div>\n</div>\n<div class=\"card back shift\">\n<div class=\"symbol d-flex flex-wrap justify-content-center align-items-center\">\n<img src=\"/img/back.svg\">\n</div>\n</div>\n</div>\n";
    this.cards = [
      {
        "suit": "Clubs",
        "type": "Ace",
        "value": 1,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol ace d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Two",
        "value": 2,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Three",
        "value": 3,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Four",
        "value": 4,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Five",
        "value": 5,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Six",
        "value": 6,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Seven",
        "value": 7,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Eight",
        "value": 8,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Nine",
        "value": 9,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Ten",
        "value": 10,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-club\"></span>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Jack",
        "value": 11,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-knight\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "Queen",
        "value": 12,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-queen\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Clubs",
        "type": "King",
        "value": 13,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-club\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-king\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Ace",
        "value": 1,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol ace d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Two",
        "value": 2,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Three",
        "value": 3,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Four",
        "value": 4,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Five",
        "value": 5,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Six",
        "value": 6,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Seven",
        "value": 7,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Eight",
        "value": 8,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Nine",
        "value": 9,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Ten",
        "value": 10,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-heart\"></span>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Jack",
        "value": 11,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-knight\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "Queen",
        "value": 12,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-queen\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Hearts",
        "type": "King",
        "value": 13,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-heart\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-king\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Ace",
        "value": 1,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol ace d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Two",
        "value": 2,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Three",
        "value": 3,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Four",
        "value": 4,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Five",
        "value": 5,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Six",
        "value": 6,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Seven",
        "value": 7,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Eight",
        "value": 8,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Nine",
        "value": 9,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Ten",
        "value": 10,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-diamond\"></span>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Jack",
        "value": 11,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-knight\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "Queen",
        "value": 12,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-queen\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Diamonds",
        "type": "King",
        "value": 13,
        "html": "\n<div class=\"card red\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-diamond\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-king\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Ace",
        "value": 1,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">A</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol ace d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Two",
        "value": 2,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">2</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Three",
        "value": 3,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">3</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex flex-column justify-content-between align-items-center p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Four",
        "value": 4,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">4</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Five",
        "value": 5,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">5</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Six",
        "value": 6,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">6</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Seven",
        "value": 7,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">7</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Eight",
        "value": 8,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">8</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse center-off d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-center px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Nine",
        "value": 9,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">9</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Ten",
        "value": 10,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">10</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol fours d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol fours inverse d-flex justify-content-between align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse center-off-alt d-flex justify-content-center align-items-start px-4\">\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol inverse d-flex justify-content-between align-items-start px-4 p-2\">\n<span class=\"mdi mdi-cards-spade\"></span>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Jack",
        "value": 11,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">J</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-knight\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "Queen",
        "value": 12,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">Q</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-queen\"></span>\n</div>\n</div>\n"
      },
      {
        "suit": "Spades",
        "type": "King",
        "value": 13,
        "html": "\n<div class=\"card black\">\n<div class=\"suit d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"suit inverse d-flex flex-column justify-content-center align-items-center\">\n<div class=\"text-center\">K</div>\n<span class=\"mdi mdi-cards-spade\"></span>\n</div>\n<div class=\"symbol face d-flex justify-content-center align-items-center\">\n<span class=\"mdi mdi-chess-king\"></span>\n</div>\n</div>\n"
      }
    ];
  }
  // build() {
  //   console.log('Building deck...')
  //   this.back = $('#back').html();
  //   this.deck = $('#deck').html();
  //   this.cards = [];
  //   for (let x = 1; x <= 4; x++) {
  //     var suit = '';
  //     if (x == 1) {
  //       suit = 'Clubs';
  //     } else if (x == 2) {
  //       suit = 'Hearts';
  //     } else if (x == 3) {
  //       suit = 'Diamonds';
  //     } else if (x == 4) {
  //       suit = 'Spades';
  //     }
  //     for (let y = 1; y <= 13; y++) {
  //       var type = '';
  //       if (y == 1) {
  //         type = 'Ace';
  //       } else if (y == 2) {
  //         type = 'Two';
  //       } else if (y == 3) {
  //         type = 'Three';
  //       } else if (y == 4) {
  //         type = 'Four';
  //       } else if (y == 5) {
  //         type = 'Five';
  //       } else if (y == 6) {
  //         type = 'Six';
  //       } else if (y == 7) {
  //         type = 'Seven';
  //       } else if (y == 8) {
  //         type = 'Eight';
  //       } else if (y == 9) {
  //         type = 'Nine';
  //       } else if (y == 10) {
  //         type = 'Ten';
  //       } else if (y == 11) {
  //         type = 'Jack';
  //       } else if (y == 12) {
  //         type = 'Queen';
  //       } else if (y == 13) {
  //         type = 'King';
  //       }
  //       let html = $('#' + suit + '-' + y).html();
  //       this.cards.push(new Card(suit, type, y, html));
  //     }
  //   }
  // }
  shuffle() {
    console.log('Shuffling deck...')
    let m = this.cards.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
    return this;
  }
  reset() {
    console.log('Resetting deck...');
    this.build();
    return this;
  }
  deal() {
    console.log('Dealing card...');
    if (!this.cards[0]){
      return false;
    }
    let card = this.cards[0];
    this.cards.splice(0, 1);
    return card;
  }
  pickOne() {
    console.log('Picking a random card...');
    let random = Math.round((Math.random() * (this.cards.length-1))); // get a number from 0 to 51
    let randomCard = this.cards[random];
    this.cards.splice(random, 1);
    return randomCard;
  }
  show() {
    console.log('Showing deck...')
    for (let x = 0; x < this.cards.length; x++) {
      this.cards[x].show();
    }
    return this;
  }
}
