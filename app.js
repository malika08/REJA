console.log("Web Serverni boshlash!");

import express from "express";

const app = express();

import fs from "fs";

//mongodb connection
import { db } from "./server.js";
//import { log } from "console";
import mongodb from "mongodb";
//import { MongoClient } from "mongodb";

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
//1-step
app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//2-step : Session codes

//3-step: BSSR=> backend server side rendering

app.set("views", "views");

app.set("view engine", "ejs");

//4- Rooterlarga mo'ljallangan:

app.get("/hello", function (req, res) {
  res.end(`<h1>Hello World!</h1>`);
});

app.get("/gifts", function (req, res) {
  res.end(`Siz sovg'alar bo'limidasiz`);
});

app.get("/author", (req, res) => {
  res.render(`author`, { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        console.log(data);
        res.render("reja.ejs", { items: data });
      }
    });
});

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  //console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({
        state: "success",
      });
    }
  );
});
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({
        state: "success",
      });
    }
  );
});
app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({
        state: "all planes were deleted",
      });
    });
  }
});

export default app;
