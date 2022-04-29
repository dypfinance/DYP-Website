import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import SvgEyeIcon from "../NftCawCard/SvgEyeIcon";
const NftStakingCawCard = ({ modalId, action, nft, id, isconnectedWallet }) => {
  const [apr, setapr] = useState(0);

  const [EthRewards, setEthRewards] = useState(0);

  const calculateReward = async (currentId) => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });

    let calculateRewards;
    let staking_contract = await window.getContract("NFTSTAKING");
    calculateRewards = await staking_contract.methods
      .calculateReward(address, [currentId])
      .call()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        // window.alertify.error(err?.message);
      });

    let a = await window.web3.utils.fromWei(calculateRewards, "ether");

    setEthRewards(a);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isconnectedWallet) {
        calculateReward(id).then();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [apr, EthRewards, isconnectedWallet]);

  const handleClaim = async (id) => {
    let staking_contract = await window.getContract("NFTSTAKING");

    await staking_contract.methods
      .claimRewards([id])
      .send()
      .then(() => {
        setEthRewards(0);
      })
      .catch((err) => {
        window.alertify.error(err?.message);
        // setloadingClaim(false);
      });
  };

  if (!nft) {
    return null;
  }

  return (
    <>
      <div
        className="nft-caw-card"
        data-toggle="modal"
        style={{ margin: "auto" }}
        data-target={modalId}
        onClick={() => {
          action(nft);
        }}
      >
        <div className="elevated-stake-container">
          <img
            src={nft.image.replace("images", "thumbs")}
            className="nft-img"
            alt=""
          />
          <p>CAWS</p>
          <div className="footer">
            <p className="nft-id">#{String(nft.name).replace("CAWS #", "")}</p>
            <div className="img">
              <SvgEyeIcon />
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="earnwrapper" style={{ width: "96%", margin: "auto" }}>
        <p>Earned</p>
        <div>
          <p id="ethPrice">{EthRewards}ETH</p>
          <p id="fiatPrice">$tbd</p>
        </div>
        <img src={EthLogo} alt="" style={{ width: 24, height: 24 }} />
      </div>
      <div style={{ paddingBottom: 10 }}>
        <div className="earnwrapper justify-content-center">
          <button
            className="claim-rewards-btn-countdown"
            onClick={(e) => {
              e.stopPropagation();
              handleClaim(id);
            }}
          >
            Claim reward
          </button>
        </div>
      </div>
    </>
  );
};
NftStakingCawCard.propTypes = {
  modalId: PropTypes.string,
  action: PropTypes.func,
  nft: PropTypes.object,
  id: PropTypes.number,
  isconnectedWallet: PropTypes.bool,
};

export default NftStakingCawCard;
