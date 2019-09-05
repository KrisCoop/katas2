// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    
    let num = [...marks].reduce((s, e, i) => {
        return s + e;
    }, 0);

    return Math.floor(num / marks.length)
  }

    // we make a copy the array and .reduce it down to one number by adding all numbers together
    // we divide that number by the length of the original array
    // we take that new number and round it down to the nearest integer
    // return that number

Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);

