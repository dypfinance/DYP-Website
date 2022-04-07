import React from "react";
import { NavLink } from "react-router-dom";
import EthLogo from "../assets/images/ethLogo.svg";
import AvaxLogo from "../assets/images/avaxLogo.svg";
import DoubleArrow from "../assets/images/doubleArrows.svg";
import DypLogo from "../assets/images/dypLogo.svg";
import IDypLogo from '../assets/images/idypLogo.svg'
import LinkLogo from "../assets/images/linkIcon.svg";

export default class Avaxbridge extends React.Component {
  render() {
    return (
      <>
        <div className="earn-hero-area App-container">
          <div className="container">
            <div className="earn-hero-wrapper">
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-lg-6  offset-lg-2 pb-5 ml-0">
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
                            <img src={AvaxLogo} alt="avax" /> AVAX
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
                        <b>DYP AVAX Bridge</b>
                      </h3>
                      <p>
                        The Bridge will help you swap DYP tokens between
                        Ethereum Network and Avalanche Network.
                      </p>
                      <div className="bottomWrapper">
                        <p className="mb-0">
                          <img src={LinkLogo} alt="" className="mr-2" />
                          For more information you can visit our{" "}
                          <a
                            target="_blank"
                            href="https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a"
                          >
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
                            href="https://avax-bridge.dyp.finance"
                            style={{borderRadius: 6, maxWidth: 274, width: '100%'}}
                          >
                           Go to bridge platform
                          </a>
                        </div>
                        <div className="earn-hero-btns-white m-0" style={{maxWidth: 274, width: '100%'}}>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=k--YXSSYUMY"
                            style={{borderRadius: 6, maxWidth: 274, width: '100%'}}
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
                            <img src={AvaxLogo} alt="avax" /> AVAX
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
                        <b>iDYP AVAX Bridge</b>
                      </h3>
                      <p>
                        The Bridge will help you swap iDYP tokens between
                        Ethereum Network and Avalanche Network.
                      </p>
                      <div className="bottomWrapper">
                        <p className="mb-0">
                          <img src={LinkLogo} alt="" className="mr-2" />
                          For more information you can visit our{" "}
                          <a
                            target="_blank"
                            href="https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a"
                          >
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
                            href="https://avax-ibridge.dyp.finance"
                            style={{borderRadius: 6, maxWidth: 274, width: '100%'}}
                          >
                            Go to bridge platform
                          </a>
                        </div>
                        <div className="earn-hero-btns-white m-0" style={{maxWidth: 274, width: '100%'}}>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=k--YXSSYUMY"
                            style={{borderRadius: 6, maxWidth: 274, width: '100%'}}
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
