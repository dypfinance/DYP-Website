import EarnTypesList from '../../assets/General/NftEarn/EarnTypesList'
import NftEarnHero from '../../assets/General/NftEarn/NftEarnHero'
import SubAssets from '../../assets/General/NftEarn/SubAssets'
import TypeAssets from '../../assets/General/NftEarn/TypeAssets/TypeAssets'
import React, { useState } from 'react'
import { nftEarnData } from './nftEarnDummyData'
import getFormattedNumber from "../../functions/get-formatted-number";

export const handleHorizontalScroll = (scrollOffset, ref) => {
    ref.current.scrollLeft = scrollOffset;
}

const NftEarn = ({tvl_all, json_totalPaid, high_apy}) => {
    const types = ["Farming", "Stake", "Vault", "Buyback"]

    const [activeType, setActiveType] = useState(types[0])
    const [activeTypeAsset, setActiveTypeAsset] = useState("ETH Yield")
    const [typesDataArray, settypesDataArray] = useState(nftEarnData[0])

    const handleTypeClick = (item) => {
        setActiveType(item)
        const temp = nftEarnData.filter((type) => type.type === item)
        settypesDataArray(temp[0])

    }

    const handleTypeAssetClick = (clicked) => {
        //when user clicks on card with cryptocurrency(ETH,BSC,AVAX)
        setActiveTypeAsset(clicked)
    }

    const handleSubAssetButtonClick = () => {
        //when user clicks on button in subasset card 
        console.log("Deposit/Supply")
    }

    return (
       
        <div className='nft-earn'>
            <div className="hero">
                <NftEarnHero
                    eth= {getFormattedNumber(json_totalPaid.ethTotal.wethPaiOutTotals,0)}
                    bnb={getFormattedNumber(json_totalPaid.bnbTotal.wbnbPaidOutTotals,0)}
                    avax= {getFormattedNumber(json_totalPaid.avaxTotal.avaxPaidOutTotals,0)}
                    rewardsValue= {getFormattedNumber(json_totalPaid.totalPaidInUsd,0)}
                    rewardsLabel="Rewards paid out"
                    mainTitle="Earn"
                    subTitle="DYP tokens to earn."
                />
                <EarnTypesList
                    typesArray={types}
                    activeType={activeType}
                    onItemClick={handleTypeClick} />
            </div>
            {typesDataArray.type !== "Vault" &&
                <TypeAssets
                    assets={typesDataArray.assets}
                    onTypeAssetClicked={handleTypeAssetClick}
                    clickedAsset={activeTypeAsset} />
            }
            <SubAssets data={typesDataArray} onSubAssetButtonClick={handleSubAssetButtonClick} tvl={tvl_all}/>
        </div>
    )
}

export default NftEarn