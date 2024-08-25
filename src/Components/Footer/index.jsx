import React from "react";
import { useOutletContext } from "react-router-dom";

function Footer() {

  const theme = useOutletContext();
  return (
    <div className={`${
        theme == true ? "bg-[#dde7c7]" : "bg-[#001824]"
      } flex items-center justify-between h-10 mt-10 absolute bottom-0 w-full`}>
      <h2 className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      } font-sans md:text-[16px] text-[8px] text-[#023047] ml-16`}>
        @Countries API | All rights reserved
      </h2>
      <h2 className={`${
        theme == true ? "text-[#003047]" : "text-[#dde7c7]"
      } font-sans md:text-[16px] text-[8px] text-[#023047] mr-16 cursor-pointer`}>
        Terms & Conditions | Privacy Policy
      </h2>
      
    </div>
  );
}

export default Footer;
