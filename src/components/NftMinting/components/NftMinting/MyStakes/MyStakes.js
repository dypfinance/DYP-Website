import NftStakingCawCard from "../../General/NftStakingCawCard/NftStakingCawCard";
import TitleWithParagraph from "../../General/TitleWithParagraph";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Info from "./info.svg";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CatLogo from "../../../../../assets/General/cat-totalsupply-icon.svg";
import StakeChart from "./stakechart.svg";
import Tooltip from "../../../../elements/ToolTip";
import { formattedNum } from "../../../../../functions/formatUSD";
import axios from "axios";
import getFormattedNumber from "../../../../../functions/get-formatted-number";

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: (
    <div>
      <img
        src={
          require("../../../../../assets/General/ArrowIcons/arrow.svg").default
        }
        alt=""
      />
    </div>
  ),
  prevArrow: (
    <div>
      <img
        src={
          require("../../../../../assets/General/ArrowIcons/arrow.svg").default
        }
        alt=""
      />
    </div>
  ),

  responsive: [
    {
      breakpoint: 1327,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MyStakes = ({
  items,
  numberOfNfts,
  onItemClick,
  label,
  smallTitle,
  bigTitle,
  onStakeNFTClick,
  onClaimAllRewards,
  ETHrewards,
}) => {
  const [showAll, setsShowAll] = useState(false);

  const [id, setId] = useState(0);
  const [isconnectedWallet, setisConnectedWallet] = useState(false);
  const [ethToUSD, setethToUSD] = useState(0);

  const convertEthToUsd = async () => {
    const res = axios
      .get("https://api.coinbase.com/v2/prices/ETH-USD/spot")
      .then((data) => {
        return data.data.data.amount;
      });
    return res;
  };

  const setUSDPrice = async () => {
    const ethprice = await convertEthToUsd();
    setethToUSD(Number(ethprice) * Number(ETHrewards));
  };
  const checkConnection = async () => {
    let test = await window.web3.eth?.getAccounts().then((data) => {
      data.length === 0
        ? setisConnectedWallet(false)
        : setisConnectedWallet(true);
    });
  };

  useEffect(() => {
    checkConnection().then();

    if (isconnectedWallet) {
      const interval = setInterval(() => {}, 5000);
      setUSDPrice().then()
      return () => clearInterval(interval);
    }
  }, [checkConnection, id]);

  if (window.innerWidth < 768 && showAll) {
    settings = { ...settings, rows: 2, slidesPerRow: 2, slidesToShow: 1 };
  }

  const renderCards = () => {
    return (
      items.length > 0 &&
      items.map((item, id) => {
        const itemId = item.name?.slice(6, item.name?.length);
        // setId()
        return (
          <div className="stakecard-wrapper">
            <NftStakingCawCard
              key={id}
              nft={item}
              action={onItemClick}
              modalId="#NftUnstake"
              id={itemId}
              isconnectedWallet={isconnectedWallet}
            />
          </div>
        );
      })
    );
  };

  return (
    <div className="my-stake">
      <div className="container-fluid padding-inline">
        <div className="row">
          <div className="col">
            <TitleWithParagraph>
              <h1>
                <small>{smallTitle}</small> <br />
                {bigTitle}
              </h1>
            </TitleWithParagraph>
          </div>
        </div>
        <div
          className="row mints-container "
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            minHeight: "275px",
          }}
        >
          <div className="cards-grid">
            <div className="graphic-container d-none d-sm-flex">
              <div className="graph-inner-wrapper" style={{ display: "grid" }}>
                <img
                  src={require("./stakegraph.png")}
                  alt=""
                  style={{ height: 100 }}
                />
                <span id="staking">Staking</span>
                {isconnectedWallet === true ? (
                  <button className="stakeNowBtn" onClick={onStakeNFTClick}>
                    Stake NFT
                  </button>
                ) : (
                  <></>
                )}
              </div>
              <p>{label}</p>
              <div
                className="startStake"
                style={{
                  display:
                    isconnectedWallet && numberOfNfts > 0 ? "none" : "flex",
                }}
              >
                <div className="startStake-text">
                  <img src={isconnectedWallet === true ? StakeChart : Info} />

                  <p>
                    {isconnectedWallet === true
                      ? "Start earning from your NFT’S while staking to earn up to 50%"
                      : "Please connect your wallet in order to see your Staked NFT’s"}
                  </p>
                </div>
              </div>{" "}
            </div>
            {showAll && renderCards()}
            {!showAll && isconnectedWallet && numberOfNfts !== 0 && (
              <div className={["slider", showAll ? "d-none" : ""].join(" ")}>
                <Slider {...settings}>{renderCards()}</Slider>
              </div>
            )}
            {isconnectedWallet === true ? (
              <div className="withdraw-wrapper">
                <Tooltip title={"Add title here"} />
                <div className="upperSection">
                  <div className="inner-withdraw-wrapper">
                    <span>Total Reward</span>
                    <div className="earnwrapper">
                      <p>Pending</p>
                      <div>
                        <p id="ethPrice">{getFormattedNumber(ETHrewards,2)}ETH</p>
                        <p id="fiatPrice">{formattedNum(ethToUSD, true)}</p>
                      </div>
                      <img
                        src={EthLogo}
                        alt=""
                        style={{ width: 24, height: 24 }}
                      />
                    </div>
                    <div className="earnwrapper">
                      <p>NFTs Staked</p>
                      <h6 className="m-0" id="nftStaked">
                        {items.length}{" "}
                        <img
                          src={CatLogo}
                          alt=""
                          style={{ width: 24, height: 24 }}
                        />
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <button
                    className={
                      items.length > 0
                        ? "claim-rewards-btn-active"
                        : "claim-rewards-btn"
                    }
                    onClick={onClaimAllRewards}
                    style={{
                      pointerEvents: ETHrewards == 0 ? "none" : "auto",
                      borderColor: ETHrewards == 0 ? "#C4C4C4" : "#FF0000",
                      color: ETHrewards == 0 ? "#fff" : "#FF0000",
                      background: ETHrewards == 0 ? "#C4C4C4" : "#fff",
                    }}
                  >
                    Claim all rewards
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
MyStakes.propTypes = {
  items: PropTypes.array,
  numberOfNfts: PropTypes.number,
  onItemClick: PropTypes.func,
  label: PropTypes.string,
  smallTitle: PropTypes.string,
  bigTitle: PropTypes.string,
  onStakeNFTClick: PropTypes.func,
  onClaimAllRewards: PropTypes.func,
  ETHrewards: PropTypes.number,
};

export default MyStakes;
