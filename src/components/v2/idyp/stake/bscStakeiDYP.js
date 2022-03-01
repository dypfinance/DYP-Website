import React from 'react'
import getFormattedNumber from '../../../../functions/get-formatted-number'
import Dots from "../../../elements/dots";

export default class BscStakeV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotal: 0,
            tvl30: 0,
            tvl60: 0,
            apy1: 0,
            apy2: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {

        const { BigNumber } = window

        let [usdPerTokeniDYP] = await Promise.all([window.getPriceiDYP()])

        usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

        //TODO take the iDYP & DYP from staking
        let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x58366902082b90fca01be07d929478bd48acfb19',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP
        let tvl30 = tvliDYP
        this.setState({tvl30})

        //TODO take the iDYP from Buyback & DYP + iDYP from Staking
        let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x160ff3c4a6e9aa8e4271aa71226cc811bfef7ed9',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP
        let tvl60 = tvliDYP2
        this.setState({tvl60})

        let tvlTotal = tvl30 + tvl60
        this.setState({tvlTotal})

        let apr1 = 25
        let apr2 = 50
        let apy1 = 20

        let apy2 = 45

        this.setState({apy1, apy2})

        return {tvlTotal, tvl30, tvl60}
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
                                            <p className='h3'><b>Earn more iDYP</b></p>
                                            <p>Stake your iDYP tokens and earn {this.state.apy2 == 0 ? (
                                                <Dots />
                                            ) : (
                                                getFormattedNumber(this.state.apy2,0)
                                            )
                                            }% APR. No Impermanent Loss.</p>
                                            <p>To start earning, all you need is to deposit iDYP tokens into the Staking
                                                contract. You can choose from two different staking options, with
                                                rewards starting from {this.state.apy1 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.apy1,0)
                                                )
                                                }% APR up to {this.state.apy2 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.apy2,0)
                                                )
                                                }% APR, depending on the lock time
                                                from a minimum of zero-days up to a maximum of 90 days.</p>
                                            <p>The staking pools have the REINVEST function integrated, meaning that
                                                you can automatically add your daily rewards to the staking pool.
                                                Moreover, the iDYP Referral is available. If you refer iDYP to your
                                                friends, 5% of your friends’ rewards will automatically be sent to you
                                                whenever your friends stake iDYP. You do not need to stake, it will’ be
                                                automatically sent to you, free of gas fee.</p>
                                            {/*<div className="earn-hero-btns-bridge m-0">*/}
                                            {/*    <a target='_blank' href="https://www.youtube.com/watch?v=sYkoxGbpBi4">Video Tutorial</a>*/}
                                            {/*</div>*/}
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
                                                <h5>Pools
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
                                                    <img src="/img/tokens/idyp.png" alt="Image not found " />
                                                </div>
                                                <h3>iDYP</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/staking-idyp-1" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl30 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl30,2)
                                                )
                                                }
                                                </p>
                                                <p>No Lock</p>
                                                <p>{this.state.apy1 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.apy1,0)
                                                )
                                                }%
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/img/tokens/idyp.png" alt="Image not found " />
                                                </div>
                                                <h3>iDYP</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/staking-idyp-2" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl60 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl60,2)
                                                )
                                                }
                                                </p>
                                                <p>90 Days</p>
                                                <p>
                                                    {this.state.apy2 == 0 ? (
                                                        <Dots />
                                                    ) : (
                                                        getFormattedNumber(this.state.apy2,0)
                                                    )
                                                    }%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="participar-item">*/}
                                    {/*    <div className="participar-item-header">*/}
                                    {/*        <div className="left">*/}
                                    {/*            <div className="img">*/}
                                    {/*                <img src="img/tokens/DYP.png" alt="Image not found " />*/}
                                    {/*            </div>*/}
                                    {/*            <h3>DYP</h3>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="right">*/}
                                    {/*            <a href="https://app.dyp.finance/constant-staking-90" target='_blank'>Deposit</a>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="participar-item-content">*/}
                                    {/*        <div className="left">*/}
                                    {/*            <p>Total Value Locked</p>*/}
                                    {/*            <p>Minimum Lock time</p>*/}
                                    {/*            <p>APR</p>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="right">*/}
                                    {/*            <p>${getFormattedNumber(this.state.tvl90,2)}</p>*/}
                                    {/*            <p>90 Days</p>*/}
                                    {/*            <p>30%</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="participar-item">*/}
                                    {/*    <div className="participar-item-header">*/}
                                    {/*        <div className="left">*/}
                                    {/*            <div className="img">*/}
                                    {/*                <img src="img/tokens/DYP.png" alt="Image not found " />*/}
                                    {/*            </div>*/}
                                    {/*            <h3>DYP</h3>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="right">*/}
                                    {/*            <a href="https://app.dyp.finance/constant-staking-120" target='_blank'>Deposit</a>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="participar-item-content">*/}
                                    {/*        <div className="left">*/}
                                    {/*            <p>Total Value Locked</p>*/}
                                    {/*            <p>Minimum Lock time</p>*/}
                                    {/*            <p>APR</p>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="right">*/}
                                    {/*            <p>${getFormattedNumber(this.state.tvl120,2)}</p>*/}
                                    {/*            <p>120 Days</p>*/}
                                    {/*            <p>35%</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}