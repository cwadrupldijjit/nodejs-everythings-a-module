const isValidNumber = require('./helpers').isValidNumber;

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

module.exports = subtractNumbers;