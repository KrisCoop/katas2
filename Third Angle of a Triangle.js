// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.




function otherAngle(a, b) {
    //make a variable that starts out @ a triangle's 180 number, as a starting point?
    let tri = 180;
    console.log(tri)

    //take that variable and minus both given angle amounts (from the a, b params)
    tri -= (a + b);
    console.log(tri)

    //return the modified variable as the answer.
    return tri;
  }




  Test.assertEquals(otherAngle(30, 60), 90);

Test.assertEquals(otherAngle(60, 60), 60);

Test.assertEquals(otherAngle(43, 78), 59);

Test.assertEquals(otherAngle(10, 20), 150);