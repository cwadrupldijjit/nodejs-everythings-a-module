const readline = require('readline');

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log('\nNumber Multiplier\n');
console.log('Give me any amount of numbers to multiply, and I\'ll do it.  Then type "stop" in order to get the result. \n');

(async function main() {
    let multiplied = 1;
    let isFirst = true;
    
    while (true) {
        try {
            const result = await getNumber(isFirst);
            
            if (isFirst) {
                isFirst = false;
            }
            
            if (result == 'stop') {
                prompt.close();
                break;
            }
            
            multiplied = multiplied * +result;
        } catch (e) {
            console.log(e.message, '\n');
        }
    }
    
    console.log('\n', 'Your result is', multiplied, '\n');
})();

function getNumber(isFirst) {
    return new Promise((resolve, reject) => {
        prompt.question(`Give me ${ isFirst ? 'a' : 'another'} number: `, (input) => {
            if (isNaN(input) && input.trim().toLowerCase() != 'stop') {
                reject(Error('The input given wasn\'t a number.  If you meant to stop the calculation, type "stop".'));
            } else {
                resolve(input);
            }
            prompt.pause();
        });
    });
}