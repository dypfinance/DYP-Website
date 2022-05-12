import Modal from "@mui/material/Modal";
import axios from "axios";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import Box from "@mui/material/Box";
import ToolTip from "../../../../elements/ToolTip";
import X from "../../../../../assets/images/x_close.png";
import NftPlaceHolder from "../../General/NftPlaceHolder/NftPlaceHolder";
import NftStakingCawChecklist from "../../General/NftStakingCawChecklist/NftStakingCawChecklist";
import { formattedNum } from "../../../../../functions/formatUSD";
import getFormattedNumber from "../../../../../functions/get-formatted-number";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimerUnstake from "../../../../elements/CountDownUnstake";
import CatLogo from "../../../../../assets/General/cat-totalsupply-icon.svg";

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
  countDownLeft,
  ETHrewards,
  onNftCheckListClick,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: window.innerWidth < 500 ? "77%" : "55%",
    // bgcolor: "var(--black-26-nft)",
    boxShadow: 24,
    p: 4,
    overflow: "scroll",
    height: "80%",
    borderRadius: "8px",
    overflowX: "hidden",
  };

  const [active, setActive] = useState(true);
  const [showToStake, setshowToStake] = useState(false);
  const [showStaked, setshowStaked] = useState(false);
  const [checkbtn, setCheckBtn] = useState(false);
  const [checkUnstakebtn, setCheckUnstakeBtn] = useState(false);

  const [status, setStatus] = useState("");
  const [loading, setloading] = useState(false);
  const [loadingdeposit, setloadingdeposit] = useState(false);
  const [showClaim, setshowClaim] = useState(false);
  const [loadingClaim, setloadingClaim] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(false);
  const [apr, setapr] = useState(50);
  const [showApprove, setshowApprove] = useState(true);
  const [val, setVal] = useState("");
  const [color, setColor] = useState("#F13227");

  //Array of selected NFTs
  const [selectNftIds, setSelectedNftIds] = useState([]);

  const [ethToUSD, setethToUSD] = useState(0);
  let nftIds = [];

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

  // array containing items whether Staked or To Stake

  const checkApproval = async () => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });
    if (address) {
      setConnectedWallet(true);
    } else setConnectedWallet(false);

    const stakeApr50 = await window.config.nftstaking_address50;

    if (apr == 50) {
      const result = await window.nft
        .checkapproveStake(address, stakeApr50)
        .then((data) => {
          return data;
        });

      if (result === true && nftItem.length !== 0) {
        setshowApprove(false);
        setStatus("*Select NFT to deposit");
        setColor("#F13227");
      } else if (result === true && nftItem.length == 0) {
        setStatus("");
      } else if (result === false) {
        setStatus(" *Please approve before deposit");
        setshowApprove(true);
      }
    }
  };

  const handleSelectAll = () => {
    setCheckBtn(!checkbtn);
    setSelectedNftIds(nftIds);
    setCheckUnstakeBtn(false);

  };

  const handleSelectAllToUnstake = () => {
    setCheckUnstakeBtn(!checkUnstakebtn);
    setSelectedNftIds(nftIds);
    setCheckBtn(false);
  };

  const handleApprove = async () => {
    const stakeApr50 = await window.config.nftstaking_address50;

    setloading(true);
    setStatus("*Waiting for approval");
    await window.nft
      .approveStake(stakeApr50)
      .then(() => {
        setActive(false);
        setloading(false);
        setColor("#52A8A4");
        setStatus("*Now you can deposit");
      })
      .catch((err) => {
        setloading(false);
        setColor("#F13227");
        setStatus("*An error occurred. Please try again");
      });
  };

  const handleDeposit = async (value) => {
    let stake_contract = await window.getContract("NFTSTAKING");
    setloadingdeposit(true);
    setStatus("*Processing deposit");
    setColor("#F13227");

    await stake_contract.methods
      .deposit(
        checkbtn === true
          ? nftIds.length === selectNftIds.length
            ? nftIds
            : selectNftIds
          : selectNftIds
      )
      .send()
      .then(() => {
        setloadingdeposit(false);
        setshowClaim(true);
        setColor("#57AEAA");
        setActive(true);
        setStatus("*Sucessful deposit");
      })
      .catch((err) => {
        setloadingdeposit(false);
        setColor("#F13227");
        setStatus("*An error occurred. Please try again");
      });
  };

  useEffect(() => {
    setshowStaked(true);
  }, []);

  useEffect(() => {
    setUSDPrice().then();
  }, [ETHrewards]);

  useEffect(() => {
    if (selectNftIds.length > 50) {
      window.alertify.error("Limit to Stake/Unstake NFT is 50 NFT's per round");
      const interval = setInterval(async () => {
        setCheckBtn(false);
        setCheckUnstakeBtn(false);
        return () => clearInterval(interval);
      }, 500);
    } else if (
      selectNftIds.length > 50 ||
      nftIds.length > 50 &&
      checkbtn === true
    ) {
      window.alertify.error("Limit to Stake/Unstake NFT is 50 NFT's per round");
      const interval = setInterval(async () => {
        setCheckBtn(false);
        setCheckUnstakeBtn(false);
        return () => clearInterval(interval);
      }, 500);
    } else if (
      selectNftIds.length > 50 ||
      nftIds.length > 50 &&
      checkUnstakebtn === true
    ) {
      window.alertify.error("Limit to Stake/Unstake NFT is 50 NFT's per round");
      const interval = setInterval(async () => {
        setCheckBtn(false);
        setCheckUnstakeBtn(false);
        return () => clearInterval(interval);
      }, 500);
    }
  }, [selectNftIds, val, nftIds]);

  useEffect(() => {
    if (showToStake === true) {
      checkApproval().then();
    } else setSelectedNftIds([]);
  }, [showClaim, apr, showToStake]);

  const onEmptyState = () => {};

  const handleUnstake = async (value) => {
    let stake_contract = await window.getContract("NFTSTAKING");
    setStatus("*Processing unstake");
    setColor("#F13227");

    await stake_contract.methods
      .withdraw( checkUnstakebtn === true
        ? nftIds.length === selectNftIds.length
          ? nftIds
          : selectNftIds
        : selectNftIds)
      .send()
      .then(() => {
        setStatus("*Unstaked successfully");
        setColor("#57AEAA");
      })
      .catch((err) => {
        window.alertify.error(err?.message);
        setStatus("An error occurred, please try again");
        setColor("#F13227");
      });
  };

  const devicewidth = window.innerWidth;

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
        setCheckUnstakeBtn(false);
        setCheckBtn(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="left-col">
          <div className="d-flex align-items-center justify-content-between width-100">
            <div className="rarity-rank mt-6" style={{position: 'relative', marginBottom: '6rem', top: '3rem'}}>
              <h3 className="" style={{ fontSize: 16 }}>
                My NFTs
              </h3>
              <h6 className="checklist-subtitle">
                A list of your NFT collection that can be added and removed from
                the staking pool.
              </h6>
            </div>
            <img
              src={X}
              alt=""
              className="close-x"
              onClick={() => {
                onClose();
                setCheckUnstakeBtn(false);
                setCheckBtn(false);
              }}
            />
          </div>
          <div>
            <div className="sub-navbar-wrapper">
              <h5
                className="to-stake-title"
                onClick={() => {
                  onshowToStake();
                  setshowToStake(true);
                  setshowStaked(false);
                  //Make selectedNfts empty []
                  setSelectedNftIds([]);
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
                  //Make selectedNfts empty []
                  setSelectedNftIds([]);
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
              <div className="justify-content-start">
                <button
                  onClick={() => {
                    handleSelectAll();
                  }}
                  className="select-all-btn"
                  style={{
                    display: "flex",
                    pointerEvents: nftItem.length !== 0 ? "auto" : "none",
                    opacity: nftItem.length !== 0 ? "1" : "0.4",
                    color: checkbtn === true ? "#E30613" : "var(--black)",
                  }}
                >
                  <input
                    type="checkbox"
                    id="add-to-stake"
                    name="checkbtn"
                    checked={checkbtn}
                    onChange={() => {}}
                  />
                  {checkbtn ? "Unselect All" : "Select All"}
                </button>
              </div>
            ) : (
              <div className="d-flex justify-content-start">
                <button
                  onClick={() => {
                    handleSelectAllToUnstake();
                    // selectNftIds.push(value)
                  }}
                  className="select-all-btn"
                  style={{
                    display: "flex",
                    pointerEvents:
                      nftItem.length !== 0 && countDownLeft < 0
                        ? "auto"
                        : "none",
                    opacity:
                      nftItem.length !== 0 && countDownLeft < 0 ? "1" : "0.4",
                    color: checkUnstakebtn === true ? "#E30613" : "var(--black)",
                  }}
                >
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
            <div className="caw-card2 align-items-center">
              {nftItem.length == 0 ? (
                [...Array(devicewidth< 500 ? 1 : 8)].map((item, id) => {
                  return (
                    <NftPlaceHolder
                      key={id}
                      onMintClick={() => {
                        onClose();
                        setCheckUnstakeBtn(false);
                        setCheckBtn(false);
                      }}
                    />
                  );
                })
              ) : nftItem.length <= 4 ? (
                <>
                  {nftItem.map((item, id) => {
                    let nftId = item.name?.slice(6, nftItem.name?.length);
                   
                    if (showToStake) {
                      // selectNftIds.push(nftId);
                      nftIds.push(nftId);
                    }
                    if (showStaked) {
                      nftIds.push(nftId);

                      // selectNftIds.push(nftId)
                    }
                    return (
                      <>
                        <NftStakingCawChecklist
                          key={id}
                          nft={item}
                          modalId="#newNftchecklist"
                          isStake={showStaked}
                          countDownLeft={countDownLeft}
                          checked={
                            (showToStake === true && checkbtn === true) ||
                            (showStaked === true && checkUnstakebtn === true)
                          }
                          checklistItemID={nftId}
                          onChange={(value) => {
                            selectNftIds.indexOf(value) === -1
                              ? selectNftIds.push(value)
                              : selectNftIds.splice(
                                  selectNftIds.indexOf(value),
                                  1
                                );
                            setSelectedNftIds(selectNftIds);
                            console.log(selectNftIds);
                            setVal(value);
                          }}
                        />
                      </>
                    );
                  })}
                  {[...Array(devicewidth< 500 ? 1 : Math.abs(8 - parseInt(nftItem.length)))].map(
                    (item, id) => {
                      return (
                        <NftPlaceHolder
                          key={id}
                          onMintClick={() => {
                            onClose();
                            setCheckUnstakeBtn(false);
                            setCheckBtn(false);
                          }}
                        />
                      );
                    }
                  )}
                </>
              ) : (
                nftItem.map((item, id) => {
                  let nftId = item.name?.slice(6, nftItem.name?.length);
                  if (showToStake) {
                    // selectNftIds.push(nftId);
                    nftIds.push(nftId);
                  }
                  if (showStaked) {
                    nftIds.push(nftId);

                    // selectNftIds.push(nftId)
                  }
                  return (
                    <>
                      <NftStakingCawChecklist
                        key={id}
                        nft={item}
                        action={onShareClick}
                        modalId="#NftUnstake2"
                        isStake={showStaked}
                        countDownLeft={countDownLeft}
                        checked={
                          (showToStake === true && checkbtn === true) ||
                          (showStaked === true && checkUnstakebtn === true)
                        }
                        checklistItemID={nftId}
                        onChange={(value) => {
                          selectNftIds.indexOf(value) === -1
                            ? selectNftIds.push(value)
                            : selectNftIds.splice(
                                selectNftIds.indexOf(value),
                                1
                              );
                          setSelectedNftIds(selectNftIds);
                          console.log(selectNftIds);
                          setVal(value);
                        }}
                      />
                    </>
                  );
                })
              )}
            </div>
          </div>
        </div>{" "}
        <div style={{ display: "block" }} className="bottom-static-wrapper">
          <p className="d-flex info-text">
           *
            {!showStaked
              ? "Please select which NFTs to Stake. Once selected, you need to approve the process and then proceed to deposit in order to start receiving rewards."
              : "Please select your NFT’S to Claim or to Unstake"}
          </p>

          <div className="mt-2">
            <div style={{ display: showStaked === false ? "block" : "none" }}>
              <h5 className="select-apr">Select Pool</h5>
              <div>
                <div className="d-flex justify-content-between">
                  <form className="d-flex flex-column" style={{ gap: 5 }}>
                    <input
                      type="radio"
                      id="50APR"
                      name="locktime"
                      value="50"
                      checked={true}
                      className="d-none"
                    />

                    <span className="aprText">50% APR</span>
                    <span className="radioDesc" style={{ color: "#939393" }}>
                      30 days lock time
                    </span>
                  </form>
                  <div
                    className="d-flex justify-content-between"
                    style={{ gap: 5 }}
                  >
                    <span
                      id="ethPrice"
                      className="mb-0"
                      style={{
                        display: "flex",
                        color: "#1d91d0",
                        fontWeight: 700,
                      }}
                    >
                      {selectNftIds.length}
                      /50
                    </span>
                    <span
                      style={{
                        color: "#F13227",
                        fontWeight: 700,
                        display: "flex",
                      }}
                    >
                      selected
                    </span>

                    <img
                      src={CatLogo}
                      alt=""
                      style={{ width: 24, height: 24 }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="mt-4 row justify-content-center"
                style={{
                  gap: 20,
                  display: showStaked === false ? "" : "none",
                }}
              >
                <button
                  className="btn activebtn"
                  onClick={() => {
                    handleApprove();
                  }}
                  style={{
                    background:
                      active && nftItem.length > 0
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                    pointerEvents:
                      active && nftItem.length > 0 ? "auto" : "none",
                    display: showApprove === true ? "block" : "none",
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
                    background:
                      !active || (!showApprove && nftItem.length > 0)
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                    pointerEvents:
                      !active || (!showApprove && nftItem.length > 0)
                        ? "auto"
                        : "none",
                  }}
                  onClick={() =>
                    checkbtn === true && selectNftIds.length === 0
                      ? onEmptyState()
                      : handleDeposit(val)
                  }
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
              <p className="mt-1" style={{ color: color }}>
                {status}
              </p>
            </div>
          </div>

          <div
            className="mt-2"
            style={{
              display:
                showStaked === true && nftItem.length > 0 ? "block" : "none",
            }}
          >
            <div>
              <div
                className="mt-4 row justify-content-between"
                style={{ gap: 20 }}
              >
                <div className="row claimAll-wrapper">
                  <button
                    className="btn claim-reward-button"
                    onClick={() => {
                      onClaimAll();
                      // setCheckUnstakeBtn(false);
                    }}
                    style={{
                      background:
                        ETHrewards != 0
                          ? "linear-gradient(51.32deg, #57aeaa -12.3%, #94e0dc 50.14%)"
                          : "#C4C4C4",
                      pointerEvents:
                        ETHrewards != 0 ? "auto" : "none",
                      maxWidth: "none",
                    }}
                  >
                    {loadingdeposit ? (
                      <>
                        <div className="spinner-border " role="status"></div>
                      </>
                    ) : (
                      "Claim All Rewards"
                    )}
                  </button>
                  <div
                    className="earn-checklist-container d-block mb-0 w-100"
                    style={{
                      boxShadow: "none",
                      borderTop: "none",
                      paddingLeft: 0,
                      paddingRight: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <p
                        id="earnedText"
                        className="mb-0"
                        style={{
                          display: "flex",
                          gap: 5,
                          alignItems: "baseline",
                        }}
                      >
                        {" "}
                        <ToolTip
                          title=""
                          icon={"i"}
                          padding={"5px 0px 0px 0px"}
                        />
                        All total earned
                      </p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p id="ethPrice" className="mb-0">
                            {getFormattedNumber(ETHrewards, 2)}ETH
                          </p>
                          <p id="fiatPrice" className="mb-0">
                            {formattedNum(ethToUSD, true)}
                          </p>
                        </div>
                        <img
                          src={EthLogo}
                          alt=""
                          style={{ width: 24, height: 24 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="row claimAll-wrapper"
                  style={{ background: "rgba(153, 153, 153, 0.1)" }}
                >
                  <button
                    className="btn activebtn"
                    onClick={() => {
                      checkUnstakebtn === true &&
                      selectNftIds.length === nftItem.length
                        ? onUnstake()
                        : checkUnstakebtn === true &&
                          selectNftIds.length === 0 
                        ? onEmptyState()
                        : selectNftIds.length !== 0 &&
                          selectNftIds.length < nftItem.length
                        ? handleUnstake(selectNftIds)
                        : onUnstake();
                    }}
                    style={{
                      background:
                        active && selectNftIds.length !== 0
                          ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                          : nftItem.length !== 0 &&
                            checkUnstakebtn === true &&
                            selectNftIds.length == 0
                          ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                          : "#C4C4C4",
                      pointerEvents:
                        active && selectNftIds.length !== 0
                          ? "auto"
                          : nftItem.length !== 0 &&
                            checkUnstakebtn === true &&
                            selectNftIds.length == 0
                          ? "auto"
                          : "none",
                      maxWidth: "none",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="spinner-border " role="status"></div>
                      </>
                    ) : (
                      "Unstake Selected"
                    )}
                  </button>
                  <div
                    className="earn-checklist-container d-block mb-0 w-100"
                    style={{
                      boxShadow: "none",
                      borderTop: "none",
                      paddingLeft: 18,
                      paddingRight: 18,
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div style={{display: 'flex', alignItems: 'baseline', gap: 20}}>
                      <ToolTip
                    title=""
                    icon={"i"}
                    color={'#999999'}
                    borderColor={'#999999'}
                    padding={"5px 1px 0px 0px"}
                  />
                      <CountDownTimerUnstake
                        date={Date.now() + countDownLeft}
                        onComplete={() => {}}
                      /></div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                          className="d-flex justify-content-between"
                          style={{ gap: 5 }}
                        >
                          <span
                            id="ethPrice"
                            className="mb-0"
                            style={{ alignItems: "end", display: "flex" }}
                          >
                            {selectNftIds.length}
                            /50
                          </span>
                          <span
                            style={{
                              color: "#F13227",
                              fontWeight: 700,
                              lineHeight: "18px",
                              display: "flex",
                              alignItems: "end",
                            }}
                          >
                            selected
                          </span>

                          <img
                            src={CatLogo}
                            alt=""
                            style={{ width: 24, height: 24 }}
                          />
                        </div>
                        <span style={{ fontSize: 9, color: "#939393" }}>
                          Maximum of 50 NFT’s selectable
                        </span>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <p
                className="mt-1"
                style={{ color: active ? "#F13227" : "#52A8A4" }}
              >
                {showApprove === false ? "" : status}
              </p>
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
  ETHrewards: PropTypes.number,
  onNftCheckListClick: PropTypes.func,
};

export default NftStakeCheckListModal;
