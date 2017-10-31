var expect = require('Chai').expect;
var calculator = require('../src/calculator');

describe('Using the calculator to add 1 to 2', function() {
    it('should return 3', function() {
        expect(calculator.add(1, 2)).to.equal(3);
    });
});