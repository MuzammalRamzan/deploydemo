import React, { useState, useEffect } from "react";
import { environment } from "../../environment";
import { investFun } from "../../userDataFunctions";
import { toast, ToastContainer } from "react-toastify";
import TronHelper from "./utils/TronHelper";
// import _ from 'lodash';
import { values } from "./values";

const MakeNewDeposit = () => {
  const [amount, setAmount] = useState("");
  const [tronWeb, setTronWeb] = React.useState();
  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  const [contractAddress, setContractAddress] = useState(
    environment.contractAddress
  );

  const successMessage = (message) => {
    toast.success(message);
  };

  const closeModal = (isTrue) => {
    if (isTrue) {
      document.getElementById("closeit").click();
    }
  };

  const submitInvestFunction = async () => {
      if (tronWeb) {
        let getContract = await tronWeb.contract().at(contractAddress);
        console.log("here===> full: ", getContract);
        if (getContract) {
          investFun(
            getContract,
            contractAddress,
            amount,
            window.tronWeb,
            closeModal,
            successMessage
          );
          
          console.log("here===>"+"empty")
        }
      // }
    }
  };

  let getReferr = localStorage.getItem("refAddress");

  return (
    <>
      <div>
        <a data-remodal-action="close" className="remodal-close" id="closeit"></a>
        <h1>Make New Deposit</h1>
        <div className="modaldesc">
          {tronWeb && tronWeb.ready ? (
            <form className="maincontform">
              <label>
                Specify deposit <img src="img/tron.png" alt="" /> TRX amount
                here:
              </label>
              {/* <div className="custom-select" style="width:200px;"> */}
              <select
                className="custom-select"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              >
                <option value="">Select Amount</option>
                {values.map((i) => {
                  return <option key={i} value={i}>{i}</option>;
                })}
              </select>
              {/* </div> */}
              <input
                className="trxAmount1"
                type="text"
                placeholder="1000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              {/* {enterAmount && (
            <div className="trxAmountError11 error">Please enter amount </div>
          )} */}

              {/* {lessAmount && (
            <div className="trxAmountError12 error">Minimum amount is 100 TRX </div>
          )} */}

              <input
                onClick={submitInvestFunction}
                type="button"
                value="Make deposit"
                className="maindescbut"
              />
              <div className="modalref">
                <div className="userRefererDiv">
                  <i className="fal fa-user-friends"></i> Your upline partner
                  wallet:
                  {getReferr ? (
                    <span
                      className="userReferer"
                      style={{ color: "#FDDE61" }}
                    >{`https://tronforever.live/?ref=${getReferr}`}</span>
                  ) : (
                    <span className="userReferer" style={{ color: "#FDDE61" }}>
                      No uplink
                    </span>
                  )}
                </div>
              </div>
            </form>
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
                <b className="gt">TronWallet</b> / <b className="gt">Banko</b> mobile
                app. After connection you will get opportunity to make deposit
                (reload this page).
                <br />
                <u>Please, contact our support team if you cant connect.</u>
                <br />
                <br />
                <div className="userRefererDiv">
                  <i className="fal fa-user-friends"></i> Your upline partner
                  wallet:
                  <span className="userReferer">No uplink</span>
                </div>
              </div>
            </form>
          )}
        </div>
        <div className="modaldesc">
          <div className="dashmodal"></div>
          <div className="modalline">
            <b className="gt">
              <i className="fas fa-exclamation-triangle"></i> IMPORTANT!
            </b>{" "}
            Do not forget about blockchain fee! You should have 2-5 TRX more on
            your wallet, or your transaction will get out of energy status!
          </div>
          <br />
          <div className="modalline">
            <i className="fas fa-check-circle"></i> Minimal deposit amount:{" "}
            <b>50 TRX</b> (no maximal limits)
          </div>
          <div className="modalline">
            <i className="fas fa-check-circle"></i> We are working only with{" "}
            <img src="img/tron.png" alt="" /> TRON (TRX) cryptocurrency
          </div>
          <div className="modalline">
            <i className="fas fa-check-circle"></i> Your deposit will be activated
            after <b>1 confirmation</b> in blockchain
          </div>
          <div className="modalline">
            <i className="fas fa-check-circle"></i> Earnings comes every moment on
            your wallet balance, you can withdraw it any time you want{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeNewDeposit;
