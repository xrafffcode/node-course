const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

//
// Challenge: Use the chalk library in your project
//
// 1. Install chalk 2.4.1
// 2. Load chalk into app.js
// 3. Use it to print out a message in green
// 4. Test your work

console.log(chalk.green.inverse('Success!'));