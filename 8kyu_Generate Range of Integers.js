// Implement a function named generateRange(min, max, step), 
// which takes three arguments and generates a range of integers from min to max,
// with the step. The first integer is the minimum value, the second is the maximum 
// of the range and the third is the step. (min < max)

function generateRange(min, max, step){
    let ans = [];
    for(i = min; i <= max; i += step){
        ans.push(i)
    }
    return ans;
  }

//   Test.describe("generateRange(2, 10, 2)", function() {
//     Test.assertSimilar(generateRange(2, 10, 2), [2,4,6,8,10]);
//   });

console.log(generateRange(1,10,3))
