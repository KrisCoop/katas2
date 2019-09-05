var axios = require('axios');
let names = [];

function doTheThing(){
    for (let i = 1; i < 11; i++){
        axios.get(`https://swapi.co/api/people/${i}/name`).then(response => {
            names = [...names, response.data]} ).catch( () => console.log("Whoopsie, something went wrong"))
    }
}
doTheThing();


console.log(names)