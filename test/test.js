var expect = require('chai').expect;
var lib = require('../index');

describe('scan numbers', function(){
  it('check if there is a 1 in row 0', function(){
    // we have a 1
    // we want to scan the row and see if there is another 1
    var puzzle = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';
    var row = 0;
    var result = lib.scanRow(puzzle, row, 1);
    expect(result).to.eql(true);
  });

  it('check if there is a 5 in column 8', function(){
    var puzzle = '158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413';
    var column = 8;
    var result = lib.scanColumn(puzzle, column, 5);
    expect(result).to.eql(false);
  });

});
