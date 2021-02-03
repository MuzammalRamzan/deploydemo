import React, { useState, useEffect } from "react";
import { environment } from "./environment";

// function importing for getting user's data
import {
  // FirstFunction,
  // SecondFunction,
  // ThirdFunction,
  UserDataFunction,
  investFun,
} from "./userDataFunctions";

const HomeComponent = () => {
  const [fullNode, setFullNode] = useState("");
  const [solidityNode, setSolidityNode] = useState("");
  const [eventServer, setEventServer] = useState("");
  const [accountAddress, setaccountAddress] = useState();
  const [isContract, setisContract] = useState(false);
  const [trxBalance, settrxBalance] = useState();
  const [contract, setcontract] = useState();
  const [userID, setuserID] = useState(0);
  const [currUserID, setcurrUserID] = useState(0);
  const [refAddress, setrefAddress] = useState(environment.defaultRefAddress);
  const [tronWeb, setTronWeb] = useState();
  const [contractBalance, setcontractBalance] = useState(0);
  const [contractAddress, setcontractAddress] = useState(
    environment.contractAddress
  );
  const [users, setUsers] = useState({
    isExist: false,
    id: 0,
    recomendation: 0,
    totalAmount: 0,
    referby: 0,
    refIncome: 0,
    isRecomended: false,
    level: 0,
  });

  useEffect(async () => {
    window.addEventListener("message", setAccountAddress.bind(this), true);
    // setTronWebFunc();
    // updateState();
  }, []);

  useEffect(() => {
    getOwnerAddress();
    // FirstFunction(contract, contractAddress);
    // SecondFunction(contract, contractAddress);
    // ThirdFunction(contract, contractAddress);
    UserDataFunction(contract, contractAddress);
    getContractBalance();
  }, [contract]);

  const setTronWebFunc = async () => {
    const tronWebState = {
      installed: !!window.tronWeb,
      loggedIn: window.tronWeb && window.tronWeb.ready,
    };

    if (tronWebState.installed) {
      setTronWeb(tronWebState);
    }
  };

  const updateState = () => {
    fetch(environment.fullnode, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFullNode(data));

    fetch(environment.solidityNode, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setSolidityNode(data));

    fetch(environment.eventServer, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEventServer(data));
  };

  const getWalletBalance = async (address) => {
    try {
      var bal = await window.tronWeb.trx.getBalance(address);
      // console.log(bal);
      // console.log(window.tronWeb.fromSun(bal));
      bal = window.tronWeb.fromSun(bal);
      settrxBalance(bal);
      // console.log(trxBalance);
    } catch (err) {
      // console.log(err);
    }
  };

  const getOwnerAddress = async () => {
    try {
      var add = await contract.owner().call();
    } catch (err) {
      // console.log(err);
    }
  };

  const setContract = async () => {
    // console.log(
    //   "here is the tronWen=============>",
    //   window.tronWeb.contract().at(contractAddress).then((e)=>{
    //     console.log("here we gooooO====>",e)
    //   })
    // );
    if (window.tronWeb && window.tronWeb) {
      let getContract = await window.tronWeb.contract().at(contractAddress);
      // console.log("===================>", getContract);
      setcontract(getContract);
      setisContract(true);
      // console.log("contract:   ", contract.users(1).call());
    }
  };

  const getContractBalance = async () => {
    try {
      let contractBlance = await contract.bal().call();
      // console.log("here is the current balancee===========>",contractBlance)
      contractBlance = contractBlance.toNumber();
      setcontractBalance(window.tronWeb.fromSun(contractBlance));
      // console.log(contractBalance);
    } catch (err) {
      // console.log(err);
    }
  };

  const getUserData = async () => {
    // setuserID(idd.toNumber());
    // console.log(userID);
    // let curruserIDD = await contract.currUserID().call();
    // setcurrUserID(curruserIDD.toNumber());
    // console.log(currUserID);
    // var users = await contract.users(userID).call();
    // setUsers({ id: users.id.toNumber() });
    // setUsers({ isExist: users.isExist });
    // setUsers({ isReccomended: users.isReccomended });
    // setUsers({ recomendation: users.recomendation.toNumber() });
    // setUsers({
    //   refIncome: window.tronWeb.fromSun(users.ref_Income.toNumber()),
    // });
    // setUsers({
    //   totalAmount: window.tronWeb.fromSun(users.total_Amount.toNumber()),
    // });
    // setUsers({
    //   referby: users.referBy.toNumber(),
    // });
    // setUsers({ level: users.level.toNumber() });
    // console.log(this.users);
  };

  const setAccountAddress = async () => {
    // console.log(window.tronWeb);
    if (window.tronWeb && window.tronWeb.defaultAddress) {
      if (accountAddress != window.tronWeb.defaultAddress.base58) {
        setaccountAddress(window.tronWeb.defaultAddress.base58);
        getWalletBalance(accountAddress);
        // console.log(accountAddress);
        if (!isContract) {
          setContract();
        }
      }
    }
  };

  return (
    <div>
      {/* {console.log(window.tronWeb)}
    <button onClick={setAccountAddress} >get tron web</button> */}
    </div>
  );
};

export default HomeComponent;
