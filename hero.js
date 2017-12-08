const Hero = function(name, health, favFood, tasks) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks;
}

Hero.prototype.talk = function(name) {
  return `Hi, I'm ${name}`;
}

// A hero should be able to eat food
// and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value
Hero.prototype.eat = function(food) {
  if(this.favFood === this.food) {
    return this.health += (this.replenishmentValue * 1.5);
  } else {
  return this.health += food.replenishmentValue;
  }
}

// A hero should be able to sort their tasks by difficulty, urgency or reward.
Hero.prototype.sort = function(valueToSort) {
  return this.tasks.sort(function(a,b) {
    // a["difficultyLevel"]
    return a[valueToSort] - b[valueToSort] //a.difficultyLevel - b.difficultyLevel;
  });
}

Hero.prototype.filterTasksByCompleted = function(value) {
  let filtered = this.tasks.filter(function(task){
    return task.completed === value;
  });
  return filtered;
}

// A hero should be able to view tasks that are marked as completed or incomplete


module.exports = Hero;
