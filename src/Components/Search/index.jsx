import React from "react";
import { useOutletContext } from "react-router-dom";

function Search({ onInput = () => {}, value } = {}) {
  let theme = useOutletContext();
  function handleInput(e) {
    onInput(e.target.value);
  }

  return (
    <div
      className={`${
        theme === true ? "text-[#001824]" : "text-[#ccd5ae]"
      }shadow-md max-w-[350px] w-full rounded-md border-[1px] border-gray-300 pl-6  overflow-hidden bg-elements-color border-1`}
    >
      <i className="fa-solid fa-magnifying-glass "></i>
      <input
        onInput={handleInput}
        value={value}
        className="border-none outline-none p-4 w-[90%] bg-inherit text-inherit"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Search;
