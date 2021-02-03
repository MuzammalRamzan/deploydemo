import React, { useState, useEffect } from "react";
import { environment } from "../../environment";
import { withdrawFunct,investFun } from "../../userDataFunctions";

const Platform = () => {
  const [amount, setAmount] = useState("");
  const [contractAddress, setContractAddress] = useState(
    environment.contractAddress
  );

  const submitInvestFunction = async (e) => {
    e.preventDefault();
    // console.log("ddd")
    if (amount === "") {
      // setEnterAmount(true);
    } else if (amount < 10) {
      // setLessAmount(true);
    } else {
      if (window.tronWeb && window.tronWeb) {
        let getContract = await window.tronWeb.contract().at(contractAddress);
        if (getContract) {
          investFun(getContract, contractAddress, amount, window.tronWeb);
        }
      }
    }
  };

  // console.log("here is the value", amount);

  // const [sendTronWeb, setSendTronWeb] = useState("");
  // const [contract, setcontract] = useState("");

  // const getContract = async () => {
  //   if (window && window.tronWeb) {
  //     console.log("called===>",window.tronWeb)
  //     setSendTronWeb(window.tronWeb);
  //     let getContract = await window.tronWeb.contract().at(contractAddress);
  //     // console.log("here is the contract====>", getContract);
  //     setcontract(getContract);
  //   }
  // };

  // useEffect(() => {
  //   if (window.tronWeb) {
  //     getContract();
  //   }
  // }, [contractAddress, window.tronWeb]);

  const withDrawAmount = async() => {
    if (window.tronWeb && window.tronWeb) {
      let getContract = await window.tronWeb.contract().at(contractAddress);
      if (getContract) {
        withdrawFunct(getContract);
      }
    }
  };

  return (
    <div>
      <div className="content">
        <div className="stepsmainblock" id="steps">
          <div className="wrap">
            <div className="dashtop"></div>
            <h2>
              How to work with platform
              <small>
                simple <span className="gt">3 steps</span> to get earnings
              </small>
            </h2>
            <div className="stepsline">
              <div className="bigstepline"></div>
              <div className="bigsteplinecic1"></div>
              <div className="stepslinewrap">
                <h3>Step #1: Make deposit</h3>
                <div
                  className="stepsblock"
                  data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
                  style={{color:"white"}}
                >
                  <h4>
                    Get <img src="img/tron.png" alt="" /> TRON (TRX)
                  </h4>
                  We recommend to use: <b>TronLink</b> / <b>TronMask</b>{" "}
                  browsers extensions, or{" "}
                  <a href="https://tronwallet.me/" target="_blank">
                    TronWallet
                  </a>{" "}
                  /{" "}
                  <a href="https://bankowallet.com/" target="_blank">
                    Banko
                  </a>{" "}
                  mobile apps.
                  <br />
                  You can get TRX coins via popular exchangers.
                  <a href="#" data-remodal-target="tron" className="maindescbut">
                    How to get TRX
                  </a>
                </div>
                <div
                  className="stepsblock"
                  data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
                  style={{ color: "white" }}
                >
                  <h4>
                    Send <img src="img/tron.png" alt="" /> TRX to our
                    smart-contract
                  </h4>
                  Send any amount of TRX on smart-contract address and start to
                  get earnings every moment. Minimal deposit amount is{" "}
                  <b>50 TRX</b>. No maximal amount.
                  <a href="#" data-remodal-target="invest" className="maindescbut">
                    Make deposit
                  </a>
                </div>
              </div>
              <div
                className="stepslinewrap"
                data-scroll="toggle(.fromRightIn, .fromRightOut)"
              >
                {/* <div className="icosteps2">
                  <img src="img/icostep2.png" alt="" />
                </div> */}
                <form className="maincontform">
                  <label>
                    deposit <img src="img/tron.png" alt="" /> TRX amount
                    here:
                  </label>

                  <input
                    type="text"
                    className="trxWallet authFalse"
                    placeholder="Connect with your wallet app..."
                    readOnly
                  />

                  <input
                    className="trxAmount2 authTrue"
                    type="text"
                    placeholder="1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ display: "none" }}
                  />
                  <div
                    className="trxAmountError21"
                    className="error"
                    style={{ display: "none" }}
                  >
                    Please, enter amount!{" "}
                  </div>
                  <div
                    className="trxAmountError22"
                    className="error"
                    style={{ display: "none" }}
                  >
                    Minimum deposit amount is 100 TRX
                  </div>
                  <button
                    onClick={submitInvestFunction}
                    className="maindescbut"
                  >
                    Make deposit
                  </button>
                  {/* <input
                    type="button"
                    value="Make deposit"
                    className="maindescbut investButton2 authTrue"
                    // style={{ display: "none" }}
                    onClick={() => alert("working")}
                  /> */}
                </form>
              </div>
            </div>
            <div className="stepsline">
              <div className="bigsteplinecic1"></div>
              <div
                className="stepslinewrap"
                data-scroll="toggle(.fromRightIn, .fromRightOut)"
              >
                <div className="icosteps2">
                  <img
                    src="img/logo.jpg"
                    alt=""
                    style={{ width: 100, height: 100, borderRadius:50}}
                  />
                </div>
                <form className="maincontform">
                  <label>
                    Your <img src="img/tron.png" alt="" /> TRX wallet address:
                  </label>

                  <input
                    type="text"
                    className="trxWallet authTrue"
                    // value="Wallet address"
                    style={{ display: "none" }}
                    readOnly
                  />

                  <input
                    type="text"
                    className="trxWallet authFalse"
                    placeholder="Connect with your wallet app..."
                    readOnly
                  />
                  <a href="#" data-remodal-target="wallet" className="maindescbut">
                    Check wallet statistics
                  </a>
                </form>
              </div>
              <div
                className="stepslinewrap stepslinewrapright"
                data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
              >
                <h3>Step #2: Get earnings</h3>
                <div
                  className="stepsblock stepsblockfull"
                  style={{ color: "white" }}
                >
                  <h4>
                    Get your <img src="img/tron.png" alt="" /> TRX every moment
                  </h4>
                  <span>
                    You can check all your wallet information, including your
                    deposits, earnings, withdraw and referral statistics in real
                    time.
                  </span>
                  <br />
                  <br />
                  <u>Additional earnings with referral program:</u>
                  <br />5 levels of affiliate rewards: <b>7% - 5% - 3% - 2% - 1%</b>
                  <br /> Referral rewards comes instantly on your wallet balance
                  and can be withdrawn any time along with earnings.
                  <a href="#" data-remodal-target="wallet" className="maindescbut">
                    Your wallet statistics
                  </a>
                </div>
              </div>
            </div>
            <div className="stepsline">
              <div className="bigsteplinecic1"></div>
              <div
                className="stepslinewrap"
                data-scroll="toggle(.fromLeftIn, .fromLeftOut)"
              >
                <h3>Step #3: Request withdraw</h3>
                <div
                  className="stepsblock stepsblockfull2"
                  style={{ color: "white" }}
                >
                  <h4>
                    Request <img src="img/tron.png" alt="" /> TRX withdraw
                  </h4>
                  <i className="far fa-check-circle"></i> Your payout will come{" "}
                  <b>instantly</b>
                  <br />
                  <br />
                  <i className="far fa-check-circle"></i> Request withdraw from the{" "}
                  <b>same wallet</b> you deposited
                  <br />
                  <br />
                  <i className="far fa-check-circle"></i> All your wallet deposits
                  and referral earnings will be withdrawn with single
                  transaction per 1 request{" "}
                </div>
              </div>
              <div
                className="stepslinewrap"
                data-scroll="toggle(.fromRightIn, .fromRightOut)"
              >
                <div className="icosteps2">
                  <img
                    src="img/logo.jpg"
                    alt=""
                    style={{ width: 100, height: 100, borderRadius:50 }}
                  />
                </div>
                <form className="maincontform">
                  <label>
                    {/* Your <img src="img/tron.png" alt="" /> TRX wallet address: */}
                  </label>

                  <input
                    type="text"
                    className="trxWallet authTrue"
                    // value="Wallet address"
                    style={{ display: "none" }}
                    readOnly
                  />

                  <input
                    type="text"
                    className="trxWallet authFalse"
                    placeholder="Connect with your wallet app..."
                    readOnly
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      withDrawAmount();
                    }}
                    // href="#"
                    // data-remodal-target="wallet"
                    className="withDraw-butn"
                    // style={{ display: "none" }}
                  >
                    Request withdraw
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
