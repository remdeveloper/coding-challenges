/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:

Input: x = -101
Output: false

 

Constraints:

    -231 <= x <= 231 - 1

*/

var isPalindrome = function (x) {
  let splittedArray = x.toString().split("");
  let reversedArray = [];

  //iterating backwards
  for (let i = splittedArray.length - 1; i >= 0; i--) {
    reversedArray.push(splittedArray[i]);
  }
  //comparing each array value
  for (let i = 0; i < splittedArray.length; i++) {
    if (splittedArray[i] !== reversedArray[i]) {
      return false;
    }
  }
  return true;
};

//without converting to string
var isPalindrome = function (x) {
  /*
    
    x               121
    n               121 12  1     
    lastDigit       0   1   2
    reversed        0   1   12
    
    */
  if (x < 0) {
    return false;
  }
  if (x === 0) {
    return true;
  }
  let n = x;
  let lastDigit = 0;
  let reversed = 0;
  while (n > 0) {
    lastDigit = n % 10;
    n = Math.floor(n / 10);
    reversed = reversed * 10 + lastDigit;
  }
  if (reversed === x) {
    return true;
  }
  return false;
};
