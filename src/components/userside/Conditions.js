import React from "react";
import GuideModal from "./guideModal";

const Conditions = () => {
  return (
    <div>
      <div className="content">
        <div className="workblock" id="investments">
          <div className="wrap">
            <div className="dashtop"></div>
            <h2
              style={{ margin: 0 }}
              data-scroll="toggle(.fromTopIn, .fromTopOut)"
            >
              Investment conditions
              <small>
                the <span className="gt">best</span> market offer
              </small>
            </h2>
            <div className="macbackblock">
              <div className="macblock">
                {/* <div className="macback">
                  <a
                    href="#"
                    className="macbackwrap"
                    target="_blank"
                  >
                    <span className="macblockdesc">Video exploration</span>
                    <img src="img/play3860.png?v=1" alt="" />
                    <u>Click to watch</u>
                  </a>
                </div> */}
                <div
                  className="macblockline"
                  data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
                >
                  Working only with <img src="img/tron.png" alt="" />{" "}
                  <b>TRON (TRX)</b> network
                  {/* <a
                    href="#"
                    className="blocklinea question"
                    data-remodal-target="tron"
                  >
                    {" "}
                    <i className="fas fa-question-circle"></i>
                  </a> */}
                </div>

                <div
                  className="macblockline"
                  data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
                >
                  Minimal deposit: <b>50 TRX</b>
                </div>
                <div
                  className="macblockline"
                  data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
                >
                  Total income: <b>330%</b> (deposit included)
                  {/* <a href="calculation.html" className="blocklinea question">
                    <i className="fas fa-question-circle"></i>
                  </a> */}
                </div>
                <div
                  className="macblockline"
                  data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
                >
                  Earnings <b>every moment</b>, withdraw any time{" "}
                </div>
              </div>
              <div className="workdescblock">
                {/* <div
                  className="workdesc"
                  data-scroll="toggle(.fromRightIn, .fromRightOut)"
                >
                  <div className="workdescpre">
                    <i className="fas fa-layer-plus"></i> Basic interest rate:
                  </div>
                  <div className="workdesctitle">
                    +1% every 24 hours (+0.0416% hourly){" "}
                  </div>
                  TronUnited smart-contract calculate profit up to every deposit
                  since the date it was made. Every hour you will get{" "}
                  <b>+0.0416%</b>, every day <b>+1%</b>.
                </div> */}
                <div
                  className="workdesc"
                  data-scroll="toggle(.fromRightIn, .fromRightOut)"
                  style={{ marginTop: 20 }}
                >
                  {/* <div className="workdescpre">
                    <i className="fas fa-layer-plus"></i> Personal hold-bonus:
                  </div>
                  <div className="workdesctitle">
                    +0.1% for every 24 hours without withdraw{" "}
                  </div> */}
                  TronUnited smart-contract calculate profit up to every deposit
                  since the date it was made.
                </div>
                <div>
                  <a href="#" className="guide-button" data-remodal-target="guide">
                    <i className="far fa-bullhorn"></i> Guide
                  </a>
                </div>
                {/* <div
                  className="workdesc"
                  data-scroll="toggle(.fromRightIn, .fromRightOut)"
                >
                  <div className="workdescpre">
                    <i className="fas fa-layer-plus"></i> Contract total amount
                    bonus:
                  </div>
                  <div className="workdesctitle">
                    +0.1% for every 1,000,000 TRX on platform balance{" "}
                  </div>
                  Smart-contract check its current balance and charge an
                  additional <b>+0.1%</b> up to your earnings for every
                  1,000,000 TRX on balance.
                  <br />
                  <b>
                    CURRENT BONUS: +
                    <span className="contractBalanceRateMain">2.5</span>%
                  </b>
                </div> */}
                {/* <div
                  className="totalsumdesc"
                  data-scroll="toggle(.fromRightIn, .fromRightOut)"
                >
                  Current platform balance (TRX):
                </div>
                <div
                  className="totalsumnum trxbalance contractBalance"
                  data-max="25089806"
                  data-scroll="toggle(.fromRightIn, .fromRightOut)"
                ></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="remodal" data-remodal-id="guide">
        <GuideModal />
      </div>
    </div>
  );
};

export default Conditions;
