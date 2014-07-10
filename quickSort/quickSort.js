'use strict';

var swap = function(array, i, j) {
  var tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

var reorder = function(array, pivot) {

  var il = 0;
  var ir = array.length - 1;
  var pivotValue = array[pivot];

  while (il < ir) {

    while (array[il] < pivotValue) {
      il++;
    }

    while (array[ir] > pivotValue) {
      ir--;
    }

    swap(array, il, ir);
    il++;
    ir--;

  }

};

var quickSort = function(array) {

  if (!Array.isArray(array)) {
    return;
  }

  
  for (var i = 0; i < array.length; i++) {
    reorder(array, i);
  }

  // console.log(array);
  return array;
};


// quickSort([5,4,3,2,1]);
