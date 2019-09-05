// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
// and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!


// notes:
// split the string into an array, cause we gonna do some shit with it.
// we need to return 2 versions of the string, one with evens capped, and one with odds capped.........
// if we make 2 new empty arrays, one called 'even', one called 'odd', and then we ........
// ......loop over the original array using map



function capitalize(x){

    x = x.split('');
    let even = x.map((e, i) => {
        return i % 2 === 0 ? e.toUpperCase() : e;
    })
    let odds = x.map((e, i) => {
        return i % 2 === 1 ? e.toUpperCase() : e;
    })

    return [even.join(''), odds.join('')]
}





// describe("Basic tests", function(){
//     Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
//     Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
//     Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//     Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//     });