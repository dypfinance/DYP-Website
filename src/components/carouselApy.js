import React from 'react'
import {NavLink} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
//Import Elements
import Dots from './elements/dots'
import getFormattedNumber from "../functions/get-formatted-number";

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

export default class CarouselApy extends React.Component {
    constructor(props) {
        super(props)
        this.carousel = React.createRef()
    }
    render() {
        return (
            <>
                <OwlCarousel ref={this.carousel} className="owl-carousel owl-theme brand-slider" autoplayTimeout={this.props.timeout} startPosition={this.props.startPosition} {...owlCarouselOptions}>
                    {/*<div className="">*/}
                    {/*    <NavLink to='/buyback'>*/}
                    {/*        <p id="fusone">Join one of our markets <br />*/}
                    {/*            and earn 100% APR*/}
                    {/*        </p>*/}
                    {/*    </NavLink>*/}
                    {/*</div>*/}
                    <div className="">
                        <NavLink to='/farmv2'>
                            <p id="fusone">Join one of our liquidity pools <br />
                                and earn up to {' '}
                                    {this.props.high_apy.highestAPY.highestAPY_TOTAL == undefined ? (
                                        <Dots />
                                        ) : (
                                        this.props.high_apy.highestAPY.highestAPY_TOTAL
                                    )
                                    }% APR
                            </p>
                        </NavLink>
                    </div>
                </OwlCarousel>
            </>
        )
    }
}