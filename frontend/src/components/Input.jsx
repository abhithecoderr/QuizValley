import { useRef, useState } from "react";
import FilterIcon from "./FilterIcon";

export const Input = ({ promptHandler, promptValue, setshowFilters}) => {
  
  const handleClick = () => {
    promptHandler(promptValue.current.value);
  };

  return (
    <>
      <div className="m-12 mb-10 flex justify-center gap-4">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            name="input"
            ref={promptValue}
            placeholder="Generate a quiz on any topic with AI"
            className="w-full px-4 py-3 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#090040] dark:text-white dark:placeholder-gray-300 dark:border-gray-700"
          />

          <button
            onClick={handleClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-blue-700 rounded-sm w-fit"
            title="Generate Quiz"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </button>
        </div>
        <FilterIcon onClick={()=> setshowFilters(prev=> !prev)}/>
      </div>
    </>
  );
};
