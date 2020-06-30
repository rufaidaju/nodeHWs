const reservations = require("../data/reservations.json");

let reservation = function(){
    const randomIndex = Math.floor(Math.random() * reservations.length);
    return  reservations[randomIndex];
}
module.exports = reservation();

