import { getQuizArray } from "../services/getQuizArray.js";

export const quizController = async (req, res, next) => {
  
  const { prompt, filters } = req.body;

  const response = await getQuizArray(prompt, filters);

  return res.status(200).json(response);
};
