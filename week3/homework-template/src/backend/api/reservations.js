const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const utils = require("../utils")


router.get("/:id", async (request, response) => {
    try {
      const reservation =  await knex.from('reservation').select('*')
      .where('id',request.params.id);
     console.log('**',reservation)
      if (reservation.length == 0){ 
        response.send(404);
      }else{
        response.json(reservation);
      }
      
    } catch (error) {
      throw error;
    }
  });

  module.exports = router;    