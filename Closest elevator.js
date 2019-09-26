// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), 
// write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"


//notes: 
//so, we can use subtraction here to determine the answer;
//by subtracting the abs value of left, and right from call, we can see which one to pick,
//the one with the least (or no) distance from the call parameter will be the right answer.
//we could do this with if statements:
////// if call - left is < call-right, use left.
////// if call-right < call-left, use left.
////// if call-right === call- left (or vice versa), call the right elevator.

function elevator(left, right, call){
    let ans = ''

    if (Math.abs(call - left) < Math.abs(call - right)){
        ans = 'left'
    } else if ( Math.abs(call - right) < Math.abs(call - left)){
        ans = 'right'
    } else if (Math.abs(call - right) === Math.abs(call - left)){
        ans = 'right'
    }
    return ans
  }

  //sexy best practices version:

  const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'