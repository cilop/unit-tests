'use strict';
var min = function(array) {
  var index = 0;
  var res = array[index];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < res) {
      res = array[i];
      index = i;
    }
  }
  
  return index;

};

var selectionSort = function(array) {

  if (!Array.isArray(array)) {
    return;
  }

  var res;
  var sorted = [];
  
  for (var i = 0, _len = array.length; i < _len; i++) {
    
    res = min(array);
    sorted.push(array.splice(res, 1)[0]);
      
    }

  return sorted;
};


