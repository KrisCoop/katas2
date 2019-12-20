// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


function twoSort(s){

    let arr = s.sort() 

      let chosen = arr[0]
      console.log(chosen)

      let splitter = chosen.split('')
      console.log(splitter)

      let newArr = []

      for (i = 0; i < splitter.length; i++){
        if (i + 1 !== splitter.length){
            newArr.push(splitter[i] + '*' + '*' + '*')
        }else{
            newArr.push(splitter[i])
        }
      }

      return newArr.join('')

      console.log(newArr)

    console.log(arr)
}

//WAAAAY SEXIER ALTERNATIVE THAT A SMARTER PERSON WROTE:

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }

//LOOK AT THAT SHIT ^^

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
