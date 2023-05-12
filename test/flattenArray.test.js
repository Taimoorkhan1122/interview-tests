const assert = require("assert");
const {flattenArray} = require("../index");



test('flattens an array of nested arrays', () => {
  const input = [[1, 2, [3]], 4, [[[5]]]];
  const expectedOutput = [1, 2, 3, 4, 5];
  const actualOutput = flattenArray(input);
  expect(actualOutput).toEqual(expectedOutput);
});

test('returns empty array if input is empty', () => {
  const input = [];
  const expectedOutput = [];
  const actualOutput = flattenArray(input);
  expect(actualOutput).toEqual(expectedOutput);
});

test('handles array with only one element', () => {
  const input = [1];
  const expectedOutput = [1];
  const actualOutput = flattenArray(input);
  expect(actualOutput).toEqual(expectedOutput);
});

test('handles array with only nested arrays', () => {
  const input = [[1], [[2]], [[[3]]]];
  const expectedOutput = [1, 2, 3];
  const actualOutput = flattenArray(input);
  expect(actualOutput).toEqual(expectedOutput);
});
