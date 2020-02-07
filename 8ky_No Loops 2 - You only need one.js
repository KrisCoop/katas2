// * No Loops Allowed *

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array 
// contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, 
// false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// https://www.codewars.com/kata/no-loops-1-small-enough

// https://www.codewars.com/kata/no-loops-3-copy-within

function check(a, x){

    let ans = a.includes(x)
    console.log(ans)
    return ans

}

console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false)
