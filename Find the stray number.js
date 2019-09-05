// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


function stray(numbers) {
    let first = numbers[0];
    let firstArr= [];
    let otherArr = [];
    for (i = 1; i < numbers.length; i++) {
        if (numbers[i] === first) {
            firstArr.push(numbers[i]);
        } else {
            otherArr.push(numbers[i]);
        }

    }
    return firstArr.length < otherArr.length ? numbers[0] : otherArr[0];
  }