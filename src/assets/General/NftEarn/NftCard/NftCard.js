import React, { useState, useEffect } from "react";
import NftBanner from "./cawsimg.svg";
import CawsBadge from "./cawsbadge.svg";
import { NavLink } from "react-router-dom";
import ChevronArrowSvg from "../../ChevronArrowSvg/ChevronArrowSvg";
import EthLogo from "../../../../assets/General/eth-create-nft.png";

const NftCard = () => {
  const [mystakes, setMystakes] = useState([]);
  const [connectedWallet, setConnectedWallet] = useState(false);
  const [isConnectedWallet, setIsConnectedWallet] = useState(false);
  const [countDownLeft, setCountDownLeft] = useState(59000);

  const handleConnectWallet = async () => {
    try {
      let isConnected = await window.connectWallet();

      if (isConnected) {
        setIsConnectedWallet(true);
        let coinbase = await window.getCoinbase();
        // Set Coinbase State
        setConnectedWallet(coinbase);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const myStakes = async () => {
    let staking_contract = await window.getContract("NFT");
    await staking_contract.methods
    .balanceOf('0xEe425BbbEC5e9Bf4a59a1c19eFff522AD8b7A47A')
    .call()
    .then((data)=>{setMystakes(data)});
  };

  const calculateCountdown = async () => {
    const address = await window.getCoinbase();

    let staking_contract = await window.getContract("NFTSTAKING");
    let finalDay = await staking_contract.methods
      .stakingTime(address)
      .call()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        // window.alertify.error(err?.message);
      });

    let lockup_time = await staking_contract.methods
      .LOCKUP_TIME()
      .call()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        // window.alertify.error(err?.message);
      });

    finalDay = parseInt(finalDay) + parseInt(lockup_time);

    setCountDownLeft(parseInt(finalDay * 1000) - Date.now());
  };

  useEffect(() => {
    handleConnectWallet().then();
    calculateCountdown().then();
  }, []);

  useEffect(() => {
    if (connectedWallet) {
      myStakes().then();
    }
  }, [connectedWallet]);

  return (
    <div className="subasset-card-with-button col-md-3">
      <img src={NftBanner} alt="" id="newbadge" />
      <div className="nftcard">
        <div>
          <div className="row m-0 align-items-center justify-content-between data-section-top">
            <p style={{ color: "white" }}>
              <img src={CawsBadge} alt="" className="mr-1" />
              CAWS
            </p>
            <p style={{ color: "white" }}>50% APR</p>
          </div>
         
            <div className="row m-0 align-items-center justify-content-between data-section-middle">
              <p style={{ color: "white" }}>Total NFT locked</p>
              <p style={{ color: "white" }}>{mystakes}/10000</p>
            </div>
        

          <div className="row m-0 align-items-center justify-content-between data-section-bottom">
            <p style={{ color: "white" }}>Lock time</p>
            <p style={{ color: "white" }}>30 Days</p>
          </div>
        </div>
        <div className="whiteseparator"></div>
        <div className="button-wrapper p-0">
          <NavLink to="/stake-caws">
            <button className="depositnowBtn">
              Deposit now
              <ChevronArrowSvg color={"#E9181B"} />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
