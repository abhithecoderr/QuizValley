// index.js
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const mongoURI = process.env.DB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("welcome to backend ");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
