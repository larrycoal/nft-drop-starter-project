import React, { useState } from "react";
import headerLogo from "../assets/logo.png";

const Header = ({ wallet }) => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={headerLogo} height="70" alt="logo" />
        </div>
        <div className="tabs">
          <a href="#about">About Me</a>
          <a href="#how">How It Works</a>
          <span>{wallet ? wallet : "Not Connected"}</span>
        </div>
        <div className="hamburger" onClick={()=>setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className="mobile-tabs" style={{
        display: `${showMenu?'flex':'none'}`
      }}>
        <a href="#about">About Me</a>
        <a href="#how">How It Works</a>
        <span>{wallet ? wallet : "Not Connected"}</span>
      </div>
    </header>
  );
};

export default Header;
