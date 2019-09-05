// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the 
// ref's voice into a string, but the spoken score needs to be converted into an array ( or tuple ) for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// note: The score won't go above 9 goals either side ( [9,9] ), and the ref won't say the same string every time e.g.

// "new score: two three"

// "two two"

// "Arsenal just conceded another goal, two nil"
// Please rate and enjoy!

//======================
// notes:
// break the string into an array using split(' ')
// filter out every word from the array that is not the written version of numbers 1-9, or the word 'nil'
// you should now have an array of two indexes, each a written number (e.g. ['two', 'nil'])
// convert those strings into numbers and return the array.

function scoreboard(string){

    let x = string.split(' ');
    console.log(x)

    let arr = x.filter(function(score){
        return score === 'nil' || score === 'one' || score === "two" || score === 'three' || score === 'four' || score === 'five' || score === 'six' || score === 'seven' || score === 'eight' || score === 'nine'
    })
    console.log(arr)

    let ans = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] === 'nil'){ans.push(0)}
    else if (arr[i] === 'one'){ans.push(1)}
    else if (arr[i] === 'two'){ans.push(2)}
    else if (arr[i] === 'three'){ans.push(3)}
    else if (arr[i] === 'four'){ans.push(4)}
    else if (arr[i] === 'five'){ans.push(5)}
    else if (arr[i] === 'six'){ans.push(6)}
    else if (arr[i] === 'seven'){ans.push(7)}
    else if (arr[i] === 'eight'){ans.push(8)}
    else if (arr[i] === 'nine'){ans.push(9)}
    }
    console.log(ans)
    return ans
}

console.log(scoreboard("new score: two three"))