import { useEffect, useState, useRef } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { Input } from "../components/Input";
import { main } from "../services/prompt";
import QuizBox from "../components/QuizBox";
import { Loader } from "../components/Loader";
import FilterMenu from "../components/FilterMenu";
import { Timer } from "../components/Timer";

function Home() {
  const [output, setOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [showFilters, setshowFilters] = useState(false);

  const promptValue = useRef(null);

  const promptHandler = async (prompt) => {
    if (prompt.trim()) {
      setLoading(true);
      const llmResponse = await main(prompt, filters);
      console.log(llmResponse);
      setOutput(llmResponse);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (filters.topic) {
      promptValue.current.value = filters.topic;
    } else {
      promptValue.current.value = "";
    }
  }, [filters.topic]);

  return (
    <>
      <div>
        <Input
          promptHandler={promptHandler}
          promptValue={promptValue}
          setshowFilters={setshowFilters}
        />
        <FilterMenu setFilters={setFilters} showFilters={showFilters} />

        {loading && <Loader />}

        {output && output.length > 0 && (
          <div>
            <QuizBox output={output} filters={filters} />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
