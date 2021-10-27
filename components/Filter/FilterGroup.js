import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { useState } from "react";

function FilterGroup({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between font-bold text-gray-600 items-center mb-4">
        <h3>{title}</h3>
        <button onClick={handleClick} className="text-lg p-2">
          {isOpen ? <FaCaretUp /> : <FaCaretDown />}
        </button>
      </div>
      <div
        className={` transition-all duration-600	 ${
          isOpen ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterGroup;
