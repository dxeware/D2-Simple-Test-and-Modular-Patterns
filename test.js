var expect = require('chai').expect;
var speaker = require('./greet.js');

describe('access string', function() {
  it ('should return a string', function(done){
    expect(speaker.saySomething.greet('Laura')).to.be.a('string');
    done();
  });

  it ('should return a greeting', function(done){
    expect(speaker.saySomething.greet('Brian')).to.eql('hello Brian');
    done();
  });

});
