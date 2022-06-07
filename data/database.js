const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database; // helper var that holds the database once it's ready

async function initDb() {
  // an await because it is connecting to something external from the code files, thus will take time
  const client = await MongoClient.connect("mongodb://0.0.0.0:27017");
  database = client.db("first-api"); // calling db on client (27017 etc) and then naming the database first-api
}

function getDb() {
  if (!database) {
    // in case the database hasn't been connected and we don't want the program exploding
    throw new Error("Database not connected!");
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
