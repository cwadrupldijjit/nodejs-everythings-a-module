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