import express from "express";
import { quizController } from "../controllers/quizController.js";

export const quizRouter = express.Router();

quizRouter.post("/", quizController);
