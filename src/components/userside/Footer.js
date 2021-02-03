import React from "react";
import { environment } from "../../environment";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="wrap">
          <div className="footerwrap">
            <div
              className="footblock"
              // style={{ display: "flex", alignItems: "center" }}
            >
              <a href="#" className="footlogo">
                <img src="img/logo.jpg" alt="" style={{borderRadius:50}}/>
              </a>
              Copyrights:
              <br />
              Tronforever LTD |{" "}
              <a href="#" style={{ color: "#FAD900" }}>
                https://tronforever.live
              </a>
              {/* <br /> */}
              Blockchain investment platform
              <br />
              2020 &copy; All Rights Reserved{" "}
            </div>
            <div className="footblock">
              Smart-contract address:
              <a
                href="https://tronscan.org/#/contract/TVtXqBfiQNmYngss3LU99g3ANKvbjP97C2/code"
                target="_blank"
                style={{ color: "#FAD900" }}
              >
                {environment.contractAddress}
              </a>
              <br />
              <br />
              Powered by <img src="img/tron.png" className="footimg" alt="" /> TRON
              blockchain{" "}
            </div>
            <div className="footblock">
              <a href="#" className="maindescbut" data-remodal-target="invest">
                <i className="far fa-donate"></i> Make deposit
              </a>
              <a href="#" className="maindescbut" data-remodal-target="wallet">
                <i className="far fa-wallet"></i> Wallet statistic
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
