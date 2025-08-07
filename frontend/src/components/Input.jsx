import { useRef } from "react";

export const Input = ({promptHandler}) => {

  const inputPrompt = useRef('');

  const handleClick = ()=> {
    promptHandler(inputPrompt.current.value);
  }

  return (
    <>
      <div className="m-12 flex justify-center">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            name="input"
            ref={inputPrompt}
            placeholder="Generate a quiz on any topic with AI"
            className="w-full px-4 py-3 pr-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-900 dark:text-white dark:placeholder-gray-300 dark:border-gray-700"
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
      </div>
    </>
  );
};
