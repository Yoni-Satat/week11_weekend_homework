const Trap = require('../trap.js');
const assert = require('assert');

describe('Trap', function() {
  let ratTrap;

  beforeEach(function() {
    ratTrap = new Trap("Mouse trap", "2");
  });

  it('should have a type', function() {
    assert.strictEqual(ratTrap.type, "Mouse trap");
  });

  it('should start empty', function() {
    assert.strictEqual(ratTrap.emptyTrap(), 0);
  });

  it('should be able to contain no more than 2 mice', function() {
    assert.strictEqual(ratTrap.trapForTwoRats(), 2);
  });

});
