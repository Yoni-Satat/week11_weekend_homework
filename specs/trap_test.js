const Trap = require('../trap.js');
const Rat = require('../rat.js');
const assert = require('assert');

describe('Trap', function() {
  let ratTrap;
  let rat1;
  let rat2;
  let rat3;

  beforeEach(function() {
    ratTrap = new Trap("Rat trap", 2);
    rat1 = new Rat("Rattus enganus");
    rat2 = new Rat("Rattus Annandalei");
    rat3 = new Rat("Rattus exulans");
  });

  it('should have a type', function() {
    assert.strictEqual(ratTrap.type, "Rat trap");
  });

  it('should have capacity', function() {
    assert.strictEqual(ratTrap.capacity, 2);
  });

  it('should start empty', function() {
    assert.strictEqual(ratTrap.volume.length, 0);
  });

  it('should be able to empty trap', function() {
    ratTrap.caughtRat(rat1);
    ratTrap.caughtRat(rat1);
    ratTrap.emptyTrap();
    assert.strictEqual(ratTrap.volume.length, 0);
  })

  it('should be able to catch a rat', function() {
    ratTrap.caughtRat(rat1);
    assert.strictEqual(ratTrap.volume.length, 1);
  });

  it('should not be able to contain more than 2 rats', function() {
    ratTrap.emptyTrap();
    ratTrap.caughtRat(rat1);
    ratTrap.caughtRat(rat2);
    ratTrap.caughtRat(rat3);
    assert.strictEqual(ratTrap.caughtRat(), 'trap is full');
  });

  it('should be able to contain 2 rats', function() {
    ratTrap.caughtRat(rat1);
    ratTrap.caughtRat(rat2);
    assert.strictEqual(ratTrap.volume.length, 2);
  });

});
