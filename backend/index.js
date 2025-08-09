// index.js
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { quizRouter } from "./routes/quizRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
const mongoURI = process.env.DB_URI;

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("welcome to backend ");
});

app.use(quizRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
