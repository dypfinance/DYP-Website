import React, { useState } from 'react'

import CreateNftForm from './components/NftMinting/CreateNftForm'
import LatestMints from './components/NftMinting/LatestMints'
import MyNfts from './components/NftMinting/MyNfts'
import NftMintingHero from './components/NftMinting/NftMintingHero'
import NftCardModal from './components/NftMinting/NftCardModal'
import NftLoadingModal from './components/NftMinting/NftLoadingModal'
import { latestNftCawsArray } from './components/NftMinting/LatestMints/latestMintsDummyData'
import showToast from '../../Utils/toast'

const NftMinting = () => {
    const [connectedWallet, setConnectedWallet] = useState(false)
    const [showLoadingModal, setShowLoadingModal] = useState(false)
    const [myNFTs, setMyNFTs] = useState([])
    const [createdNft, setCreatedNft] = useState({})
    const [openedNft, setOpenedNft] = useState(false)
    
    const descriptionTags = [
        "Watch",
        "Mustache",
        "Glasses",
        "Glasses",

    ]
    
    const onCreateClick = (data) => {
        setShowLoadingModal(true)

        const temp = []
        const nftObject = {
            nftId: "45345",
            address: '0x0000000000000000000000000',
            image: require('../../assets/Nft/NftMintinglist/nft-caw-image-1.png'),
            properties: [
                {
                    name: "Background",
                    value: "Peach",
                    percentage: "100"
                },
                {
                    name: "Tail",
                    value: "Overjoyed",
                    percentage: "100"
                },
                {
                    name: "Ears",
                    value: "Normal",
                    percentage: "100"
                },
                {
                    name: "Body",
                    value: "Black",
                    percentage: "100"
                },
                {
                    name: "Clothes",
                    value: "Red",
                    percentage: "100"
                },
                {
                    name: "Watches",
                    value: "Rolex",
                    percentage: "100"
                },
                {
                    name: "Eyes",
                    value: "Tears",
                    percentage: "100"
                },
                {
                    name: "Mouth",
                    value: "Mustache",
                    percentage: "100"
                },
                {
                    name: "Hats",
                    value: "None",
                    percentage: "100"
                },
                {
                    name: "Eyewear",
                    value: "Glasses",
                    percentage: "100"
                },
            ]
        }
        setCreatedNft(nftObject)
        if (data.amount >= 1) {
            for (let id = 0; id < data.amount; id++) {
                temp.push(nftObject)
            }
        }
        setMyNFTs(temp)

    }
    const handleConnectWallet = () => {
        setConnectedWallet('0x00000000000000000000000000000000000000000')
    }

    const handleLoadingSuccessClick = () => {
        // when user click ok button in loading modal

        showToast('Your NFT was created successfully!')
        
    }

    const handleLoadingCancelClick = () => {
        // when user click cancel button in loading modal
    }

    const onShareClick = (item) => {
        // when user clicks share nft link
        console.log('item clicked', item)
    }

    const onNftClick = (item) => {
        setOpenedNft(item)
    }
        
    return (
        <div className='nft-minting'>
            <NftLoadingModal
                visible={showLoadingModal}
                onCancelClick={handleLoadingCancelClick}
                onSuccessClick={handleLoadingSuccessClick}
            />
            
            <NftCardModal
                modalId='newNft'
                nftItem={openedNft}
                visible={openedNft ? true : false}
                onShareClick={onShareClick}
            />
            
            <NftMintingHero
                smallTitle="CREATE YOUR"
                bigTitle="SINGLE COLLECTABLE"
            />

            <CreateNftForm
                onCreateClick={onCreateClick}
                handleConnectWallet={handleConnectWallet}
                descriptionTags={descriptionTags}
                mintingPrice="0.08ETH"
                mintingLimit="100"
                connectedWallet={connectedWallet}
                createdNft={createdNft}
                totalCreated={myNFTs.length}
            />

            <MyNfts
                onItemClick={onNftClick}
                items={myNFTs}
                numberOfNfts={myNFTs.length}
                label="Collection"
                smallTitle="MY"
                bigTitle="NFT'S"
            />

            <LatestMints
                onItemClick={onNftClick}
                items={latestNftCawsArray}
                label="#Trending"
                smallTitle="LATEST"
                bigTitle="MINT'S"
            />
        </div>
    )
}

export default NftMinting