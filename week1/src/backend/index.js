
const express = require("express");
const app = express();
const mealsRouter = require("./routes/meals");
const cheapMealsRouter = require("./routes/cheap-meals");
const largeMealsRouter = require("./routes/large-meals");
const mealRouter = require("./routes/meal");
const  reservations = require("./routes/reservations");
const  reservation = require("./routes/reservation")




app.get("/meals", (req, res) => {
  res.send(mealsRouter);
});

app.get("/cheap-meals", (req, res) => {
  res.send(cheapMealsRouter);
});

app.get("/large-meals", (req, res) => {
  res.send(largeMealsRouter);
});

app.get("/meal", (req, res) => {
  res.send(mealRouter);
});

app.get("/reservations", (req, res) => {
  res.send(reservations);
});

app.get("/reservation", (req, res) => {
  res.send(reservation);
});


app.listen(3001,()=>console.log('running'));