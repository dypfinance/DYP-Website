import React from "react";
import { NavLink } from "react-router-dom";
import EthLogo from "../assets/images/ethLogo.svg";
import BscLogo from "../assets/images/bscLogo.svg";
import DoubleArrow from "../assets/images/doubleArrows.svg";
import DypLogo from "../assets/images/dypLogo.svg";
import IDypLogo from '../assets/images/idypLogo.svg'
import LinkLogo from "../assets/images/linkIcon.svg";

export default class Bscbridge extends React.Component {
  render() {
    return (
      <>
        <div className="earn-hero-area App-container"  style={{background: 'none'}}>
          <div className="container">
            <div className="earn-hero-wrapper">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6  offset-lg-2 ml-0 firstBlock">
                  <div className="earn-hero-content p4token-wrapper">
                    <div className="text-left">
                      <div className="fromTo">
                        <span>From</span>
                        <span>To</span>
                      </div>
                      <div className="chainWrapper">
                        <div className="chainContent">
                          <span className="chainText">
                            <img src={EthLogo} alt="eth" />
                            ETH
                          </span>
                          <span>
                            <img src={DoubleArrow} alt="arrow" />
                          </span>
                          <span>
                            <img src={BscLogo} alt="bsc" /> BSC
                          </span>
                        </div>
                      </div>
                      <h3
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 20,
                        }}
                      >
                        <img src={DypLogo} alt="dyp" height={35} />
                        <b>DYP BSC Bridge</b>
                      </h3>
                      <p>
                        The Bridge will help you swap DYP tokens between
                        Ethereum Network and Binance Smart Chain Network.
                      </p>
                      <div className="bottomWrapper">
                        <p className="mb-0">
                          <img src={LinkLogo} alt="" className="mr-2" />
                          For more information you can visit our{" "}
                          <a target="_blank" href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">
                            <span style={{ color: "#1D91D0" }}>
                            medium bridge tutorial
                            </span>
                          </a>{" "}
                          article
                        </p>
                      </div>
                      <div className="buttonWrapper">
                        <div className="earn-hero-btns-bridge m-0" style={{maxWidth: 274, width: '100%'}}>
                          <a
                            target="_blank"
                            className="m-0"
                            style={{borderRadius: 6,maxWidth: 274, width: '100%'}}
                            href="https://bridge.dyp.finance"
                          >
                            Go to bridge platform
                          </a>
                        </div>
                        <div className="earn-hero-btns-white m-0" style={{maxWidth: 274, width: '100%'}}>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=SK-9PqZJM-I"
                            style={{borderRadius: 6,maxWidth: 274, width: '100%'}}
                          >
                            Video Tutorial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="earn-hero-content p4token-wrapper">
                    <div className="text-left">
                      <div className="fromTo">
                        <span>From</span>
                        <span>To</span>
                      </div>
                      <div className="chainWrapper">
                        <div className="chainContent">
                          <span className="chainText">
                            <img src={EthLogo} alt="eth" />
                            ETH
                          </span>
                          <span>
                            <img src={DoubleArrow} alt="arrow" />
                          </span>
                          <span>
                            <img src={BscLogo} alt="bsc" /> BSC
                          </span>
                        </div>
                      </div>
                      <h3
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                          fontSize: 20,
                        }}
                      >
                        <img src={IDypLogo} alt="dyp" height={35} />
                        <b>iDYP BSC Bridge</b>
                      </h3>
                      <p>
                        The Bridge will help you swap iDYP tokens between
                        Ethereum Network and Binance Smart Chain Network.
                      </p>
                      <div className="bottomWrapper">
                        <p className="mb-0">
                          <img src={LinkLogo} alt="" className="mr-2" />
                          For more information you can visit our{" "}
                          <a target="_blank" href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">
                            <span style={{ color: "#1D91D0" }}> medium bridge tutorial</span>
                          </a>{" "}
                          article
                        </p>
                      </div>
                      <div className="buttonWrapper">
                        <div className="earn-hero-btns-bridge m-0" style={{maxWidth: 274, width: '100%'}}>
                          <a
                            target="_blank"
                            className="m-0"
                            href="https://ibridge.dyp.finance"
                            style={{borderRadius: 6,maxWidth: 274, width: '100%'}}
                          >
                            Go to bridge platform
                          </a>
                        </div>
                        <div className="earn-hero-btns-white m-0" style={{maxWidth: 274, width: '100%'}}>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=SK-9PqZJM-I"
                            style={{borderRadius: 6,maxWidth: 274, width: '100%'}}
                          >
                            Video Tutorial
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
      </>
    );
  }
}
