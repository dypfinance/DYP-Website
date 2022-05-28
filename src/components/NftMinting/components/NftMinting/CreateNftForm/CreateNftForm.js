import SvgEyeIcon from "../../General/NftCawCard/SvgEyeIcon";
import SquarePill from "../../General/SquarePill";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { shortAddress } from "../../../../../Utils/string";
import showToast from "../../../../../Utils/toast";
import NewMintForm from "../../../../NewMintForm/NewMintForm";

const CreateNftForm = ({
  onCreateClick,
  handleConnectWallet,
  mintingPrice,
  cawsMinted,
  mintingLimit,
  connectedWallet,
  nftName,
  descriptionTags,
  createdNft,
  totalCreated,
}) => {
  const [numberOfNfts, setNumberOfNfts] = useState(1);

  const handleNftNumberUp = () => {
    if (numberOfNfts == "") {
      setNumberOfNfts(1);
    }
    if (numberOfNfts < mintingLimit) {
      setNumberOfNfts(numberOfNfts + 1);
    }
  };
  const handleNftNumberDown = () => {
    if (numberOfNfts > 1) {
      setNumberOfNfts(numberOfNfts - 1);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(connectedWallet);
    showToast("Address copied to clipboard!", undefined, { autoClose: 2000 });
  };

  const handleCreate = () => {
    onCreateClick({
      amount: numberOfNfts,
    });

    setNumberOfNfts(1);
  };

  return (
    <>
      <div className="create-nft-form">
         <NewMintForm handleConnectWallet={handleConnectWallet} connectedWallet={connectedWallet} />
        {/*<div className="container-fluid padding-inline">  /!*when minting is finished comment from this line *!/*/}
        {/*  <div className="row mt-4 mt-md-5">*/}
        {/*    <div className="col-md-5">*/}
        {/*      <div className="image-placeholder">*/}
        {/*        <div*/}
        {/*          className={`elevated-container ${createdNft.image && "bg"}`}*/}
        {/*        >*/}
        {/*          {createdNft.image && (*/}
        {/*            <div*/}
        {/*              className="view-details"*/}
        {/*              data-toggle="modal"*/}
        {/*              data-target="#newNft"*/}
        {/*            >*/}
        {/*              /!*<SvgEyeIcon />*!/*/}
        {/*              /!*<p>View details</p>*!/*/}
        {/*            </div>*/}
        {/*          )}*/}
        {/*          <div className="image">*/}
        {/*            {totalCreated > 0 && (*/}
        {/*              <div className="number-created-nfts-pill">*/}
        {/*                {totalCreated} Created*/}
        {/*              </div>*/}
        {/*            )}*/}
        {/*            {createdNft.image ? (*/}
        {/*              <img*/}
        {/*                src={createdNft.image}*/}
        {/*                className="nft-img"*/}
        {/*                data-toggle="modal"*/}
        {/*                data-target="#newNft"*/}
        {/*              />*/}
        {/*            ) : (*/}
        {/*              <div className="placeholder-content">*/}
        {/*                <img*/}
        {/*                  src={require("../../../../../assets/Nft/cat_desktop.png")}*/}
        {/*                  alt=""*/}
        {/*                  className="placeholder-content-img"*/}
        {/*                />*/}
        {/*                <p className="placeholder-content-text">*/}
        {/*                  Your NFT preview will be generated here*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*            )}*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-md-7">*/}
        {/*      <div className="row">*/}
        {/*        <div className="col-12 ">*/}
        {/*          <div className="connect-wallet">*/}
        {/*            <div className="elevated-container">*/}
        {/*              <div className="info">*/}
        {/*                <div*/}
        {/*                  className={`wallet-image ${*/}
        {/*                    connectedWallet ? "wallet-image-connected" : ""*/}
        {/*                  } `}*/}
        {/*                >*/}
        {/*                  {connectedWallet ? (*/}
        {/*                    <img*/}
        {/*                      src={*/}
        {/*                        require("../../../../../assets/General/checked-icon.svg")*/}
        {/*                          .default*/}
        {/*                      }*/}
        {/*                      alt=""*/}
        {/*                    />*/}
        {/*                  ) : (*/}
        {/*                    <img*/}
        {/*                      src={*/}
        {/*                        require("../../../../../assets/General/wallet-icon.svg")*/}
        {/*                          .default*/}
        {/*                      }*/}
        {/*                      alt=""*/}
        {/*                    />*/}
        {/*                  )}*/}
        {/*                </div>*/}
        {/*                <p>*/}
        {/*                  {connectedWallet*/}
        {/*                    ? "Wallet has been connected"*/}
        {/*                    : "Please connect your wallet"}*/}
        {/*                </p>*/}
        {/*              </div>*/}
        {/*              {connectedWallet ? (*/}
        {/*                <div*/}
        {/*                  className="connected-wallet cursor-pointer"*/}
        {/*                  onClick={copyAddress}*/}
        {/*                >*/}
        {/*                  <span>{shortAddress(connectedWallet)}</span>*/}
        {/*                  <div>*/}
        {/*                    <span className="m-0 ml-1">*/}
        {/*                      <svg*/}
        {/*                        width="19"*/}
        {/*                        height="22"*/}
        {/*                        viewBox="0 0 19 22"*/}
        {/*                        fill="none"*/}
        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
        {/*                      >*/}
        {/*                        <path*/}
        {/*                          d="M14 0H2C0.895 0 0 0.895 0 2V16H2V2H14V0ZM17 4H6C4.895 4 4 4.895 4 6V20C4 21.105 4.895 22 6 22H17C18.105 22 19 21.105 19 20V6C19 4.895 18.105 4 17 4ZM17 20H6V6H17V20Z"*/}
        {/*                          fill="#E30613"*/}
        {/*                        />*/}
        {/*                      </svg>*/}
        {/*                    </span>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              ) : (*/}
        {/*                <button*/}
        {/*                  className="btn btn-outline-primary "*/}
        {/*                  onClick={handleConnectWallet}*/}
        {/*                >*/}
        {/*                  Connect Wallet*/}
        {/*                </button>*/}
        {/*              )}*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        <div className="col-12">*/}
        {/*          <div className="create-nft">*/}
        {/*            <div className="elevated-container">*/}
        {/*              <div className="header-nft">*/}
        {/*                <h1>MINT CAWS</h1>*/}
        {/*                /!* <div className="helpful">*/}
        {/*                                            <p className='red-info-text'>Helpful tips</p>*/}
        {/*                                            <img src={require("../../../Assets/General/questionmark-icon.svg").default} alt="" />*/}
        {/*                                        </div> *!/*/}
        {/*              </div>*/}
        {/*              <div className="row name-description">*/}
        {/*                <div className="col-md-5 d-flex flex-column">*/}
        {/*                  <p className="label">Name</p>*/}
        {/*                  <p className="name-data">*/}
        {/*                    {nftName && "#"}*/}
        {/*                    {nftName}*/}
        {/*                  </p>*/}
        {/*                </div>*/}
        {/*                <div className="col-md-7 d-flex flex-column">*/}
        {/*                  <p className="label">Description</p>*/}
        {/*                  <div className="desc-data">*/}
        {/*                    {descriptionTags.length > 0 &&*/}
        {/*                      descriptionTags.map((item, id) => (*/}
        {/*                        <SquarePill key={id} text={item} />*/}
        {/*                      ))}*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="row counter-input">*/}
        {/*                <div className="col-7 col-md-5 p-0 d-flex flex-column">*/}
        {/*                  <label>Number of Tokens to Mint</label>*/}
        {/*                  <input*/}
        {/*                    type="number"*/}
        {/*                    value={numberOfNfts}*/}
        {/*                    onChange={(e) => setNumberOfNfts(e.target.value)}*/}
        {/*                    placeholder={1}*/}
        {/*                  />*/}
        {/*                </div>*/}
        {/*                <div className=" col-5 col-md-7 p-0 d-flex align-items-end ">*/}
        {/*                  <div className="d-flex flex-column-reverse flex-md-row align-items-center w-100">*/}
        {/*                    <div className="buttons">*/}
        {/*                      <button*/}
        {/*                        className={`nft-count-button ${*/}
        {/*                          (numberOfNfts == 1 && "inactive") ||*/}
        {/*                          (numberOfNfts == "" && "inactive")*/}
        {/*                        }`}*/}
        {/*                        onClick={handleNftNumberDown}*/}
        {/*                      >*/}
        {/*                        <img*/}
        {/*                          src={require("../../../../../assets/General/minus-icon.png")}*/}
        {/*                          alt=""*/}
        {/*                        />*/}
        {/*                      </button>*/}
        {/*                      <button*/}
        {/*                        className="nft-count-button"*/}
        {/*                        onClick={handleNftNumberUp}*/}
        {/*                      >*/}
        {/*                        <img*/}
        {/*                          src={require("../../../../../assets/General/plus-icon.png")}*/}
        {/*                          alt=""*/}
        {/*                        />*/}
        {/*                      </button>*/}
        {/*                    </div>*/}

        {/*                    <p className="red-info-text">*/}
        {/*                      *mint between 1 and {mintingLimit}*/}
        {/*                    </p>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="row">*/}
        {/*                <div className="col">*/}
        {/*                  <button*/}
        {/*                    className="create-nft-button"*/}
        {/*                    onClick={handleCreate}*/}
        {/*                    disabled={numberOfNfts == ""}*/}
        {/*                  >*/}
        {/*                    {connectedWallet ? "MINT CAWS" : "Connect Wallet"}*/}
        {/*                  </button>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*              <div className="row  ">*/}
        {/*                <div className="col d-flex align-items-center justify-content-start minting-price-info">*/}
        {/*                  <img*/}
        {/*                    src={require("../../../../../assets/General/eth-create-nft.png")}*/}
        {/*                    alt=""*/}
        {/*                  />*/}
        {/*                  <p className="red-info-text  ">*/}
        {/*                    PRICE: {mintingPrice}*/}
        {/*                  </p>*/}
        {/*                </div>*/}
        {/*                <div className="col d-flex align-items-center justify-content-end minting-price-info">*/}
        {/*                  <img*/}
        {/*                    src={require("../../../../../assets/General/cat-totalsupply-icon.png")}*/}
        {/*                    alt=""*/}
        {/*                  />*/}
        {/*                  <p className="red-info-text  ">*/}
        {/*                    <text style={{ color: "#1E92D2" }}>*/}
        {/*                      {cawsMinted}/10000*/}
        {/*                    </text>{" "}*/}
        {/*                    CAWS Minted*/}
        {/*                  </p>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>/!*when minting is finished comment until this line *!/*/}
      </div>
    </>
  );
};

CreateNftForm.propTypes = {
  onCreateClick: PropTypes.func,
  handleConnectWallet: PropTypes.func,
  mintingPrice: PropTypes.string,
  mintingLimit: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  connectedWallet: PropTypes.string,
  nftName: PropTypes.string,
  descriptionTags: PropTypes.array,
  createdNft: PropTypes.object,
  totalCreated: PropTypes.number,
};

export default CreateNftForm;
