// we want to use the external module to style our greeting
var chalk = require('chalk');
//import the greet module that is in the current folder
var greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)



//npm install --save chalk@4.1.2 (this imports and saves a modeule chalk)

var figlet = require('figlet');

figlet(greet("Xola"), function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

//npm install --save figlet