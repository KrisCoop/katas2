// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
    // declare 'ans' with an empty array as a value
    // set up a basic for loop. every time it runs it will push something onto the end of our array.
    // we can have some 'if' statements:
    // the first 'if' statemet will deal with the array starting with 1 instead of 0:
    // that could be phrased something like...'if i === 0 ? push 1'
    // another 'if' statement can check the last thing in the array: 'if array.pop() === 0, then push a 1 onto the end of the array'
    // we need another 'if' statement to counter the previous one now: 'if arrap.pop() === 1, then push 0 onto the end of the array'
    //let's convert our new array into a string, because we need to return a string to get the right answer.

    let ans = [];

    for (i=0; i < size; i++){
        if (i === 0){
            ans.push('1');
        }
        else if (ans[ans.length -1] === '0'){
            ans.push('1')
        }
        else if (ans[ans.length -1] === '1'){
            ans.push('0')
        } 
    }

    ans = ans.join('')
    return ans;
  }


  Test.describe("the stringy function", function() {

    Test.it('Should return a string', function() {
      Test.assertEquals(typeof stringy(3), 'string',
      'Make sure it\'s a string not a number (the function is called stringy after all!)');
    });
  
    Test.it('Should start with a 1', function() {
      Test.assertEquals(stringy(3)[0], '1',
      'Whoops your string doesnt start with a 1?');
    });  
  
    Test.it('Should have the correct length', function() {  
      for(let i = 0; i < 10; ++i){
        let parameter = (Math.random() * 50 + 1) | 0;
        Test.assertEquals(stringy(parameter).length, parameter, 'Wrong length on ' + parameter);
      }
    });
  });