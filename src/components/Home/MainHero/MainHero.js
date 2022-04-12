import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "../../../assets/General/Button/Button";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";
import AuditedByItem from "../../../assets/General/AuditedByItem";
import ChevronArrowSvg from "../../../assets/General/ChevronArrowSvg/ChevronArrowSvg";

const MainHero = ({audited, eth, bnb, avax, liquidity, tvl, users}) => {
    return (
        <div className="main-hero">
            <div className="circle-decoration"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div id="carouselHero" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselHero" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselHero" data-slide-to="1"></li>
                                <li data-target="#carouselHero" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className='carousel-item active'>
                                    <TitleWithParagraph isMain >
                                        <h1>
                                            Earn <mark >{localStorage.getItem('highapy')} % <br/>APR </mark> <br />
                                            on Farming
                                        </h1>
                                        <p >
                                            <mark >DeFi Yield Protocol</mark> Lorem ipsum dolor sit amert
                                            <mark >anti-manipulation</mark> Lorem ipsum dolor sit amert Lorem ipsum dolor sit amert
                                        </p>
                                    </TitleWithParagraph>
                                </div>
                                <div className='carousel-item'>
                                    <TitleWithParagraph isMain >
                                        <h1>
                                            Earn <mark >{localStorage.getItem('highapy')} % <br/> APR  </mark> <br />
                                            on Farming
                                        </h1>
                                        <p >
                                            <mark >DeFi Yield Protocol</mark> Lorem ipsum dolor sit amert
                                            <mark >anti-manipulation</mark> Lorem ipsum dolor sit amert Lorem ipsum dolor sit amert
                                        </p>
                                    </TitleWithParagraph>

                                </div>
                                <div className='carousel-item'>
                                    <TitleWithParagraph isMain >
                                        <h1>
                                            Earn <mark >{localStorage.getItem('highapy')} % <br/> APR  </mark> <br />
                                            on Farming
                                        </h1>
                                        <p >
                                            <mark >DeFi Yield Protocol</mark> Lorem ipsum dolor sit amert
                                            <mark >anti-manipulation</mark> Lorem ipsum dolor sit amert Lorem ipsum dolor sit amert
                                        </p>
                                    </TitleWithParagraph>
                                </div>
                            </div>
                        </div>


                        <Button text="Enter now" icon={<ChevronArrowSvg />} action={() => console.log("clicked")} />

                    </div>
                    {/* to be checked if text on blue cards is static */}
                    <div className="col-md-7 main-hero-graphic-wrapper">
                        <img className='img-fluid' src={require("../../../assets/Home/banner_1.png")} />
                        <div className='text-wrapper'>
                            <p>{eth} <small>ETH</small>, {bnb} <small>BNB</small></p>
                            <p>{avax}<small> AVAX worth:</small></p>
                            <p> $ {liquidity}</p>
                            <p><small>paid to Liquidity providers!</small></p>
                        </div>
                        <div className='text-wrapper-secondary'>
                            <p><small>TVL </small>$ {tvl}</p>
                            <p><small>Total users </small>{users}</p>
                        </div>
                        {/* <MainHeroBanner
                            eth={eth}
                            bnb={bnb}
                            avax={avax}
                            liquidity={liquidity}
                            tvl={tvl}
                            users={users}
                        /> */}
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <p className='audited-by-title'>
                            Audited by
                        </p>
                        <div className="audited-by-section">
                            {audited.length > 0 && audited.map((item, id) => (
                                <AuditedByItem key={id} imgName={item.img} text={item.name} />)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

MainHero.propTypes = {
    audited: PropTypes.array,
    eth: PropTypes.string,
    bnb: PropTypes.string,
    avax: PropTypes.string,
    liquidity: PropTypes.string,
    tvl: PropTypes.string,
    users: PropTypes.string,
}

export default MainHero