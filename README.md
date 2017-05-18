# NodeJS: Everything's a Module

## Introduction
This is a sample folder for a presentation for the Lodgable development team.

The presentation will cover each of the following steps.  You can follow along, or play around with it independently.

### Prerequisites
To use these examples, you must have [Node](https://nodejs.org/en/) (any version) installed on your local machine.

It will be a lot easier if you have at least a basic understanding of JavaScript or another programming language.

A good amount of this presentation will be in the console, and being comfortable while navigating in the console is recommended.

To start, clone this repo onto your computer, then from the root of this project, type in `npm start`.

## Presentation
### Node & NPM
When JavaScript was first created, the intent was to create a programming language that would run in the context of Netscape Navigator to make webpages more interactive.  As such, the only place that it could run was in a browser.  Since 1995 when it was created, more browsers adopted the language, and more developers started using it.  In 2009, Ryan Dahl employed Google's open-source V8 JavaScript engine to create NodeJS, a way to run JavaScript in the file system with the built-in capability of creating http servers.

Since then, the Node community has grown, and the want for easy code sharing and open sourced solutions has increased.  The Node Package Manager (npm) was created in 2011 in response to this need, patterning itself after package managers for other languages, inspired by their strengths and shortcomings.  Later, it was packaged along with Node in the installer.  npm provides a simple way to install and use community and private code, shared through its own registry, or even installed from a remote repository.  In order to browse the npm registry, go [here]( https://npmjs.com).

We'll be using both of these technologies in this presentation.

### `package.json`
This presentation utilizes the `package.json` file a lot.  It can be used in many different ways.

First, go to your console and from it, enter the package-json directory:
```shell
cd ./package-json
```

Next, create it.  You can do this in one of two ways:

1. Create the file in the root of your project and create a simple JSON object literal:
    ```json
    {}

    ```
    or

1. From the command line, run
    ```shell
    npm init
    ```
    and follow the prompts.  If you want, you can just press Enter for each of the prompts.  If you don't want to press Enter that many times, you can use the `-y` flag to do the same thing:
    ```shell
    npm init -y
    ```
    
    An example default package.json looks like this:
    ```json
    {
      "name": "package-json",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```

As you can see, most of the default `package.json` is generated with meta.  If you keep the package.json as it currently is, it doesn't do much.  I'll break down the most important fields for you.

  * `name`  
    The name of your package, which should be `snake-case` (all lowercase and each word separated by hyphens).
  * `version`  
    This is particularly important if you're wanting to publish your project as an npm package.  Otherwise, it may not be relevant to your project.
  * `main`  
    This is used to let users of your package (or observers of your source) know what file your code starts with.  Depending on the package or project, this field may also be irrelevant.
  * `license`  
    This is used to denote the license (which if it's specified as something other than "ISC" or "MIT", it's often found in the root of the project under the name `LICENSE` with various extensions)
  * `scripts`  
    This is used to define a line of code that is executed in the context of the console.  This can be useful if you want to run a package that includes a binary (such as `gulp`) without installing it globally.  You run most scripts by entering in the console `npm run [script-name]`.  In the example, you can run the single default script by typing in `npm run test`.  However, the `test` and `start` scripts (if defined) can be run without also typing `run` (like `npm test` or `npm start`).

Other fields you will be seeing later include `dependencies`, `devDependencies`, `optionalDependencies`, and `peerDependencies`, and I'll explain that when we encounter it.  You can also see an example of a simple `package.json` found in the root directory of this presentation.

You can take a look at the `package.json`s in the rest of the examples to see what it looks like and how it changes throughout the examples.

When you're ready, go back to your console and run:
```shell
cd ../
npm run example:2
```

### Node REPL
Node comes with a built-in command-line REPL (which is short for Read Evaluate Print Loop), similar to the console in browsers.  Inside of a REPL, you can type in code and have it execute.

To try it out, go to the console and type in:
```shell
node
```

After that, your prompt should look different, going to the next line and printing a `> `.  You then are in the REPL.  Any valid JavaScript code can run in this context.

Suggestions of what you can do are:
  * `'Hello, World!'`
  * `console.log('Hello, World!')`
  * `var foo = 2` then `foo * 4`
  * `['x', 3, function() {console.log('bar')}]`

If you really wanted to, you can technically write an entire application in the REPL.  But, since we're sane, it's best left to writing files that you can execute code from.  The REPL is particularly useful if you want to test out a small snippet of code or as a simple playground.

When you're ready, type in:
```
npm run example:3
```

### Executing code in a file
In this example, I've supplied the code for you.  All you need to do is run it.

Go to the example's folder from your terminal (`cd ./run-file`).  Inside of it, you'll find three JavaScript files (`multiply-numbers.js`, `pass-args.js`, and `create-guest-list.js`).  Each of these three files do very small things to show how it works.

`multiply-numbers` accepts user input and only accepts numbers and the string "stop" to be entered in, and then gives you the answer to each of those numbers multiplied together.  When you type in "stop", it will give you the result and exit.  Otherwise, you can press Ctrl + C to cancel and exit.

`create-guest-list.js` accepts user input as names you want to add to a guest list, and will continue to ask for names until you enter "stop".  Once you type in "stop", it asks what the name of the file you want to save it in is called, and then it will save the guest list into that file in the same directory.

`pass-args.js` accepts arguments you pass into it from the command line (e.g. `./path/to/file`, `--something`, `-p123`).  It then prints those arguments out and closes.

In order to execute any one of these files, type in:
```bash
node [filename.js|./path/to/filename.js]

# like
node multiply-numbers.js
```

If you want, you can create another file or two with valid JavaScript code, and run it in the same way.  You will be doing it in later examples, too.

If you feel comfortable in executing files with Node, return to the root of this project (`cd ..`), and run:
```bash
npm run example:4
```

### Using installed packages
Now that we've practiced using Node a bit, we're going to working with npm to get community code so that we can use it.

From your console, go to the require-package folder (`cd ./require-package`).  Inside, you should notice that there are three files: `instructions.md` (where specific instructions can be found, like in other examples), `example.js`, and `package.json`.  The `package.json` is the simplest version of one, en empty JSON object literal.  The `example.js` is where you'll be writing the code you will execute.

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

The package `chalk` takes strings to be used as console output, and "decorates" them to change their color based on which method you call on it.  If you try to run the file now, though, you'll get an error stating that the module "chalk" can't be found.  That's because the package is third-party, and for that reason, hasn't been installed.

If you looked at the code for the previous example, you may have noticed that adding `require('fs')` or something simiilar didn't require an install.  That is because there are a few modules that Node comes with, built-in.  `fs` deals with the file system, `util` has some helper/utility methods, and `readline` deals with user input.  We'll play around with the built-in modules later.

Back in your console, run `npm install --save chalk`, and wait for the prompt to return.  If you look in the example directory, you'll notice that there is now another directory called `node_modules`.  This is where the third-party code is installed.  Inside of it, you can find a directory called "chalk" (the `require` statement checks for a folder/file with the module's name you passed to it), and inside of it, you can see the source code chalk uses.  You may also notice that other folders are also created next to the `chalk` folder inside of `node_modules`.  These folders are for packages that chalk depends on, and as such, npm installs them, too, so that when we try to use chalk, it won't break our app.

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

If you want to play around with chalk a little more, I'd suggest looking at their [npm package page](https://www.npmjs.com/package/chalk).

When you're ready, from your terminal, return to the presentation root (`cd ..`), and then run:
```bash
npm run example:5
```

### `require`-ing a local file
It's generally not a good idea to keep all of your code in a single file for many reasons, a few being that it's hard to read and reason with, it's not very testable, and it's not very scalable.  As such, you get to a point when you need to split your code into different pieces.

From your console, move into the `require-local-module` folder (`cd ./require-local-module`).  From there, you can see two JavaScript files and one folder.  Inside the `math-module` folder, you will see five files, each with a small piece of logic or functionality in it.  Now open the `example.js` file in a text editor and enter the following code:
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

When you create separate files, it's ultimately up to you how you do it.  Some suggestions on how you do it are to keep each file small, have it expose only that which it expects someone to use, and group very similar functionality together.  Organize your files in such a way that there is one grouped module per folder, and there is one access point for everything you want to expose.

I'd highly suggest you take a look at each of the files to understand the module pattern.  It's not too difficult to understand, but it may take practice to be used to it.

When you're ready, go back to your console, return to the root of the presentation (`cd ..`), and then run:
```
npm run example:6
```