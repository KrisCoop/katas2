// You should return the average number of the square of all even positive integers (not fractions) 
// in the given array, rounded to the nearest integer.

// e.g. for arr = [4, 5.6, -9.8, 3.14, 42, 6, 8.34] it would be [4, 42, 6], which squared 
// is [16, 1764, 36], whose average value is 605.33, which rounded becomes 605 .

// If there are no even positive integers in the array, the final result should be 0.

// first, filter to get all the even whole numbers.
//// 1.5, filter out any negative numbers...ids = ids.filter(function(x){ return x > -1 });
// 2nd square each of the remaining numbers?
// 3rd, add the squared numbers together
// 4th, divide the sum by the number of original remaining filtered numbers
// 5th, return each divided number to a whole number by rounding to the nearest number.

function averageSquaredInt(arr) {
    
    let newArr = arr.filter((e)=>{
        return e === parseInt(e)
    });
    newArr = newArr.filter(function(x){
        return x > -1
    });
    newArr = newArr.filter((e)=>{
        return e % 2 === 0
    });
    newArr = newArr.map((e)=>{
        return e *= e
    });
    let arrLength = newArr.length;
    newArr = newArr.reduce((sum, e)=>{
        return sum + e
    },0)
    newArr /= arrLength;
    newArr = Math.round(newArr);


    console.log(newArr);
    return newArr; 
  }

averageSquaredInt([12, 51, -159.8, -3.14, 247, -6])
//   Test.describe("Basic tests",function(){
//     Test.assertEquals(averageSquaredInt([4, 5.6, -9.8, 3.14, 42, 6, 8.34]), 605);
//     Test.assertEquals(averageSquaredInt([12, 51, -159.8, -3.14, 247, -6]), 144);
    
  
//   })
  