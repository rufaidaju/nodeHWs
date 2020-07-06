const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/:id", async (request, response) => {
  try {
    const meal =  await knex.from('meal').select('*')
    .where('id',request.params.id);
   
    if (meal.length == 0){
      response.send(404);
    }else{
      response.json(meal);
    }
    
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    
    await knex('meal').insert({title:request.body.title,
      maxNumberOfGuests:request.body.maxNumberOfGuests, 
      description:request.body.description, 
      createdAt:request.body.createdAt, 
      price:request.body.price})  
      response.send('response')  
  } catch (error) {
    throw error;   
  }
});   

router.put("/:id", async (request, response) => {
  try {
    const meal =  await knex('meal').where('id',request.params.id)
      .update({title:request.body.title,
        maxNumberOfGuests:request.body.maxNumberOfGuests,
        description:request.body.description,
        createdAt:request.body.createdAt,
        price:request.body.price
      });
    response.send(request.body); 
    
  } catch (error) { 
    throw error; 
  }
});
 
module.exports = router;    