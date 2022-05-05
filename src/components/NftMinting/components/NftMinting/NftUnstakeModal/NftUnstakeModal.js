import Modal from "../../General/Modal";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import { shortAddress } from "../../../../../Utils/string";
import CountDownTimer from "../../../../elements/Countdown";
import EthLogo from "../../../../../assets/General/eth-create-nft.png";
import CountDownTimerUnstake from "../../../../elements/CountDownUnstake";

const NftUnstakeModal = ({ nftItem, modalId, onShareClick, visible, link, itemId }) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(nftItem.address);
    showToast("Address copied to clipboard!", undefined, { autoClose: 2000 });
  };

  const [active, setActive] = useState(true);
  const [loading, setloading] = useState(false);
  const [loadingdeposit, setloadingdeposit] = useState(false);
  const [status, setStatus] = useState(" *Please approve before deposit");

  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  const [unstake, setunstake] = useState(false);
  const [EthRewards, setEthRewards] = useState(0);
  const [loadingClaim, setloadingClaim] = useState(false);
  const [isconnectedWallet, setisConnectedWallet] = useState(false);

  const checkConnection = async () => {
    let test = await window.web3.eth?.getAccounts().then((data) => {
      data.length === 0
        ? setisConnectedWallet(false)
        : setisConnectedWallet(true);
    });
  };
  const checkLockout = async () => {
    const address = await window.web3.eth?.getAccounts().then((data) => {
      return data[0];
    });

    let nft_contract = await window.getContract("NFTSTAKING50");

    const stakingTime = await nft_contract.methods
      .stakingTime(address)
      .call()
      .then();
    const LockoutTime = await window.nft.checkLockoutTime50().then();

    const sum = parseInt(stakingTime) + parseInt(LockoutTime);

    let now = parseInt((new Date().getTime() / 1000).toFixed(0));

    let countdown = now - sum;
    // console.log(countdown)
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

  useEffect(() => {
    checkConnection().then()

if(isconnectedWallet) {
  checkLockout().then()
}
    const interval = setInterval(async () => {
      if (isconnectedWallet) {
        calculateReward(itemId).then();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [EthRewards, isconnectedWallet,itemId]);

 
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
            <h3 className="red-text">Rarity rank</h3>
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
                <div
                  className="mt-4 row justify-content-center flex-column"
                  style={{ gap: 20, margin: 'auto' }}
                >
                  <div className="d-flex justify-content-between">
                    <div
                      className="earnwrapper"
                    >
                      <p style={{ color: "#999999", fontSize: 12 }}>Pending</p>
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
                      className="btn passivebtn"
                      style={{
                        background: active
                          ? "linear-gradient(88.3deg, #58AEAA 6.79%, #95E0DD 90.24%)"
                          : "#C4C4C4",
                        pointerEvents: active ? "auto" : "none",
                      }}
                      onClick={() => {
                        handleClaim(itemId);
                      }}
                    >
                      {loadingClaim ? (
                        <>
                          <div className="spinner-border " role="status"></div>
                        </>
                      ) : (
                        "Claim Rewards"
                      )}
                    </button>
                  </div>
                  <div className="d-flex justify-content-between">
                    {/* <CountDownTimer
                      hours={0}
                      minutes={30}
                      seconds={0}
                      onComplete={() => {
                        setunstake(true);
                      }}
                    /> */}

                    <CountDownTimerUnstake date={'Sun, May 01 2022 09:50:11 '} onComplete={() => {
                        setunstake(true);
                      }}/>
                    <button
                      className={
                        unstake === true ? "btn activebtn" : "btn passivebtn"
                      }
                      style={{
                        background:
                          unstake === true
                            ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                            : "#C4C4C4",
                        pointerEvents: unstake === true ? "auto" : "none",
                      }}
                      onClick={()=>{handleUnstake(itemId)}}
                    >
                      {loading ? (
                        <>
                          <div className="spinner-border " role="status"></div>
                        </>
                      ) : (
                        "Unstake"
                      )}
                    </button>
                  </div>
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
NftUnstakeModal.propTypes = {
  nftItem: PropTypes.any,
  modalId: PropTypes.string,
  onShareClick: PropTypes.func,
  visible: PropTypes.bool,
  itemId: PropTypes.number
};

export default NftUnstakeModal;
