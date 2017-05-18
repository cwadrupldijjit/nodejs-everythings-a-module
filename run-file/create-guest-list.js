const readline = require('readline');
const fs = require('fs');

const prompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const exampleFileContents = `# Guest list`;


console.log('\nGuest List Creator\n');
console.log('Give me any amount of names, and I\'ll create a file with the names listed out.  Type "stop" in order to get the result.\n');

(async function main() {
    const guestList = [];
    
    while (true) {
        try {
            const guestName = await getGuestName();
            
            if (guestName == 'stop') {
                break;
            }
            
            guestList.push(guestName);
        } catch(e) {
            console.log(e);
        }
    }
    
    const fileName = await getFileName();
    
    const fileContents = generateFileContent(guestList);
    
    fs.writeFileSync(__dirname + '/' + fileName, fileContents);
    prompt.close();
    
    console.log(`\nGuest list is saved in "${ fileName }"\n`);
})();

function getGuestName() {
    return new Promise((resolve, reject) => {
        prompt.question('Enter a guest name: ', (name) => {
            resolve(name);
            prompt.pause();
        });
    });
}

function getFileName() {
    return new Promise((resolve, reject) => {
        prompt.question('What do you want the file to be called? ', (name) => {
            resolve(name);
            prompt.pause();
        });
    });
}

function generateFileContent(guestList) {
    let fileContents = exampleFileContents;
    
    guestList.forEach((guest) => fileContents += createGuestBullet(guest));
    
    return fileContents;
}

function createGuestBullet(guest) {
    return `\n  * ${guest}`;
}
