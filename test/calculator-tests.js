var assert = require('Chai').assert;
var calculator = require('../src/calculator');

describe('Using the calculator to add 1 to 2', function() {
    it('should return 3', function() {
        assert.equal(3, calculator.add(1, 2));
    });
});