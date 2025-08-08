import { useEffect, useRef, useState } from "react";

const ChevronDown = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const customOptions = [
  "Web Development",
  "AI & ML",
  "Cybersecurity",
  "Cloud Computing",
];

const Dropdown = ({
  setValue,
  options= [],
  placeholder = "Any",
  className = "min-h-[50px]",
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isVisible]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setValue(option);
    setIsVisible(false);
  };

  return (
    <div className={`relative w-36 ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className={`inline-flex w-full items-center justify-between rounded-md border border-gray-300 bg-white p-2 text-md font-medium text-gray-700 outline-none hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
          !options.length ? "cursor-not-allowed text-gray-400" : ""
        }`}
        aria-expanded={isVisible}
        aria-controls="dropdown-menu"
        disabled={!options.length}
      >
        {selectedOption || placeholder}
        <span
          className={`transform transition-transform duration-200 ${
            isVisible ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>

      {isVisible && options.length > 0 ? (
        <ul
          id="dropdown-menu"
          role="menu"
          className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-lg"
        >
          {options.map((option) => (
            <li key={option}>
              <button
                role="menuitem"
                tabIndex={0}
                aria-selected={selectedOption === option}
                onClick={() => handleOptionClick(option)}
                className="w-full cursor-pointer px-4 py-2 text-left text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:bg-blue-100 focus:text-blue-700 focus:outline-none"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        isVisible && (
          <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white p-3 text-sm text-gray-500">
            No options available
          </div>
        )
      )}
    </div>
  );
};

export default Dropdown;
