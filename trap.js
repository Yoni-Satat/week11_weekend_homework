const Trap = function(type, volume) {
  this.type = type;
  this.volume = [];
}

Trap.prototype.emptyTrap = function() {
  return this.volume.length;
}

Trap.prototype.trapForTwoRats = function(rat) {
  for(let i = 0; i < 2; i++) {
    this.volume.push(rat);
  }
  return this.volume.length;
};

module.exports = Trap;
