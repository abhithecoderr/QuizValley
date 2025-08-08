import React, { useState } from "react";

export default function FilterIcon({ onClick }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    
      <button
        onClick={handleClick}
        aria-label="Filter"
        className={`
        px-4 py-0 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500
        hover:bg-gray-100 dark:hover:bg-gray-700
        transition duration-100 ease-in-out transform
        ${
          active
            ? "text-blue-600 scale-105"
            : "text-gray-700 dark:text-gray-300"
        }
      `}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          {/* Three equal horizontal lines */}
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>
  
  );
}
