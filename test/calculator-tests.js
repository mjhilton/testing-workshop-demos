// Chai's 'should' function attaches behaviour to all objects so you can use the shuold syntax. You could also just do require('Chai').should();
var chai = require('Chai');
chai.should();

var calculator = require('../src/calculator');

describe('Using the calculator to add 1 to 2', function() {
    it('should return 3', function() {
        calculator.add(1, 2).should.equal(3);
    });
});

describe('Using the calculator to add 0 to 0', function() {
    it('should return 0', function() {
        calculator.add(0, 0).should.equal(0);
    });
});

describe('Using the calculator to add "abc" to 1', function() {
    it('should not work', function() {
        (() => calculator.add("abc", 1)).should.throw(/Argument is invalid/);
    });
});

describe('Using the calculator to add 1 to "abc"', function() {
    it('should not work', function() {
        (() => calculator.add(1, "abc")).should.throw(/Argument is invalid/);
    });
});