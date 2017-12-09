const Hero = require('../hero.js');
const Food = require('../food.js');
const Rat = require('../rat.js');
const assert = require('assert');

describe('Rat', function() {
  let rat;
  let food;
  let hero;

  beforeEach(function() {
    rat = new Rat('Rattus');
    hero = new Hero("Joe", 100, "tacos", tasks);
    food = new Food("tacos", 10, false);
  });

  it('should have a type', function() {
    assert.strictEqual(rat.type, 'Rattus');
  });

  it('should make food poisonous when touch it', function() {
    rat.thouchFood(food);
    assert.strictEqual(food.poisonous, true);
  });
});
