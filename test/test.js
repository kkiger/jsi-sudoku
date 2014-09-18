var expect = require('chai').expect;
var Puzzle = require('../index');

describe('scan numbers', function(){
  it('check if there is a 1 in row 0', function(){
    // we have a 1
    // we want to scan the row and see if there is another 1
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var row = 0;
    var result = puzzle.scanRow(row, 1);
    expect(result).to.eql(true);
  });

  it('check if there is a 5 in column 8', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var column = 8;
    var result = puzzle.scanColumn(column, 5);
    expect(result).to.eql(false);
  });

  it('finds the contents of a specific row', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getRowContents(0)).to.eql('158 2  6 ');
  });
   it('finds the contents of a specific row', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getRowContents(1)).to.eql('2   8  9 ');
  });

});
