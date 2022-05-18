import React from "react";
import { NavLink } from "react-router-dom";
import EthLogo from "../assets/images/ethLogo.svg";
import AvaxLogo from "../assets/images/avaxLogo.svg";
import DoubleArrow from "../assets/images/doubleArrows.svg";
import DypLogo from "../assets/images/dypLogo.svg";
import IDypLogo from '../assets/images/idypLogo.svg'
import LinkLogo from "../assets/images/linkIcon.svg";
import rightArrow from "../../src/assets/svg/white-arrow.svg";

export default class Avaxbridge extends React.Component {
  render() {
    return (
      <>
        <div className="earn-hero-area App-container" style={{ background: 'none', padding: '48px 0 0'  }}>
          <div className="container">
            <div className="earn-hero-wrapper">
              <div className="row justify-content-center">
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
                          <span className="chainText">
                            AVAX <img src={AvaxLogo} alt="avax" />
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
                        <span className="brige-box-title">DYP AVAX Bridge</span>
                      </h3>
                      <p>
                        The Bridge will help you swap DYP tokens between
                        Ethereum Network and Avalanche Network.
                      </p>
                      <div className="bottomWrapper">
                        <p className="mb-0 d-flex">
                          <div>
                            <img src={LinkLogo} alt="" className="mr-2" />
                          </div>
                          <div>For more information you can visit our&nbsp;
                            <a target="_blank" href="https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a">
                              <u style={{ color: "#1D91D0" }}>medium bridge tutorial</u>
                            </a>&nbsp;
                            article
                          </div>
                        </p>
                      </div>
                      <div className="buttonWrapper">
                        <div className="earn-hero-btns-bridge m-0" style={{ maxWidth: 274, width: '100%' }}>
                          <a
                            target="_blank"
                            className="m-0"
                            href="https://avax-bridge.dyp.finance"
                            style={{ borderRadius: 6, maxWidth: 274, width: '100%' }}
                          >
                            Go to bridge platform &nbsp;&nbsp;&nbsp;
                            <img src={rightArrow} />
                          </a>
                        </div>
                        <div className="earn-hero-btns-white m-0" style={{ maxWidth: 274, width: '100%' }}>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=k--YXSSYUMY"
                            style={{ borderRadius: 6, maxWidth: 274, width: '100%' }}
                          >
                            Video Tutorial &nbsp;&nbsp;&nbsp;
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L6 6L1 1" stroke="#EA1C1D" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
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
                          <span className="chainText">
                            AVAX <img src={AvaxLogo} alt="avax" />
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
                        <span className="brige-box-title">iDYP AVAX Bridge</span>
                      </h3>
                      <p>
                        The Bridge will help you swap iDYP tokens between
                        Ethereum Network and Avalanche Network.
                      </p>
                      <div className="bottomWrapper">
                        <p className="mb-0 d-flex">
                          <div>
                            <img src={LinkLogo} alt="" className="mr-2" />
                          </div>
                          <div>For more information you can visit our&nbsp;
                            <a target="_blank" href="https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a">
                              <u style={{ color: "#1D91D0" }}>medium bridge tutorial</u>
                            </a>&nbsp;
                            article
                          </div>
                        </p>
                      </div>
                      <div className="buttonWrapper">
                        <div className="earn-hero-btns-bridge m-0" style={{ maxWidth: 274, width: '100%' }}>
                          <a
                            target="_blank"
                            className="m-0"
                            href="https://avax-ibridge.dyp.finance"
                            style={{ borderRadius: 6, maxWidth: 274, width: '100%' }}
                          >
                            Go to bridge platform &nbsp;&nbsp;&nbsp;
                            <img src={rightArrow} />
                          </a>
                        </div>
                        <div className="earn-hero-btns-white m-0" style={{ maxWidth: 274, width: '100%' }}>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/watch?v=k--YXSSYUMY"
                            style={{ borderRadius: 6, maxWidth: 274, width: '100%' }}
                          >
                            Video Tutorial &nbsp;&nbsp;&nbsp;
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 11L6 6L1 1" stroke="#EA1C1D" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
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
