import { environment } from "./environment";
import store from "./components/Store/store";

export const getUserData = async (defaultAddress) => {
  // console.log("here is the default address in the user function", defaultAddress);
  // console.log("called===>",defaultAddress);

  let getContract =
    (await window.tronWeb) &&
    window.tronWeb
      .contract()
      .at(environment.contractAddress)
      .then(async (contract) => {
        //invested amounts
        contract
          // .getUserTotalDeposits(defaultAddress)
          .userInfoTotals(defaultAddress)
          .call()
          .then((val) => {
            
            // console.log(
            //   "here is the user total deposits",
            //   window.tronWeb && window.tronWeb.fromSun(val)
            // );
            store.dispatch({
              type: "INVESTED_AMOUNT",
              payload: window.tronWeb && window.tronWeb.fromSun(val),
            });
            
          });

        //total participants
        contract
          // .totalUsers().
          .total_users()
          .call()
          .then((val) => {
            // console.log("here is the user total participants", val.toNumber());
            store.dispatch({
              type: "TOTAL_PARTICIPANTS",
              payload: val.toNumber(),
            });
          });

          contract
          // .totalUsers().
          .users(defaultAddress)
          .call()
          .then((val) => {
            console.log(val);
            console.log("total_payouts", val.total_payouts);
            store.dispatch({
              type: "TOTAL_PAYOUTS",
              payload: val.total_payouts,
            });
          });

          contract
          // .totalUsers().
          .users(defaultAddress)
          .call()
          .then((val) => {
            console.log(val);
            console.log("direct_bonus", val.direct_bonus);
            store.dispatch({
              type: "MATCHING_BONUS",
              payload: val.direct_bonus,
            });
          });

        //total dividends
        contract
          // .totalWithdrawn()
          .total_withdraw()
          .call()
          .then((val) => {
            // console.log("here is the user total dividends", val.toNumber());
            store.dispatch({
              type: "TOTAL_DIVIDENDS",
              payload: window.tronWeb && window.tronWeb.fromSun(val),
            });
          });

        //overall deposited
        contract
          // .totalInvested()
          .total_deposited()
          .call()
          .then((val) => {
            console.log("invested total: ",parseInt(val));
            console.log("invested type: ",typeof(parseInt(val)));
            // console.log(
            //   "here is the user total deposits",
            //   window.tronWeb && window.tronWeb.fromSun(val)
            // );
            store.dispatch({
              type: "OVERALL_INVESTED",
              payload: window.tronWeb && window.tronWeb.fromSun(parseInt(val)),
            });
          });

        //daily income
        contract
          // .getUserDividends(defaultAddress)
          .payoutOf(defaultAddress)
          .call()
          .then((val) => {
            console.log("payout ",parseInt(val.payout));
            store.dispatch({
              type: "DAILY_INCOME",
              payload: window.tronWeb && window.tronWeb.fromSun(parseInt(val.payout)),
            });
          });


          contract
          // .getUserDividends(defaultAddress)
          .payoutOf(defaultAddress)
          .call()
          .then((val) => {
            console.log("payout ",parseInt(val));
            console.log("payout ",parseInt(val.max_payout));
            store.dispatch({
              type: "MAX_PAYOUT",
              payload: window.tronWeb && window.tronWeb.fromSun(parseInt(val.max_payout)),
            });
          });

        //icome withdrawn
        contract
          // .getUserTotalWithdrawn(defaultAddress)
          // .maxRewardReceived(defaultAddress)
          .payoutOf(defaultAddress)
          .call()
          .then((val) => {
            // console.log(
            //   "here is the user total deposits",
            //   window.tronWeb && window.tronWeb.fromSun(val)
            // );
            store.dispatch({
              type: "INCOME_WITHDRAW",
              payload: window.tronWeb && window.tronWeb.fromSun(val.payout),
            });
          });

          contract
          // .getUserAvailable(defaultAddress)
          .maxRewardReceived(defaultAddress)
          .call()
          .then((val) => {
            store.dispatch({
              type: "UN_WITHDRAWN",
              payload: window.tronWeb && window.tronWeb.fromSun(val),
            });
          });
       

        // commented
        // contract
        //   .getUserReferralBonus(defaultAddress)
        //   .REFERRAL_PERCENTS(defaultAddress)
        //   .call()
        //   .then((val) => {
        //     // console.log(
        //     //   "here is the user total deposits",
        //     //   window.tronWeb && window.tronWeb.fromSun(val)
        //     // );
        //     store.dispatch({
        //       type: "MATCHING_BONUS",
        //       payload: window.tronWeb && window.tronWeb.fromSun(val),
        //     });
        //   });
        // commented


        //levels

        // commented
        // contract
        //   .getUserDownlineCount(defaultAddress)
        //   .call()
        //   .then((val) => {
        //     // console.log("here are the levels====>",val)
        //     store.dispatch({
        //       type: "LEVEL_ONE",
        //       payload: val[0].toNumber(),
        //     });
        //     store.dispatch({
        //       type: "LEVEL_TWO",
        //       payload: val[1].toNumber(),
        //     });
        //     store.dispatch({
        //       type: "LEVEL_THREE",
        //       payload: val[2].toNumber(),
        //     });
        //     store.dispatch({
        //       type: "LEVEL_FOUR",
        //       payload: val[3].toNumber(),
        //     });
        //     store.dispatch({
        //       type: "LEVEL_FIVE",
        //       payload: val[4].toNumber(),
        //     });
        //   });
        // commented
        //un withdrawn
        // commented 
        // contract
        //   .getUserAvailable(defaultAddress)
        //   .call()
        //   .then((val) => {
        //     store.dispatch({
        //       type: "UN_WITHDRAWN",
        //       payload: window.tronWeb && window.tronWeb.fromSun(val),
        //     });
        //   });
        // commented


        //total deposits
        // let storeData = [];

        // let totalDeposit = await contract
        //   .getUserAmountOfDeposits(defaultAddress && defaultAddress)
        //   .call()
        //   .then(async (val) => {
        //     let num = val.toNumber();
        //     if (num > 0) {
        //       await contract
        //         .getUserDepositInfo(defaultAddress && defaultAddress, num - 1)
        //         .call()
        //         .then((value) => {
        //           store.dispatch({
        //             type: "DEPOSIT_DATE",
        //             payload: value[2].toNumber(),
        //           });
        //         });
        //     }
        //     store.dispatch({
        //       type: "TOTAL_DEPOSIT",
        //       payload: val,
        //     });
        //   });

        // await contract
        //   .getUserAvailable(defaultAddress && defaultAddress)
        //   .call()
        //   .then((val) => {
        //     store.dispatch({
        //       type: "AVAILABLE_WITHDRAW",
        //       payload: window.tronWeb && window.tronWeb.fromSun(val),
        //     });
        //   });

        //referal reward

        // await contract
        //   .getUserReferralBonus(defaultAddress && defaultAddress)
        //   .call()
        //   .then((val) => {
        //     store.dispatch({
        //       type: "REFERRAL_REWARD",
        //       payload: window.tronWeb && window.tronWeb.fromSun(val),
        //     });
        //   });

        //total withdrawn

        // await contract
        //   .getUserTotalWithdrawn(defaultAddress && defaultAddress)
        //   .call()
        //   .then((val) => {
        //     store.dispatch({
        //       type: "TOTAL_WITHDRAWN",
        //       payload: window.tronWeb && window.tronWeb.fromSun(val),
        //     });
        //   });

        //daily profit
        // await contract
        //   .getUserPercentRate(defaultAddress && defaultAddress)
        //   .call()
        //   .then((val) => {
        //     store.dispatch({
        //       type: "DAILY_PROFIT",
        //       payload: val.toNumber(),
        //     });
        //   });

        //basic percent
        // await contract
        //   .BASE_PERCENT()
        //   .call()
        //   .then((val) => {
        //     // console.log("here is the basic percent====>", val.toNumber());
        //     store.dispatch({
        //       type: "BASIC_PERCENT",
        //       payload: val.toNumber(),
        //     });
        //   });

        //get hold bonus
        // await contract
        //   .getHoldBonus(defaultAddress && defaultAddress)
        //   .call()
        //   .then((val) => {
        //     // console.log("here is the basic percent====>", val.toNumber());
        //     store.dispatch({
        //       type: "HOLD_BONUS",
        //       payload: val.toNumber(),
        //     });
        //   });

        //contract bonus
        // await contract
        //   .getContractBalanceRate()
        //   .call()
        //   .then((val) => {
        //     // console.log("here is the contract bonus====>", val.toNumber());
        //     store.dispatch({
        //       type: "CONTRACT_BONUS",
        //       payload: val.toNumber(),
        //     });
        //   });

        // await contract
        //   .totalUsers()
        //   .call()
        //   .then((val) => {
        //     store.dispatch({
        //       type: "TOTAL_USERS",
        //       payload: val.toNumber(),
        //     });
        //   });

        //current platform blnc

        //   await contract
        //     .getContractBalance()
        //     .call()
        //     .then((val) => {
        //       store.dispatch({
        //         type: "CURRENT_PLATFORM",
        //         payload: window.tronWeb && window.tronWeb.fromSun(val),
        //       });
        //       // console.log("total earned",window.tronWeb && window.tronWeb.fromSun(val));
        //     });
      });
};

