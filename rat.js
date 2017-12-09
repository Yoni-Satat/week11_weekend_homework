const Rat = function(type) {
  this.type = type;
}

Rat.prototype.thouchFood = function(food) {
  food.togglePoisonous();
}

module.exports = Rat;
