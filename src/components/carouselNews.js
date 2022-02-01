import React from 'react'
import {NavLink} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: false,
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
                    <div className="">
                        <h3>Maximize your Yield Farming <br /> Rewards!
                        </h3>
                        <p>DeFi Yield Protocol works to curb the influence of large whale users.< br />
                            The protocol employs an anti-manipulation feature that aims to limit the market impact on users’ converting rewards into ETH and other native platform tokens.< br />
                            Anti-manipulation aims to maintain stability, fair access to liquidity, and provide a secure and simplified DeFi platform for users of all sizes.</p>
                        <NavLink to="/farmv2">Go to Farms and Start Earning Rewards</NavLink>

                    </div>
                    {/*<div className="">*/}
                    {/*    <h3>iDYP x DeFi Yield Protocol*/}
                    {/*    </h3>*/}
                    {/*    <p>iDYP is an excellent investment for DYP holders who wish to get a passive income by using our*/}
                    {/*        products. Our new smart contracts will use iDYP as part of novel strategies, adding constant*/}
                    {/*        buying pressure on the DYP token and boost the rewards for the farm, buyback, and staking*/}
                    {/*        pools.*/}
                    {/*    </p>*/}
                    {/*    <NavLink to="/idyp">Go to iDYP Community Allocation</NavLink>*/}
                    {/*</div>*/}
                </OwlCarousel>
                <a className='sliding-link' href='#brand-area'>
                    <span><img className="logo" src="img/bottom-arrow.svg" alt="images not found" /></span>
                    <span><img className="blogo d-none" src="img/da.svg" alt="images not found" /></span>
                </a>
            </>
        )
    }
}