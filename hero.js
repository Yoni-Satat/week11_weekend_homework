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

Hero.prototype.checkRatTrap = function(trap) {
  if (trap.volume.length > 0 && trap.volume.length < 2) {
    return "you cauoght a rat, you can make medicine";
  } else if (trap.volume.length > 1) {
    return "you cauoght 2 rats!, congrats!";
  } else {
    return "Nothing here..."
  }
}


module.exports = Hero;
