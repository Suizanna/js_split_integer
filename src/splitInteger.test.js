'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 2)).toEqual([3, 3]);
  expect(splitInteger(17, 4)).toEqual([4, 4, 4, 5]);
  expect(splitInteger(32, 6)).toEqual([5, 5, 5, 5, 6, 6]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(8, 1)).toEqual([8]);
  expect(splitInteger(6, 1)).toEqual([6]);
  expect(splitInteger(17, 1)).toEqual([17]);
  expect(splitInteger(32, 1)).toEqual([32]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(8, 4)).toEqual([2, 2, 2, 2]);
  expect(splitInteger(15, 5)).toEqual([3, 3, 3, 3, 3]);
  expect(splitInteger(20, 3)).toEqual([6, 7, 7]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(1, 6)).toStrictEqual([0, 0, 0, 0, 0, 1]);
  expect(splitInteger(7, 10)).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 1, 1]);
});
