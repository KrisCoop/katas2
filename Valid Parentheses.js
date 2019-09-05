// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens){
    let stuff = 0;
 
  for(let i = 0; i < parens.length && stuff >= 0; i++) {
    stuff += (parens[i] == '(') ? 1 : -1;
    console.log(stuff, parens[i]);
  }
  return (stuff == 0)
 }






  Test.assertEquals(validParentheses( "()" ), true);
Test.assertEquals(validParentheses( "())" ), false);