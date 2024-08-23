import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);
 
  const handleClick = () => {
    setTheme(theme === true ? false : true);
  };
  return (
    <>
      <Header  onClick={handleClick} theme={theme}/>
      <div className={`${
        theme === true ? "bg-white" : "bg-[#003d5c]"
      }`}>
      <Outlet context={theme}/>
      </div>
    </>
  );
}

export default App;
