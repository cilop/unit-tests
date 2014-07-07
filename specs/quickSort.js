/* global quickSort, describe, it, expect, should */

describe('quick sort', function () {
  'use strict';

  it('exists', function () {
    expect(quickSort).to.be.a('function');
  });

  it('sorts an array', function () {
    
    expect(quickSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    expect(quickSort([1,2,3,4])).to.eql([1,2,3,4]);
    expect(quickSort([9,5,3,1])).to.eql([1,3,5,9]);
    expect(quickSort([3,2,4,5,6,1,2,3,4,5,7])).to.eql([1,2,2,3,3,4,4,5,5,6,7]);
  });

  it('deals with non-array inputs', function() {

    expect(quickSort('hello')).to.not.be.ok;
    expect(quickSort({})).to.not.be.ok;
    expect(quickSort(1)).to.not.be.ok;
  });

  // Add more assertions here
});

/*


   0
  1 2
 34 56
7 


 children: 2 * index + 1, 2 * index + 2
 parents: floor index / 2, index / 2 - 1





*/