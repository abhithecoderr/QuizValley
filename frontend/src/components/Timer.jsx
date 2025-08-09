import { useEffect, useState } from "react";

export const Timer = ({isActive, seconds, setEndQuiz}) => {

  const[duration, setDuration] = useState(seconds);
  console.log(seconds);
  
  useEffect(() => {

    if(!isActive) return
    
    if(duration<=0) {
      setEndQuiz(true);
      return;
    }

    const intervalId = setInterval(() => setDuration((prev) => prev - 1), 1000);

    return ()=> clearInterval(intervalId)
  }
  ,
  [duration, isActive, setEndQuiz]);

  return (
    <>
      <h1> {duration}</h1>
    </>
  );
};
