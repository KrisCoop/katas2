// Write a function named setAlarm which receives two parameters. The first parameter, employed, 
// is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the 
// circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false setAlarm(false, true) -> false setAlarm(false, false) -> false setAlarm(true, false) -> true

// setalarm(true, true) -> false
// setalarm(false, true) -> false
// setalarm(false, false) -> false
// setalarm(true, false) -> true

function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
}

console.log(setAlarm(true, true))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))
console.log(setAlarm(true, false))


// some clever ways others solved the problem:

// const setAlarm = (employed, vacation) => employed && !vacation;

// ==================================

// function setAlarm(employed, vacation){
//     return employed && !vacation;
//   }

// ==================================

// function setAlarm(employed, vacation){
//     return (employed && !vacation) ? true : false;
//   }

// ====================================

// function setAlarm(employed, vacation){
//     if(employed == true){
//       if(vacation == false) return true;
//       else return false;
//     } 
//     else return false;
//   }