/* global powerOfTwo, describe, it, expect, should */

describe('power of two', function () {
  'use strict';

  it('exists', function () {
    expect(powerOfTwo).to.be.a('function');

  });

  it('reports true for 1', function() {
    expect(powerOfTwo(1)).to.equal(true);
  });

  it('reports true for powers of two', function () {
    expect(powerOfTwo(2)).to.equal(true);
    expect(powerOfTwo(4)).to.equal(true);
    expect(powerOfTwo(8)).to.equal(true);
    expect(powerOfTwo(16)).to.equal(true);
    expect(powerOfTwo(32)).to.equal(true);
    expect(powerOfTwo(64)).to.equal(true);
    expect(powerOfTwo(128)).to.equal(true);
    expect(powerOfTwo(256)).to.equal(true);
    expect(powerOfTwo(512)).to.equal(true);

    expect(powerOfTwo(Math.pow(2,10))).to.equal(true);
    expect(powerOfTwo(Math.pow(2,9))).to.equal(true);
    expect(powerOfTwo(Math.pow(2,14))).to.equal(true);
  });

  it('reports false for other numbers', function () {
    expect(powerOfTwo(3)).to.equal(false);
    expect(powerOfTwo(6)).to.equal(false);
    expect(powerOfTwo(10)).to.equal(false);
    expect(powerOfTwo(11)).to.equal(false);
    expect(powerOfTwo(123.423)).to.equal(false);
    expect(powerOfTwo(110)).to.equal(false);
    // expect(powerOfTwo(-2)).to.throw(new Error);
    // assert.throw(powerOfTwo(-2), Error,)
  });

  // Add more assertions here
});
