const wrap = require ('./wrap.js')
const {expect} = require('chai');

describe('wrap', function (){
  describe('wrap is a function', function (){
    it('is a function', function(){
      expect(wrap).to.be.a('function')
    });
  });
});


//one argument is a string and one is a number

//returns a string

//each line is no longer than the number (last number is a new line)

//a word cannot be broken in the middle
  //deep equals output and test
