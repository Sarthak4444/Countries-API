import React from "react";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";


export default function Details() {
  const theme = useOutletContext();
  const [details, setDetails] = useState({});

  const CountryName = new URLSearchParams(window.location.search).get("name");

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${CountryName}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);


  return (
    <>
      <div className="flex md:flex-row flex-col items-center  h-[87vh] lg:pl-40 pl-14">
        <img
          className="md:w-[30rem] md:h-[20rem] my-10 mr-10 w-[15rem] h-[10rem]"
          src={details[0]?.flags.svg}
          alt="Country Flag"
        />
        <div>
          <h1 className={` ${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      } text-4xl font-bold font-sans mb-6`}>
            {details[0]?.name.common}
          </h1>
          <div>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Native Name: </b>
              <span>{details[0]?.name.official}</span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Population: </b>
              <span>{details[0]?.population}</span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Region: </b>
              <span>{details[0]?.region}</span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}> 
              <b>Sub Region: </b>
              <span>{details[0]?.subregion}</span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Capital: </b>
              <span>{details[0]?.capital}</span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Top Level Domain: </b>
              <span>{details[0]?.tld[0]}</span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Currencies: </b>
              <span>
                {
                  details[0]?.currencies[Object.keys(details[0]?.currencies)[0]]
                    ?.name
                }
              </span>
            </p>
            <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
              <b>Languages: </b>
              <span>
                {details[0]?.languages[Object.keys(details[0]?.languages)[0]]}
              </span>
            </p>
          </div>
          <div className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
            <b>Border Countries: </b>&nbsp;
            {details[0]?.borders?.length > 0 ? (
              details[0].borders.map((border) => (
                <span key={border}> {border} </span>
              ))
            ) : (
              <span>No border countries</span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
