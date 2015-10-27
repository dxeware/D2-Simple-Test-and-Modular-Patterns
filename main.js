var speaker = require('./greet.js');
var parse = require('./parse.js');

if (process.argv[2] === undefined) {
  console.log(speaker.saySomething.greet('Laura'));
} else {
  parse();
}

