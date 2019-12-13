// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {

    let sum = parseInt(a) + parseInt(b)

    return a && b ? sum.toString() : a && !b ? a : !a && b ? b : '0'
}

console.log(sumStr("4","5"), "9");
console.log(sumStr("34","5"), "39");