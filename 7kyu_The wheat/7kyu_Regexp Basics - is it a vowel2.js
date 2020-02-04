// Implement the function which should return true if given object is a vowel, false otherwise.

String.prototype.vowel = function() {

    // let param = this.toLowerCase()
    // console.log(param)
    // let ans = false

    // if (param === 'a' || param === 'e' || param === 'i' || param === 'o' || param === 'u' || param === 'y'){ans = true}
    // return ans

    // return ['a', 'e', 'i', 'o', 'u'].indexOf(this.toLowerCase()) !== -1
    //this worked, but it's not a regular expression

    return (/^[aeiou]$/i).test(this.toLowerCase())
    
}

console.log(''.vowel(), false);
console.log('a'.vowel(), true);
console.log('E'.vowel(), true);
console.log('ou'.vowel(), false);
console.log('z'.vowel(), false);
console.log('lol'.vowel(), false);