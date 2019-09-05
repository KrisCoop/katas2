// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

// notes:
// if we take the argument we are given & turn it into an array, we can then,
// make a copy of that array, reverse it, 
// and if they are the same we return 'true'


function isPalindrome(x){

    let str = x.toLowerCase();
    let strArr = str.split('');
    let strRev = [...strArr].reverse();

console.log(strArr)
console.log(strRev)

return strArr.join('') === strRev.join('') ? true : false;

}

// SEXY BEST PRACTICES SOLUTION!!!:
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }


console.log(isPalindrome('Racecar'))



// const { assert } = require('chai');

// describe("Fixed tests", function() {
//   it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
//   it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
//   it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
//   it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//   it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
//   it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
//   it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
//   it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
// });