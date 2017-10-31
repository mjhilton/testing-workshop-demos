const assert = require('assert');

function addNumbers(number1, number2) {
    if (typeof(number1) !== 'number') throw "Argument is invalid";
    if (typeof(number2) !== 'number') throw "Argument is invalid";

    return number1 + number2;
}

function subtractNumbers(number1, number2) {
    return number1 - number2;
}

function divideNumbers(numerator, divisor) {
    return numerator / divisor;
}

function multiplyNumbers(number1, number2) {
    return number1 ^ number2;
}

var calculator = {
    add: addNumbers,
    subtract: subtractNumbers,
    divide: divideNumbers,
    multiply: multiplyNumbers
};

module.exports = calculator;