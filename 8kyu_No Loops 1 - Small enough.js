// * No Loops Allowed *
// You will be given an array (a) and a limit value (limit). You must check that all values
//  in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.

////kris notes: here is the syntax for filter() method:
// array.filter(function(currentValue, index, arr), thisValue)
// another example:
// const result = words.filter(word => word.length > 6)
//yet another:
//  let newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

/////////////////mine worked but failed the 'no loops' rule. ill post some examples of other folks' solutions below it.
function smallEnough(a, limit){
    let ans = true
    a.forEach(e => {
        if (e > limit){
            ans = false
        }
    })
    return ans
}

// function smallEnough(a, limit) {
//     return a.every(x => x <= limit);
//   }

// const smallEnough = (a, limit) => Math.max(...a) <= limit

// function smallEnough(a, limit){
//     a.sort((c,d)=>d-c)
//     return a[0]<=limit
//   }

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);