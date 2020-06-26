
const express = require("express");
const app = express();
const mealsRouter = require("./routes/meals");
const  reservations = require("./routes/reservations");
const  reviews = require("./routes/reviews");





app.get("/meals", (req, res) => {
  res.send(mealsRouter);
});


app.get("/reservations", (req, res) => {
  res.send(reservations);
});

app.get("/reviews", (req, res) => {
  res.send(reviews);
});


app.listen(3000,()=>console.log('running'));