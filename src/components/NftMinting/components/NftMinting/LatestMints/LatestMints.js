import React from 'react'
import NftCawCard from '../../General/NftCawCard/NftCawCard'
import TitleWithParagraph from '../../General/TitleWithParagraph'
import Slider from "react-slick"
import PropTypes from 'prop-types'

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // mobileFirst: true,
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
        },
        {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
    ]
};

const LatestMints = ({onItemClick, items, label, smallTitle, bigTitle, visibleLatestMint}) => {
    let className1 = 'latest-mints';
    let className2 = 'container-fluid padding-inline';
    if(visibleLatestMint){
        className1 += ' col-lg-8';
        className2 = 'container-fluid';
    }

    return (
        <div className={className1}>
            <div className={className2}  style={{paddingBottom: 80}}>
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
                    <div className="graphic-container">
                        <img src={require("../../../../../assets/Nft/NftMintinglist/fire-graphic.png")} alt="" />
                        <p>{label}</p>
                    </div>
                    <div className="slider">
                        <Slider {...settings}>
                            {items.length > 0 && items.map((item, id) => {
                                return <NftCawCard key={id} nft={item} action={onItemClick} modalId="#newNft" />
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}



LatestMints.propTypes = {
    onItemClick: PropTypes.func,
    items: PropTypes.array,
    label: PropTypes.string,
    smallTitle: PropTypes.string,
    bigTitle: PropTypes.string,
}

export default LatestMints