// Given an array of numbers, check if any of the numbers are the character 
// codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

// notes:
// create an empty array to push values into during for loop.
// take the array param and loop through it.
// if [i] === 97, change the value to 'a'
// if [i] === 101, change the value to 'e'
// if [i] === 105, change the value to 'i'
// if [i] === 111, change the value to 'o'
// if [i] === 117, change the value to 'u'
// else, leave [i] unchanged and continue to next loop.



function isVow(a){

    let arr = [];
    for (i = 0; i < a.length; i++){
        if (a[i] === 97){ arr.push('a')}
    else if ((a[i] === 101)){ arr.push('e')}
    else if ((a[i] === 105)){ arr.push('i')}
    else if ((a[i] === 111)){ arr.push('o')}
    else if ((a[i] === 117)){ arr.push('u')}
    else {arr.push(a[i])}
    }

    console.log(arr)
    return arr
}

console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))

