// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'

//// Examples:
//// addLetters('a', 'b', 'c') = 'f'
//// addLetters('a', 'b') = 'c'
//// addLetters('z') = 'z'
//// addLetters('z', 'a') = 'a'
//// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
//// addLetters() = 'z'


///////////////////notes///////////////////////////
//before diving in, I need to arrange for the function to return 'z' if there are no parameters letters given
    

    // convert the param inputs into numbers using `charCodeAt(0) - 96`
    // I am wondering if I will need to use a spread operator to apply the code I write to each letter parameter, 
    //// since the input itself uses a spread operator and doesn't specify how many entries it will get???

    //once I get the parameters converted to #'s and added together, 
    //// I will need to determine if the number is greater than 26...
    ////// If it is, then I will need to take the remainder of the number after dividing it by 26 (use modulus %)

    // now that I have resolved a number that is between 1 and 26, I can use:
    //// .fromCharCode(97 + n); // where n is 0, 1, 2 ...  to convert my number back into the correct letter.

    function addLetters(...letters) {

        let nums = letters.map((e, i) => e = e.charCodeAt(0) - 96)
        let numAdd = nums.reduce((tot, e) => tot += e, 0)
    
        if (numAdd > 26){
            numAdd = numAdd % 26
        }
        numAdd = String.fromCharCode(numAdd + 96)


        let check = false
        if ([...letters].includes(/^[a-z]$/)){
            check = true
        }
        console.log(check)


        return [...letters].length > 0 ? numAdd : 'z'
    
    }


console.log(addLetters('y', 'c', 'b'))