//common js
// const express = require('express')

//module
// import express from "express";


import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send([
    {
      name: "Sachin Kumar Kushwaha",
      age: 20,
    },
    {
      name: "Mohan Kumar kushwaha",
      age: 78,
    },
  ]);

  app.get("/about", (req, res) => {
    res.send("About page");
  });

  app.get("/product", (req, res) => {
    res.send("Product page");
  });
});

app.post("/create-user", (req, res) => {
  console.log(req.body);
  res.send({
    "message" : `Hey ${req.body.name}, Your data saved successfully.`
  })
});

app.listen(8000, () => {
  console.log("Code is running on http://localhost:8000 🚀");
});
