// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


let x = [1, 2, 3]

function maps(x){
    let map2 = x.map((e) => e * 2)
    return map2;

    console.log(map2);
}

console.log(maps(x))