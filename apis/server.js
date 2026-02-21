import express from "express";
import mongoose from "mongoose";

(async () => {
  const connectionInstance = await mongoose.connect(
    "mongodb+srv://skraj703345_db_user:Sje6K85IpMCllvEA@mycluster.ewqxg1g.mongodb.net/",
  );

  console.log(connectionInstance.connection.host);
})();

// schema
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

const app = express();

app.get("/create-user", (req, res) => {
  res.send("hello, my name is sachin");
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
