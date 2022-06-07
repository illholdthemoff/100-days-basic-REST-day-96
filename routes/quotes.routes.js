const express = require("express");

const quotesController = require("../controllers/quotes.controller"); // grabbing usage of the controlelr

const router = express.Router(); // grabbing usage of the Router method being as this is the routes folder/file

router.get("/", quotesController.getRandomQuote); // ie when someone goes to localhost:3000/quote, it will then activate getRandomQuote which then of course fires the random quote

module.exports = router;
