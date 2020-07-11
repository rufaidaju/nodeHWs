const mealsWithReviews = require("./meals.js");

let largeMeals = mealsWithReviews.filter( meal => meal.maxNumberOfGuests > 5 );

module.exports = largeMeals;
