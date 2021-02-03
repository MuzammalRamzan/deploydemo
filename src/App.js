import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/userside/Home";
import { Provider } from "react-redux";
import store from "./components/Store/store";
import "react-toastify/dist/ReactToastify.css";
import { getUserData } from "./userDataFunctions";
// import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import TronWeb from "tronweb";
import TronHelper from "./components/userside/utils/TronHelper";

const App = () => {
  const [defaultAddress, setdefaultAddress] = React.useState("");
  const [tronWeb, setTronWeb] = React.useState();

  // window.location.href.substr(0, window.location.href.indexOf('#'))

  React.useEffect(() => {
    window.onload = function () {
      if (!window.tronWeb) {
        const HttpProvider = TronWeb.providers.HttpProvider;
        const fullNode = new HttpProvider("https://api.trongrid.io");
        const solidityNode = new HttpProvider("https://api.trongrid.io");
        const eventServer = "https://api.trongrid.io/";

        const gettronWeb = new TronWeb(fullNode, solidityNode, eventServer);
        window.tronWeb = gettronWeb;
      } else {
        setdefaultAddress(window.tronWeb.defaultAddress.base58);
      }
    };
  }, []);

  React.useEffect(() => {
    const tronLoader = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        setTronWeb(window.tronWeb);
        clearInterval(tronLoader);
      }
    }, 500);
  }, []);

  React.useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      let final = getAddress.slice(0, 34);
      localStorage.setItem("refAddress", final);
    }
  }, []);

  React.useEffect(() => {
    if (tronWeb) {
      setInterval(() => {
        getUserData(tronWeb.defaultAddress.base58);
      }, 2000);
    }
  }, [tronWeb]);

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
