var Puzzle = function(puzzleString) {
  this._puzzle = puzzleString;

};
Puzzle.prototype.getRowContents = function(rowNumber) {
  return this._puzzle.substr((rowNumber*9),9);
}

Puzzle.prototype.scanRow = function(row, n) {

  var row = this.getRowContents(row);
  //compare the contents form the called row to the `n`



  return row;
};

Puzzle.prototype.scanColumn = function(column, n) {
  
  return false;
};


module.exports = Puzzle;
