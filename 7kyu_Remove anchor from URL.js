// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

function removeUrlAnchor(URL){

    //use split('') to separate the string into an array of single characters
    //use a for loop to iterate to the index containing '#'
    //if the index in the loop is < the index containing '#', push it into a new array
    //declare a new variable (ans or something) and use .join('') to merge the array back in to a string
    //return the answer string variable

    let newArr = URL.split('');
    let moreNewerArr = [];
    
    if(newArr.indexOf('#') > -1){
        for(i = 0; i < newArr.length; i++){
            if(i < newArr.indexOf('#')){
                moreNewerArr.push(newArr[i])
            }
        }
    }else{
        moreNewerArr = newArr;
    }
    console.log(moreNewerArr)
    return moreNewerArr.join('')
}

// function removeUrlAnchor(URL){

//     //use split('') to separate the string into an array of single characters
//     //use a for loop to iterate to the index containing '#'
//     //if the index in the loop is < the index containing '#', push it into a new array
//     //declare a new variable (ans or something) and use .join('') to merge the array back in to a string
//     //return the answer string variable

//     let newArr = URL.split('')
//     let moreNewerArr = []
//     let ans = newArr

//      if(newArr.indexOf('#') > -1){
//         for (i=0; i < newArr.length; i++){
//             if (i < newArr.indexOf('#')){
//                 moreNewerArr.push(newArr[i])
//             }
//         }       
//      } else {
//             ans = moreNewerArr
//         }
//         console.log(moreNewerArr)
//     }
//     return ans.join('')
// }



console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');


// Different Version that Also Works:

// function removeUrlAnchor(url){
//     return url.includes('#') ? url.split('').slice(0, url.indexOf('#')).join('') : url;
// }