import React, { useState, useEffect } from "react";

export const Loader = () => {
  // An array of messages to cycle through, each with its own duration in milliseconds
  const messages = [
    { text: "Fetching the quiz...", duration: 5000 },
    { text: "Constructing the experience...", duration: 8000 },
    { text: "Almost there...", duration: 7000 },
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    // This function handles the logic for advancing to the next message
    const cycleMessages = () => {
      const nextIndex = (messageIndex + 1) % messages.length;
      setMessageIndex(nextIndex);
    };

    // Get the duration for the current message
    const currentDuration = messages[messageIndex].duration;

    // Set a timeout to call the function after the current message's duration
    timeoutId = setTimeout(cycleMessages, currentDuration);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [messageIndex, messages]); // Re-run the effect whenever the messageIndex changes

  return (
    <div className="flex flex-col items-center justify-center text-white">
      {/* Slower spinning with 2.5s duration */}
      <div className="h-8 w-8 animate-spin-slow rounded-full border-4 border-gray-400 border-t-white"></div>
      <p className="mt-4 text-xl font-medium tracking-wide">
        {messages[messageIndex].text}
      </p>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 1s linear infinite;
        }
      `}</style>
    </div>
  );
};
