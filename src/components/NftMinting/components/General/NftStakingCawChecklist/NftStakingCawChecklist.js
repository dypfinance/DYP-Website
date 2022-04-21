import React from "react";
import PropTypes from "prop-types";
import SvgEyeIcon from "../NftCawCard/SvgEyeIcon";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimer from "../../../../elements/Countdown";

const NftStakingCawChecklist = ({ modalId, action, nft }) => {
  if (!nft) {
    return null;
  }
  return (
    <>
      <div
        className="nft-caw-card"
        data-toggle="modal"
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
            {/* <div className="img">
              <SvgEyeIcon />
            </div> */}
          </div>{" "}
          <div className="earnwrapper">
            <p>Earned</p>
            <div>
              <p id="ethPrice">0.76ETH</p>
              <p id="fiatPrice">$1,427.12</p>
            </div>
            <img src={EthLogo} alt="" style={{ width: 24, height: 24 }} />
          </div>
          <div className="earnwrapper justify-content-center">
            <CountDownTimer date={"Wed, 23 Apr 2022 13:06:00 GMT-0000"} />
          </div>
        </div>
      </div>
    </>
  );
};
NftStakingCawChecklist.propTypes = {
  modalId: PropTypes.string,
  action: PropTypes.func,
  nft: PropTypes.object,
};

export default NftStakingCawChecklist;
