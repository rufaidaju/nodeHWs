const mealsWithReviews = require("./meals.js");

let largeMeals = mealsWithReviews.filter( meal => {
    return meal.maxNumberOfGuests > 5});
module.exports = largeMeals;
