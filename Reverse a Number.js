// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
    newVar = Math.abs(n).toString();
    console.log(newVar)

    newVar = newVar.split("");
    console.log(newVar)

    newVar = newVar.reverse();
    console.log(newVar)

    newVar = newVar.join("");
    console.log(newVar)

    newVar = Number(newVar);
    console.log(newVar)

    if (n <0){
        newVar = -newVar;
    }
    return newVar;
  }

  reverseNumber(-123)

  /////got it right, but here is a sexier way to write that code below:
  ////////function reverseNumber(n) {
//   let isNegative = n < 0;  
//   let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
//   let result = Number(reverseAsString);
  
//   return isNegative ? -result : result;
// }


  
  
  
  
  
  /////////////////tests run on the submitted answer:
//   Test.describe("Sample tests", _=>{
//     Test.assertEquals(reverseNumber(123), 321)
//     Test.assertEquals(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
//     Test.assertEquals(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
//     Test.assertEquals(reverseNumber(4321234), 4321234)
//     Test.assertEquals(reverseNumber(5), 5)
//     Test.assertEquals(reverseNumber(0), 0)
//     Test.assertEquals(reverseNumber(98989898), 89898989)
//   });
  