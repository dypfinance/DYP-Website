import React from 'react'
import { NavLink } from 'react-router-dom'
import Dots from "../../elements/dots";
import getFormattedNumber from "../../../functions/get-formatted-number";

export default class StakeNetworkV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            apy1: 0,
            apyAvax: 0,
            apyEth: 0
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

        usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

        let apr1 = 50
        let apy1 = new BigNumber(apr1).div(1e2).times(usdPerTokeniDYP).div(usdPerToken).times(1e2).toFixed(2)
        apy1 = 25
        this.setState({apy1})

        let apyAvax = new BigNumber(apr1).div(1e2).times(usdiDYPAvax).div(usdPerToken).times(1e2).toFixed(2)
        apyAvax = 25
        this.setState({apyAvax})

        let apyEth = new BigNumber(apr1).div(1e2).times(usdiDYPEth).div(usdPerToken).times(1e2).toFixed(2)
        apyEth = 25
        this.setState({apyEth})
console.log(apy1)
        return {apy1, apyAvax, apyEth}
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
                                                <NavLink to='/stakev2/eth'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/i1.svg" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>ETH Stake</h4>
                                                        <p style={{color: "var(--black)"}}>
                                                            {this.state.apyEth == 0 ? (
                                                                <Dots />
                                                            ) : (
                                                                getFormattedNumber(this.state.apyEth,2)
                                                            )
                                                            }% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/stakev2/bsc'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>BSC Stake</h4>
                                                        <p style={{color: "var(--black)"}}>
                                                            {this.state.apy1 == 0 ? (
                                                                <Dots />
                                                            ) : (
                                                                getFormattedNumber(this.state.apy1,2)
                                                            )
                                                            }% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/stakev2/avax'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/avax-yield.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>AVAX Stake</h4>
                                                        <p style={{color: "var(--black)"}}>
                                                            {this.state.apyAvax == 0 ? (
                                                                <Dots />
                                                            ) : (
                                                                getFormattedNumber(this.state.apyAvax,2)
                                                            )
                                                            }% APR</p>
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
