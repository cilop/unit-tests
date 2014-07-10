'use strict';

var makeMatrix = function(rows, cols) {

  var matrix = [];

  for (var i = 0; i < rows; i++) {
    matrix.push(new Array(cols));
  }

  return matrix;
};

var pushColumn = function(matrix, column, index) {


  for (var i = 0; i < column.length; i++) {
    matrix[i][index] = column[i];
  }

};

var rotate = function(matrix) {

  var rotated = makeMatrix(matrix[0].length, matrix.length);
  var n = rotated[0].length - 1;

  for (var i = 0; i < matrix.length; i++) {
    pushColumn(rotated, matrix[i], n);
    n--;
  }
  
  return rotated;
};