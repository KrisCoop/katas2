// Create a combat function that takes the player's current health and the amount of damage recieved, 
// and returns the player's new health. Health can't be less than 0.

//notes:
// is the health - damage less than or equal to zero ? if so, return 0
// if the health - damage greater than zero ? if so, return the health-damage

function combat(health, damage){
    return health - damage <= 0 ? 0 : health - damage;
}

//another way to do it:

function combat(health, damage) {
    return health < damage ? 0 : health - damage
  }