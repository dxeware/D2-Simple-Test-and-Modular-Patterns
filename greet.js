'use strict';



function greet(name) {
  return 'hello ' + name;
}

module.exports.saySomething = {
    greet: greet
};
