// You're are given a string. You must replace the word(s) coverage by covfefe,
// however, if you don't find the word coverage in the string, you must add 
// covfefe at the end of the string with a leading space.

// For the languages where the string is not immutable (such as ruby), don't 
// modify the given string, otherwise this will break the test cases.


//1. let's first split the string into an array at each space " ".
//2. loop through each element in said array to see if any are === to 'coverage'
//3. if it does find the word 'coverage' (and for every instance that it does), it replaces that index with 'covfefe'. 
//4. after that for loop, we do a .includes('covfefe') on the array. If true, return it. If false, add ' covfefe' to the end.


function covfefe(x) {
    let arr = x.split(' ');
    for(i = 0; i < x.length; i++){
        if (arr[i] === 'coverage'){
            arr[i] = 'covfefe';
        }
    }

    if (!arr.includes('covfefe')){
        arr.push(' covfefe')
    }

    return arr.join(" ");
}

// Best practices version:

function covfefe(str) {
    const res = str.replace(/coverage/g, "covfefe")
    return res === str ? str + " covfefe" : res
  }