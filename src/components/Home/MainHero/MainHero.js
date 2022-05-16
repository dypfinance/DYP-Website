import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../assets/General/Button/Button";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import AuditedByItem from "../../../assets/General/AuditedByItem";
import AvaxLogo from "../../../assets/images/NftEarn/avax-icon-circle.svg";
import BscLogo from "../../../assets/images/NftEarn/bsc-icon-circle.svg";
import EthLogo from "../../../assets/images/NftEarn/eth-icon-circle.svg";
import EthPath from "../../../assets/Home/ethereum-path.svg";
import BscPath from "../../../assets/Home/binance-path.svg";
import AvaxPath from "../../../assets/Home/avax-path.svg";
import rightArrow from "../../../assets/svg/white-arrow.svg";

import { useHistory } from "react-router-dom";

const MainHero = ({ audited, eth, bnb, avax, liquidity, tvl, users }) => {
  let navigate = useHistory();
  const gotoFarm = () => {
    navigate.push("/earn");
  };

  const gotoMint = () => {
    navigate.push("/mint");
  };
  return (
    <div className="main-hero">
      <div className="circle-decoration"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="left-hero-wrapper">
              <div className="hero-content-wrapper">
                <h2 className="left-hero-title">Stake DYP</h2>
                <div className="row justify-content-between m-0">
                  <div>
                    <p>
                      <img src={EthLogo} alt="" style={{width: 32, height: 32}}/> Ethereum
                      <img
                        src={EthPath}
                        style={{ padding: "0 10px" }}
                        alt=""
                      />{" "}
                      <img
                        src={rightArrow}
                        style={{ height: 25, width: 10 }}
                        alt=""
                      />
                    </p>
                    <p>
                      <img src={BscLogo} alt=""/> Binance
                      <img
                        src={BscPath}
                        style={{ padding: "0 16px" }}
                        alt=""
                      />{" "}
                      <img
                        src={rightArrow}
                        style={{ height: 25, width: 10 }}
                        alt=""
                      />
                    </p>
                    <p>
                      <img src={AvaxLogo} alt="" style={{width: 32, height: 32}}/> Avalache
                      <img
                        src={AvaxPath}
                        style={{ padding: "0 10px" }}
                        alt=""
                      />{" "}
                      <img
                        src={rightArrow}
                        style={{ height: 25, width: 10 }}
                        alt=""
                      />
                    </p>
                  </div>
                  <div>
                    <div
                      className="d-flex justify-content-end"
                      style={{ gap: 3 }}
                    >
                      <h1>25</h1>
                      <div style={{ lineHeight: "10px" }}>
                        <span>Fixed</span>
                        <h2 className="m-0">%</h2>
                        <span>APR</span>
                      </div>
                    </div>
                    <img
                      className="img-fluid"
                      style={{ width: "40%" }}
                      src={require("../../../assets/Home/thumbs-up.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* to be checked if text on blue cards is static */}
          <div className="col-md-5 main-hero-graphic-wrapper">
            <img
              className="img-fluid"
              src={require("../../../assets/Home/banner_1.png")}
              alt=""
            />
            <div className="text-wrapper">
              <p>
                {eth} <small>ETH</small>, {bnb} <small>BNB</small>
              </p>
              <p>
                {avax}
                <small> AVAX worth:</small>
              </p>
              <p> $ {liquidity}</p>
              <p>
                <small>paid to Liquidity providers!</small>
              </p>
            </div>
            <div className="text-wrapper-secondary">
              <p>
                <small>TVL </small>$ {tvl}
              </p>
              <p>
                <small>Total users </small>
                {users}
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p className="audited-by-title">Audited by</p>
            <div className="audited-by-section">
              {audited.length > 0 &&
                audited.map((item, id) => (
                  <AuditedByItem key={id} imgName={item.img} text={item.name} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MainHero.propTypes = {
  audited: PropTypes.array,
  eth: PropTypes.string,
  bnb: PropTypes.string,
  avax: PropTypes.string,
  liquidity: PropTypes.string,
  tvl: PropTypes.string,
  users: PropTypes.string,
};

export default MainHero;
