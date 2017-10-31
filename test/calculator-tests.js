// Chai's 'should' function attaches behaviour to all objects so you can use the shuold syntax. You could also just do require('Chai').should();
var chai = require('Chai');
chai.should();

var calculator = require('../src/calculator');

describe('Using the calculator to add 1 to 2', function() {
    it('should return 3', function() {
        calculator.add(1, 2).should.equal(3);
    });
});