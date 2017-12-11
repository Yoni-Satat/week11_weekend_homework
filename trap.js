const Trap = function(type, capacity, volume) {
  this.type = type;
  this.capacity = capacity;
  this.volume = [];
}

Trap.prototype.emptyTrap = function(rat) {
  this.volume = [];
}

Trap.prototype.caughtRat = function(rat) {
  if(this.volume.length < this.capacity) {
    this.volume.push(rat);
  } else {
    return 'trap is full';
  }
  return this.volume.length;
}

module.exports = Trap;
