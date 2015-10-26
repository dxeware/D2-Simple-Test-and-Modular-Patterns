var speaker = require('./greet.js');

function parseCmdLine() {
  var input = process.argv;

  for (var i = 2; i < input.length; i++) {
    console.log(speaker.saySomething.greet(input[i]));
  }
}

parseCmdLine();
