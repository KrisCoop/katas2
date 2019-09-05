// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// notes:
// create an empty new array called 'bin', we will push stuff into it.
// make another new array named param, that = x.split('') , which splits the paramater into a new array.
// loop through the param array; for indexes with nums > 4, push 1 into a new array.
// and for indexes with nums < 5, push 0 into the new array.
// use .join to mash the bin array into a string called 'ans'
// return ans.


function fakeBin(x){

    let bin = []
    let param = x.split('')

    for (i = 0; i < param.length; i++){
        if (param[i] > 4){bin.push(1)}
        else if (param[i] < 5){bin.push(0)}
    }

    console.log(bin)
    console.log(param)

    let ans = bin.join('');
    return ans;

}

console.log(fakeBin('45385593107843568'))