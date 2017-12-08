const Hero = require('../hero.js');
const assert = require('assert');

describe('Hero', function() {
  let hero;

  beforeEach(function() {
    hero = new Hero("Joe", 100, "tacos");
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
    assert.strictEqual(hero.canTalk(), "Hi, I'm Joe");
  });
});

// const urgencies = {
//   'low': 0,
//   'med': 1,
//   'high': 2
// }
//
// urgencies.low
