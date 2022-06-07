const Quote = require("../models/quotes.model");

async function getRandomQuote(req, res, next) {
  let randomQuote; // set outside for scoping reasons with regards to the try/catch block and then the res.json being outside of that.

  try {
    randomQuote = await Quote.getRandomQuote(); // awaiting because it is grabbing something from the database, here a randomQuote which we then use below
  } catch (error) {
    return next(error);
  }

  res.json({
    quote: randomQuote,
  }); // sends a json response, that is the parameter converted to a json string using the JSON.stringify() method.
}

module.exports = {
  getRandomQuote: getRandomQuote,
}; // done in this way because we might have more in the future.
