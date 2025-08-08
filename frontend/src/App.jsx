import { useEffect, useState, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Input } from "./components/Input";
import { main } from "./services/prompt";
import QuizBox from "./components/QuizBox";
import { Loader } from "./components/Loader";
import Filters from "./components/Filters";

function App() {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [showFilters, setshowFilters] = useState(false);

  const promptValue = useRef(null);

  const promptHandler = async (prompt) => {
    if (prompt.trim()) {
      console.log(prompt);
    }
    setLoading(true);
    const llmResponse = await main(prompt, filters);
    setOutput(llmResponse);
    setLoading(false);
  };

  useEffect(() => {
    if (filters.topic) {
      promptValue.current.value = filters.topic;
    } else {
      promptValue.current.value = '';
    }
  }, [filters.topic]);
  return (
    <>
      <div>
        <Navbar />
        <Input promptHandler={promptHandler} promptValue={promptValue} setshowFilters={setshowFilters}/>
        <Filters setFilters={setFilters} showFilters={showFilters} />

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
