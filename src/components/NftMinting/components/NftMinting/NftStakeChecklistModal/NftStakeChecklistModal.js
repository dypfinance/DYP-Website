import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";
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
  onUnstake,
  onClaimAll,
  link,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "55%",
    // bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "80%",
  };

  const [active, setActive] = useState(true);
  const [showToStake, setshowToStake] = useState(false);
  const [showStaked, setshowStaked] = useState(false);
  const [checkbtn, setCheckBtn] = useState(false);
  const [checkUnstakebtn, setCheckUnstakeBtn] = useState(false);

  const [status, setStatus] = useState(" *Please approve before deposit");
  const [loading, setloading] = useState(false);
  const [loadingdeposit, setloadingdeposit] = useState(false);
  const [showClaim, setshowClaim] = useState(false);
  const [loadingClaim, setloadingClaim] = useState(false);

  const handleSelectAll = () => {
    setCheckBtn(!checkbtn);
  };

  const handleSelectAllToUnstake = () => {
    setCheckUnstakeBtn(!checkUnstakebtn);
    setCheckBtn(false);
  };

  const handleApprove = async () => {
    setloading(true);
    setStatus("*Waiting for approval");

    await window.nft
      .approveStake()
      .then(() => {
        setActive(false);
        setloading(false);
        setStatus("*Now you can deposit");
      })
      .catch((err) => {
        setloading(false);
        setStatus("*An error occurred. Please try again");
      });
  };

  const handleDeposit = async () => {
    const nft_id = nftItem.name?.slice(6, nftItem.name?.length);
    let stake_contract = await window.getContract("NFTSTAKING");
    setloadingdeposit(true);
    setStatus("*Processing deposit");

    await stake_contract.methods
      .deposit(nftIds)
      .send()
      .then(() => {
        setloadingdeposit(false);
        setshowClaim(true);
        setActive(true);
        setStatus("*Sucessful deposit");
      })
      .catch((err) => {
        setloadingdeposit(false);
        setStatus("*An error occurred. Please try again");
      });
  };

  useEffect(() => {
    setshowStaked(true);
  }, []);
  let nftIds = [];

  return (
    <Modal
      open={open}
      onClose={()=>{onClose(); setCheckUnstakeBtn(false); setCheckBtn(false)}}
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
            <img src={X} alt="" className="close-x" onClose={onClose} />
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
                style={{
                  color: showStaked ? "#E30613" : "#C4C4C4",
                  borderBottom: showStaked ? "2px solid #E30613" : "none",
                }}
              >
                Staked
                {showStaked && (
                  <sup className="sup-notification">
                    <span style={{ marginTop: 4 }}>{nftItem.length}</span>
                  </sup>
                )}
              </h5>
            </div>
            {showToStake ? (
              <div className="d-flex justify-content-end">
                <button
                  onClick={() => {
                    handleSelectAll();
                  }}
                  className="select-all-btn"
                >
                  {" "}
                  <input
                    type="checkbox"
                    id="add-to-stake"
                    name="Addtostake"
                    checked={checkbtn}
                  />
                  {checkbtn ? "Unselect All" : "Select All"}
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <button
                  onClick={() => {
                    handleSelectAllToUnstake();
                  }}
                  className="select-all-btn"
                >
                  {" "}
                  <input
                    type="checkbox"
                    id="add-to-stake"
                    name="AddtoUnstake"
                    checked={checkUnstakebtn}
                  />
                  {checkUnstakebtn ? "Unselect All" : "Select All"}
                </button>
              </div>
            )}
          </div>
          <div className="caw-card2">
            {nftItem.length > 0 &&
              nftItem.map((item, id) => {
                let nftId = item.name?.slice(6, nftItem.name?.length);
                if (checkbtn === true && showStaked) {
                  nftIds.push(nftId);
                }

                if (!checkUnstakebtn && showStaked && !checkbtn) {
                  nftIds.push(nftId);
                }
                return (
                  <>
                    <NftStakingCawChecklist
                      key={id}
                      nft={item}
                      action={onShareClick}
                      modalId="#newNftchecklist"
                      isStake={showStaked}
                      checked={
                        (!showStaked && checkbtn) ||
                        (showStaked && checkUnstakebtn)
                      }
                    />
                  </>
                );
              })}
          </div>

          <div>
            <p className="d-flex info-text">
              <ToolTip title="Add title here" />
              Please select which NFT’S to Stake then once selected you need to
              approve the procees then proceed to deposit the action in order to
              start recieving reawrds.
            </p>

            <div
              className="mt-2"
              style={{ display: showStaked === false ? "block" : "none" }}
            >
              <div>
                <h5 className="select-apr">Select APR</h5>
                <div>
                  <form className="d-flex">
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
                    onClick={() => {
                      handleApprove();
                    }}
                    style={{
                      background: active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: active ? "auto" : "none",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="spinner-border " role="status"></div>
                      </>
                    ) : (
                      "Approve"
                    )}
                  </button>
                  <button
                    className="btn passivebtn"
                    style={{
                      background: !active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: !active ? "auto" : "none",
                    }}
                    onClick={handleDeposit}
                  >
                    {loadingdeposit ? (
                      <>
                        <div className="spinner-border " role="status"></div>
                      </>
                    ) : (
                      "Deposit"
                    )}
                  </button>
                </div>
                <p
                  className="mt-1"
                  style={{ color: active ? "#F13227" : "#52A8A4" }}
                >
                  {status}
                </p>
              </div>
            </div>

            <div
              className="mt-2"
              style={{ display: showStaked === true ? "block" : "none" }}
            >
              <div>
                <div
                  className="mt-4 row justify-content-center"
                  style={{ gap: 20 }}
                >
                  <button
                    className="btn activebtn"
                    onClick={() => {
                      onUnstake();
                    }}
                    style={{
                      background: active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: active ? "auto" : "none",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="spinner-border " role="status"></div>
                      </>
                    ) : (
                      "Unstake All"
                    )}
                  </button>
                  <button
                    className="btn passivebtn"
                    style={{
                      background: !active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: !active ? "auto" : "none",
                    }}
                    onClick={onClaimAll}
                  >
                    {loadingdeposit ? (
                      <>
                        <div className="spinner-border " role="status"></div>
                      </>
                    ) : (
                      "Claim All"
                    )}
                  </button>
                </div>
                <p
                  className="mt-1"
                  style={{ color: active ? "#F13227" : "#52A8A4" }}
                >
                  {status}
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
  onClose: PropTypes.func,
  onshowToStake: PropTypes.func,
  onshowStaked: PropTypes.func,
  onClaimAll: PropTypes.func,
  onUnstake: PropTypes.func,
};

export default NftStakeCheckListModal;
