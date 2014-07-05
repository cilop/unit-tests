'use strict';

var combine = function(left, right) {
  var leftI = 0;
  var rightI = 0;
  var res = [];

  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] > right[rightI]) {
      res.push(right[rightI++]);
    } else {
      res.push(left[leftI++]);
    }
  }

  return res.concat(left.slice(leftI)).concat(right.slice(rightI));
};

var mergeSort = function(array) {

  if (!Array.isArray(array)) {
    return;
  }

  if (array.length < 2) {
    return array;
  }

  var chop = Math.floor(array.length / 2);
  var left = array.slice(0, chop);
  var right = array.slice(chop);

  return combine(mergeSort(left), mergeSort(right));

};
