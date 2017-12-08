const Task = function(difficultyLevel, urgencyLevel, reward, completed) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = false;
  }

  Task.prototype.toggleCompleted = function() {
    return this.completed = !this.completed;
  }




  module.exports = Task;
