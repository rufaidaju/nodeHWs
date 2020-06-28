
const express = require("express");
const app = express();
const  mealsRouter = require("./routes/meals");
const  reservationsRouter = require("./routes/reservations");
const  reviewsRouter = require("./routes/reviews");


app.use("/meals",function(req,res,next){
  const meals =req.query;
  const maxPrice = req.query.maxPrice;
  const title=req.query.title ;
  const createdAfter =req.query.createdAfter;
  const limit =req.query.limit;
  // Check if the object is empty
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  if (maxPrice || title || createdAfter|| limit ||  isEmpty(meals) ){
    next()
  }else{
    res.send(404)
  }

})
app.get("/meals", (req, res) => {
  let correspondingMeals = mealsRouter;
  const maxPrice = Number(req.query.maxPrice);
  const title=req.query.title ;
  const createdAfter =req.query.createdAfter;
  const limit =Number(req.query.limit);
// Get meals with a max price 
  if (maxPrice){
    correspondingMeals = mealsRouter.filter((meal)=>{
                          return meal.price <= maxPrice ;
                          })
  }
//  Get meals with  a specific title
  if (title){
    let reqTitle = new RegExp(title,"i")
    correspondingMeals= correspondingMeals.filter((meal)=>{
                          return meal.title.match(reqTitle);
                          })
}

//Get meals that has been created after a specific date
  if (createdAfter){
    let reqCreatedAfter = Date.parse(createdAfter);
    correspondingMeals = correspondingMeals.filter((meal)=>{
                          mealCreatedAfter =  Date.parse(meal.createdAt) 
                          return mealCreatedAfter - reqCreatedAfter > 0  ;
                          })
  }   
 
// Get specific number of meals
  if (limit){
    correspondingMeals = mealsRouter.slice(0,limit);
  }

// Check if there are no meals to show
  if( correspondingMeals.length == 0 ){
    res.send("There are no meals to show ")
  } else{
    res.send(correspondingMeals);  
  }
   
});

app.get("/meal/:id", (req, res) => {
  let correspondingMeal =  mealsRouter.filter((meal)=> meal.id == req.params.id );
  const id = req.params.id;
  if (isNaN(id) ){
    res.send(`The id ( ${id }) is invalid, it's not a number `)
  }else if ( correspondingMeal.length == 0 ) {
    res.send(404)
  } else {
    res.send(correspondingMeal);  
  }
});

app.get("/reservations", (req, res) => {
  res.send(reservations);
});

app.get("/reservation/:id", (req, res) => {
  const id = req.params.id;
  let correspondingReservation =  reservationsRouter.filter((reservation)=> reservation.id == req.params.id );
  if (isNaN(id) ){
    res.send(`The id ( ${id }) is invalid, it's not a number `)
  }else if ( correspondingReservation.length == 0 ) {
    res.send(404)
  } else {
    res.send(correspondingReservation);
  }
});

app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.get("/review/:id", (req, res) => {
  const id = req.params.id;
  let  filterCorrespondingReview =  reviewsRouter.filter((review)=> review.id == req.params.id );
  let correspondingReview =
  filterCorrespondingReview.map(review => {
              return {content: review.content ,numberOfStars:review.numberOfStars, createdAt : review.createdAt}
             })
  if (isNaN(id) ){
    res.send(`The id ( ${id }) is invalid, it's not a number `)
  }else if ( correspondingReview.length == 0 ) {
    res.send(404)
  } else {
    res.send(correspondingReview);
  }
});

app.listen(3000,()=>console.log('running')); 