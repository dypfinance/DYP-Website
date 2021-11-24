import React from 'react'
import getFormattedNumber from '../../../functions/get-formatted-number'
import Dots from "../../elements/dots";

export default class BscBuybackV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotal: 0,
            tvlTotalBuyback1: 0,
            tvlTotalBuyback2: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {
        let tvlTotal1 = 0

        //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)

        let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])

        //TODO take the iDYP from Buyback & DYP + iDYP from Staking
        let tokensBuybackiDYP = await window.getTokenHolderBalanceiDYP('0x94B1A7B57C441890b7a0f64291B39ad6f7E14804',2) / 1e18
        let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x9af074cE714FE1Eb32448052a38D274E93C5dc28',2) / 1e18
        let tokensStakingDYP = await window.getTokenHolderBalance( '0x9af074cE714FE1Eb32448052a38D274E93C5dc28',2) / 1e18

        console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})

        //TODO Calulate $ Value
        let tvliDYP = ((tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP)
        let tvlDYP = (tokensStakingDYP * usdPerToken)


        //TODO take the iDYP from Buyback & DYP + iDYP from Staking
        let tokensBuybackiDYP2 = await window.getTokenHolderBalanceiDYP('0x4eF782E66244A0CF002016AA1Db3019448c670aE',2) / 1e18
        let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0xDBfb96e2899d52B469C1a1C35eD71fBBa228d2cC',2) / 1e18
        let tokensStakingDYP2 = await window.getTokenHolderBalance( '0xDBfb96e2899d52B469C1a1C35eD71fBBa228d2cC',2) / 1e18

        console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})

        //TODO Calulate $ Value
        let tvliDYP2 = ((tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP)
        let tvlDYP2 = (tokensStakingDYP2 * usdPerToken)

        //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

        let tvlTotalBuyback1 = tvlDYP + tvliDYP
        this.setState({tvlTotalBuyback1})

        let tvlTotalBuyback2 = tvlDYP2 + tvliDYP2
        this.setState({tvlTotalBuyback2})

        let tvlTotal = tvlTotalBuyback1 + tvlTotalBuyback2
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
                                            <p>Deposit WBNB, BTCB, ETH, BUSD, or CAKE, and earn 100% APR in DYP.
                                                To start earning, all you need is to deposit one of the supported
                                                assets into the Buyback contract. Then, all assets will automatically
                                                be converted into DYP + iDYP and deposited into a staking contract.
                                                You can choose from two different options, with rewards starting from
                                                30% APR up to 100% APR, depending on the lock time from a minimum of
                                                zero-days up to a maximum of 90 days.</p>
                                            <p>The rewards are distributed automatically and can be claimed every day.
                                                When you unstake you will receive all the deposited amounts in DYP.</p>
                                            <div style={{display: 'flex'}}>
                                                {/*<div className="earn-hero-btns-bridge m-0">*/}
                                                {/*    <a target='_blank' href="https://dypfinance.medium.com/buyback-tutorial-for-ethereum-binance-smart-chain-and-avalanche-users-16feb8969506">Medium Tutorial</a>*/}
                                                {/*</div>*/}
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' href="https://youtu.be/3WUMlhiWkco">Video Tutorial</a>
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
                                            <div className="right">
                                                <h5>Total Value Locked ${this.state.tvlTotal == 0 ? (
                                                    <Dots />
                                                    ) : (
                                                    getFormattedNumber(this.state.tvlTotal,2)
                                                    )
                                                }
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/img/tokens/WBNB.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/BUSD.png" alt="Image not found " />
                                                    <img src="/img/tokens/CAKE.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/staking-buyback-1" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvlTotalBuyback1 == 0 ? (
                                                    <Dots />
                                                    ) : (
                                                    getFormattedNumber(this.state.tvlTotalBuyback1,2)
                                                    )
                                                }
                                                </p>
                                                <p>No Lock</p>
                                                <p>30%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/img/tokens/WBNB.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/BUSD.png" alt="Image not found " />
                                                    <img src="/img/tokens/CAKE.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/staking-buyback-2" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvlTotalBuyback2 == 0 ? (
                                                    <Dots />
                                                    ) : (
                                                    getFormattedNumber(this.state.tvlTotalBuyback2,2)
                                                    )
                                                }
                                                </p>
                                                <p>90 Days</p>
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