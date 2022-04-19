import React, { useState, useEffect } from "react";

import CreateNftForm from "./components/NftMinting/CreateNftForm";
import LatestMints from "./components/NftMinting/LatestMints";
import MyNfts from "./components/NftMinting/MyNfts";
import NftMintingHero from "./components/NftMinting/NftMintingHero";
import NftCardModal from "./components/NftMinting/NftCardModal";
import NftLoadingModal from "./components/NftMinting/NftLoadingModal";
import WhitelistLoadingModal from "./components/NftMinting/WhitelistLoadingModal";
import MyStakes from "./components/NftMinting/MyStakes";
import showToast from "../../Utils/toast";
import NftStakeModal from "./components/NftMinting/NftStakeModal/NftStakeModal";
const NftMinting = () => {
  const [connectedWallet, setConnectedWallet] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showWhitelistLoadingModal, setShowWhitelistLoadingModal] =
    useState(false);
  //Load My Nfts
  const [myNFTs, setMyNFTs] = useState([]);
  //Show No. of Created Nfts
  const [myNFTsCreated, setMyNFTsCreated] = useState([]);
  const [latestMintNft, setLatestMintNft] = useState([]);
  const [createdNft, setCreatedNft] = useState({});
  const [openedNft, setOpenedNft] = useState(false);
  const [openStakeNft, setOpenStakeNft] = useState(false);

  //Connect Wallet
  const [isConnectedWallet, setIsConnectedWallet] = useState(false);
  const [cawsMinted, setCawsMinted] = useState(0);
  const link = "https://dyp.finance/mint";

  const getTotalSupply = async () => {
    let totalSupply = await window.latestMint();
    totalSupply = parseInt(totalSupply) + 1;

    setCawsMinted(totalSupply);
  };



  const onStakeNft = (item) => {
    setOpenStakeNft(item);
  }
  useEffect(() => {
    latestMint().then();

    getTotalSupply().then();

    if (connectedWallet) {
      myNft().then();
    }

    const interval = setInterval(() => {
      if (connectedWallet) {
        myNft().then();
      }
      latestMint().then();
    }, 5000);

    return () => clearInterval(interval);
  }, [connectedWallet]);

  const descriptionTags = [
    // "Watch",
    // "Mustache",
    // "Glasses",
    // "Glasses",
    "Unrevealed",
  ];

  const onCreateClick = async (data) => {
    if (isConnectedWallet) {
      try {
        //Check Whitelist
        // let whitelist = await window.checkWhitelist(connectedWallet)
        let whitelist = 1;

        if (parseInt(whitelist) == 1) {
          setShowLoadingModal(true);

          let tokenId = await window.nft.mintNFT(data.amount);
          console.log(tokenId);

          if (isNaN(Number(tokenId))) {
            throw new Error("Invalid Token ID");
          }

          let getNftData = await window.getNft(tokenId);

          setMyNFTsCreated(getNftData);

          // setShowLoadingModal(false)
        } else {
          setShowWhitelistLoadingModal(true);
        }
      } catch (e) {
        window.alertify.error(
          typeof e == "object" && e.message
            ? e.message
            : typeof e == "string"
            ? String(e)
            : "Oops, something went wrong! Refresh the page and try again!"
        );
      }
    } else {
      try {
        handleConnectWallet();
      } catch (e) {
        window.alertify.error("No web3 detected! Please Install MetaMask!");
      }
    }
  };

  const handleConnectWallet = async () => {
    try {
      let isConnected = await window.connectWallet();

      if (isConnected) {
        setIsConnectedWallet(true);
        let coinbase = await window.getCoinbase();
        // Set Coinbase State
        setConnectedWallet(coinbase);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadingSuccessClick = () => {
    // when user click ok button in loading modal
    setShowLoadingModal(false);
    setShowWhitelistLoadingModal(false);
    // showToast('Your NFT was created successfully!')
  };

  const handleLoadingCancelClick = () => {
    // when user click cancel button in loading modal
    setShowLoadingModal(false);
    setShowWhitelistLoadingModal(false);
  };

  const onShareClick = (item) => {
    // when user clicks share nft link
    console.log("item clicked", item);
  };

  const onNftClick = (item) => {
    setOpenedNft(item);
  };

  const latestMint = async () => {
    let end = await window.latestMint();

    let start = end - 7;

    let latest = window.range(start, end);

    let nfts = latest.map((nft) => window.getNft(nft));

    nfts = await Promise.all(nfts);

    nfts.reverse();

    setLatestMintNft(nfts);
  };

  const myNft = async () => {
    let myNft = await window.myNftList(connectedWallet);

    let nfts = myNft.values.map((nft) => window.getNft(nft));

    nfts = await Promise.all(nfts);

    nfts.reverse();

    setMyNFTs(nfts);
  };
  return (
    <div className="nft-minting">
      <NftLoadingModal
        visible={showLoadingModal}
        onCancelClick={handleLoadingCancelClick}
        onSuccessClick={handleLoadingSuccessClick}
        setIsVisible={setShowLoadingModal}
      />

      <WhitelistLoadingModal
        visible={showWhitelistLoadingModal ? true : false}
        onCancelClick={handleLoadingCancelClick}
        onSuccessClick={handleLoadingSuccessClick}
        setIsVisible={setShowWhitelistLoadingModal}
      />

      <NftCardModal
        modalId="newNft"
        nftItem={openedNft}
        visible={openedNft ? true : false}
        link={link}
        onShareClick={onShareClick}
      />

      <NftStakeModal
        modalId="newNftStake"
        nftItem={openStakeNft}
        visible={openStakeNft ? true : false}
        link={link}
        onShareClick={onShareClick}
      />

      <NftMintingHero smallTitle="CAWS PUBLIC" bigTitle="SALE" />

      <CreateNftForm
        onCreateClick={onCreateClick}
        handleConnectWallet={handleConnectWallet}
        descriptionTags={descriptionTags}
        mintingPrice="0.08ETH"
        cawsMinted={cawsMinted}
        mintingLimit="100"
        connectedWallet={connectedWallet}
        createdNft={myNFTsCreated}
        totalCreated={myNFTsCreated.length}
      />

      <MyNfts
        onItemClick={onStakeNft}
        items={myNFTs}
        numberOfNfts={myNFTs.length}
        label=""
        smallTitle="MY"
        bigTitle="CAWS"
      />
      <MyStakes
        onItemClick={onStakeNft}
        items={myNFTs}
        numberOfNfts={myNFTs.length}
        label=""
        smallTitle="MY"
        bigTitle="STAKE'S"
      />

      <LatestMints
        onItemClick={onNftClick}
        items={latestMintNft}
        label="#Trending"
        smallTitle="LATEST"
        bigTitle="CAWS"
        visibleLatestMint={false}
      />
    </div>
  );
};

export default NftMinting;
