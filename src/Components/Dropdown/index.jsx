import React from "react";
import { useOutletContext } from "react-router-dom";

function Dropdown({ onChange = () => {}, value } = {}) {
  let theme = useOutletContext();

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    
      <select
        value={value}
        onChange={handleChange}
        className={`ursor-pointer bg-transparent w-[250px] text-gray-30000 p-4 border-[1px] border-gray-300 outline-none shadow-md rounded-md text-text-color`}
      >
        <option hidden>Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
   
  );
}

export default Dropdown;
