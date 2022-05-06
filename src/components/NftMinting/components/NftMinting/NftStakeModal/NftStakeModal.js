import Modal from "../../General/Modal";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import { shortAddress } from "../../../../../Utils/string";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimer from "../../../../elements/Countdown";
import OutsideClickHandler from "react-outside-click-handler";
import { formattedNum } from "../../../../../functions/formatUSD";

const NftStakeModal = ({
                         nftItem,
                         modalId,
                         onShareClick,
                         visible,
                         link,
                         itemId,
                         score,
                         rarity
                       }) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(nftItem.address);
    showToast("Address copied to clipboard!", undefined, { autoClose: 2000 });
  };

  const [active, setActive] = useState(false);
  const [loading, setloading] = useState(false);
  const [loadingdeposit, setloadingdeposit] = useState(false);
  const [showApprove, setshowApprove] = useState(true);

  const [showClaim, setshowClaim] = useState(false);
  const [loadingClaim, setloadingClaim] = useState(false);
  const [status, setStatus] = useState(" *Please approve before deposit");
  const [apr, setapr] = useState(0);
  const [EthRewards, setEthRewards] = useState(0);
  const [ethToUSD, setethToUSD] = useState(0);

  const [connectedWallet, setConnectedWallet] = useState(false);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  const [unstake, setunstake] = useState(false);
  const [isconnectedWallet, setisConnectedWallet] = useState(false);

  const checkConnection = async () => {
    let test = await window.web3.eth?.getAccounts().then((data) => {
      data.length === 0
          ? setisConnectedWallet(false)
          : setisConnectedWallet(true);
    });
  };
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

      if (result === true) setshowApprove(false);
      else {
        setshowApprove(true);
      }
    }
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
          setStatus("*Now you can deposit");
        })
        .catch((err) => {
          setloading(false);
          setStatus("*An error occurred. Please try again");
        });
  };

  const checkLockout = async () => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });

    // if(apr == 50) {
    let nft_contract = await window.getContract("NFTSTAKING50");

    const stakingTime = await nft_contract.methods
        .stakingTime(address)
        .call()
        .then();
    const LockoutTime = await window.nft.checkLockoutTime50().then();

    const sum = parseInt(stakingTime) + parseInt(LockoutTime);

    let now = parseInt((new Date().getTime() / 1000).toFixed(0));

    let countdown = now - sum;

    return countdown;
  };

  async function countdown(s) {
    const d = Math.floor(s / (3600 * 24));

    s -= d * 3600 * 24;

    const h = Math.floor(s / 3600);

    s -= h * 3600;

    const m = Math.floor(s / 60);

    s -= m * 60;

    const tmp = [];

    // d && tmp.push(d);

    h && sethours(parseInt(h));

    (h || m) && setminutes(parseInt(m));

    setseconds(parseInt(s));

    return tmp.join(" ");
  }

  const handleDeposit = async (currentId) => {
    let stake_contract = await window.getContract("NFTSTAKING");
    setloadingdeposit(true);

    const sec = await checkLockout().then();
    countdown(Math.abs(sec));
    setStatus("*Processing deposit");
    await stake_contract.methods
        .deposit([currentId])
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

  const convertEthToUsd = async () => {
    const res = axios
        .get("https://api.coinbase.com/v2/prices/ETH-USD/spot")
        .then((data) => {
          return data.data.data.amount;
        });
    return res;
  };

  const calculateReward = async (currentId) => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });

    let calculateRewards;
    let staking_contract = await window.getContract("NFTSTAKING");
    setActive(true);
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
    const ethprice = await convertEthToUsd();
    setethToUSD(Number(ethprice) * Number(a));
    setEthRewards(Number(a));
  };

  const handleClaim = async (itemId) => {
    let staking_contract = await window.getContract("NFTSTAKING");

    setloadingClaim(true);
    setActive(false);

    await staking_contract.methods
        .claimRewards([itemId])
        .send()
        .then(() => {
          setloadingClaim(false);
          setEthRewards(0);
          setStatus("*Claimed successfully");
        })
        .catch((err) => {
          window.alertify.error(err?.message);
          setloadingClaim(false);
        });
  };

  const handleUnstake = async (itemId) => {
    let stake_contract = await window.getContract("NFTSTAKING");
    setloading(true);
    setStatus("*Processing unstake");
    await stake_contract.methods
        .withdraw([itemId])
        .send()
        .then(() => {
          setStatus("*Unstaked successfully");
          setActive(false);
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
          setStatus("*An error occurred. Please try again");
        });
  };

  useEffect(() => {
    checkApproval().then();
    checkConnection().then();

    const interval = setInterval(async () => {
      if (connectedWallet) {
        calculateReward(itemId).then();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [apr, EthRewards, itemId, isconnectedWallet]);

  return (
      <Modal visible={visible} modalId={modalId}>
        <OutsideClickHandler
            onOutsideClick={() => {
              setshowClaim(false);
              setActive(false);
              setStatus("");
            }}
        >
          <div className="details-modal-content">
            <div className="left-col">
              <div className="rarity-rank">
                <img
                    src={
                      require("../../../../../assets/General/star-circle-icon.svg")
                          .default
                    }
                    alt=""
                />
                <h3 className="red-text">Rarity rank</h3>
                <h3 className="gray-text">{rarity ? rarity : 'Coming soon...'}</h3>
              </div>
              <div className="ownerId-section">
                <p>Owner</p>
                <span>{shortAddress(nftItem.address)}</span>
                <div className="cursor-pointer" onClick={copyAddress}>
                  <p>Copy</p>
                  <span className="m-0">
                  <svg
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M14 0H2C0.895 0 0 0.895 0 2V16H2V2H14V0ZM17 4H6C4.895 4 4 4.895 4 6V20C4 21.105 4.895 22 6 22H17C18.105 22 19 21.105 19 20V6C19 4.895 18.105 4 17 4ZM17 20H6V6H17V20Z"
                        fill="#E30613"
                    />
                  </svg>
                </span>
                </div>
              </div>
              <div className="caw-card">
                {nftItem.image && (
                    <img src={nftItem.image} alt="" className="nft-img" />
                )}
                <div className="id">
                  <h1>{nftItem?.name}</h1>
                  <p>ID {nftItem?.nftId}</p>
                </div>
                <a
                    href="https://opensea.io/collection/catsandwatchessocietycaws"
                    target="_blank"
                    rel="noreferrer"
                    className="view-link"
                >
                  <img
                      src={require("../../../../../assets/Nft/NftMintinglist/opensea-icon.png")}
                      alt=""
                  />
                  <p>View on Opensea</p>
                </a>
              </div>
              <a
                  onClick={() => onShareClick(nftItem)}
                  href={`https://twitter.com/intent/tweet/?text=Check out my recently minted ${encodeURIComponent(
                      nftItem?.name
                  )} NFT on&url=${link}`}
                  className="share-link"
                  target="_blank"
                  rel="noopener"
              >
                <img
                    src={
                      require("../../../../../assets/General/share-icon.svg")
                          .default
                    }
                    alt=""
                />
                <p>Share your NFT online</p>
              </a>
              <div>
                <div>
                  <div>
                    <h3 className="stakeNft-Title">Stake NFT</h3>
                    <p className="stakeNft-subtitle">
                      Stake your NFT to earn rewards
                    </p>
                  </div>
                  <div>
                    <h5 className="select-apr">Select APR</h5>
                    <div>
                      <form className="d-flex align-items-center">
                        <input
                            type="radio"
                            id="50APR"
                            name="locktime"
                            value="50"
                            onClick={(e) => {
                              setapr(e.target.value);
                              setActive(true);
                            }}
                            onChange={(e) => {
                              setapr(e.target.value);
                            }}
                        />
                        {" "}
                        <span for="50APR" className="radioDesc">
                        30 days lock time (50% APR)
                      </span>
                        <br />
                      </form>
                    </div>
                    <div
                        className={
                          !showClaim
                              ? "mt-4 d-flex"
                              : "mt-4 row justify-content-center"
                        }
                        style={{ gap: 20 }}
                    >
                      {showClaim === false ? (
                          <>
                            <button
                                className={
                                  active === true ? "btn activebtn" : "btn passivebtn"
                                }
                                onClick={() => {
                                  handleApprove();
                                }}
                                style={{
                                  background: active
                                      ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                                      : "#C4C4C4",
                                  pointerEvents: active ? "auto" : "none",
                                  display: showApprove === true ? "block" : "none",
                                }}
                            >
                              {loading ? (
                                  <>
                                    <div
                                        className="spinner-border "
                                        role="status"
                                    ></div>
                                  </>
                              ) : (
                                  "Approve"
                              )}
                            </button>
                            <button
                                className="btn passivebtn"
                                style={{
                                  background:
                                      (active === false || !showApprove) && apr == 50
                                          ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                                          : "#C4C4C4",
                                  pointerEvents:
                                      active === false || (!showApprove && apr == 50)
                                          ? "auto"
                                          : "none",
                                }}
                                onClick={() => {
                                  handleDeposit(itemId);
                                }}
                            >
                              {loadingdeposit ? (
                                  <>
                                    <div
                                        className="spinner-border "
                                        role="status"
                                    ></div>
                                  </>
                              ) : (
                                  "Deposit"
                              )}
                            </button>
                          </>
                      ) : (
                          <>
                            <div>
                              <div
                                  className={
                                    showClaim
                                        ? "d-flex justify-content-between"
                                        : "row"
                                  }
                                  style={{ gap: showClaim ? 40 : "" }}
                              >
                                <div className="earnwrapper">
                                  <p>Earned</p>
                                  <div>
                                    <p id="ethPrice">{EthRewards}ETH</p>
                                    <p id="fiatPrice">{formattedNum(ethToUSD, true)}</p>
                                  </div>
                                  <img
                                      src={EthLogo}
                                      alt=""
                                      style={{ width: 24, height: 24 }}
                                  />
                                </div>

                                <button
                                    className={
                                      EthRewards == 0
                                          ? "btn passivebtn"
                                          : "btn activebtn"
                                    }
                                    style={{
                                      background:
                                          active && EthRewards != 0
                                              ? "linear-gradient(88.3deg, #58AEAA 6.79%, #95E0DD 90.24%)"
                                              : "#C4C4C4",
                                      pointerEvents:
                                          active && EthRewards != 0 ? "auto" : "none",
                                    }}
                                    onClick={() => {
                                      handleClaim(itemId);
                                    }}
                                >
                                  {loadingClaim ? (
                                      <>
                                        <div
                                            className="spinner-border "
                                            role="status"
                                        ></div>
                                      </>
                                  ) : (
                                      "Claim Reward"
                                  )}
                                </button>
                              </div>
                              <div
                                  className={
                                    showClaim
                                        ? "d-flex justify-content-between mt-2"
                                        : "row mt-2"
                                  }
                              >
                                <CountDownTimer
                                    hours={hours}
                                    minutes={minutes}
                                    seconds={seconds}
                                    onComplete={() => {
                                      setunstake(true);
                                    }}
                                />
                                {/* <CountDownTimer date={Date.now() + time} onComplete={()=>{setunstake(true)}}/> */}

                                <button
                                    className={
                                      unstake === true
                                          ? "btn activebtn"
                                          : "btn passivebtn"
                                    }
                                    style={{
                                      background:
                                          unstake === true
                                              ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                                              : "#C4C4C4",
                                      pointerEvents:
                                          unstake === true ? "auto" : "none",
                                    }}
                                    onClick={() => {
                                      handleUnstake(itemId);
                                    }}
                                >
                                  {loading ? (
                                      <>
                                        <div
                                            className="spinner-border "
                                            role="status"
                                        ></div>
                                      </>
                                  ) : (
                                      "Unstake"
                                  )}
                                </button>
                              </div>
                            </div>
                          </>
                      )}
                    </div>
                    <p className="mt-1" style={{ color: "#F13227" }}>
                      {status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-col">
              <div className="rarity-score">
                <h1>Rarity Score</h1>
                <span>{score ? score : '??????'}</span>
              </div>
              <p>Rarity...</p>
              {nftItem?.attributes?.map((item, id) => (
                  <div className="progress-bar-wrapper" key={id}>
                    <p className="property-name">{item.name}</p>
                    <div className="progress"> {/* width: `${item.percentage}%` */}
                        <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>  
                    <p className="property-value">{item.value}</p>
                  </div>
              ))}
            </div>
          </div>
        </OutsideClickHandler>
      </Modal>
  );
};
NftStakeModal.propTypes = {
  nftItem: PropTypes.any,
  modalId: PropTypes.string,
  onShareClick: PropTypes.func,
  visible: PropTypes.bool,
  itemId: PropTypes.number,
};

export default NftStakeModal;
