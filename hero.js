const Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.talk = function(name) {
  return `Hi, I'm ${name}`;
}

// A hero should be able to eat food
// and health should go up by the replenishment value
Hero.prototype.eat = function(food) {
  return this.health += food.replenishmentValue;
}

module.exports = Hero;
