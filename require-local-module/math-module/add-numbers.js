const isValidNumber = require('./helpers').isValidNumber;

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

module.exports = addNumbers;