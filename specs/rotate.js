'use strict';

describe('rotate matrix', function() {

  it('should exist', function() {
    expect(rotate).to.be.a('function');
  });

  it('pushColumn: should overwrite values', function() {
    var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ];

    var rotated0 = [
    [11,2,3],
    [22,5,6],
    [33,8,9]
    ];

    pushColumn(matrix, [11,22,33], 0);

    expect(matrix).to.eql(rotated0);

  });


  it('should rotate matrix', function() {

    var matrix = [
              [1,2,5],
              [6,9,3],
              [9,7,2]
             ];

    expect(rotate(matrix)).to.eql([
      [9,6,1],
      [7,9,2],
      [2,3,5]
      ]);

    matrix = [
              [1,2,3,4],
              [5,6,7,8]
             ];

    expect(rotate(matrix)).to.eql([
      [5,1],
      [6,2],
      [7,3],
      [8,4]
      ]);

  });


});