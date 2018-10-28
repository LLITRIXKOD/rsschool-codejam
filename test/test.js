const assert = require('assert');

Object.freeze(assert);
const sumOfOtherTest = require('../src/sumOfOther.js');
const makeTest = require('../src/make.js');
const recursionTest = require('../src/recursion.js');


describe('someOfOtherTest function', () => {
  it('should return result array correctly', () => {
    assert.deepEqual(sumOfOtherTest([2, 3, 4, 1]), [8, 7, 6, 9]);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(sumOfOtherTest([4, 7, 2, 1]), [10, 7, 12, 13]);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(sumOfOtherTest([34, 32, 48, 11]), [91, 93, 77, 114]);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(sumOfOtherTest([657, 826, 124, 789]), [1739, 1570, 2272, 1607]);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(sumOfOtherTest([23, 45, 57, 23, 56, 34, 87, 23, 54, 0, 0, 234]),
      [613, 591, 579, 613, 580, 602, 549, 613, 582, 636, 636, 402]);
  });

  it('should return empty array', () => {
    assert.deepEqual(sumOfOtherTest([]), []);
  });

  it('should return null of array', () => {
    assert.deepEqual(sumOfOtherTest([1]), [0]);
  });
});

function sum(a, b) {
  return a + b;
}

describe('makeTest function', () => {
  it('should return result correctly', () => {
    assert.deepEqual(makeTest(15)(34, 21, 666)(41)(sum), 777);
  });

  it('should return result correctly', () => {
    assert.deepEqual(makeTest(15, 34)(21, 666)(41)((a, b) => a + b), 777);
  });

  it('should return result correctly', () => {
    assert.deepEqual(makeTest(1, 2, 4, 5)((a, b) => a * b), 40);
  });

  it('should return result correctly', () => {
    assert.deepEqual(makeTest(23, 34)((a, b) => a * b), 782);
  });
});

const tree1 = {
  value: 100,
  left: { value: 90, left: { value: 70 }, right: { value: 99 } },
  right: {
    value: 120,
    left: { value: 110 },
    right: { value: 130 },
  },
};
const tree2 = {
  value: 40,
  left: { value: 30 },
  right: {
    value: 78,
    left: { value: 62 },
    right: { value: 80 },
  },
};

describe('recursionTest function', () => {
  it('should return 0 when object is empty', () => {
    assert.deepEqual(recursionTest({}), 0);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(recursionTest({ value: 12 }), [[12]]);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(recursionTest(tree1), [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('should return result array correctly', () => {
    assert.deepEqual(recursionTest(tree2), [[40], [30, 78], [62, 80]]);
  });
});
