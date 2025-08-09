import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { BiFilter } from "react-icons/bi";
import FilterIcon from "./FilterIcon";

const topics = [
  "World History",
  "Science & Nature",
  "Geography",
  "Technology",
  "Anime",
  "Biology",
  "Physics",
  "Chemistry",
  "Quantum Mechanics",
  "Computer",
  "Machine Learning",
];
const levels = ["Easy", "Medium", "Hard"];
const questions = ["5", "10", "15", "20"];
const timers = ["30s", "60s", "90s"];

export default function FilterMenu({ setFilters, showFilters }) {
  const [topic, setTopic] = useState(null);
  const [level, setLevel] = useState(null);
  const [question, setQuestion] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    setFilters({
      topic,
      level,
      question,
      timer,
    });
  }, [topic, level, question, timer, setFilters]);

  if (showFilters) {
    return (
      <>
        <div className="flex gap-4 justify-center mb-4">
          <p className="mt-1"> Topic: </p>
          <Dropdown options={topics} setValue={setTopic} />

          <p className="mt-1"> Difficulty: </p>
          <Dropdown options={levels} setValue={setLevel} />
          <p className="mt-1"> Questions: </p>
          <Dropdown options={questions} setValue={setQuestion} />
          <p className="mt-1"> Timer: </p>
          <Dropdown options={timers} setValue={setTimer} />
        </div>
      </>
    );
  }
}
