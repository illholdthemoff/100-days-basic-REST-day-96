const db = require("../data/database");

class Quote {
  static async getRandomQuote() {
    const quotes = await db.getDb().collection("quotes").find().toArray(); // goes into the database, into the quotes colleciton (the only one there as of this writing) and then grabs every quote in there and returns them in the form of an array.
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length); //Math.random() returns a float in the range of 0 and less than 1
    // Math.floor() returns the largest integer less than or equal to a given number
    //it finds a random number then multiplies it by the length of the quotes array and then floors the result, seen below as an example.
    // [1, 2, 3] => length: 3 => (.random() result) 0.8 * 3 => 2.4 => Math.floor(2.4) => 2

    const randomQuote = quotes[randomQuoteIndex]; // assigns the quote with the array slot that matches the randomQuoteIndex.

    return randomQuote.text; // just the text, don't need the _id
  }
}

module.exports = Quote;
