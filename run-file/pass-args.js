const cliArguments = process.argv;
const executionArguments = cliArguments.slice(0, 2);
const passedInArguments = cliArguments.slice(2);

if (!passedInArguments.length) {
    console.log('You didn\'t pass in any arguments');
} else {
    console.log(passedInArguments);
}
