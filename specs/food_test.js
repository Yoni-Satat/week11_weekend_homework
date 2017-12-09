const Food = require('../food.js');
const assert = require('assert');

describe('Food', function() {
  let food;

  beforeEach(function() {
    food = new Food("banana", 10, false);
  });

  it('should have a name', function() {
    assert.strictEqual(food.name, "banana");
  });

  it('should have replenishment value', function() {
    assert.strictEqual(food.replenishmentValue, 10);
  });

  it('should not be poisonous', function() {
    assert.strictEqual(food.poisonous, false);
  });
});
