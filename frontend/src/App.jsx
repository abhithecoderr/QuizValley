import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Input } from "./components/Input";
import { main } from "./services/prompt1";
import QuizBox from "./components/QuizBox";
import { Loader } from "./components/Loader";

function App() {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);

  const promptHandler = async (prompt) => {
    if (prompt.trim()) {
      console.log(prompt);
    }
    setLoading(true);
    const llmResponse = await main(prompt);
    setOutput(llmResponse);
    setLoading(false);
  };
  return (
    <>
      <div>
        <Navbar />
        <Input promptHandler={promptHandler} />
        {loading && <Loader />}

        {output && output.length > 0 && (
          <div>
            <QuizBox output={output} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
