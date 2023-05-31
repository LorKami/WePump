import React from "react";
import "./navbar.css";

import Logo from "../../images/lg.png";
import MyLaunch from "../../images/mylaunch.png";
import Twitter from "../../images/twitter.png";
import MintButton from "../../images/MintButton.png";


const Navbar = () => {
  return (
    <div>

      <div className="SuperNavbar">
        <div className="ContainerNav">
          <div className="LogoNavbar">
            <a href=""><img src={Logo} /></a>
          </div>
            <div className="ImgeNavbar">
              <a href="https://www.launchmynft.io/" target="_blank"><img src={MyLaunch} /></a>
              <a href="https://twitter.com/WePump_" target="_blank"><img src={Twitter} /></a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
