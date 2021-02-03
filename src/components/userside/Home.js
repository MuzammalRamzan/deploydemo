import React from "react";
import MainNav from "./mainNav";
import MobileLogo from "./MobileLogo";
import AboutUs from "./AboutUs";
import Conditions from "./Conditions";
import Platform from "./Platform";
import SmartContract from "./SmartContract";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import LeftSideLinks from "./LeftSideLinks";
import RightSideLinks from "./RightSideLinks";
// import Main from "../../home.component" 

const Home = () => {
  return (
    <>
    {/*  */}
      <div className="wrapper">
        {/* <LeftSideLinks/> */}
        {/* <RightSideLinks /> */}
        {/* <Main /> */}
        <MainNav />
        <div className="set_Top_padding">
          <MobileLogo />
          <AboutUs />
          <Conditions />
          <Platform />
        </div>
        {/* <SmartContract /> */}
        {/* <ContactUs /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
