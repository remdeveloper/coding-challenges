var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let nextNumber = roman[s.charAt(i + 1)];
    let number = roman[s.charAt(i)];
    answer = answer + number;
    if (number < nextNumber) {
      answer = answer - 2 * number;
    }
  }
  return answer;
};
