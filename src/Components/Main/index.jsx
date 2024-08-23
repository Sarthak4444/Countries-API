import React from "react";

import { useState, useEffect } from "react";

import Search from "../Search";
import Dropdown from "../Dropdown";
import Card from "../Card";


function Main() {
  const [query, setQuery] = useState("");
  const [AllCountries, setAllCountries] = useState([]);
  const [region, setRegion] = useState("");


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  }, []);

  function handleInput(value) {
    setQuery(value);
  }

  function handleChange(value) {
    setRegion(value);
  }

  if (AllCountries.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const countryArray = AllCountries.filter(
    (country) => region === "" || country.region === region
  ).filter((country) => country.name.common.toLowerCase().includes(query))
    .map((country) => (
      <Card
        key={country.cca3}
        Name={country.name.common}
        Population={country.population}
        Region={country.region}
        Capital={country.capital?.[0]}
        Flag={country.flags.svg}
        Timezone={country.timezones?.[0]}
        Data={country}
      />
    ));

  return (
    <div className="max-w-[1100px] m-auto">
      <div className="flex items-center justify-between flex-col p-12 md:flex-row">
        <Search onInput={handleInput} />
        <Dropdown onChange={handleChange} />
      </div>
      <div>{countryArray}</div>
    </div>
  );
}

export default Main;
