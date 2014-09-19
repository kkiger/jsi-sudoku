var Puzzle = function(puzzleString) {
  this._puzzle = puzzleString;
};

/**
 * [getRowContents description]
 * @param  {[type]} rowNumber [description]
 * @return {String}           [description]
 */
Puzzle.prototype.getRowContents = function(rowNumber) {
  return this._puzzle.substr((rowNumber * 9),9);
};

/**
 * Scan a row for a specific number.
 *
 * @param {Number} row - The row to scan.
 * @param {Number} n - The number to scan for.
 * @returns {Boolean} Whether or not the row contains the number.
 */
Puzzle.prototype.scanRow = function(row, n) {
  var contents = this.getRowContents(row);
  var index = contents.indexOf(n.toString());
  return (index !== -1);
};

/**
 * [getColumnContents description]
 * @param  {[type]} columnNumber [description]
 * @return {String}              [description]
 */
Puzzle.prototype.getColumnContents = function(columnNumber) {
  var arraysAreBetter = [];

  return arraysAreBetter.join('');

  return this._puzzle.substr((columnNumber * 9), 9);
};

Puzzle.prototype.scanColumn = function(column, n) {
  var column = this.getColumnContents(column);
  return false;
};


module.exports = Puzzle;
