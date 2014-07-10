/* global insertionSort, describe, it, expect, should */

describe('selection sort', function () {
  'use strict';

  it('exists', function () {
    expect(selectionSort).to.be.a('function');
  });

  it('min: gets the min value', function() {

  });

  it('sorts an array', function () {
    
    expect(selectionSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    expect(selectionSort([1,2,3,4])).to.eql([1,2,3,4]);
    expect(selectionSort([9,5,3,1])).to.eql([1,3,5,9]);
  });

  it('deals with non-array inputs', function() {

    expect(selectionSort('hello')).to.not.be.ok;
    expect(selectionSort({})).to.not.be.ok;
    expect(selectionSort(1)).to.not.be.ok;
  });

  // Add more assertions here
});
