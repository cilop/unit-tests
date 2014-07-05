/*! powerOfTwo v0.0.0 - MIT license */
'use strict';

var powerOfTwo = function (value) {
    
  if (value <= 0 || typeof value !== 'number'){
    throw 'invalid input';
  }
  
  if (value === 1) {
    return true;
  }

  while (value > 2) {
    value /= 2;
    if (value % 1 !== 0) {
      return false;
    }
  }

  return true;
};
