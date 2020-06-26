const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
let result =[];
let mealsWithReviews = meals.map((meal)=>{ 
    // Find the reviews to the meal
    let mealReviews = reviews.filter((review) => {
        return meal.id == review.mealId;
    })
    meal.review = mealReviews;
    return meal;
});
 module.exports = mealsWithReviews;