const isValidNumber = require('./helpers').isValidNumber;

/**
 * @param {number} base
 * @param {number} exponent
 */
function raiseToThePower(base, exponent) {
    return Math.pow(base, exponent);
}

module.exports = raiseToThePower;