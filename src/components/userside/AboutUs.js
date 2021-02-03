import React from "react";
import { useSelector } from "react-redux";
import TronHelper from "./utils/TronHelper";

const DoubleFunds = () => {
  const [tronWeb, setTronWeb] = React.useState();

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  const {
    investedAmount,
    overAllInvested,
    totalParticipants,
    totalDividends,
  } = useSelector((state) => ({
    investedAmount: state.newReducer.investedAmount,
    overAllInvested: state.newReducer.overAllInvested,
    totalParticipants: state.newReducer.totalParticipants,
    totalDividends: state.newReducer.totalDividends,
  }));

  // console.log("here is the invested amount", investedAmount);

  return (
    <div>
      <div className="content">
        <div className="mainabout" id="about">
          <div className="wrap">
            <h2 data-scroll="toggle(.fromTopIn, .fromTopOut)">
              We will <span className="gt">Grow</span> your funds{" "}
              <small>without any risks</small>
            </h2>
            <div className="mainaboutitemsblock">
              <div className="aboutdashtop"></div>
              <div className="aboutdashbottom"></div>
              <div className="aboutdashleft"></div>
              <div className="aboutdashright"></div>
              <div
                className="mainaboutitem aboutitemgrad1"
                data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
              >
                <h3 className="growth-heading">Constantly Growing Earnings</h3>
                <span style={{ color: "white" }}>
                  We provide investment conditions that necessitate growth of
                  your investment. Maximum available profits + 330% every 30
                  days. bonus and personal "hold-bonus". Maximal available
                  profit.
                </span>
                <br />
                {/* <b>+200% per every deposit</b>{" "} */}
              </div>
              <div
                className="mainaboutitem aboutitemgrad2"
                data-scroll="toggle(.fromRightIn, .fromRightOut)"
              >
                <h3 className="world-wide-head">
                  Worldwide legal company with professional team
                </h3>
                <span style={{ color: "white" }}>
                  We are the officially registered company with team of trusted
                  professionals on blockchain market. We are working 24/7 to
                  increase platform popularity and make it truly worldwide.
                </span>
                <br />
                <b>Join us and get your profit!</b>{" "}
              </div>
              <div className="mainaboutitem2 aboutitemgrad">
                <img src="img/logo.jpg" style={{ width: 100, height: 100, borderRadius: 50}} />
                <h3 style={{ color: "#FDDE61" }}>
                  Reliability of TRX smart-contract.
                  <br />
                  Scam is impossible!
                </h3>
                <span style={{ color: "white" }}>
                  Smart-contract technology ensures full safety of all
                  participants funds. Nobody can steal funds, or change contract
                  functions.
                </span>
              </div>
            </div>
            <div className="totalsumblock">
              <div
                className="totalsumwrap"
                style={{ width: "100%" }}
                data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
              >
                <div className="totalsumwrapvalue">
                  <div className="totalsumdesc" style={{ fontWeight: "bold" }}>
                    Total invested amount (TRX):
                  </div>
                  {tronWeb && tronWeb.ready ? (
                    <div
                      className="totalsumnum totalInvested"
                      // data-max={}
                    >
                      {overAllInvested ? `${overAllInvested}` : "0"}
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="trxWallet"
                      style={{
                        marginTop: 20,
                        marginBottom: 10,
                        height: "40px",
                        lineHeight: "40px",
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: "10px",
                        boxShadow: "inset 0 0 50px #1b1b1b",
                        color: "#fff",
                        padding: "0 10px",
                        fontSize: "18px",
                        fontWeight: 300,
                        border: "none",
                        paddingLeft: 70,
                        paddingRight: 70,
                      }}
                      placeholder="Connect with your wallet app..."
                      readOnly
                    />
                  )}

                  <div className="totalsumdesc" style={{ fontWeight: "bold" }}>
                    Total Participants:
                  </div>
                  {tronWeb && tronWeb.ready ? (
                    <div
                      className="totalsumnum totalInvested"
                      // data-max={}
                    >
                      {totalParticipants ? `${totalParticipants * 3}` : "0"}
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="trxWallet"
                      style={{
                        marginTop: 20,
                        marginBottom: 10,
                        height: "40px",
                        lineHeight: "40px",
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: "10px",
                        boxShadow: "inset 0 0 50px #1b1b1b",
                        color: "#fff",
                        padding: "0 10px",
                        fontSize: "18px",
                        fontWeight: 300,
                        border: "none",
                        paddingLeft: 70,
                        paddingRight: 70,
                      }}
                      placeholder="Connect with your wallet app..."
                      readOnly
                    />
                  )}

                  <div className="totalsumdesc" style={{ fontWeight: "bold" }}>
                    Total Withdrawn (TRX):
                  </div>
                  {tronWeb && tronWeb.ready ? (
                    <div
                      className="totalsumnum totalInvested"
                      // data-max={}
                    >
                      {totalDividends ? `${totalDividends}` : "0"}
                    </div>
                  ) : (
                    <input
                      type="text"
                      className="trxWallet"
                      style={{
                        marginTop: 20,
                        marginBottom: 10,
                        height: "40px",
                        lineHeight: "40px",
                        backgroundColor: "rgba(0,0,0,.3)",
                        borderRadius: "10px",
                        boxShadow: "inset 0 0 50px #1b1b1b",
                        color: "#fff",
                        padding: "0 10px",
                        fontSize: "18px",
                        fontWeight: 300,
                        border: "none",
                        paddingLeft: 70,
                        paddingRight: 70,
                      }}
                      placeholder="Connect with your wallet app..."
                      readOnly
                    />
                  )}
                </div>

                {/* <div className="totalsumwrapvalue">
                  <div className="totalsumdesc">Total active participants:</div>
                  <div className="totalsumnum totalUsers" data-max="19702"></div>
                </div> */}
              </div>
              {/* <div
                className="totalsumwrap"
                data-scroll="toggle(.fromRightIn, .fromRightOut)"
              >
                <div className="maincompanydesc">
                  Officially registered company:
                  <div className="maincompany">TRONFOREVER LTD</div>
                  Company number:
                  <div className="maincompany">#12739027</div>
                  Company address:
                  <div className="maincompany">
                    5 Fleet Place, London
                    <br />
                    England, EC4M 7RD
                  </div>
                </div>
                <div className="certimgwrap">
                  <div className="serdash"></div>
                  <img src="img/certificate.jpg" className="certimg" alt="" />
                </div>
                <div className="maincertbtn">
                  <a
                    href="img/certificate.pdf"
                    className="maindescbut"
                    target="_blank"
                  >
                    <i className="fas fa-search-location"></i> Check certificate
                  </a>
                  <a
                    href="https://beta.companieshouse.gov.uk/company/12739027"
                    className="maindescbut"
                    target="_blank"
                  >
                    <i className="fas fa-search-location"></i> Check company status
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleFunds;
