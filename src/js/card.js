class Card {
  constructor(suit, type, value, html) {
    this.suit = suit;
    this.type = type;
    this.value = value;
    this.html = html;
  }
  show() {
    console.log(this.value + ': ' + this.type + ' of ' + this.suit);
    return this;
  }
}
