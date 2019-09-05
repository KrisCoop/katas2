// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//example of removing the negatives using filter:
// ids = ids.filter(function(x){ return x > -1 });

//reduce() syntax:
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

function positiveSum(arr){

    let positives = arr.filter(function(x){ return x > -1 });

    let ans = positives.reduce(function(total, currentValue, index){
        return total += currentValue
    },0)

    console.log(ans)

    return ans
}

console.log(positiveSum([1,2,3,4,5]))