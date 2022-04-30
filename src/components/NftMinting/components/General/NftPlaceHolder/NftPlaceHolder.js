import React from "react";

const NftPlaceHolder = ({onMintClick}) => {
  return (
    <div className="placeholder-wrapper nft-caw-card">
      <div className="placeholder-content">
        <img
          src={require("../../../../../assets/Nft/cat_desktop.png")}
          alt=""
          className="placeholder-content-img"
        />
        <p className="placeholder-content-text">
         You can view all your NFT’s to manage them
        </p>
        <button className="placeholder-button" onClick={onMintClick}>Mint more NFT's</button>
      </div>
      
     
   
    </div>
  );
};

export default NftPlaceHolder;