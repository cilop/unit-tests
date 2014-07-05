/* global insertionSort, describe, it, expect, should */

describe('merge sort', function () {
  'use strict';

  it('exists', function () {
    expect(mergeSort).to.be.a('function');
  });

  it('sorts an array', function () {
    
    expect(mergeSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    expect(mergeSort([1,2,3,4])).to.eql([1,2,3,4]);
    expect(mergeSort([9,5,3,1])).to.eql([1,3,5,9]);
  });

  it('deals with non-array inputs', function() {

    expect(mergeSort('hello')).to.not.be.ok;
    expect(mergeSort({})).to.not.be.ok;
    expect(mergeSort(1)).to.not.be.ok;
  });

  // Add more assertions here
});
