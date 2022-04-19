import NftCawCard from "../../General/NftCawCard/NftCawCard";
import TitleWithParagraph from "../../General/TitleWithParagraph";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import Info from "./info.svg";
import StakeChart from "./stakechart.svg";
let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
}) => {
  const [showAll, setsShowAll] = useState(false);

  if (window.innerWidth < 768 && showAll) {
    settings = { ...settings, rows: 2, slidesPerRow: 2, slidesToShow: 1 };
  }

  const renderCards = () => {
    return (
      items.length > 0 &&
      items.map((item, id) => {
        return (
          <NftCawCard
            key={id}
            nft={item}
            action={onItemClick}
            modalId="#newNftStake"
          />
        );
      })
    );
  };

  const [connectedWallet, setConnectedWallet] = useState(false);

  const checkConnection = async () => {
    let test = await window.web3.eth?.getAccounts().then((data) => {
      data.length === 0 ? setConnectedWallet(false) : setConnectedWallet(true);
    });
  };

  useEffect(() => {
    checkConnection();
  }, [checkConnection]);

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
        <div className="row mints-container ">
          <div className="cards-grid">
            <div className="graphic-container d-none d-sm-flex">
              <div className="graph-inner-wrapper" style={{ display: "grid" }}>
                <img
                  src={require("./stakegraph.png")}
                  alt=""
                  style={{ height: 100 }}
                />
                <span id="staking">Staking</span>
                {connectedWallet === true ? (
                  <button className="stakeNowBtn" onClick={() => {}}>
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
                    connectedWallet && numberOfNfts > 1 ? "none" : "flex",
                }}
              >
                <div className="startStake-text">
                  <img src={connectedWallet === true ? StakeChart : Info} />

                  <p>
                    {connectedWallet === true
                      ? "Start earning from your NFT’S while staking to earn up to 50%"
                      : "Please connect your wallet in order to see your Staked NFT’s"}
                  </p>
                </div>
              </div>{" "}
            </div>
            {showAll && renderCards()}
            {!showAll && (
              <div className={["slider", showAll ? "d-none" : ""].join(" ")}>
                <Slider {...settings}>{renderCards()}</Slider>
              </div>
            )}
            {connectedWallet === true ? 
               <div className="withdraw-wrapper">
               <div className="upperSection">
                 <div className="inner-withdraw-wrapper">
                   <span>Total Reward</span>
                   <p>Earned</p>
                   <p>NFT's Staked</p>
                 </div>
               </div>
               <div>
                 <button>Claim all rewards</button>
               </div>
             </div>
             : <></>}
         

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
};

export default MyStakes;
