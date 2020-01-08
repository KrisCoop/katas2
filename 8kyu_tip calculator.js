// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating) {

    let tip = 0

    if (rating.toLowerCase() === 'terrible'){tip = 0}
    else if (rating.toLowerCase() === 'poor'){tip = Math.ceil(amount * .05)}
    else if (rating.toLowerCase() === 'good'){tip = Math.ceil(amount * .10)}
    else if (rating.toLowerCase() === 'great'){tip = Math.ceil(amount * .15)}
    else if (rating.toLowerCase() === 'excellent'){tip = Math.ceil(amount * .20)}
    else tip = 'Rating not recognised'

    return tip

}

console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);