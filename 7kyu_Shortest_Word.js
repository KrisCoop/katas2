// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){

    let arr1 = s.split(' ')
    console.log(arr1)

    let shortest = arr1.reduce(function(lil, current){
        if (lil.length < current.length) {
            return lil;
        } else if (lil.length === current.length) {
            return lil;
        } else {
            return current;
        }
    });
    console.log(shortest)
    return shortest.length
}

//sexy best practices version I found: 
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 