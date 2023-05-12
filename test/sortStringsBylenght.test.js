const assert = require("assert");
const {sortStringsByLength} = require("../index");


test('sorts an array of strings by length alphabetically', () => {
  const input = ['apple', 'banana', 'pear', 'grape'];
  const expectedOutput = ['pear', 'apple', 'grape', 'banana'];
  const actualOutput = sortStringsByLength(input);
  expect(actualOutput).toEqual(expectedOutput);
});

test('preserves order of strings with same length', () => {
  const input = ['cat', 'dog', 'ant', 'owl', 'bat'];
  const expectedOutput = ['cat', 'dog', 'ant', 'owl', 'bat'];
  const actualOutput = sortStringsByLength(input);
  expect(actualOutput).toEqual(expectedOutput);
});

test('returns empty array if input is empty', () => {
  const input = [];
  const expectedOutput = [];
  const actualOutput = sortStringsByLength(input);
  expect(actualOutput).toEqual(expectedOutput);
});
