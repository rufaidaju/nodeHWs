
const express = require("express");
const app = express();
const  mealsRouter = require("./routes/meals");
const  reservationsRouter = require("./routes/reservations");
const  reviewsRouter = require("./routes/reviews");


app.get("/meals", (req, res) => {
  let correspondingMeals = mealsRouter;
// Get meals with a max price 
  if (req.query.maxPrice){
    correspondingMeals = mealsRouter.filter((meal)=>{
                          return meal.price <= req.query.maxPrice ;
                          })
  }
//  Get meals with  a specific title
  if (req.query.title){
    let reqTitle = new RegExp(req.query.title,"i")
    correspondingMeals= correspondingMeals.filter((meal)=>{
                          return meal.title.match(reqTitle);
                          })
}

//Get meals that has been created after a specific date
  if (req.query.createdAfter){
    let reqCreatedAfter = Date.parse(req.query.createdAfter);
    correspondingMeals= correspondingMeals.filter((meal)=>{
                          mealCreatedAfter =  Date.parse(meal.createdAt)
                          return mealCreatedAfter - reqCreatedAfter > 0  ;
                          })
  }
 
// Get specific number of meals
  if (req.query.limit){
    correspondingMeals = mealsRouter.slice(0,req.query.limit);
    console.log(correspondingMeals)
  }
res.send(correspondingMeals); 
});

app.get("/meal/:id", (req, res) => {
  let correspondingMeal =  mealsRouter.filter((meal)=> meal.id == req.params.id );
  res.send(correspondingMeal);
});


app.get("/reservations", (req, res) => {
  res.send(reservations);
});

app.get("/reservation/:id", (req, res) => {
  let correspondingReservation =  reservationsRouter.filter((reservation)=> reservation.id == req.params.id );
  res.send(correspondingReservation);
});

app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.get("/review/:id", (req, res) => {
 let  filterCorrespondingReview =  reviewsRouter.filter((review)=> review.id == req.params.id );
  let correspondingReview =
  filterCorrespondingReview.map(review => {
              return {content: review.content ,numberOfStars:review.numberOfStars, createdAt : review.createdAt}
             })
  res.send(correspondingReview);
});

app.listen(3000,()=>console.log('running'));