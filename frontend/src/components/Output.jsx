import "../App.css";
import { useState } from "react";

function Output({ output }) {
  const [currQues, setcurrQues] = useState(0);
  const [isCorrect, setisCorrect] = useState(null);
  const [showFeedback, setshowFeedback] = useState(null);
  const [userScore, setuserScore] = useState(0);
  // optionColor will now be an object mapping options to their status
  const [optionColor, setOptionColor] = useState({});

  const handleOptionClick = (opt) => {
    // Only allow one click per question
    if (showFeedback) return;

    const correct = output[currQues].ans === opt;
    setisCorrect(correct);
    setshowFeedback(true);

    if (correct) {
      setuserScore((prev) => prev + 1);
      // Set the color for the clicked option and the correct answer
      setOptionColor({ [opt]: "correct" });
    } else {
      // Set the clicked option to 'wrong' and the correct one to 'correct'
      const correctAns = output[currQues].ans;
      setOptionColor({
        [opt]: "wrong",
        [correctAns]: "correct",
      });
    }
  };

  const handleNext = () => {
    setisCorrect(null);
    setshowFeedback(false);
    setcurrQues((prev) => prev + 1);
    // Clear the option colors for the next question
    setOptionColor({});
  };

  if (currQues >= output.length) {
    return (
      <div className="quiz-container">
        <h2>Quiz completed</h2>
        <p className="score-text">{`Your final score: ${userScore} / ${output.length}`}</p>
      </div>
    );
  }

  const q = output[currQues];
  const correctAns = output[currQues].ans;

  return (
    <div className="quiz-container">
      <h2>{`${currQues + 1}.        ${q.ques}`}</h2>
      {q.options.map((opt) => (
        <button
          key={opt} // Always use a key for lists in React
          className={`option ${optionColor[opt] || ""}`}
          onClick={() => handleOptionClick(opt)}
          disabled={showFeedback} // Disable buttons after an answer is selected
        >
          {opt}
        </button>
      ))}

      {showFeedback && (
        <div className="feedback">
          {isCorrect ? (
            <p className="correct-msg">Correct answer!</p>
          ) : (
            <p className="wrong-msg">{`Wrong. Correct answer is: ${correctAns}`}</p>
          )}
        </div>
      )}

      <div className="quiz-footer">
        <div className="score-text">{`Score: ${userScore}`}</div>

        {showFeedback && (
          <button className="next-btn" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Output;
