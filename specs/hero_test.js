const Hero = require('../hero.js');
const Food = require('../food.js');
const assert = require('assert');

describe('Hero', function() {
  let hero;
  let food;

  beforeEach(function() {
    hero = new Hero("Joe", 100, "tacos");
    food = new Food("banana", 10);
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

  it('should be able to talk', function() {
    assert.strictEqual(hero.talk("Joe"), "Hi, I'm Joe");
  });

  it('should be able to eat and increase helath value', function() {
    assert.strictEqual(hero.eat(food), 110);
  });
});

// const urgencies = {
//   'low': 0,
//   'med': 1,
//   'high': 2
// }
//
// urgencies.low
