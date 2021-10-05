import React from 'react'
import {NavLink} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        960: {
            items: 1
        },
        1200: {
            items: 1
        },
        1920: {
            items: 1
        }
    }
}

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.carousel = React.createRef()
    }
    render() {
        return (
            <>
                <OwlCarousel ref={this.carousel} className="owl-carousel owl-theme brand-slider" autoplayTimeout={this.props.timeout} startPosition={this.props.startPosition} {...owlCarouselOptions}>
                    {/*<div className="">*/}
                    {/*    <h3>Earn 100% APR with DYP <br /> Buyback!*/}
                    {/*    </h3>*/}
                    {/*    <p>Deposit WETH, WBTC, WBNB, WAVAX, PNG, USDC, USDT, or BUSD, and earn 100% APR in DYP. To*/}
                    {/*        start earning, all you need to do is deposit one of the supported assets into the Buyback*/}
                    {/*        contract. < br />All assets will then be automatically converted into DYP and deposited*/}
                    {/*        into a staking contract. The rewards are distributed automatically and can be claimed every day.</p>*/}
                    {/*    <NavLink to="/buyback">Deposit Now and Start Earning Rewards</NavLink>*/}
                    {/*</div>*/}
                    <div className="">
                        <h3>Maximize your Yield Farming <br /> Rewards!
                        </h3>
                        <p>DeFi Yield Protocol works to curb the influence of large whale users.< br />
                            The protocol employs an anti-manipulation feature that aims to limit the market impact on users’ converting rewards into ETH and other native platform tokens.< br />
                            Anti-manipulation aims to maintain stability, fair access to liquidity, and provide a secure and simplified DeFi platform for users of all sizes.</p>
                        <NavLink to="/farm">Go to Farms and Start Earning Rewards</NavLink>

                    </div>
                </OwlCarousel>
                <a className='sliding-link' href='#brand-area'>
                    <span><img className="logo" src="img/bottom-arrow.svg" alt="images not found" /></span>
                    <span><img className="blogo d-none" src="img/da.svg" alt="images not found" /></span>
                </a>
            </>
        )
    }
}