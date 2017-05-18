/**
 * @param {number[]} nums 
 */
function addNumbers(...nums) {
    return nums.reduce((total, nextValue) => {
        if (isValidNumber(nextValue)) {
            return total + nextValue;
        }
        
        throw Error(
            'You passed in a value that is not a number: ' +
                nextValue + ' which is of type ' + typeof nextValue
        );
    }, 0);
}

/**
 * @param {number[]} nums 
 */
function subtractNumbers(...nums) {
    return nums.reduce((total, nextValue) => {
        if (isValidNumber(total) && isValidNumber(nextValue)) {
            return total - nextValue;
        }
        
        throw Error(
            'You passed in a value that is not a number: ' +
                (!isValidNumber(total) ? total : nextValue) +
                ' which is of type ' +
                typeof (!isValidNumber(total) ? total : nextValue)
        );
    });
}

/**
 * @param {number} base
 * @param {number} exponent
 */
function raiseToThePower(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * @param {number} number 
 */
function isValidNumber(number) {
    return typeof number == 'number' && !isNaN(number);
}

/**
 * The assignment to "module.exports" below can also be written as:
 * module.exports = {
 *     addNumbers: addNumbers,
 *     subtractNumbers: subtractNumbers,
 *     raiseToThePower: raiseToThePower,
 * };
 */
module.exports = {
    addNumbers,
    subtractNumbers,
    raiseToThePower,
};