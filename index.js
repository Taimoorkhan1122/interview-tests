/**
 *
 * Challenge 01: Implement a Function to Sort an Array of Strings Alphabetically by Length
 * Problem Prompt:
 *      Write a function that takes an array of strings as input and returns a new array of strings
 *      sorted alphabetically by their length in ascending order. If two strings have the same length,
 *      their order should be preserved. You should not use any built-in sorting functions.
 * Example:
 * Input:
 * ["apple", "banana", "pear", "grape"]
 *
 * Output
 * ["pear", "apple", "grape", "banana"]
 *
 */

 function sortStringsByLength(input) {
  return [];
}

/**
 *
 * Challenge 01: Implement a Function to Flatten an Array of Nested Arrays
 * Problem Prompt:
 *      Write a function that takes an array of nested arrays as input and returns a new array
 *      that is a flattened version of the input array.
 *      The input array may contain nested arrays of any depth.
 *      You should not use any built-in flattening functions.
 * Example:
 * Input:
 * [[1, 2, [3]], 4, [[[5]]]]
 *
 * Output
 * [1, 2, 3, 4, 5]
 *
 */

 function flattenArray(input) {
  return [1,2,3,4];
}

module.exports = {flattenArray, sortStringsByLength}
