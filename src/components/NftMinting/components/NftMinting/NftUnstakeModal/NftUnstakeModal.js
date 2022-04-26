import Modal from "../../General/Modal";
import React, { useState } from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import { shortAddress } from "../../../../../Utils/string";

const NftUnstakeModal = ({ nftItem, modalId, onShareClick, visible, link }) => {
  const copyAddress = () => {
    navigator.clipboard.writeText(nftItem.address);
    showToast("Address copied to clipboard!", undefined, { autoClose: 2000 });
  };

  const [active, setActive] = useState(true);
  const [loading, setloading] = useState(false);
  const [loadingdeposit, setloadingdeposit] = useState(false);
  const [status, setStatus] = useState(" *Please approve before deposit")


  const handleUnstake = async () => {
    const nft_id = nftItem.name?.slice(6, nftItem.name?.length);
    let stake_contract = await window.getContract("NFTSTAKING");
    setloading(true);
    setStatus('*Processing unstake');
    await stake_contract.methods
    .withdraw([nft_id])
    .send()
    .then(()=>{
      setStatus('*Unstaked successfully');
      setActive(false);
      setloading(false)
    })
    .catch(err=>{
      console.log(err)
      setloading(false)
      setStatus('*An error occurred. Please try again');
    })

  }
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
                  className="mt-4 row justify-content-center"
                  style={{ gap: 20 }}
                >
                  <button
                    className="btn activebtn"
                    onClick={() => {
                      handleUnstake();
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
                      "Unstake"
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
                    onClick={()=>{}}
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
  nftItem: PropTypes.object,
  modalId: PropTypes.string,
  onShareClick: PropTypes.func,
  visible: PropTypes.bool,
};

export default NftUnstakeModal;
