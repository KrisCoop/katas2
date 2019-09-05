// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the 
// year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)



// plan notes: 
// use modulous % 100 and Math.floor() to generate the answer?


function century(year){
 
    let bNum
    let aNum = (year/100)
    console.log(aNum)

    if (aNum > Math.floor(year/100)){
        bNum = Math.floor(aNum+1)
    } else {bNum = aNum}

    return bNum
    console.log(bNum)
}

console.log(century(1805))