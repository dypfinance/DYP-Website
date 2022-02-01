import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'

export default class Avaxbuyback extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotal: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {
        let tvlTotal1 = 0

        let callCombinerTvl = await window.getTokenHolderBalance('0x4c7e0cbb0276a5e963266e6b9f34db73a1cb73f3', 3)

        let [usdPerToken] = await Promise.all([window.getPrice('defi-yield-protocol')])

        tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

        let tvlTotal = tvlTotal1
        this.setState({tvlTotal})

        return {tvlTotal}
    }

    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className="col-lg-8  offset-lg-2">
                                    <div className="earn-hero-content p4token-wrapper">
                                        <div className='text-left'>
                                            <p className='h3'><b>DYP Buyback</b></p>
                                            <p>Deposit WAVAX, USDC.e, USDT.e, WETH.e, PNG, QI, DAI.e, XAVA, WBTC.e, or LINK.e, and earn 100% APR in DYP. To start
                                                earning, all you need to do is deposit one of the supported assets into
                                                the Buyback contract. All assets will then be automatically converted
                                                into DYP and deposited into a staking contract.</p>
                                            <p>The rewards are distributed automatically and can be claimed every day.</p>
                                            <div style={{display: 'flex'}}>
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' href="https://dypfinance.medium.com/buyback-tutorial-for-ethereum-binance-smart-chain-and-avalanche-users-16feb8969506">Medium Tutorial</a>
                                                </div>
                                                <div className="earn-hero-btns-white m-0 pl-3">
                                                    <a target='_blank' href="https://www.youtube.com/watch?v=MlTAj8b8vnY">Video Tutorial</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="participar-area App-container">
                    <div className="container">
                        <div className="participare-wrapper">
                            <div className="row">
                                <div className="col-lg-8  offset-lg-2">
                                    <div className="participar-content">
                                        <div className="partipar-header">
                                            <div className="left">
                                                <h5>Markets
                                                </h5>
                                            </div>
                                            {/*<div className="right">*/}
                                            {/*    <h5>Total Value Locked ${getFormattedNumber(this.state.tvlTotal,2)}</h5>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>

                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/WAVAX.png" alt="Image not found " />
                                                    <img src="img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="img/tokens/USDT.png" alt="Image not found " />
                                                    <img src="img/tokens/PNG.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-avax.dyp.finance/staking-buyback" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvlTotal,2)}</p>
                                                <p>60 Days</p>
                                                <p>100%</p>
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