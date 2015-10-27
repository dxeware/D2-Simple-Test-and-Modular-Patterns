var speaker = require('./greet.js');
var parse = require('./parse.js');

// If parameters are present on parse them and
// "greet" them, otherwise greet Laura
if (process.argv[2] !== undefined) {
  parse();
} else {
  console.log(speaker.saySomething.greet('Laura'));
}

