import express from "express";
import mongoose from "mongoose";

//connect with mongodb cluster
(async () => {
  const connectionInstance = await mongoose.connect(
    "mongodb+srv://skraj703345_db_user:Sje6K85IpMCllvEA@mycluster.ewqxg1g.mongodb.net/",
  );

  console.log(connectionInstance.connection.host);
})();

// schema = data definition (DDL)
const userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

//create collection
const userCollection = mongoose.model("User", userSchema);

const app = express();
app.use(express.json());

// create API
app.post("/create-user", async (req, res) => {
  //   console.log(req.body);
  //   res.send("hello, my name is sachin");
  const userData = req.body;
  const createdUser = await userCollection.create(userData);
  res.send({
    createdUser: createdUser,
  });
});

// read all documents api
app.get("/get-all-users", async (req, res) => {
  const users = await userCollection.find();
  res.send(users);
});

// read single document api
app.get("/get-single-user", async (req, res) => {
  const user = await userCollection.findOne();
  res.send(user);
});

// update user
app.put("/update-user", async (req, res) => {
  console.log(req.query);
  const updateUser = await userCollection.findByIdAndUpdate(
    req.query,
    req.body,
    { new: true },
  );
  res.send({
    updateUser,
  });
});

// delete user
app.delete("/delete-user", async (req, res) => {
  const deletedUser = await userCollection.findByIdAndDelete(req.query);
  res.send({
    deletedUser,
  });
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
