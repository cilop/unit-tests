/*! insertionSort v0.0.0 - MIT license */
'use strict';

var insertionSort = function (array) {

  if (!Array.isArray(array)) {
    return;
  }

  var j;

  for (var i = 1; i < array.length; i++) {

    j = i - 1;
    
    while (array[j] > array[j + 1]) {
      array.splice(j, 0, array.splice(j + 1, 1)[0]);
      j--;
    }
  }

  return array;
};




