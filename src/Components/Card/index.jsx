import React from "react";
import {Link, useOutletContext} from "react-router-dom"


function Card(props) {
    const theme = useOutletContext()

    const {Name, Population, Region, Capital, Flag, Timezone} = props || {};

  return (
    <Link to={`/country?name=${Name}`}>
      <div className= {`${
        theme == true ? "bg-[#dde7c7]" : "bg-[#003047]"
      } shadow-lg shadow-gray-400 border-none  hover:scale-[1.02] hover:cursor-pointer transition-all rounded-xl m-10 p-6 flex flex-row items-center`}>
       <img className="w-96 h-56 mr-16" src={Flag} alt="Country Flag" />
       <div>
         <h3 className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      } text-4xl font-bold font-sans mb-6 `}>{Name}</h3>
         <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
           <b>Population: </b>{Population}
         </p>
         <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
           <b>Region: </b>{Region}
         </p>
         <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
           <b>Capital: </b>{Capital}
         </p>
         <p className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      }`}>
           <b>Timezone: </b>{Timezone}
         </p>
        
       </div>
    </div>
    </Link>
  );
}

export default Card;
