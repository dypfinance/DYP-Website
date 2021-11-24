import React from 'react'
import getFormattedNumber from '../../../functions/get-formatted-number'
import Dots from "../../elements/dots";

export default class BscStakeV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotal: 0,
            tvl30: 0,
            tvl60: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {

        let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])

        usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

        //TODO take the iDYP & DYP from staking
        let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0xf13adbeb27ea9d9469d95e925e56a1cf79c06e90',2) / 1e18
        let tokensStakingDYP = await window.getTokenHolderBalance( '0xf13adbeb27ea9d9469d95e925e56a1cf79c06e90',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP
        let tvlDYP = tokensStakingDYP * usdPerToken
        let tvl30 = tvliDYP + tvlDYP
        this.setState({tvl30})

        //TODO take the iDYP from Buyback & DYP + iDYP from Staking
        let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0xaf411bf994da1435a3150b874395b86376c5f2d5',2) / 1e18
        let tokensStakingDYP2 = await window.getTokenHolderBalance( '0xaf411bf994da1435a3150b874395b86376c5f2d5',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP
        let tvlDYP2 = tokensStakingDYP2 * usdPerToken
        let tvl60 = tvliDYP2 + tvlDYP2
        this.setState({tvl60})

        let tvlTotal = tvl30 + tvl60
        this.setState({tvlTotal})

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
                                            <p className='h3'><b>Earn more DYP</b></p>
                                            <p>Stake your DYP tokens and earn 50% APR. No Impermanent Loss.</p>
                                            <p>To start earning, all you need is to deposit DYP tokens into the Staking
                                                contract. You can choose from two different staking options, with
                                                rewards starting from 25% APR up to 50% APR, depending on the lock time
                                                from a minimum of zero-days up to a maximum of 90 days.</p>
                                            <p>The staking pools have the REINVEST function integrated, meaning that
                                                you can automatically add your daily rewards to the staking pool.
                                                Moreover, the DYP Referral is available. If you refer DYP to your
                                                friends, 5% of your friends’ rewards will automatically be sent to you
                                                whenever your friends stake DYP. You do not need to stake, it will’ be
                                                automatically sent to you, free of gas fee.</p>
                                            <div className="earn-hero-btns-bridge m-0">
                                                <a target='_blank' href="https://youtu.be/uDMrmFnOaL8">Video Tutorial</a>
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
                                                    <img src="/img/tokens/DYP.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/constant-staking-1" target='_blank'>Deposit</a>
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
                                                <p>25%</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="/img/tokens/DYP.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/constant-staking-2" target='_blank'>Deposit</a>
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
                                                <p>50%</p>
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