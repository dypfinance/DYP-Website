import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import Box from "@mui/material/Box";
import ToolTip from "../../../../elements/ToolTip";
import X from "../../../../../assets/images/x_close.png";

import NftStakingCawChecklist from "../../General/NftStakingCawChecklist/NftStakingCawChecklist";
const NftStakeCheckListModal = ({
  nftItem,
  open,
  onShareClick,
  onClose,
  onshowToStake,
  onshowStaked,
  link,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "38%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "80%",
  };

  const [active, setActive] = useState(true);
  const [showToStake, setshowToStake] = useState(false);
  const [showStaked, setshowStaked] = useState(false);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="left-col">
          <div className="d-flex align-items-center justify-content-between width-100">
            <div className="rarity-rank d-grid">
              <h3 className="">Stakeable NFT’S</h3>
              <h6 className="checklist-subtitle">
                A list of your NFT collection that can be added and removed from
                the staking rewards
              </h6>
            </div>
            <img src={X} alt="" className="close-x" onClick={onClose} />
          </div>
          <div>
            <div className="sub-navbar-wrapper">
              <h5
                className="to-stake-title"
                onClick={() => {
                  onshowToStake();
                  setshowToStake(true);
                  setshowStaked(false);

                }}
                style={{
                  color: showToStake ? "#E30613" : "#C4C4C4",
                  borderBottom: showToStake ? "2px solid #E30613" : "none",
                }}
              >
                To Stake
              </h5>
              <h5
                className="to-stake-title"
                onClick={() => {
                  onshowStaked();
                  setshowStaked(true);
                  setshowToStake(false);

                }}
                style={{color: showStaked ? "#E30613" : "#C4C4C4",
                borderBottom: showStaked ? "2px solid #E30613" : "none",}}
              >
                Staked
              </h5>
            </div>
          </div>
          <div className="caw-card2">
            {nftItem.length > 0 &&
              nftItem.map((item, id) => {
                return (
                  <NftStakingCawChecklist
                    key={id}
                    nft={item}
                    action={onShareClick}
                    modalId="#newNftchecklist"
                  />
                );
              })}
          </div>

          <div>
            <p className="d-flex info-text">
              <ToolTip title="Add title here" />
              Please selected which NFT’S to Stake then once selected you need
              to approve the procees then proceed to deposit the action in order
              to start recieving reawrds
            </p>
            <div className="mt-2">
              <div>
                <h5 className="select-apr">Select APR</h5>
                <div>
                  <form className="d-flex align-items-center">
                    <input
                      type="radio"
                      id="nolock"
                      name="locktime"
                      value="25"
                    />
                     {" "}
                    <span
                      for="nolock"
                      className="radioDesc"
                      style={{ marginRight: 10 }}
                    >
                      No lock time (25% APR)
                    </span>
                    <br />
                    <input type="radio" id="50APR" name="locktime" value="50" />
                     {" "}
                    <span for="50APR" className="radioDesc">
                      30 days lock time (50% APR)
                    </span>
                    <br />
                  </form>
                </div>
                <div
                  className="mt-4 row justify-content-center"
                  style={{ gap: 20 }}
                >
                  <button
                    className="btn activebtn"
                    onClick={() => setActive(false)}
                    style={{
                      background: active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: active ? "auto" : "none",
                    }}
                  >
                    Approve
                  </button>
                  <button
                    className="btn passivebtn"
                    style={{
                      background: !active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: !active ? "auto" : "none",
                    }}
                  >
                    Deposit
                  </button>
                </div>
                <p className="mt-1" style={{ color: "#F13227" }}>
                  *Please approve before deposit
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};
NftStakeCheckListModal.propTypes = {
  nftItem: PropTypes.array,
  open: PropTypes.bool,
  onShareClick: PropTypes.func,
  onClose: PropTypes.bool,
  onshowToStake: PropTypes.func,
  onshowStaked: PropTypes.func,
};

export default NftStakeCheckListModal;
