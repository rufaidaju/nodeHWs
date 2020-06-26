const reservations = require("../data/reservations.json");

let reservation = function(){
    return  reservations[Math.floor(Math.random() * reservations.length)];
}
module.exports = reservation();

