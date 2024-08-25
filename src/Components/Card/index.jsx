import React from "react";
import { Link, useOutletContext } from "react-router-dom";

function Card(props) {
  const theme = useOutletContext();

  const { Name, Population, Region, Capital, Flag, Timezone } = props || {};

  return (
    <Link to={`/country?name=${Name}`}>
      <div
        className={`${
          theme == true ? "bg-[#dde7c7]" : "bg-[#003047]"
        } shadow-lg shadow-gray-400 border-none  hover:scale-[1.02] hover:cursor-pointer transition-all rounded-xl m-10 p-6 flex md:flex-row flex-col items-center`}
      >
        <img
          className=" md:mr-16 mr-8 md:w-96 md:h-56 w-56 h-32"
          src={Flag}
          alt="Country Flag"
        />
        <div>
          <h3
            className={`${
              theme == true ? "text-[#003047]" : "text-[#dde7c7]"
            } md:text-4xl text-2xl font-bold font-sans mb-6 mt-5 `}
          >
            {Name}
          </h3>
          <p
            className={`${theme == true ? "text-[#003047]" : "text-[#dde7c7]"}`}
          >
            <b>Population: </b>
            {Population}
          </p>
          <p
            className={`${theme == true ? "text-[#003047]" : "text-[#dde7c7]"}`}
          >
            <b>Region: </b>
            {Region}
          </p>
          <p
            className={`${theme == true ? "text-[#003047]" : "text-[#dde7c7]"}`}
          >
            <b>Capital: </b>
            {Capital}
          </p>
          <p
            className={`${theme == true ? "text-[#003047]" : "text-[#dde7c7]"}`}
          >
            <b>Timezone: </b>
            {Timezone}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
