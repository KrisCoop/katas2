// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.


function wordsToMarks(string){
    //// take string and turn it into an array with split
    //run .map over the array, replacing every element with its' ascii key code - 64 (because a == 65, and they just go up from there, so that's why the '-64' is there)
    // run reduce() over that array to add all the elements together
    // return the results of the reduce() method


    return string.split('')
    .map((e, i, arr) => e.charCodeAt(0) - 96)
    .reduce((tot, e, i) => tot += e, 0)

    console.log(ans)
  }

  console.log(wordsToMarks("attitude"), 100)