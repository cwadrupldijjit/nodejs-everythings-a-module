### `require`-ing a local file
It's generally not a good idea to keep all of your code in a single file for many reasons, a few being that it's hard to read and reason with, it's not very testable, and it's not very scalable.  As such, you get to a point when you need to split your code into different pieces.

In this directory, you can see two JavaScript files and one folder.  Inside the `math-module` folder, you will see five files, each with a small piece of logic or functionality in it.  Now open the `example.js` file in a text editor and enter the following code:
```js
const customMath = require('./custom-math');
```

This `require` statement is slightly different than the one in the previous example in two ways:  The file name is preceeded by a relative path (`./`), and the path doesn't include the file extension (missing the `.js`).  This is how you `require` the exports of a local file.  Node understands that you're wanting to pull code from another JavaScript file, so it's not necessary to include the extension.  On top of that, if you specify a relative path (`../`, `./`) at the beginning of the module require string, it will look for the file at that path, relative to the current file it's executing in.  Now you can use the functions that are available from that file:
```js
console.log(customMath.addNumbers(1, 2, 3, 4));
console.log(customMath.subtractNumbers(10, 3, 2, 1));
console.log(customMath.raiseToThePower(2, 10));
```

If you run this code, you should get:
```bash
10
4
1024
```

If you take a look at the `custom-math.js` file, you can see that it creates several functions, and then adds them to an object at the bottom of the file, assigning it to `module.exports`.  This is how that file exposes those methods.  Notice also how one of the functions, `isValidNumber` isn't being assigned to the exports object like the rest of the functions.  This is because the intent of that function is to have it only be used in that same file--if you try to use it in `example.js` like `customMath.isValidNumber('3')`, you'll get an error in the console stating that it's not a function.

Say `custom-math.js` gets too big and has a lot of logic in it, and we have to split it again.  An example that is included as the `math-module` folder.  If you look in there, each of the functions that were in the `custom-math.js` file have their own files, plus there is an `index.js` file.  The `index.js` file packages all of the functions together and exposes only what it wants to expose.  In order to use this type of module, write this under the `customMath` require statement:
```js
const mathModule = require('./math-module');
```

Now write the same code as before, just using `mathModule` instead of `customMath`:
```js
console.log(mathModule.addNumbers(1, 2, 3, 4));
console.log(mathModule.subtractNumbers(10, 3, 2, 1));
console.log(mathModule.raiseToThePower(2, 10));
```
and you should get the same results.