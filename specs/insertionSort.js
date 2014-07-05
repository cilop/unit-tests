/* global insertionSort, describe, it, expect, should */

describe('insertion sort', function () {
  'use strict';

  it('exists', function () {
    expect(insertionSort).to.be.a('function');
  });

  it('sorts an array', function () {
    
    expect(insertionSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    expect(insertionSort([1,2,3,4])).to.eql([1,2,3,4]);
    expect(insertionSort([9,5,3,1])).to.eql([1,3,5,9]);
  });

  it('deals with non-array inputs', function() {

    expect(insertionSort('hello')).to.not.be.ok;
    expect(insertionSort({})).to.not.be.ok;
    expect(insertionSort(1)).to.not.be.ok;
  });

  // Add more assertions here
});
