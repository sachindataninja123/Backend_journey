//common js
// const express = require('express')

//module
// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send([
//     {
//       name: "Sachin Kumar Kushwaha",
//       age: 20,
//     },
//     {
//       name: "Aryan kumar",
//       age: 19,
//     },
//     {
//       name: "Mohit",
//       age: 12,
//     },
//   ]);
// });

// app.get("/about", (req, res) => {
//   res.send("About Route");
// });

// app.listen(8000, () => {
//   console.log("Server running on http://localhost:8000 🚀");
// });

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send([
    {
      name: "Sachin Kumar Kushwaha",
      age: 20,
    },
    {
      name: "Mohan kumar ram",
      age: 666,
    },
  ]);

  app.get("/about", (req, res) => {
    res.send("About page");
  });

  app.get("/product", (req, res) => {
    res.send("Product page");
  });
});


app.listen(8000 , () => {
    console.log("Code is running on http://localhost:8000 🚀")
})