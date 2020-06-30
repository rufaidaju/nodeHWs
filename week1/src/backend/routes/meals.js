const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
let mealsWithReviews = meals.map((meal)=>{ 
    let mealReviews = reviews.filter((review) => {
        return meal.id == review.mealId;
    })
    meal.reviews = mealReviews;
    return meal;
});
 module.exports = mealsWithReviews;