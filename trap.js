const Trap = function(type, capacity, volume) {
  this.type = type;
  this.capacity = capacity;
  this.volume = [];
}

Trap.prototype.emptyTrap = function(rat) {
  for(let i = 0; i < this.volume.length; i++) {
    this.volume.unshift(rat);
  }
  return this.volume.length;
}

Trap.prototype.cauoghtRat = function(rat) {
  if(this.volume.length < 2) {
    this.volume.push(rat);
  } else {
    return 'trap is full';
  }
  return this.volume.length;
}

module.exports = Trap;
