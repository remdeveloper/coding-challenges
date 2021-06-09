/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Example 4:

Input: x = 0
Output: 0

*/

var reverse = function (x) {
  let solution = parseInt(x.toString().split("").reverse().join(""));
  if (Math.abs(solution) > 2147483648) {
    return 0;
  }
  if (x < 0) {
    return solution * -1;
  }
  return solution;
};
