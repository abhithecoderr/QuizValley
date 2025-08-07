import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Input } from "./components/Input";
import { fetchLLMResponse } from "./services/prompt";
import { main } from "./services/prompt1";
import Output from "./components/Output";

function App() {
  const [output, setOutput] = useState([]);

  const promptHandler = async (prompt) => {
    if (prompt.trim()) {
      console.log(prompt);
    }
    const llmResponse = await main(prompt);
    setOutput(llmResponse);
  };
  return (
    <>
      <div>
        <Navbar />
        <Input promptHandler={promptHandler} />

        {output && output.length > 0 && <div><Output output={output} /></div>}
      </div>
    </>
  );
}

export default App;
