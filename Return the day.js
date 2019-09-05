// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


////////////////////////////////////////best practices solution 1:
function whatday(num) { 
    switch(num) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return 'Wrong, please enter a number between 1 and 7';
    }
  }
////////////////////////////////
////////////////////////////////////////////best practices version 2:
function whatday(num) { 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
  }



/////////////////////////////my first attempt:
// let num = 2

// function whatday(num) { 

//     let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     let newDay = [];

//     for (i = 0; i < daysArr.length; i++) {
//         if (daysArr[i] === num) {
//             let newDay = daysArr[i];
//         }
//     }
//   return newDay
//   }

// console.log(whatday(num))
///////////////////////////////////////////////////

  describe( "whatday", function(){
    it( "should work for the examples" , function(){
      Test.assertEquals(whatday(1),'Sunday')
      Test.assertEquals(whatday(2), 'Monday')
      Test.assertEquals(whatday(3),'Tuesday')
         Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
      Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')
  
        });
  });