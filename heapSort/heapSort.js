'use strict';

var swap = function(array, i1, i2) {
  var tmp = array[i1];
  array[i1] = array[i2];
  array[i2] = tmp;
};


var children = function(index, array) {
  if (!array[2 * index + 1] && !array[2 * index + 2]) {
    return false;
  }
  return [2 * index + 1, 2 * index + 2];
};



var parent = function(index) {
  if (index === 0) {
    return;
  } 

  if (index % 2  === 0) {
    return index / 2 - 1;
  }

  return Math.floor(index / 2);
};

var heapify = function(array) {

  var recurse = function(start) {

    var childIndexes = children(start, array);

    if (childIndexes.length === 0) {
      return;
    }

    var childNodes = [array[childIndexes[0]], array[childIndexes[1]]];

    for (var i = start; i < array.length; i++) {

      var el = array[i];
      var parentIndex = parent(i);
      var parentNode = array[parentIndex];
      

      if (childNodes[0] < el) {
        swap(array, i, childIndexes[0]);
      }

      if (childNodes[1] < el) {
        swap(array, i, childIndexes[1]);
      }

      if (el < parentNode) {
        swap(array, i, parentIndex);
      }

      recurse(i + 1);

    }

  };

  recurse(0);
  return array;
};


var heapSort = function(array) {

  var sorted = [];

  for (var i = 0, len = array.length; i < len; i++) {
    heapify(array);
    sorted.push(array.splice(0,1)[0]);
  }

  return sorted;

};






