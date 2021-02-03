import React from "react";
import image from "../../assets/header.png";
import pdf from "../../assets/tron.pdf";

const MobileLogo = () => {
  return (
    <div>
      <div className="content">
        <div className="mainback">
          <div className="wrap">
            <div className="mainscreen">
              <div className="mainbackwrap">
                <div data-offset="30" className="mainphone parallax">
                  <img src={image} />
                </div>
                <div className="dash1"></div>
                <div className="dash2"></div>
                <div className="dash3"></div>
                <div className="dash4"></div>
                {/* <div className="perfection">perfection in details</div> */}
              </div>
              <div className="mainbackwrap">
                <div
                  className="mainbackdesc"
                  data-scroll="toggle(.fromRightIn, .fromRightOut)"
                >
                  <h1>Reliable investments with</h1>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <img src="img/tron_full.png" className="mainico" />
                    <span
                      style={{
                        fontSize: 41,
                        fontWeight: "bold",
                        paddingLeft: 10,
                      }}
                    >
                      TRON
                    </span>
                  </span>
                  <h1>
                    Earn <span>330%</span> in <span>30</span> Days
                  </h1>
                  <div className="maindesc">
                    <div className="maindesctext">
                      <span>
                        <i className="far fa-check-circle"></i> Blockchain
                        decentralized and anonymous platform
                      </span>
                      <span>
                        <i className="far fa-check-circle"></i> Totally secure
                        income based on <img src="img/tron_full.png" alt="" />{" "}
                        TRX smart-contract
                      </span>
                      <span>
                        <i className="far fa-check-circle"></i> Smart-contract
                        verified and audited by independent company
                      </span>
                      <a
                        href="#"
                        data-remodal-target="invest"
                        className="maindescbut"
                      >
                        Make investment now!
                      </a>
                      <div className="maindesclink">
                        <a
                          href="https://tronscan.org/#/contract/TVtXqBfiQNmYngss3LU99g3ANKvbjP97C2/code"
                          className="maindesclink"
                          target="_blank"
                        >
                          <i className="fas fa-print-search"></i> Check Tronforever
                          smart-contract
                        </a>
                      </div>
                      <div className="maindesclink">
                        <a
                          href={pdf}
                          className="maindesclink changeColor"
                          target="_blank"
                        >
                          <i className="fas fa-print-search"></i>Download pdf Guide
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLogo;
