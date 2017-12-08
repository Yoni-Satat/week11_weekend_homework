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
  if(this.favFood === this.food) {
    return this.health += (this.replenishmentValue * 1.5);
  } else {
  return this.health += food.replenishmentValue;
  }
}

// If the food is their favourite food, their health should go up by 1.5 * value

module.exports = Hero;
