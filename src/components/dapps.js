import React from 'react'
import { NavLink } from 'react-router-dom'
// import Dots from "elements/dots";

export default class Dapps extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            apyBuyback2: 0,
            apy1: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {

        const { BigNumber } = window

        let usdPerTokeniDYP = 0

        let [usdPerToken, usdPerTokeniDYPBsc, usdPerTokeniDYPAvax, usdPerTokeniDYPEth] =
            await Promise.all([
                window.getPrice('defi-yield-protocol'),
                window.getPriceiDYP(),
                window.getPriceiDYPAvax(),
                window.getPriceiDYPEth()
            ])

        usdPerTokeniDYP = usdPerTokeniDYP > usdPerTokeniDYPBsc ? usdPerTokeniDYP : usdPerTokeniDYPBsc
        usdPerTokeniDYP = usdPerTokeniDYP > usdPerTokeniDYPAvax ? usdPerTokeniDYP : usdPerTokeniDYPAvax
        usdPerTokeniDYP = usdPerTokeniDYP > usdPerTokeniDYPEth ? usdPerTokeniDYP : usdPerTokeniDYPEth

        // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
        let apy1_buyback2 = new BigNumber(0.75)
        let apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdPerTokeniDYP)
        let apyBuyback2 = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
        this.setState({apyBuyback2})

        let apr1 = 50
        let apy1 = new BigNumber(apr1).div(1e2).times(usdPerTokeniDYP).div(usdPerToken).times(1e2).toFixed(2)
        this.setState({apy1})

        return {apyBuyback2}
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
                                                <NavLink to='/earn'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="/img/products/black/bsc-farming.png" alt="Image not found" />
                                                            <img className='blogo' src="/img/products/white/bsc-farming.png" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>Farm V2</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_TOTAL}% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/earn'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="/img/products/black/buyback.png" alt="Image not found" />
                                                            <img className='blogo' src="/img/products/white/buyback.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Buyback V2</h4>
                                                        <p style={{color: "var(--black)"}}>{this.state.apyBuyback2}% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/earn'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="/img/products/black/staking.png" alt="Image not found" />
                                                            <img className='blogo' src="/img/products/white/staking.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Stake V2</h4>
                                                        <p style={{color: "var(--black)"}}>25% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/referralv2'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/investors.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/investors1.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Referral</h4>
                                                        <p style={{color: "var(--black)"}}>5% Rewards</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href='https://tools.dyp.finance'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/tools.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/tools.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>DYP Tools</h4>
                                                        <p style={{color: "var(--black)"}}>Dashboard</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/nft'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/nft.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/nft.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>NFT</h4>
                                                        <p style={{color: "var(--black)"}}>CAWS</p>
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
