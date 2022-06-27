import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../assets/General/Button/Button";
import CircleButton from "../../../assets/General/CircleButton";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import AuditedByItem from "../../../assets/General/AuditedByItem";
import EthLogo from "../../../assets/images/NftEarn/eth-icon-circle.svg";
import BuyBackHero from "../../../assets/images/buyback-hero.png";
import CawsLogo from "../../../assets/images/caws-logo.png";
import FarmingHero from "../../../assets/images/farming-hero.png";
import GameConsole from "../../../assets/images/game-console.svg";
import Stakegraph from "../../NftMinting/components/NftMinting/MyStakes/stakegraph.png";

import MultipleCaws from "../../../assets/images/multiple-caws.png";
import VaultHero from "../../../assets/images/vault-hero.png";
import EthProtocol from "../../../assets/images/eth-protocol-icon.svg";
import BscProtocol from "../../../assets/images/bsc-protocol-icon.svg";
import AvaxProtocol from "../../../assets/images/avax-protocol-icon.svg";
import $alert from "../../../functions/$alert";
import Ship from "../../../assets/images/ship.svg";
import Game1 from "../../../assets/images/game-1.png";
import Game2 from "../../../assets/images/game-2.png";

import { useHistory } from "react-router-dom";
import getFormattedNumber from "../../../functions/get-formatted-number";

