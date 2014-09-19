var Puzzle = function(puzzleString) {
  this._puzzle = puzzleString;
};

var _ = require('lodash');
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
  var newArray = _.range(columnNumber, 81, 9).map(function(index) { 
    return this._puzzle[index];
  }.bind(this));
  return newArray.join('');
};

Puzzle.prototype.scanColumn = function(column, n) {
  var contents = this.getColumnContents(column);
  var index = contents.indexOf(n.toString());
  return (index !== -1);
};


Puzzle.prototype.getBoxContents = function(boxNumber) {
  // TODO: this code is bad code written by wbyoung.
  // it could be far more readable & understandable.
  var row = Math.floor(boxNumber / 3) * 3;
  var col = (boxNumber % 3) * 3;
  var result =
    this._puzzle.substr((row + 0) * 9 + col, 3) +
    this._puzzle.substr((row + 1) * 9 + col, 3) +
    this._puzzle.substr((row + 2) * 9 + col, 3);
  return result;
};

Puzzle.prototype.scanBox = function(box, n) {
  var contents = this.getBoxContents(box);
  var index = contents.indexOf(n.toString());
  return (index !== -1);
};


module.exports = Puzzle;
