console.log("Web Serverni boshlash!");

import express from "express";

const app = express();

import http from "http";

import fs from "fs";

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
  res.render(`reja.ejs`);
});

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `the server is running sucessfully on port ${PORT}, http://localhost: ${PORT}`
  );
});
