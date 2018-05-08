const wrap = require ('./wrap.js')
const {expect} = require('chai');

describe('wrap', function (){
  describe('wrap is a function', function (){
    it('is a function', function(){
      expect(wrap).to.be.a('function')
    });
    it('test split string', function(){
      let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
      let col = 20;
      let counter = 0;
      let expectedVal = (str.length % col) ? Math.floor(str.length/col) + 1 : Math.floor(str.length/col);

      res = wrap(str, col);
      for(let i=0; i<res.length; i++){
        if( res[i] === '\n')
          counter++;
      }
      expect(counter).to.be(expectedVal)
    });
    it('returns a string', function(){
        expect(wrap('Hello World', 6)).to.be.a('string')
    });
  });
});


//one argument is a string and one is a number

//returns a string

//each line is no longer than the number (last number is a new line)

//a word cannot be broken in the middle
  //deep equals output and test
