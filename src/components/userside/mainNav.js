import React from "react";
import Navbar from "./Navbar";
import MobileNav from "./mobileNav";
/**
 * @author
 * @function MainNav
 **/

const MainNav = (props) => {
  return (
    <>
      <div className="desktop_nav_bar">
        <Navbar />
      </div>
      <div className="mobile_nav_bar">
        <MobileNav />
      </div>
    </>
  );
};

export default MainNav;
