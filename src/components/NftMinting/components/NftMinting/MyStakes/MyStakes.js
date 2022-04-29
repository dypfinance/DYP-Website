import NftStakingCawCard from "../../General/NftStakingCawCard/NftStakingCawCard";
import TitleWithParagraph from "../../General/TitleWithParagraph";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Info from "./info.svg";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CatLogo from "../../../../../assets/General/cat-totalsupply-icon.svg";
import StakeChart from "./stakechart.svg";
import Tooltip from "../../../../elements/ToolTip";
import NftUnstakeModal from "../NftUnstakeModal/NftUnstakeModal";
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
  const [apr, setapr] = useState(0);
  const [EthRewards, setEthRewards] = useState(0);
  const [id, setId] = useState(0);

  if (window.innerWidth < 768 && showAll) {
    settings = { ...settings, rows: 2, slidesPerRow: 2, slidesToShow: 1 };
  }

  const calculateReward = async () => {

    
console.log(id)

    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });

    let calculateRewards;
    let staking_contract = await window.getContract("NFTSTAKING");

    calculateRewards = await staking_contract.methods
      .calculateReward(address, [id])
      .call()
      .then((data) => {
        console.log(data)
        return data;
      })
      .catch((err) => {
        // window.alertify.error(err?.message);
      });

    let a = await window.web3.utils.fromWei(calculateRewards, "ether");

    setEthRewards(a);
  };

  const handleClaim = async (id) => {
    let staking_contract = await window.getContract("NFTSTAKING");

    await staking_contract.methods
      .claimRewards([id])
      .send()
      .then(() => {})
      .catch((err) => {
        window.alertify.error(err?.message);
        // setloadingClaim(false);
      });
  };

  const [isconnectedWallet, setisConnectedWallet] = useState(false);

  const checkConnection = async () => {
    let test = await window.web3.eth?.getAccounts().then((data) => {
      data.length === 0
        ? setisConnectedWallet(false)
        : setisConnectedWallet(true);
    });
  };


  useEffect(() => {
    checkConnection().then();
    calculateReward().then();

    const interval = setInterval(() => {
      if (isconnectedWallet) {
        calculateReward().then();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [apr, EthRewards,checkConnection, id]);

  const renderCards = () => {
    return (
      items.length > 0 &&
      items.map((item, id) => {
        setId(item.name?.slice(6, item.name?.length))
        return (
          <div className="stakecard-wrapper">
            <NftStakingCawCard
              key={id}
              nft={item}
              action={onItemClick}
              modalId="#NftUnstake"
              id={id}
            />
            <div style={{ paddingBottom: 10 }}>
              <div
                className="earnwrapper"
                style={{ width: "96%", margin: "auto" }}
              >
                <p>Earned</p>
                <div>
                  <p id="ethPrice">{EthRewards}ETH</p>
                  <p id="fiatPrice">$tbd</p>
                </div>
                <img src={EthLogo} alt="" style={{ width: 24, height: 24 }} />
              </div>
              <div className="earnwrapper justify-content-center">
                <button
                  className="claim-rewards-btn-countdown"
                  onClick={() => {
                    handleClaim(); 
                  }}
                >
                  Claim reward
                </button>
              </div>
            </div>
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
                      <p>Earned</p>
                      <div>
                        <p id="ethPrice">{ETHrewards}ETH</p>
                        <p id="fiatPrice">$ tbd</p>
                      </div>
                      <img
                        src={EthLogo}
                        alt=""
                        style={{ width: 24, height: 24 }}
                      />
                    </div>
                    <div className="earnwrapper">
                      <p>NFT's Staked</p>
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
