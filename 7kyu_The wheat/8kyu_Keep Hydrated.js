// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water 
//  per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan 
//  will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


function litres(time) {

    let num = Math.floor(time / 2)
    console.log(num)

    return num
  }

console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres')