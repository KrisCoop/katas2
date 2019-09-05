// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

//////////////// tests run against code: ///////////////////////
// Test.assertEquals(abbrevName("Sam Harris"), "S.H");
// Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
// Test.assertEquals(abbrevName("Evan Cole"), "E.C");
// Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
// Test.assertEquals(abbrevName("David Mendieta"), "D.M");

let name = "Sam Harris"


function abbrevName(name){

    // use split() to cut apart the strings at the " " character and feed them into an array.
    let n = name.split(' ');
    return n[0][0].toUpperCase() + '.' + n[1][0].toUpperCase();
}

console.log(abbrevName(name))