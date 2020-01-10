// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. 
// This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

// First Try:

// function isPalindrome(line) {
//     console.log(line.split('').reverse().join(''))
//     return line.split('').reverse().join('') === line? true: false
//   }

  function isPalindrome(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
  }


console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);
console.log(isPalindrome("."), true);