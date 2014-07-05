/* global quickSort, describe, it, expect, should */

describe('heapify', function () {
  'use strict';

  it('exists', function () {
    expect(heapify).to.be.a('function');
  });

  it('correctly gets parents', function() {
    expect(parent(3)).to.equal(1);
    expect(parent(1)).to.equal(0);
    expect(parent(4)).to.equal(1);
    expect(parent(5)).to.equal(2);
    expect(parent(6)).to.equal(2)
  });

  it('sorts an array', function() {
    expect(heapSort([6,5,4,3,2,1])).to.eql([1,2,3,4,5,6]);

    expect(heapSort([5,4,3,2,1])).to.eql([1,2,3,4,5]);
    expect(heapSort([1,2,3,4])).to.eql([1,2,3,4]);
    expect(heapSort([9,5,3,1])).to.eql([1,3,5,9]);
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