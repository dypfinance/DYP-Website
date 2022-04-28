import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import SvgEyeIcon from "../NftCawCard/SvgEyeIcon";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimer from "../../../../elements/Countdown";

const NftStakingCawChecklist = ({ modalId, action, nft, isStake, checked }) => {
  const [checkbtn, setCheckBtn] = useState(false);
  const [Unstakebtn, setUnstakeBtn] = useState(false);

  useEffect(()=>{
    if(checked === true) setCheckBtn(true) 
    else setCheckBtn(false)
   
  }, [checked])

  
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
        <div
          className="elevated-stake-container"
          style={{ background: !isStake ? "transparent" : "#fff" }}
        >
          <div
            style={{
              background:
                (checkbtn && !isStake || checked)
                  ? "linear-gradient(209.67deg, #FF4229 1.51%, #E30613 98.12%)"
                  : "white",
            }}
            className="sub-container"
          >
            <img
              src={nft.image.replace("images", "thumbs")}
              className="nft-img"
              alt=""
            />
            <p
              style={{
                color:
                  (!checkbtn && !isStake && !checked)
                    ? "var(--light-gray-99-nft)"
                    : isStake
                    ? "var(--light-gray-99-nft)"
                    : "#fff",
              }}
            >
              CAWS
            </p>
            <div className="footer">
              <p
                className="nft-id"
                style={{
                  color:
                    (!checkbtn && !isStake && !checked)
                      ? "var(--black-nft)"
                      : isStake
                      ? "var(--black-nft)"
                      : "#fff",
                }}
              >
                #{String(nft.name).replace("CAWS #", "")}
              </p>
              {/* <div className="img">
              <SvgEyeIcon />
            </div> */}
            </div>
          </div>
          {isStake ? (
            <>
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
              <button
                className="checkbox-button"
                onClick={() => {
                  setUnstakeBtn(!Unstakebtn);
                }}
                style={{
                  background:
                    !checked && !Unstakebtn
                      ? "linear-gradient(51.32deg, #e30613 -12.3%, #fa4a33 50.14%)"
                      : "#C4C4C4",
                }}
              >
                <input
                  type="checkbox"
                  id="add-to-unstake"
                  name="AddtoUnstake"
                  checked={(checked || Unstakebtn  && isStake)}
                />
                {(!checked && !Unstakebtn && isStake) ? "Select" : "UnSelect"}
              </button>
              
            </>
          ) : (
            <>
              <button
                className="checkbox-button"
                onClick={() => {
                  setCheckBtn(!checkbtn);
                }}
                style={{
                  background:
                    !checked && !checkbtn
                      ? "linear-gradient(51.32deg, #e30613 -12.3%, #fa4a33 50.14%)"
                      : "#C4C4C4",
                }}
              >
                <input
                  type="checkbox"
                  id="add-to-stake"
                  name="Addtostake"
                  checked={(checked || checkbtn && !isStake)}
                />
                {(!checked && !checkbtn && !isStake) ? "Add to Stake" : "Remove Stake"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
NftStakingCawChecklist.propTypes = {
  modalId: PropTypes.string,
  action: PropTypes.func,
  nft: PropTypes.object,
  isStake: PropTypes.bool,
  checked: PropTypes.bool,
};

export default NftStakingCawChecklist;
