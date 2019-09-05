const obj = {
    firstName: 'Kris',
    lastName: 'Cooper',
    numbers: [1, 2, 3],
    sayName: function() {
        return'${this.firstName} ${this.latName}'
    }
}


console.log(obj.firstName)


// using 'this' keyword

const obj = {
    firstName: 'Josh',
    lastName:'Smith',
    numbers: [1,2,3,5,6,7],
    occupation:{
        title: "Software Developer",
        payType: "Salary",
        programingLanguages: ['Javascript', 'c#']
    },
    sayName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const sayName = obj.sayName;

const otherObj = {
    firstName: "Dan",
    lastName: "Valentine",
    sayName: obj.sayName,
}

console.log(sayName())
console.log(obj.sayName())
console.log(otherObj.sayName())