// a 'class' is like a new type of variable, that creates basically a template for how we want an object to look.
// it basically creates a prototype for an object.

class person {
    constructor(firstName, lastName, occupation, age, height, weight, yearsInOccupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.yearsInOccupation = yearsInOccupation;
        this.default = 'Default'
    }
}

// so, to use this class we would go...

const kris = new person('kris', 'cooper', 'artist', 34, `6'1`, 301, 15)

console.log(kris)