const MainHero = ({ audited, eth, bnb, avax, liquidity, tvl, users }) => {
  let navigate = useHistory();
  const gotoFarm = () => {
    navigate.push("/stake-caws");
  };

  const gotoMint = () => {
    navigate.push("/caws");
  };

  const bios = {
    alert: {
      title: "Play CAWS 2D Game",
      content:
        "Top scores on the leaderboard will be eligible for prizes! Coming Soon!",
    },
  };
  const handleShowModal = (e) => {
    e && e.preventDefault();
    $alert(bios["alert"]);
  };
  const navigateToNftEarnPage = (tab) => {
    navigate.push("/earn");
    localStorage.setItem("activeTab", tab);
  };

  const deviceWidth = window.innerWidth;
  return (
    <div className="main-hero">
      <div className="circle-decoration"></div>
      <div className="container">
        <div
          className="row align-items-center"
          style={{ gap: deviceWidth < 776 ? 30 : 0 }}
        >
          <div className={deviceWidth < 776 ? "col-md-12" : "col-md-6"}>
            <div
              className="ball-decoration"
              style={{
                width: 100,
                height: 100,
                zIndex: "-1",
                left: "-33px",
                bottom: 165,
              }}
            ></div>
            <div
              className="ball-decoration"
              style={{
                width: 150,
                height: 150,
                zIndex: "-1",
                left: "500px",
                top: "-80px",
              }}
            ></div>
            <div className="left-hero-wrapper" onClick={gotoMint}>
              <div className="hero-content-wrapper">
                {/*  <h2 className="left-hero-title mt-4">Stake DYP</h2>
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
                        style={{
                          padding: deviceWidth < 500 ? "0px 1px" : "0 10px",
                        }}
                        alt=""
                      />{" "}
                    </p>
                    <p>
                      <img src={BscLogo} alt="" /> BNB Chain
                      <img
                        src={BscPath}
                        style={{
                          padding: deviceWidth < 500 ? "0px 0px" : "0 16px",
                        }}
                        alt=""
                      />{" "}
                    </p>
                    <p>
                      <img
                        src={AvaxLogo}
                        alt=""
                        style={{ width: 32, height: 32 }}
                      />{" "}
                      Avalanche
                      <img
                        src={AvaxPath}
                        style={{ padding: deviceWidth < 500 ? 0 : "0 10px" }}
                        alt=""
                      />{" "}
                    </p>
                  </div>
                  <div style={{ width: deviceWidth < 588 ? "auto" : "40%" }}>
                    <div
                      className="d-flex"
                      style={{
                        gap: 3,
                        justifyContent: deviceWidth < 500 ? "center" : "end",
                      }}
                    >
                      <h1>25</h1>
                      <div style={{ lineHeight: "10px", textAlign: "center" }}>
                        <span>Fixed</span>
                        <h2 className="m-0" style={{ fontSize: 44 }}>
                          %
                        </h2>
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
                        action={() => navigate.push("/earn")}
                        style={{ margin: 0 }}
                      />
                    </div>
                  </div> 
                </div>*/}
              </div>
            </div>
            <div
              className="row ml-0 mr-0 justify-content-between"
              style={{
                marginTop: "1rem",
                flexDirection: deviceWidth < 600 ? "column" : "row",
                gap: deviceWidth < 600 ? 27 : 0,
              }}
            >
              <div className="bottom-item">
                <p>Farming</p>
                <img src={FarmingHero} />
                <div className="action-button3">
                  <CircleButton
                    action={() => navigateToNftEarnPage("Farming")}
                    size="48"
                    activeCard={""}
                    text={""}
                  >
                    <ChevronArrowSvg />
                  </CircleButton>
                </div>
              </div>
              <div className="bottom-item">
                <p>Stake</p>
                <img src={Stakegraph} />
                <div className="action-button3">
                  <CircleButton
                    action={() => navigateToNftEarnPage("Stake")}
                    size="48"
                    activeCard={""}
                    text={""}
                  >
                    <ChevronArrowSvg />
                  </CircleButton>
                </div>
              </div>
              <div className="bottom-item">
                <p>Vault</p>
                <img src={VaultHero} />
                <div className="action-button3">
                  <CircleButton
                    action={() => navigateToNftEarnPage("Vault")}
                    size="48"
                    activeCard={""}
                    text={""}
                  >
                    <ChevronArrowSvg />
                  </CircleButton>
                </div>
              </div>
              <div className="bottom-item">
                <p>Buyback</p>
                <img src={BuyBackHero} />
                <div className="action-button3">
                  <CircleButton
                    action={() => navigateToNftEarnPage("Buyback")}
                    size="48"
                    activeCard={""}
                    text={""}
                  >
                    <ChevronArrowSvg />
                  </CircleButton>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              deviceWidth < 776
                ? "col-md-12 main-hero-graphic-wrapper"
                : "col-md-6 main-hero-graphic-wrapper"
            }
          >
            <div className="caws-bottom-wrapper" onClick={gotoMint}>
              <div className="row justify-content-between m-0 caws-bottom-content-wrapper">
                <img src={MultipleCaws} alt="" id="multi-caws" />
                <div className="left-text-wrapper">
                  <div
                    style={{ lineHeight: "11px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <a
                      href="https://opensea.io/collection/catsandwatchessocietycaws"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div className="buy-caws-btn">
                        <img src={Ship} alt="" />
                        <span>BUY A CAT ON OPENSEA</span>
                        <ChevronArrowSvg size="12" />
                      </div>
                    </a>
                  </div>

                  <div
                    style={{ lineHeight: "11px" }}
                    onClick={(e) => {
                      gotoFarm();
                      e.stopPropagation();
                    }}
                  >
                    <div className="stake_nft_btn">
                      <img src={EthLogo} alt="" />

                      <span>STAKE NFT</span>
                      <ChevronArrowSvg size="12" />
                    </div>
                  </div>
                  <div
                    style={{ lineHeight: "11px" }}
                    onClick={(e) => {
                      gotoMint();
                      e.stopPropagation();
                    }}
                  >
                    <div className="view_more_btn">
                      <span>View more</span>
                      <ChevronArrowSvg size="12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-between m-0 upper-hero-content-wrapper">
              <a
                className="game-wrapper"
                target="_blank"
                href="https://game.dyp.finance"
              >
                <div className="game-content-wrapper">
                  <span>Game</span>
                  <div className="row m-0 image-bottom-wrapper">
                    <img src={Game2} alt="" id="cawsLogo" />
                    <img src={Game1} alt="" id="console" />
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
              </a>
            </div>
          </div>
        </div>
        <div
          className="row ml-0 mr-0"
          style={{
            marginTop: "5rem",
            marginBottom: "2rem",
            justifyContent: "space-between",
          }}
        >
          <div className="col info-wrapper">
            <a
              href="https://data.chain.link/"
              style={{ color: "white" }}
              target="_blank"
            >
              {" "}
              <p className="info-title">
                Provided By Chainlink
                <img
                  src="img/chainlink.png"
                  style={{
                    marginLeft: "3px",
                    width: "11px",
                    height: "11px",
                    paddingBottom: "2px",
                  }}
                  alt="images not found"
                />
              </p>{" "}
            </a>
            <div
              className="row justify-content-between m-0"
              style={{ gap: deviceWidth < 500 ? 20 : 0 }}
            >
              <p className="digits">
                <img src={EthProtocol} alt="" />
                {eth} <span>ETH</span>
              </p>

              <p className="digits">
                <img src={BscProtocol} alt="" />
                {bnb} <span>BNB</span>
              </p>
              <p className="digits">
                <img src={AvaxProtocol} alt="" />
                {avax} <span>AVAX</span>
              </p>
              <p className="tvl-info">
                <span>
                  {" "}
                  {liquidity == 0 ? (
                    "..."
                  ) : (
                    <>
                      <CountUp
                        style={{ fontSize: 34, fontWeight: 700 }}
                        start={liquidity - 400.0}
                        end={liquidity}
                        duration={120}
                        separator=","
                        decimals={2}
                        prefix="$"
                      />
                    </>
                  )}
                </span>
                <span>paid to users</span>
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col pr-0">
              <p className="audited-by-title">Audited by</p>
              <div className="audited-by-section">
                {audited.length > 0 &&
                  audited.map((item, id) => (
                    <AuditedByItem
                      key={id}
                      imgName={item.img}
                      text={item.name}
                    />
                  ))}
              </div>
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
