const mealsWithReviews = require("./meals.js");

let meal = function(){
    return  mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
}
module.exports = meal();

