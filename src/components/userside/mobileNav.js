import React from "react";
import MakeNewDeposit from "./MakeNewDeposit";
import WalletStatistic from "./WalletStatistic";
import { Link } from "react-router-dom";
import './userStyles.scss';
// import logo from "../../assets/mobileLogo.png";
import logo from "../../assets/logo.jpg";
const MobileNavbar = () => {

  return (
    <div>
      <div
        className="nav-header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 51,
        }}
      >
        <div style={{ paddingLeft: 15, paddingTop: 5, paddingBottom: 5 }}>
          <Link to="/" className="mainlogo">
            <img
              src={logo}
              alt=""
              style={{
                width: "100px",
                height: "100px",
                marginTop: 10,
                marginBottom: 10,
                borderRadius:50
              }}
            />
          </Link>
        </div>
        <div style={{ marginTop: 10, marginBottom: 15 }}>
          <a
            href="https://t.me/tronforeverofficial"
            target="_blank"
          >
            <i className="fab fa-telegram-plane"></i>Telegram
          </a>
        </div>
        <div style={{ paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
          <a href="" data-remodal-target="invest" className="style-top">
            <i className="far fa-donate"></i> Make deposit
          </a>
          <a
            href="#"
            data-remodal-target="wallet"
            id="goToWallet"
            className="style-top"
          >
            <i className="far fa-wallet"></i> Wallet statistic
          </a>
        </div>
      </div>
      {/* <div id="navbar-background-color" className="cbp-af-header">
        <div className="cbp-af-inner">
          <nav>
            <Link to="/" className="mainlogo">
              <img src="img/logo.png" alt="" />
            </Link>
           
          </nav>
        </div>
      </div> */}

      {/* Make Deposits */}
      <div className="remodal" data-remodal-id="invest">
        <MakeNewDeposit />
      </div>
      {/* Wallet Statistics */}
      <div className="remodal" data-remodal-id="wallet">
        <WalletStatistic />
      </div>
    </div>
  );
};

export default MobileNavbar;
