"use strict";

var speaker = require('./greet.js');

// This parses the command line arguments
// starting with index 2 (after node and filename.js)
// and "greets" each parameter
function parseCmdLine() {
  var input = process.argv;

  for (var i = 2; i < input.length; i++) {
    console.log(speaker.saySomething.greet(input[i]));
  }
}

module.exports = parseCmdLine;
