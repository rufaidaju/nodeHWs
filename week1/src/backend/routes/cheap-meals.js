const mealsWithReviews = require("./meals.js");

let cheapMeal = mealsWithReviews.filter( meal => {
    return meal.price < 90 });
module.exports = cheapMeal;
