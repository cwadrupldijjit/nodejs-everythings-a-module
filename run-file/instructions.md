### Executing code in a file
In this example, I've supplied the code for you.  All you need to do is run it.

Inside this directory, you'll find three JavaScript files (`multiply-numbers.js`, `pass-args.js`, and `create-guest-list.js`).  Each of these three files do very small things to show how it works.

`multiply-numbers` accepts user input and only accepts numbers and the string "stop" to be entered in, and then gives you the answer to each of those numbers multiplied together.  When you type in "stop", it will give you the result and exit.  Otherwise, you can press Ctrl + C to cancel and exit.

`create-guest-list.js` accepts user input as names you want to add to a guest list, and will continue to ask for names until you enter "stop".  Once you type in "stop", it asks what the name of the file you want to save it in is called, and then it will save the guest list into that file in the same directory.

`pass-args.js` accepts arguments you pass into it from the command line (e.g. `./path/to/file`, `--something`, `-p123`).  It then prints those arguments out and closes.

In order to execute any one of these files, type in:
```bash
node [filename.js|./path/to/filename.js]

# like
node multiply-numbers.js
```