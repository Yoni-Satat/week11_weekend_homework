const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const Rat = require('../rat.js');
const assert = require('assert');

describe('Rat', function() {
  let rat;

  beforeEach(function() {
    rat = new Rat('Rattus');
  });

  it('should have a type', function() {
    assert.strictEqual(rat.type, 'Rattus');
  });
});
