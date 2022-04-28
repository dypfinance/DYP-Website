import Modal from "../../General/Modal";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import { shortAddress } from "../../../../../Utils/string";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";

const NftStakeModal = ({ nftItem, modalId, onShareClick, visible, link }) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(nftItem.address);
    showToast("Address copied to clipboard!", undefined, { autoClose: 2000 });
  };

  const [active, setActive] = useState(true);
  const [loading, setloading] = useState(false);
  const [loadingdeposit, setloadingdeposit] = useState(false);
  const [showApprove, setshowApprove] = useState(true);

  const [showClaim, setshowClaim] = useState(false);
  const [loadingClaim, setloadingClaim] = useState(false);
  const [status, setStatus] = useState(" *Please approve before deposit");
  const [apr, setapr] = useState(0);
  const [EthRewards, setEthRewards] = useState(0);
  const [connectedWallet, setConnectedWallet] = useState(false);

  const checkApproval = async () => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });
    if (address) {
      setConnectedWallet(true);
    } else setConnectedWallet(false);
    const stakeApr25 = await window.config.nftstaking_address;
    const stakeApr50 = await window.config.nftstaking_address50;

    if (apr == 25) {
      const result = await window.nft
        .checkapproveStake(address, stakeApr25)
        .then((data) => {
          return data;
        });
      if (result === true) {setshowApprove(false);}
      else {
        setshowApprove(true);
      }
    }

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
    const stakeApr25 = await window.config.nftstaking_address;
    const stakeApr50 = await window.config.nftstaking_address50;

    setloading(true);
    setStatus("*Waiting for approval");
    await window.nft
      .approveStake(apr == 25 ? stakeApr25 : stakeApr50)
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
      .deposit([nft_id])
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

  const calculateReward = async () => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });
    const nft_id = nftItem.name?.slice(6, nftItem.name?.length);
    let calculateRewards;
    let staking_contract = await window.getContract("NFTSTAKING");

    calculateRewards = await staking_contract.methods
      .calculateReward(address, [nft_id])
      .call()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        window.alertify.error(err?.message);
      });

    let a = await window.web3.utils.fromWei(calculateRewards, "ether");

    setEthRewards(a);
  };

  const handleClaim = async () => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });
    const nft_id = nftItem.name?.slice(6, nftItem.name?.length);
    let staking_contract = await window.getContract("NFTSTAKING");

    setloadingClaim(true);

    await staking_contract.methods
      .claimRewards([nft_id])
      .send()
      .then(() => {
        setloadingClaim(false);
        setEthRewards(0);
      })
      .catch((err) => {
        window.alertify.error(err?.message);
        setloadingClaim(false);
      });
  };

  const handleUnstake = async () => {
    // const nft_id = nftItem.name?.slice(6, nftItem.name?.length);
    // let stake_contract = await window.getContract("NFTSTAKING");
    // setStatus('*Processing unstake');
    // await stake_contract.methods
    // .widthdraw([nft_id])
    // .send()
    // .then(()=>{
    //   setStatus('*Unstaked successfully');
    // })
  };

  useEffect(() => {
   
      checkApproval().then();
    
  }, [ apr]);

  
  return (
    <Modal visible={visible} modalId={modalId}>
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
            <h3 className="red-text">Rarity rank </h3>
            <h3 className="gray-text">Coming soon...</h3>
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
                require("../../../../../assets/General/share-icon.svg").default
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
                      id="nolock"
                      name="locktime"
                      value="25"
                      onChange={(e) => {
                        setapr(e.target.value);
                      }}
                      onClick={(e) => {
                        setapr(e.target.value);
                      }}
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
                    <input
                      type="radio"
                      id="50APR"
                      name="locktime"
                      value="50"
                      onClick={(e) => {
                        setapr(e.target.value);
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
                        className="btn activebtn"
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
                          background: !active || !showApprove
                            ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                            : "#C4C4C4",
                          pointerEvents: !active || !showApprove ? "auto" : "none",
                        }}
                        onClick={handleDeposit}
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
                            showClaim ? "d-flex justify-content-between" : "row"
                          }
                        >
                          <div className="earnwrapper">
                            <p>Earned</p>
                            <div>
                              <p id="ethPrice">{EthRewards}ETH</p>
                              <p id="fiatPrice">$tbd</p>
                            </div>
                            <img
                              src={EthLogo}
                              alt=""
                              style={{ width: 24, height: 24 }}
                            />
                          </div>

                          <button
                            className={
                              apr === 25 ? "btn activebtn" : "btn passivebtn"
                            }
                            style={{
                              background: active
                                ? "linear-gradient(88.3deg, #58AEAA 6.79%, #95E0DD 90.24%)"
                                : "#C4C4C4",
                              pointerEvents: active ? "auto" : "none",
                            }}
                            onClick={handleClaim}
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
                          <div className="earnwrapper">no lock time</div>

                          <button
                            className="btn passivebtn"
                            style={{
                              background: !active
                                ? "linear-gradient(88.3deg, #58AEAA 6.79%, #95E0DD 90.24%)"
                                : "#C4C4C4",
                              pointerEvents: !active ? "auto" : "none",
                            }}
                            onClick={handleUnstake}
                          >
                            {loadingClaim ? (
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
                <p
                  className="mt-1"
                  style={{ color: active ? "#F13227" : "#52A8A4" }}
                >
                  {showApprove=== false ? '*Now you can deposit' : status}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-col">
          <div className="rarity-score">
            <h1>Rarity Score</h1>
            <span>??????</span>
          </div>
          <p>Rarity...</p>
          {nftItem?.properties?.map((item, id) => (
            <div className="progress-bar-wrapper" key={id}>
              <p className="property-name">{item.name}</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${item.percentage}%` }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p className="property-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
NftStakeModal.propTypes = {
  nftItem: PropTypes.any,
  modalId: PropTypes.string,
  onShareClick: PropTypes.func,
  visible: PropTypes.bool,
};

export default NftStakeModal;
