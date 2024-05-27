import http from "http";
import app from "./app.js";
import mongodb from "mongodb";
const { MongoClient } = mongodb;

let db;
const connectionString =
  "mongodb+srv://malikaatoeva96:wu0bs4Kid70mgaRO@cluster0.edpmnia.mongodb.net/reja";

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) console.log("Error on connection MongoDb");
    else {
      console.log(`Mongodb connection succeed`);
      db = client.db("REJA");

      const server = http.createServer(app);
      const PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `the server is running sucessfully on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
export { db };
