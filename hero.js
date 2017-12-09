const Hero = function(name, health, favFood, tasks) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function(name) {
  return `Hi, I'm ${name}`;
}

Hero.prototype.eat = function(food) {
  if(this.favFood === this.food) {
    return this.health += (this.replenishmentValue * 1.5);
  } else {
  return this.health += food.replenishmentValue;
  }
}

Hero.prototype.sort = function(valueToSort) {
  return this.tasks.sort(function(a,b) {
    return a[valueToSort] - b[valueToSort];
  });
}

Hero.prototype.filterTasksByCompleted = function(value) {
  let filtered = this.tasks.filter(function(task){
    return task.completed === value;
  });
  return filtered;
}


module.exports = Hero;
