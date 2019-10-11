// Your website is divided vertically in sections, and each can be of different size (height).
// You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
// Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.

// Example:
// getSectionIdFromScroll( 300, [300,200,400,600,100] )

// will output number 1 as it's the second section.

// getSectionIdFromScroll( 1600, [300,200,400,600,100] )

// will output number -1 as it's past last section.

// Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), 
// calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).


///// notes:
// since I won't know value of the sizes array's elements ahead of time (except that they will be positive numbers)...
// ...I need to find a way to determine the value of each element arbitratily, ahead of time. I know that:
// the 1st section === sizes[0]
// the 2nd section === sizes[1] - (sizes[0])]
// the 3rd section === sizes[2] - (sizes[0] + sizes[1])]
// the 4th section === sizes[3] - (sizes[0] + sizes[1] + sizes[2])]
// the 5th section === sizes[4] - (sizes[0] + sizes[1] + sizes[2] + sizes[3])]
//so, maybe, I can use that to say something like "if scrollY is === sizes[0], return 1, if it's === sizes[2] - (sizes[0] + sizes[1])]", return 2, and so on.
// and, if scrollY ....no. that doesn't help. hmmm.....
// ok, if scrollY <= sizes[0] -1, return 1. if scrollY is >= 




// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers

// function getSectionIdFromScroll(scrollY, sizes){


//     console.log(scrollY)
//     console.log(sizes)
//     let sumSizes = sizes.reduce((tot, e) => tot += e , 0)
//     console.log(sumSizes)
//     let num = 0

//     console.log((sizes[4]))

//     if (scrollY < sizes[1]){num = 0}
//     else if (scrollY >= sizes[0] && scrollY < sizes[2]){num = 1}
//     else if (scrollY >= sizes[1] && scrollY < sizes[3]){num = 2}
//     else if (scrollY >= sizes[2] && scrollY < sizes[4]){num = 3}
//     else if (scrollY >= sizes[3] && scrollY < sumSizes){num = 4}
//     else num = -1

//     console.log((num))
//     return num
// };

function getSectionIdFromScroll(scrollY, sizes){

    answer = -1

    for(i = 0; i < sizes.length; i++){
        i !== 0 ? sizes[i] = (sizes[i] + sizes[i - 1]) : sizes[i]
    }
    console.log(sizes)

    for(j = 0; j < sizes.length; j++){
        if(scrollY < (sizes[j]) ){
            answer = j
            break;
        }
    }

    return answer;
    
}



// console.log(getSectionIdFromScroll(300, [300,200,400,600,100]))
console.log(getSectionIdFromScroll(600, [300,200,400,600,100]))

// This is best practices apparently?!??!

// function getSectionIdFromScroll(y, s){
//     var t=0;
//     return s.findIndex(e=>(t+=e)>y);
//  }


