### Using installed packages
Now that we've practiced using Node a bit, we're going to work with npm to get community code so that we can use it.

In this folder are two files.  The `package.json` is the simplest version of one, en empty JSON object literal.  The `example.js` is where you'll be writing the code you will execute.

Open `example.js` in your editor/IDE of your choice (my favorite is [Visual Studio Code](https://code.visualstudio.com)).  In that file, write the following code:
```js
process.stdout.write('Hello, World!');
```

Then, run the file.  You should see "Hello, World!" printed out to the console.

`process` is a Node-specific api, that allows you to access common methods and meta for the context that the script is running in, such as `process.env` (which allows you to access the environment variables), `process.stdout` (which helps you deal with the output during execution), and `process.stdin` (which helps you deal with input during execution).  In this example `process.stdout.write` just prints the given string to the console and continues execution.  It has an alias in `console.log` (which helps a ton for those who are used to the browser APIs).  It's preferred that you use the `console` API, as it has some nice features (such as printing formatted strings, logging stack tracess with the `error` method, etc) that you don't get with the standard `process.stdout.write` method.

You can refactor your code, then to be:
```js
console.log('Hello, World!');
```
and your output should be the same.

I know, I know; a dull, white "Hello, World!" is the lamest and most boring example to use.  Let's do something with it so it's more appealing.

Now we are going to use a package to colorize our `console.log` output.  Back in `example.js`, edit it to include at the very top of the file:
```js
const chalk = require('chalk');
```

`require` is a built-in Node function that takes a string that is a path to a module, executes it, and the returns any exported members from it.  Some modules don't require to be assigned to a variable, just needing code to run, and sometimes, you are only looking for one particular member from the module and assign only that to a variable (the difference between `const chalk = require('chalk');` and `const red = require('chalk').red;`).  For our purposes, we want the entire exported member.

The package `chalk` takes strings to be used as console output, and "decorates" them to change their color based on which method you call on it.  If you try to run the file now, though, you'll get an error stating that the module chalk can't be found.  That's because the package is third-party, and for that reason, hasn't been installed.

If you looked at the code for the previous example, you may have noticed that adding `require('fs')` or something simiilar didn't require an install.  That is because there are a few modules that Node comes with, built-in.  `fs` deals with the file system, `util` has some helper/utility methods, and `readline` deals with user input.  We'll play around with the built-in modules later.

Back in your console, run `npm install --save chalk`, and wait for the prompt to return.  If you look in the example directory, you'll notice that there is now another directory called `node_modules`.  This is where the third-party code is installed.  Inside of it, you can find a directory called "chalk", just like the module's name, and inside of it, you can see the source code chalk uses.  You may also notice that other folders are also created next to the `chalk` folder inside of `node_modules`.  These folders are for packages that chalk depends on, and as such, npm installs them, too, so that when we try to use chalk, it won't break our app.

Now open the `package.json` in the example folder.  You'll notice it now looks like this:
```json
{
  "dependencies": {
    "chalk": "^1.1.3"
  }
}
```

As you can see, now we have the `dependencies` field in our `package.json`.  We can see the name of the package we just installed, as well as the version number.  In this case, the `^` in the version number means that whenever `npm install` is run by itself, it will install the most recent patch version (the `3` in the version number above), but leave the minor (the middle digit) and major (the first digit) versions untouched.  There can be a larger discussion on npm version strings at another time.

Now that chalk is registered as a dependency, it will be installed whenever you enter in `npm install` in your console.  If you want, you can even delete the entire `node_modules` directory, and type in `npm install` and you'll get chalk installed how it was before.

Now, let's go back to `example.js`.  Now that we have `chalk` installed and usable, we can go ahead and run the code.  The error doesn't show that it doesn't know what "chalk" is, but our output is still the dull white.  To fix this, edit the `console.log` statement to look like this:
```js
console.log(chalk.cyan('Hello, World!'));
```
and re-execute the file.  You should see `Hello, World!` printed to the console in cyan.

Stretch your fingers a bit to play around with it, change the string, add more lines, and maybe make the text bold.