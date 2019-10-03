// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the 
// average point you may add your point to the given array!


// my notes:
// classPoints is an array; I think I can sum the array, then divide the sum by the array.length. That's the average.
// then I can compare the new average test score (make it a variable probably) with the yourPoints parameter.
// remember to return True if yourPoints is higher than the average, and False if not.

function betterThanAverage(classPoints, yourPoints) {
    
    let summy = classPoints.reduce((tot, e) => tot += e, 0) + yourPoints;
    let avg = summy / (classPoints.length + 1)

    
    return yourPoints > avg ? true : false
  }

  console.log(betterThanAverage([1, 2, 3]))