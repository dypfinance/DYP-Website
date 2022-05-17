import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../assets/General/Button/Button";
import CircleButton from "../../../assets/General/CircleButton";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import AuditedByItem from "../../../assets/General/AuditedByItem";
import AvaxLogo from "../../../assets/images/NftEarn/avax-icon-circle.svg";
import BscLogo from "../../../assets/images/NftEarn/bsc-icon-circle.svg";
import EthLogo from "../../../assets/images/NftEarn/eth-icon-circle.svg";
import EthPath from "../../../assets/Home/ethereum-path.svg";
import BscPath from "../../../assets/Home/binance-path.svg";
import AvaxPath from "../../../assets/Home/avax-path.svg";
import rightArrow from "../../../assets/svg/white-arrow.svg";
import BuyBackHero from "../../../assets/images/buyback-hero.png";
import CawsLogo from "../../../assets/images/caws-logo.png";
import FarmingHero from "../../../assets/images/farming-hero.png";
import GameConsole from "../../../assets/images/game-console.svg";
import MiniCat from "../../../assets/images/mini-cat-icon.png";
import MiniEth from "../../../assets/images/mini-eth-icon.png";
import MultipleCaws from "../../../assets/images/multiple-caws.png";
import VaultHero from "../../../assets/images/vault-hero.png";

import { useHistory } from "react-router-dom";

const MainHero = ({ audited, eth, bnb, avax, liquidity, tvl, users }) => {
  let navigate = useHistory();
  const gotoFarm = () => {
    navigate.push("/nft-earn");
  };

  const gotoMint = () => {
    navigate.push("/mint");
  };
  return (
    <div className="main-hero">
      <div className="circle-decoration"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="left-hero-wrapper">
              <div className="hero-content-wrapper">
                <h2 className="left-hero-title">Stake DYP</h2>
                <div className="row justify-content-between m-0">
                  <div>
                    <p>
                      <img
                        src={EthLogo}
                        alt=""
                        style={{ width: 32, height: 32 }}
                      />{" "}
                      Ethereum
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
                      <img src={BscLogo} alt="" /> Binance
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
                      <img
                        src={AvaxLogo}
                        alt=""
                        style={{ width: 32, height: 32 }}
                      />{" "}
                      Avalache
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
                  <div style={{ width: "40%" }}>
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
                    <div className="row justify-content-between align-items-center">
                      <img
                        className="img-fluid"
                        style={{ width: "33%" }}
                        src={require("../../../assets/Home/thumbs-up.png")}
                        alt=""
                      />
                      <Button
                        text="Earn Now"
                        icon={<ChevronArrowSvg />}
                        action={() => gotoFarm()}
                        style={{ margin: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 main-hero-graphic-wrapper">
            <div className="row justify-content-between m-0">
              <div className="staking-wrapper">
                <div className="staking-content">
                  <span id="title">NFT Minting & Staking</span>
                  <div className="row justify-content-between m-0">
                    <div
                      className="row justify-content-between m-0"
                      style={{ gap: 8 }}
                    >
                      <img src={MiniCat} alt="" />
                      <div style={{ lineHeight: "11px" }}>
                        <span className="subtitle">Created NFT’s</span>
                        <h1 className="m-0">4.9K</h1>
                        <span>/10,000</span>
                      </div>
                    </div>
                    <div
                      className="row justify-content-between m-0"
                      style={{ gap: 8 }}
                    >
                      <img src={MiniEth} alt="" />
                      <div style={{ lineHeight: "11px" }}>
                        <span className="subtitle">Stake NFT</span>
                        <h1 className="m-0">50%</h1>
                        <span>APR</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="action-button2">
                  <CircleButton
                    action={() => {}}
                    size="48"
                    activeCard={""}
                    text={""}
                  >
                    <ChevronArrowSvg />
                  </CircleButton>
                </div>
              </div>

              <div className="game-wrapper">
                <div className="game-content-wrapper">
                  <span>Game</span>
                  <div className="row m-0 justify-content-start">
                    <img src={CawsLogo} alt="" id="cawsLogo" />
                    <img src={GameConsole} alt="" id="console" />
                  </div>
                </div>
              </div>
              <div className="action-button">
                <CircleButton
                  action={() => {}}
                  size="48"
                  activeCard={""}
                  text={""}
                >
                  <ChevronArrowSvg />
                </CircleButton>
              </div>
            </div>
            <div className="caws-bottom-wrapper">
              <div className="row justify-content-between m-0">
                <div className="left-text-wrapper">
                  <p className="caws-title">DYP CAWS NFT’s</p>
                  <p className="caws-desc">
                    Well, just like cats, watches are always right and they
                    require a lot of attention and care to keep their pristine
                    condition.
                  </p>
                  <Button
                    text="Try now"
                    icon={<ChevronArrowSvg />}
                    action={() => gotoMint()}
                    style={{ margin: 0 }}
                  />
                </div>

                <img src={MultipleCaws} alt="" id="multi-caws" />
              </div>
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
