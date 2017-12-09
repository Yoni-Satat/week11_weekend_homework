const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const assert = require('assert');

describe('Hero', function() {
  let hero;
  let food;
  let task1;
  let task2;
  let task3;

  beforeEach(function() {
    food = new Food("tacos", 10, false);
    task1 = new Task(1, 2, 10, false);
    task2 = new Task(5, 3, 20, false);
    task3 = new Task(3, 1, 30, false);
    tasks = [task1, task2, task3];
    hero = new Hero("Joe", 100, "tacos", tasks);
  });

  it('should have a name', function() {
    assert.strictEqual(hero.name, "Joe");
  });

  it('should have health value', function() {
    assert.strictEqual(hero.health, 100);
  });

  it('should have a favourite food', function() {
    assert.strictEqual(hero.favFood, "tacos");
  });

  it('should have tasks', function() {
    assert.deepEqual(hero.tasks, [task1, task2, task3]);
  });

  it('should be able to talk', function() {
    assert.strictEqual(hero.talk("Joe"), "Hi, I'm Joe");
  });

  it('should be able to eat and increase helath value', function() {
    assert.strictEqual(hero.eat(food), 110);
  });

  it('should lose health value if eat poisonous food', function() {
    food.touchedByRat(food);
    hero.eat(food);
    assert.strictEqual(hero.health, 70);
  });

  it('should be able to sort their tasks by difficulty', function() {
    assert.deepEqual(hero.sort("difficultyLevel"), [task1, task3, task2]);
  });

  it('should be able to sort their tasks by urgency', function() {
    assert.deepEqual(hero.sort("urgencyLevel"), [task3, task1, task2]);
  });

  it('should be able to view tasks that are marked as completed', function() {
    task1.toggleCompleted();
    task3.toggleCompleted();
    assert.deepEqual(hero.filterTasksByCompleted(true), [task1, task3]);
  })

  it('should be able to view tasks that are marked as incomplete', function() {
    task1.toggleCompleted();
    task3.toggleCompleted();
    assert.deepEqual(hero.filterTasksByCompleted(false), [task2]);
  })
});

// const urgencies = {
//   'low': 0,
//   'med': 1,
//   'high': 2
// }
//
// urgencies.low
