// In this Kata, you will be given a string and your task is to return the most valuable character. 
// The value of a character is the difference between the index of its last occurrence and the index 
// of its first occurrence. Return the character that has the highest value. If there is a tie, return 
// the lexicographically lowest character.

// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'

function solve(st) {
    //use split('').....maybe, we might not need to split it at all
    //to find the first index of a letter, use indexOf()
    //to find the last index, use lastIndexOf()
    //make a variable called highestLetter
    //make a variable called highestValue
    //as we loop through the array, if the current letters' value is greater 
    //than the current value, make it the new highestLetter
    //after the loop runs, return highestLetter
    // let highestLetter = '';
    let highestValue = -1 ;
    let winners = [];
    st.split('').forEach((e, i, arr) => {
        if ((arr.lastIndexOf(e) - arr.indexOf(e)) > highestValue){
            highestValue = (arr.lastIndexOf(e) - arr.indexOf(e))
            // highestLetter = e;
            console.log(highestValue)
            console.log(highestLetter)
        }
    })

    st.split('').forEach((e, i, arr) => {
        if((arr.lastIndexOf(e) - arr.indexOf(e)) === highestValue){
            winners.push(e)
            console.log(winners)
        }
    })

    winners = winners.sort()
    console.log(winners)

    return winners[0]
 }

// console.log(solve('a'), 'a');
// console.log(solve('aa'), 'a');
// console.log(solve('bcd'), 'b');
// console.log(solve('axyzxyz'), 'x');
console.log(solve('ayxzyxz'))
// console.log(solve('aabccc'), 'c'); 