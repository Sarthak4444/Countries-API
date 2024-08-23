import React from "react";
import { Link } from "react-router-dom";

function Header( { onClick = () => {} , theme} = {} ) {

  function handleClick() {
    onClick()
  }


  return (
    <div
      className={` ${
        theme === true ? "bg-[#ccd5ae]" : "bg-[#001824]"
      } flex items-center z-10 justify-between h-20 shadow-lg sticky top-0`}
    >
      <Link to="/">
        <h2
          className={`${
            theme === true ? "text-[#001824]" : "text-[#ccd5ae]"
          } text-4xl font-bold font-sans  ml-10`}
        >
          Around the World
        </h2>
      </Link>
      <button
        onClick={handleClick}
        className={`${
          theme === true ? "text-[#001824]" : "text-[#ccd5ae]"
        } text-xl mr-10`}
      >
        <i className={`fa-regular ${
          theme === true ? "fa-moon" : "fa-sun"
        }`}></i>&nbsp;&nbsp;Theme
      </button>
    </div>
  );
}

export default Header;
