import AdoptACat from './components/Nft/AdoptACat';
import CatsAndWatchesSociety from './components/Nft/CatsAndWatchesSociety';
import CatsAndWatchesSocietyBenefits from './components/Nft/CatsAndWatchesSocietyBenefits';
import CatSocietyRanking from './components/Nft/CatSocietyRanking';
import CawsRoadmap from './components/Nft/CawsRoadmap';
import CawsTraits from './components/Nft/CawsTraits';
import FullScreenMainHero from './components/Nft/FullScreenMainHero';
import React from 'react'
const Caws = () => {
    return (
        <div className='nft-page-container'>
            <FullScreenMainHero image={'nft-main-image.jpg'} hasScroll={true} />
            <CatsAndWatchesSociety />
            <AdoptACat />
            <CawsTraits />
            <CatSocietyRanking />
            <CatsAndWatchesSocietyBenefits />
            <CawsRoadmap />
            <a style={{display: 'none'}} href="https://raritysniper.com/nft-drops-calendar">NFT Drops</a>
        </div>
    );
}



export default Caws;
