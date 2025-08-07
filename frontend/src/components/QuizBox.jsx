import { useState } from "react";

function QuizBox({ output }) {
  const [currQues, setcurrQues] = useState(0);
  const [showFeedback, setshowFeedback] = useState(null);
  const [userScore, setuserScore] = useState(0);
  const [optionClasses, setOptionClasses] = useState({});

  const handleOptionClick = (opt) => {
    if (showFeedback) return;

    const correct = output[currQues].ans === opt;
    setshowFeedback(true);

    if (correct) {
      setuserScore((prev) => prev + 1);
      setOptionClasses({
        [opt]: "bg-green-700 hover:bg-green-700",
      });
    } else {
      const correctAns = output[currQues].ans;
      setOptionClasses({
        [opt]: "bg-red-600 hover:bg-red-600",
        [correctAns]: "bg-green-700 hover:bg-green-700",
      });
    }
  };

  const handleNext = () => {
    setshowFeedback(false);
    setcurrQues((prev) => prev + 1);
    setOptionClasses({}); // Reset classes for the next question
  };

  if (currQues >= output.length) {
    return (
      <div className="mx-auto my-12 max-w-2xl rounded-2xl bg-slate-800 p-8 shadow-2xl">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Quiz completed
        </h2>
        <p className="text-center text-xl font-bold text-yellow-300">{`Your final score: ${userScore} / ${output.length}`}</p>
      </div>
    );
  }

  const q = output[currQues];
  const correctAns = output[currQues].ans;

  return (
    <div className="mx-auto my-12 max-w-2xl rounded-2xl bg-slate-800 p-8 shadow-2xl">
      <h2 className="mb-6 text-xl font-semibold leading-relaxed text-white">{`${
        currQues + 1
      }. ${q.ques}`}</h2>
      {q.options.map((opt) => (
        <button
          key={opt}
          className={`mb-3 w-full cursor-pointer rounded-xl border-none p-4 text-left text-xl text-white transition-colors duration-300 ${
            optionClasses[opt] || "bg-slate-600 hover:bg-slate-500"
          }`}
          onClick={() => handleOptionClick(opt)}
          disabled={showFeedback}
        >
          {opt}
        </button>
      ))}

      {showFeedback && (
        <div className="mt-4 text-lg">
          {optionClasses[correctAns] === "bg-green-700 hover:bg-green-700" ? (
            <p className="text-green-500">Correct answer! 🎉</p>
          ) : (
            <p className="text-red-400">{`Wrong. The correct answer is: ${correctAns}`}</p>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xl font-bold text-yellow-300">{`Score: ${userScore}`}</div>
        {showFeedback && (
          <button
            className="mt-6 cursor-pointer rounded-lg border-none bg-teal-800 px-6 py-2 text-xl text-white transition-colors duration-300 hover:bg-teal-600"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizBox;
