import React from "react";
import PromoMaterials from "./PromoMaterials";
import { environment } from "../../environment";
import { withdrawFunct } from "../../userDataFunctions";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import TronHelper from "./utils/TronHelper";

const WalletStatistic = () => {
  const copyReferralLink = () => {
    let get = document.getElementById("refer").select();
    document.execCommand("copy");
  };

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
    daiyIncome,
    totalIncome,
    totalPayouts,
    incomeWithdraw,
    matchingBounus,
    levelone,
    levelTwo,
    levelthree,
    levelfour,
    levelfive,
    levelsix,
    levelseven,
    leveleight,
    levelnine,
    levelten,
    undrawn,
  } = useSelector((state) => ({
    investedAmount: state.newReducer.investedAmount,
    daiyIncome: state.newReducer.daiyIncome,
    totalPayouts: state.newReducer.totalPayouts,
    totalIncome: state.newReducer.totalIncome,
    incomeWithdraw: state.newReducer.incomeWithdraw,
    matchingBounus: state.newReducer.matchingBounus,
    levelone: state.newReducer.levelone,
    levelTwo: state.newReducer.levelTwo,
    levelthree: state.newReducer.levelthree,
    levelfour: state.newReducer.levelfour,
    levelfive: state.newReducer.levelfive,
    levelsix: state.newReducer.levelsix,
    levelseven: state.newReducer.levelseven,
    leveleight: state.newReducer.levelfeight,
    levelnine: state.newReducer.levelnine,
    levelten: state.newReducer.levelten,
    undrawn: state.newReducer.undrawn,
  }));

  const withdrawsuccessMessage = (message) => {
    toast.success(message);
  };

  const closeIt = (isTrue) => {
    if (isTrue) {
      document.getElementById("closeIt").click();
    }
  };

  const submitWithdrawFunction = async () => {
    if (tronWeb) {
      let getContract = await tronWeb
        .contract()
        .at(environment.contractAddress);
      if (getContract) {
        withdrawFunct(getContract, tronWeb, closeIt, withdrawsuccessMessage);
      }
    }
  };

  return (
    <>
      <div>
        {/* <ToastContainer /> */}
        <a data-remodal-action="close" className="remodal-close" id="closeIt"></a>
        <h1>Wallet Statistic</h1>

        {tronWeb && tronWeb.ready ? (
          <>
            <form className="maincontform">
              <label>
                Your <img src="img/tron.png" alt="" /> TRX wallet:
              </label>
              <input
                type="text"
                className="trxWallet"
                value={
                  tronWeb ? tronWeb.defaultAddress.base58 : "wallet address"
                }
                readOnly
              />
              <div style={{ marginTop: 20 }}>
                <i
                  className="fas fa-link"
                  style={{ fontSize: 14, color: "gray" }}
                ></i>
                <span style={{ fontSize: 14, color: "white", fontWeight: 400 }}>
                  {" "}
                  Your referral link:
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#FDDE61",
                    textDecoration: "underline",
                    // marginBottom: 4,
                    // marginTop:7,
                    lineHeight: 2,
                  }}
                >
                  {`https://tronforever.live/?ref=${tronWeb && tronWeb.defaultAddress.base58
                    }`}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "gray",
                    fontStyle: "italic",
                    lineHeight: 1,
                  }}
                >
                  <i style={{ color: "#FAD900" }}>
                    {" "}
                    - Share the link with your partners and get a referral bonus{" "}
                    <br />
                    -To receive referral bonuses you must have an active
                    deposit! No referral bonuses will be credited without an
                    active deposit.
                  </i>
                </div>
              </div>
            </form>
            <form className="maincontform">
              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat">
                    Total Deposited Amount:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        value={
                          investedAmount ? `${investedAmount} TRX` : "0 TRX"
                        }
                        readOnly
                      />
                      {console.log("typeof in ", typeof(investedAmount))}
                      {console.log("String(investedAmount) ", investedAmount)}

                      {console.log("String(investedAmount) ", parseInt(investedAmount))}
                      {console.log("String(JSON) ", JSON.stringify(investedAmount))}
                    </div>
                  </div>
                  <div className="modallinewrap_stat under">
                    {/* 330% Income Limit Remain: */}
                    Max Payouts
                    <div className="modallinewrapvalue_stat userPercentRate">
                      {/* <b className="basicPercentRate"> */}
                      <input
                        type="text"
                        className="wallet_input"
                        value={totalIncome ? `${totalIncome} TRX` : "0 TRX"}
                        // value={
                        //   investedAmount
                        //     ? `${((330 * investedAmount) / 100) - incomeWithdraw
                        //     } TRX`
                        //     : "0 TRX"
                        // }
                        readOnly
                      />

                      {/* </b> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat">
                    {/* Daily Income 11% : */}
                    Total Payouts
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        value={totalPayouts ? `${totalPayouts} TRX` : "0 TRX"}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat under">
                    Total Referral Income :
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        value={
                          matchingBounus ? `${matchingBounus} TRX` : "0 TRX"
                        }
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat">
                    {/* Income Withdrawn To Wallet : */}
                    {/* Reward */}
                    Withdrawan
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        value={
                          incomeWithdraw ? `${incomeWithdraw} TRX` : "0 TRX"
                        }
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat under">
                    {/* Unwithdrawn Income : */}
                    Reward
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        value={undrawn ? `${undrawn} TRX` : "0 TRX"}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="macblockline_stat">
          <div className="modallineflex_stat">
            <div className="modallinewrap_stat">
              Matching Bonus :
              <div className="modallinewrapvalue_stat userPercentRate">
                {matchingBounus ? `${matchingBounus} TRX` : "0 TRX"}
              </div>
            </div>
            <div className="modallinewrap_stat">
              Next Income Countdown :
              <div className="modallinewrapvalue_stat userPercentRate">
              </div>
            </div>
          </div>
        </div> */}

              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat_new">
                    1st Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelone ? `${levelone}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat_new under">
                    2nd Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelTwo ? `${levelTwo}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat_new under">
                    3rd Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelthree ? `${levelthree}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  {/* <div className="modallinewrap_stat">
              3rd Level:
              <div className="modallinewrapvalue_stat userPercentRate">
              </div>
            </div> */}
                </div>
              </div>

              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat_new">
                    4th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelfour ? `${levelfour}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat_new under">
                    5th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelfive ? `${levelfive}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat_new under">
                    6th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelsix ? `${levelsix}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>

                </div>
              </div>

              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat_new">
                    7th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelseven ? `${levelseven}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat_new under">
                    8th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={leveleight ? `${leveleight}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="modallinewrap_stat_new under">
                    9th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelnine ? `${levelnine}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>

                </div>
              </div>

              <div className="macblockline_stat">
                <div className="modallineflex_stat">
                  <div className="modallinewrap_stat">
                    10th Level:
                    <div className="modallinewrapvalue_stat userPercentRate">
                      <input
                        type="text"
                        className="wallet_input"
                        // value={levelten ? `${levelten}` : "0"}
                        value = '0.05%'
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="macblockline_stat">
          <div className="modallineflex_stat">
            <div className="modallinewrap_stat">
              Personal Invited Partners :
              <div className="modallinewrapvalue_stat userPercentRate">
              </div>
            </div>
            <div className="modallinewrap_stat">
              Total Number Of Partners :
              <div className="modallinewrapvalue_stat userPercentRate">
              </div>
            </div>
          </div>
        </div> */}

              <div className="macblockline_stat">
                <div style={{ textAlign: "center" }}>Request withdraw:</div>
                <div>
                  <input
                    type="button"
                    className="maindescbut"
                    value="REQUEST WITHDRAW"
                    onClick={submitWithdrawFunction}
                  />
                </div>
              </div>

              {/* <div className="macblockline_stat">
        Request Withdrawn
        <div>
          <input
            type="button"
            className="maindescbut"
            value="COPY REFERRAL LINK"
            onClick={copyReferralLink}
          />
        </div>
      </div> */}
              <div className="bottom-Container">
                <label style={{ marginTop: 40 }}>Your referral link:</label>
                <input
                  type="text"
                  style={{
                    height: "40px",
                    lineHeight: "40px",
                    backgroundColor: "rgba(0,0,0,.3)",
                    borderRadius: "10px",
                    boxShadow: "inset 0 0 50px #1b1b1b",
                    color: "#FDDE61",
                    padding: "0 10px",
                    fontSize: "18px",
                    fontWeight: 300,
                    border: "none",
                  }}
                  // className="trxWallet"
                  id="refer"
                  value={`https://tronforever.live/?ref=${tronWeb && tronWeb.defaultAddress.base58
                    }`}
                  // value={
                  //   window.tronWeb
                  //     ? window.tronWeb.defaultAddress.base58
                  //     : "wallet address"
                  // }
                  readOnly
                />
                <input
                  type="button"
                  className="maindescbut"
                  value="COPY REFERRAL LINK"
                  onClick={copyReferralLink}
                />
              </div>
            </form>
          </>
        ) : (
            <form className="maincontform">
              <input
                type="text"
                placeholder="Connect with your wallet app..."
                readOnly
              />
              <div className="modalref">
                Connect with your <b className="gt">TronLink</b> /{" "}
                <b className="gt">TronPay</b> browser extension, or{" "}
                <b className="gt">TronWallet</b> / <b className="gt">Banko</b> mobile app.
              After connection you will get opportunity to make deposit (reload
              this page).
              <br />
                <u>Please, contact our support team if you cant connect.</u>
                {/* <a href="#" data-remodal-target="promo" className="maindescbut">
           <i className="far fa-bullhorn"></i> Promo materials
         </a> */}
              </div>
            </form>
          )}

        {/* Promo Materials */}
        {/* <div className="remodal" data-remodal-id="promo">
        <PromoMaterials />
      </div> */}
      </div>
    </>
  );
};

export default WalletStatistic;
