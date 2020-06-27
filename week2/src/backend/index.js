
const express = require("express");
const app = express();
const  mealsRouter = require("./routes/meals");
const  reservationsRouter = require("./routes/reservations");
const  reviewsRouter = require("./routes/reviews");


app.get("/meals", (req, res) => {
  let correspondingMeals = mealsRouter;
// Check if there is a max price 
  if (req.query.maxPrice){
    correspondingMeals = mealsRouter.filter((meal)=>{
                          return meal.price <= req.query.maxPrice ;
                          })
  }
//  Check if there is a specific title
  if (req.query.title){
    let reg = new RegExp(req.query.title,"i")
    correspondingMeals= correspondingMeals.filter((meal)=>{
                          return meal.title.match(reg);
                          })
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