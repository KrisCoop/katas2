// Convert number to reversed array of digits
// Given a random number:

// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

//my old solution:
    // console.log(n.toString().split('').reverse())
    // let arr = n.toString().split('').reverse()
    // console.log(parseInt(arr))
    // arr.map((e) => {
    //     return e = parseInt(e)
        
    // })
    // console.log(arr)

function digitize(n){

    return n.toString().split('').reverse().map(e => e = Number(e))

}

//best solutions sexy answer I saw:
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
//   }
console.log(digitize(35231),[1,3,2,5,3]);
