import React from "react";
import PropTypes from "prop-types";
import SvgEyeIcon from "../NftCawCard/SvgEyeIcon";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimer from "../../../../elements/Countdown";

const NftStakingCawCard = ({ modalId, action, nft, id }) => {
  if (!nft) {
    return null;
  }


  return (
    <>
      <div
        className="nft-caw-card"
        data-toggle="modal"
        style={{margin: 'auto'}}
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
    </>
  );
};
NftStakingCawCard.propTypes = {
  modalId: PropTypes.string,
  action: PropTypes.func,
  nft: PropTypes.object,
  id: PropTypes.number
};

export default NftStakingCawCard;
