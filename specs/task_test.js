const Task = require('../task.js');
const assert = require('assert');

describe('Task', function() {
  let task;

  beforeEach(function() {
    task = new Task(1, 3, 100, false);
  });

  it('should have difficulty level', function() {
    assert.strictEqual(task.difficultyLevel, 1);
  });

  it('should have urgency level', function() {
    assert.strictEqual(task.urgencyLevel, 3);
  });

  it('should have a reward', function() {
    assert.strictEqual(task.reward, 100);
  });

  it('should not be completed', function() {
    assert.strictEqual(task.completed, false);
  });

  it('should be able to mark completed', function() {
    assert.strictEqual(task.toggleCompleted(), true);
  })
});
