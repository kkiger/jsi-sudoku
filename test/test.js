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

  it('check if there is a 3 in row 0', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var row = 0;
    var result = puzzle.scanRow(row, 3);
    expect(result).to.eql(false);
  });

  it('check if there is a 5 in column 8', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var column = 8;
    var result = puzzle.scanColumn(column, 5);
    expect(result).to.eql(false);
  });

  it('check if there is a 8 in column 8', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var column = 8;
    var result = puzzle.scanColumn(column, 8);
    expect(result).to.eql(true);
  });

  it('check if there is a 1 in box 0', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var box = 0;
    var result = puzzle.scanBox(box, 1);
    expect(result).to.eql(true);
  });

  it('check if there is a 1 in box 2', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var box = 2;
    var result = puzzle.scanBox(box, 1);
    expect(result).to.eql(false);
  });

  it('check if there is a 1 in box 8', function(){
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var box = 8;
    var result = puzzle.scanBox(box, 1);
    expect(result).to.eql(true);
  });

  it('finds the contents of a specific row', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getRowContents(0)).to.eql('158 2  6 ');
  });

   it('finds the contents of a specific row', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getRowContents(1)).to.eql('2   8  9 ');
  });

   it('finds the contents of a specific row', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getRowContents(8)).to.eql(' 7  9 413');
  });

   //added test for checking that the column function works
  it('finds the contents of a specific column', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getColumnContents(7)).to.eql('69   52 1');
  });
  
  it('finds the contents of a specific column', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getColumnContents(8)).to.eql('  2    83');
  });

  it('finds the contents of a specific box', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getBoxContents(0)).to.eql('1582   3 ');
  });

  it('finds the contents of a specific box', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getBoxContents(8)).to.eql(' 2   8413');
  });

  it('finds the contents of a specific box', function() {
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    expect(puzzle.getBoxContents(5)).to.eql('   7   5 ');
  });
});

describe('solve puzzle', function(){
  it('give missing numbers for a puzzle', function(){
    // we have a 1
    // we want to scan the row and see if there is another 1
    var puzzle = new Puzzle('158 2  6 2   8  9  3  7 8 2 6 74      4 6 7      19 5 4 9 3  2  2  5   8 7  9 413');
    var result = puzzle.solvePuzzle(;
    expect(result).to.eql('158924367247683195561748239394562781782319654419837526623451978875296413');
  });
  

