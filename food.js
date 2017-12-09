const Food = function(name, replenishmentValue, poisonous) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
  this.poisonous = false;
}

Food.prototype.togglePoisonous = function() {
  this.poisonous = !this.poisonous;
}

Food.prototype.touchedByRat = function() {
  this.replenishmentValue += -40;
}

module.exports = Food;
