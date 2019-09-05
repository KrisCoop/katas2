// Today's toy problem
// ```Write a JavaScript function to merge two arrays and removes all duplicates elements.
// var array1 = [1, 2, 3]; 
// var array2 = [2, 30, 1]; 
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]```

Array.prototype.unique = function() {
    var a = this.concat();
    for (i = 0; i < a.length; i++) {
        for (j = i+1; j < a.length; j++) {
            if (a[i] === a[j]) 
                a.splice(j--, 1);
            
        }
    }
    return a;
};

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

let array3 = array1.concat(array2).unique();

console.log(array3)