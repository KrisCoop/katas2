// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral 
// representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping 
// any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 
// 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'

function solution(number){
    // convert the number to a roman numeral
  }

  function solution(number) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }


  /////////// or ////////////

  function solution(number){
    // convert the number to a roman numeral
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }

  ////////////// or //////////////

  function solution(number){
    return [
      { threshold: 1000, char: 'M'},
      { threshold: 900,  char: 'CM'},
      { threshold: 500,  char: 'D'},
      { threshold: 400,  char: 'CD'},
      { threshold: 100,  char: 'C'},
      { threshold: 90,   char: 'XC'},
      { threshold: 50,   char: 'L'},
      { threshold: 40,   char: 'XL'},
      { threshold: 10,   char: 'X'},
      { threshold: 9,    char: 'IX'},
      { threshold: 5,    char: 'V'},
      { threshold: 4,    char: 'IV'},
      { threshold: 1,    char: 'I'}
    ].reduce(function(prev, curr, idx, arr)
    {
      while(number >= curr.threshold)
      {
        prev += curr.char;
        number -= curr.threshold;
      }
      
      return prev;
    }, '');
  }

  /////////////// or //////////////

  function solution(number)
{
  var result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  
  return result;
}