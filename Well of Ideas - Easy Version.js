// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' 
// and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if 
// there are more than 2 return 'I smell a series!'. If there are no good ideas, as 
// is often the case, return 'Fail!'.

// notes:
// create a for loop and loop through x 
// make an if statement: if x[i] is >= 1 AND less than 3, return 'Publish!'
// next, do an else if statement: if x[i] >= 3, return 'I smell a series!'
// then make an else statement: return 'Fail!'


function well(x){
    let answer = '';

    let goods = x.filter((e)=>{
        return e === 'good' ? e : null
    })
    console.log(goods)

    if (goods.length >= 1 && goods.length < 3){answer = 'Publish!'}
    else if (goods.length > 2){ answer = 'I smell a series!'}
    else answer = 'Fail!'

    return answer;
}


    console.log(well(['bad', 'bad', 'bad']))
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
    console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))


    //old thoughts...
    // let goods = []
    // let answer = '';
    // for (i = 0; i < x.length; i++){
    //     if (x[i] >= 1 || x[i] < 3){
    //         answer = 'Publish!'
    //     } else if (x[i] >= 3){
    //         answer = 'I smell a series!'
    //     } else answer = 'Fail!'
    // }
    // return answer