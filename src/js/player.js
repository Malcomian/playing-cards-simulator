class Player {
  constructor(name) {
    console.log('Creating new Player ' + name);
    this.name = name;
    this.hand = [];
  }
  draw(deck) {
    this.hand.push(deck.deal());
    return this;
  }
  pick(deck) {
    this.hand.push(deck.pickOne());
    return this;
  }
  discard(card) {
    console.log('Discarding a card...');
    this.hand.splice(card, 1);
    return this;
  }
}
