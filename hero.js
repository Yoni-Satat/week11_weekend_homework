const Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.canTalk = function() {
  return "Hi, I'm Joe";
}

module.exports = Hero;