export const investFun = async (
  contract,
  contractAddress,
  amount,
  tronWeb,
  closeModal,
  successMessage
) => {
  console.log(
    "here is the user wallet address=======>",
    contractAddress
  );
  try {
    let getRefAddress = localStorage.getItem("refAddress");
    let getDirectFromUrl;

    let url = window.location.href;

    if (url.includes("?ref=")) {
      let getAddress = url.split("?ref=")[1];
      let final = getAddress.slice(0, 34);
      getDirectFromUrl = final;
    }

    console.log("here direct ref =======>", getDirectFromUrl);
    console.log("url",getDirectFromUrl ? getRefAddress : environment.defaultRefAddress);
    alert(getDirectFromUrl ? getRefAddress : environment.defaultRefAddress);
    console.log("url=======>", getDirectFromUrl ? getRefAddress : environment.defaultRefAddress);
    // console.log("address"+ getDirectFromUrl ? getDirectFromUrl : getRefAddress ? getRefAddress : environment.defaultRefAddress);
    // console.log("Refaddress"+getDirectFromUrl ? getRefAddress : environment.defaultRefAddress);
    // getDirectFromUrl ? getDirectFromUrl : getRefAddress ? getRefAddress : environment.defaultRefAddress
    const result = await contract
      
      .deposit(
        getDirectFromUrl ? getRefAddress : environment.defaultRefAddress
      )
      .send({
        feeLimit: 100_000_000,
        callValue: tronWeb.toSun(amount),
        shouldPollResponse: true
      })
      .then((output) => {
        if (closeModal) {
          closeModal(true);
          console.log("shouldPollResponse0" + output);
        }
        if (successMessage) {
          successMessage("Deposited Successfully!");
          console.log("shouldPollResponse1" + output);
        }
        getUserData(tronWeb.defaultAddress.base58);
        console.log("shouldPollResponse" + output);
      });
      console.log("result"+result);
  } catch (err) {
    // console.log("error", err);
    console.log("output" + err);
    // successMessage("Deposited Successfully!");
    alert("error",err);
  }
  
};

export const withdrawFunct = async (
  contract,
  tronWeb,
  closeIt,
  withdrawsuccessMessage
) => {
  try {
    // console.log("here is the contract", tronWeb.defaultAddress.base58);
    await contract
      .withdraw()
      .send()
      .then(() => {
        if (closeIt) {
          closeIt(true);
        }
        if (withdrawsuccessMessage) {
          withdrawsuccessMessage("Withdraw Successfully!");
        }
        getUserData(tronWeb.defaultAddress.base58);
        // console.log("successfully");
      });
  } catch (err) {
    console.log("withdrawsuccessNot", err);
  }
};
