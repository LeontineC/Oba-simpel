import React, { useContext } from "react";
import { FontContext } from "./FontContext";

const Navbar = () => {
  
  const [fontSize, setFontSize] = useContext(FontContext);

  return (
    <>
      <div>
        <button onClick={() => setFontSize(fontSize + 2)}>bigger</button>
        <button onClick={() => setFontSize(fontSize - 2)}>smaller</button>
    </div>
    </>
  );
};

export default Navbar;
