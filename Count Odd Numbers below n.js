// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]


function oddCount(n){
    
    let arr1 = []

    for (i=1; i < n; i++){
        if (i%2 !== 0){
            arr1.push(i)
        }
    }

    let length = arr1.length;

    return length
  }


console.log(oddCount(25))
console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");