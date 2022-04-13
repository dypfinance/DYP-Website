import NftCawCard from '../../General/NftCawCard/NftCawCard'
import TitleWithParagraph from '../../General/TitleWithParagraph'
import React, { useState } from 'react'
import Slider from "react-slick"
import PropTypes from "prop-types"
import SvgTimesIcon from './SvgTimesIcon'

let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <div><img src={require("../../../../../assets/General/ArrowIcons/arrow.svg").default} alt="" /></div>,
    prevArrow: <div><img src={require("../../../../../assets/General/ArrowIcons/arrow.svg").default} alt="" /></div>,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]

};


const MyNfts = ({ items, numberOfNfts, onItemClick, label, smallTitle, bigTitle }) => {
    const [showAll, setsShowAll] = useState(false)

    if (window.innerWidth < 768 && showAll) {
        settings = { ...settings, rows: 2, slidesPerRow: 2, slidesToShow: 1 }
    }
    
    const renderCards = () => {
        return items.length > 0 && items.map((item, id) => {
            return <NftCawCard key={id} nft={item} action={onItemClick} modalId="#newNft"/>

        })
    }

    return (
        <div className="my-nfts">
            <div className="container-fluid padding-inline">
                <div className="row">
                    <div className="col">
                        <TitleWithParagraph>
                            <h1>
                                <small>{smallTitle}</small>  <br />
                                {bigTitle}
                            </h1>
                        </TitleWithParagraph>
                    </div>
                </div>
                <div className="row mints-container ">                    
                    <div className="graphic-container d-flex d-sm-none">
                        <img src={require("../../../../../assets/Nft/NftMintinglist/collection-graphic.png")} alt="" />
                        <p>{label}</p>
                        {numberOfNfts > 4 && <button onClick={() => setsShowAll(!showAll)} className={`${showAll && "open-button"} view-all`}> {showAll && <SvgTimesIcon />} {showAll ? 'Close' : "View all"}</button>}
                    </div>
                    <div className="cards-grid">
                        <div className="graphic-container d-none d-sm-flex">
                            <img src={require("../../../../../assets/Nft/NftMintinglist/collection-graphic.png")} alt="" />
                            <p>{label}</p>
                            {numberOfNfts > 4 && <button onClick={() => setsShowAll(!showAll)} className={`${showAll && "open-button"}`}> {showAll && <SvgTimesIcon />} {showAll ? 'Close' : "View all"}</button>}
                        </div>
                        {showAll && renderCards()}
                        {!showAll && (
                            <div className={["slider", showAll ? 'd-none' : ''].join(' ')}>
                                <Slider {...settings} >
                                    {renderCards()}
                                </Slider>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
MyNfts.propTypes = {
    items: PropTypes.array,
    numberOfNfts: PropTypes.number,
    onItemClick: PropTypes.func,
    label: PropTypes.string,
    smallTitle: PropTypes.string,
    bigTitle: PropTypes.string,
}

export default MyNfts