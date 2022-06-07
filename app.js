const express = require("express");

const db = require("./data/database");
const quoteRoutes = require("./routes/quotes.routes");

const app = express();

app.use("/quote", quoteRoutes); // remember, the /routes there is a filter, basically a prefix. Those with a matching prefix will then be forwarded to quoteRoutes middleware where of course the router will check which route best fits the incoming request

// app.get("/quote", function (req, res, next) {
//   res.json({
//     quote:
//       "As you dive deeper into web development, web development will dive deeper into you!",
//   }); // sends a json response, that is the parameter converted to a json string using the JSON.stringify() method.
// }); // THIS registered route here is an API endpoint

app.use(function (error, req, res, next) {
  // default error handler
  res.status(500).json({
    // setting status code is EXTREMELY important with API, moreso than websites as we are not returning anything visual. This will aid the user to discover *why* there was a failure and give a hint on how to fix.
    message: "Something went wrong!",
  });
});

db.initDb()
  .then(function () {
    // .then() returns a promise. We don't use an await because it is outside of a function
    app.listen(3000); // only does this when we connect to the database, hence the initDb.then()
  })
  .catch(function (error) {
    // catching to stop the application from exploding
    console.log("Connection to database failed."); // in case of database connection failure
  });
