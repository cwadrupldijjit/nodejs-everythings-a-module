/**
 * @param {number} number 
 */
function isValidNumber(number) {
    return typeof number == 'number' && !isNaN(number);
}

module.exports = {
    isValidNumber,
};