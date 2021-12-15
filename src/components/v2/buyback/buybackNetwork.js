import React from 'react'
import { NavLink } from 'react-router-dom'
import Dots from "../../elements/dots";
import getFormattedNumber from "../../../functions/get-formatted-number";

export default class BuybackNetworkV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            apyBuyback2: 0,
            apyBuybackAvax: 0,
            apyBuybackEth: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {

        const { BigNumber } = window

        let [usdPerToken, usdPerTokeniDYP, usdiDYPAvax, usdiDYPEth] =
            await Promise.all([
                window.getPrice('defi-yield-protocol'),
                window.getPriceiDYP(),
                window.getPriceiDYPAvax(),
                window.getPriceiDYPEth()
            ])

        // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
        let apy1_buyback2 = new BigNumber(0.75)
        let apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdPerTokeniDYP)

        let apyBuyback2 = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
        this.setState({apyBuyback2})

        //Apy Avax V2 APR is 100%
        apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPAvax)

        let apyBuybackAvax = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
        this.setState({apyBuybackAvax})

        //Apy ETH V2 APR is 100%
        apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPEth)

        let apyBuybackEth = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
        this.setState({apyBuybackEth})

        return {apyBuyback2, apyBuybackAvax, apyBuybackEth}
    }

    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className='col-lg-8 offset-lg-2 mt-5'>
                                    <div className="farming-content">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <NavLink to='/buybackv2/eth'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/i1.svg" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>ETH Buyback</h4>
                                                        <p style={{color: "var(--black)"}}>
                                                            {this.state.apyBuybackEth == 0 ? (
                                                                <Dots />
                                                            ) : (
                                                                getFormattedNumber(this.state.apyBuybackEth,0)
                                                            )
                                                            }% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/buybackv2/bsc'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>BSC Buyback</h4>
                                                        <p style={{color: "var(--black)"}}>
                                                            {this.state.apyBuyback2 == 0 ? (
                                                                <Dots />
                                                            ) : (
                                                                getFormattedNumber(this.state.apyBuyback2,0)
                                                            )
                                                            }% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/buybackv2/avax'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/avax-yield.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>AVAX Buyback</h4>
                                                        <p style={{color: "var(--black)"}}>
                                                            {this.state.apyBuybackAvax == 0 ? (
                                                                <Dots />
                                                            ) : (
                                                                getFormattedNumber(this.state.apyBuybackAvax,0)
                                                            )
                                                            }% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
