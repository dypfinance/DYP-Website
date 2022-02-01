import React from 'react'
import getFormattedNumber from '../../../functions/get-formatted-number'
import Tooltip from "@material-ui/core/Tooltip"
import {Button} from "@material-ui/core";
import Dots from "../../elements/dots";

export default class EthFarmV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotalEth: 0,
            tvlTotalBsc: 0,
            tvlEth: 0,
            tvlWbtc: 0,
            tvlUsdc: 0,
            tvlUsdt: 0,
            tvlWbnb: 0,
            tvlBusd: 0,
            tvlBeth: 0,

            maxApyEth: 0,
            maxApyBnb: 0,
            maxApyBusd: 0,

            Apy1: 0,
            Apy2: 0,
            Apy3: 0,
            Apy4: 0,
            Apy5: 0,

            tvl1: 0,
            tvl2: 0,
            tvl3: 0,
            tvl4: 0,
            tvl5: 0,

            ApyStake: 199
        }
    }

    componentDidMount() {
        this.getTotalTvl()
        //this.hashMapMax()
    }

    // hashMapMax = async () => {
    //
    //     let maxApyBsc = await window.getHashMapApy()
    //     maxApyBsc = new Map(JSON.parse(maxApyBsc.Bsc))
    //
    //     let auxEth = 0,
    //         maxEth = 0,
    //         maxBnb = 0,
    //         auxBnb = 0,
    //         auxBusd = 0,
    //         maxBusd = 0
    //
    //     for (let [key, value] of maxApyBsc.entries()) {
    //         let pair = key.split('_')[0]
    //
    //         if ('eth'.localeCompare(pair) == 0){
    //             auxEth = parseFloat(value)
    //
    //             if (maxEth <= auxEth)
    //                 maxEth = auxEth
    //         }
    //
    //         if ('bnb'.localeCompare(pair) == 0){
    //             auxBnb = parseFloat(value)
    //
    //             if (maxBnb <= auxBnb)
    //                 maxBnb = auxBnb
    //         }
    //
    //         if ('busd'.localeCompare(pair) == 0){
    //             auxBusd = parseFloat(value)
    //
    //             if (maxBusd <= auxBusd)
    //                 maxBusd = auxBusd
    //         }
    //
    //     }
    //
    //     let maxApyBnb = maxBnb
    //     this.setState({maxApyBnb})
    //
    //     let maxApyEth = maxEth
    //     this.setState({maxApyEth})
    //
    //     let maxApyBusd = maxBusd
    //     this.setState({maxApyBusd})
    //
    //     return maxApyBsc
    // }

    getTotalTvl = async () => {
        const { LP_IDs_ETH_V2 } = window

        let callCombinerTvl = await window.getCombinedTvlUsd()

        let tvlWbnb1 = 0
        let Apy1 = 0
        let Apy2 = 0
        let Apy3 = 0
        let Apy4 = 0
        let Apy5 = 0
        let {tvl1, tvl2, tvl3, tvl4, tvl5} = 0

        let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPEth()])

        if (window.the_graph_result_eth_v2.lp_data) {

            tvl1 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[0]].tvl_usd
            tvl2 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[1]].tvl_usd
            tvl3 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[2]].tvl_usd
            tvl4 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[3]].tvl_usd
            tvl5 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[4]].tvl_usd

            Apy1 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[0]].apy
            Apy2 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[1]].apy
            Apy3 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[2]].apy
            Apy4 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[3]].apy
            Apy5 = window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[4]].apy
        }
        this.setState({Apy1, Apy2, Apy3, Apy4, Apy5})

        let tvlWbnb = tvlWbnb1
        this.setState({tvlWbnb})

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP = await window.getTokenHolderBalanceiDYP('0xa68BBe793ad52d0E62bBf34A67F02235bA69E737',1) / 1e18
        let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x0b92E7f074e7Ade0181A29647ea8474522e6A7C2',1) / 1e18
        let tokensStakingDYP = await window.getTokenHolderBalance( '0x0b92E7f074e7Ade0181A29647ea8474522e6A7C2',1) / 1e18

        //TODO Calulate $ Value
        let tvliDYP = ((tokensFarmiDYP + tokensStakingiDYP) * usdPerTokeniDYP)
        let tvlDYP = (tokensStakingDYP * usdPerToken) * 1

        tvl1 = tvl1 + tvliDYP + tvlDYP

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP1 = await window.getTokenHolderBalanceiDYP('0xCFd970494a0b3C52a81dcE1EcBFF2245e6b0B0E7',1) / 1e18
        let tokensStakingiDYP1 = await window.getTokenHolderBalanceiDYP('0xff32a38016422F51e8C0aF5D333472392822FeEf',1) / 1e18
        let tokensStakingDYP1 = await window.getTokenHolderBalance( '0xff32a38016422F51e8C0aF5D333472392822FeEf',1) / 1e18

        //TODO Calulate $ Value
        let tvliDYP1 = ((tokensFarmiDYP1 + tokensStakingiDYP1) * usdPerTokeniDYP)
        let tvlDYP1 = (tokensStakingDYP1 * usdPerToken) * 1

        tvl2 = tvl2 + tvliDYP1 + tvlDYP1

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP2 = await window.getTokenHolderBalanceiDYP('0x49D02CF81Cc352517350F25E200365360426aF94',1) / 1e18
        let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x62AAE8C0c50038236d075AC595Ae0BE4F201bBdd',1) / 1e18
        let tokensStakingDYP2 = await window.getTokenHolderBalance( '0x62AAE8C0c50038236d075AC595Ae0BE4F201bBdd',1) / 1e18

        //TODO Calulate $ Value
        let tvliDYP2 = ((tokensFarmiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP)
        let tvlDYP2 = (tokensStakingDYP2 * usdPerToken) * 1

        tvl3 = tvl3 + tvliDYP2 + tvlDYP2

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP3 = await window.getTokenHolderBalanceiDYP('0xf51965c570419F2576ec9AeAD6A3C5F674424A99',1) / 1e18
        let tokensStakingiDYP3 = await window.getTokenHolderBalanceiDYP('0xb67F464b558e3055C2B6F017546Ed53b2e6333d7',1) / 1e18
        let tokensStakingDYP3 = await window.getTokenHolderBalance( '0xb67F464b558e3055C2B6F017546Ed53b2e6333d7',1) / 1e18

        //TODO Calulate $ Value
        let tvliDYP3 = ((tokensFarmiDYP3 + tokensStakingiDYP3) * usdPerTokeniDYP)
        let tvlDYP3 = (tokensStakingDYP3 * usdPerToken) * 1

        tvl4 = tvl4 + tvliDYP3 + tvlDYP3

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP4 = await window.getTokenHolderBalanceiDYP('0x997A7254E5567d0A70329DEFCc1E4d29d71Ba224',1) / 1e18
        let tokensStakingiDYP4 = await window.getTokenHolderBalanceiDYP('0x1aB008CbfC99d0CA7e3FD8987ce1ebf832506F53',1) / 1e18
        let tokensStakingDYP4 = await window.getTokenHolderBalance( '0x1aB008CbfC99d0CA7e3FD8987ce1ebf832506F53',1) / 1e18

        //TODO Calulate $ Value
        let tvliDYP4 = ((tokensFarmiDYP4 + tokensStakingiDYP4) * usdPerTokeniDYP)
        let tvlDYP4 = (tokensStakingDYP4 * usdPerToken) * 1

        tvl5 = tvl5 + tvliDYP4 + tvlDYP4

        tvlWbnb = tvl1 + tvl2 + tvl3 + tvl4 + tvl5
        this.setState({tvlWbnb, tvl1, tvl2, tvl3, tvl4, tvl5})

        let { BigNumber } = window
        let apr2 = 50
        let ApyStake = new BigNumber(apr2).div(1e2).times(usdPerTokeniDYP).div(usdPerToken).times(1e2).toFixed(2)
        this.setState({ApyStake})

        return {tvlWbnb}
    }

    render() {
        let apy = this.state.ApyStake
        let infoItems = [
            "75% from your deposit is added to Uniswap V2 ETH/iDYP LP",
            "25% from your deposit is sent to DYP Staking with "+ apy +"% APR"
        ]
        let tooltip1 = infoItems.join('\n')

        let infoItems2 = [
            "75% WETH/ETH rewards",
            "25% DYP rewards"
        ]
        let tooltip2 = infoItems2.join('\n')

        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className="col-lg-8  offset-lg-2">
                                    <div className="earn-hero-content p4token-wrapper">
                                        <div className='text-left'>
                                            <p className='h3'><b>Maximize your Yield Farming Rewards</b></p>
                                            <p>Automatically adds liquidity to
                                                <Tooltip placement="top" title={<div style={{ whiteSpace: 'pre-line' }}>{tooltip1}</div>}>
                                                    <Button style={{fontSize: '70%', textDecoration: 'underline', color:  'var(--color_white)'}}>
                                                        Uniswap V2 & deposit to Staking </Button>
                                                </Tooltip>
                                                contract using one asset. To start earning, all you need is to deposit
                                                one of the supported assets (WETH, WBTC, USDC, USDT, DAI, LINK, or iDYP) and earn
                                                <Tooltip placement="top" title={<div style={{ whiteSpace: 'pre-line' }}>{tooltip2}</div>}>
                                                    <Button style={{fontSize: '70%', textDecoration: 'underline', color:  'var(--color_white)', padding: '4px 0px 2px 5px'}}>
                                                        WETH/USDT/DYP as rewards.</Button>
                                                </Tooltip>
                                            </p>
                                            {/*{this.state.ApyStake}*/}
                                            <p>All pool rewards are automatically converted from iDYP to WETH by the
                                                smart contract, decreasing the risk of iDYP price volatility.
                                                <Tooltip placement="top" title={<div style={{ whiteSpace: 'pre-line' }}>{tooltip2}</div>}>
                                                    <Button style={{fontSize: '70%', textDecoration: 'underline', color:  'var(--color_white)'}}>
                                                        WETH/USDT + DYP </Button>
                                                </Tooltip>
                                                is a double reward to the liquidity providers. The users can
                                                choose between two different types of rewards: WETH or USDT. Maintaining
                                                token price stability — every 24 hours, the smart contract will
                                                automatically try converting the iDYP rewards to WETH. If the iDYP
                                                price is affected by more than
                                                <img src='/img/arrow.svg' alt="images not found" />2.5%, then the
                                                maximum iDYP amount not influencing the price will be swapped to WETH,
                                                with the remaining amount distributed in the next day’s rewards. After
                                                seven days, if we still have undistributed iDYP rewards, the DeFi Yield
                                                Protocol governance will vote on whether the remaining iDYP will be
                                                distributed to the token holders or burned (all burned tokens are out
                                                of circulation).</p>
                                            <p>You will receive the total amount in the initial deposit asset with
                                                withdrawal by burning LP tokens when you unstake.</p>
                                            <div style={{display: "flex"}}>
                                                {/*<div className="earn-hero-btns-bridge m-0">*/}
                                                {/*    <a target='_blank' href="https://dypfinance.medium.com/defi-yield-protocol-community-update-staking-pools-tutorial-on-binance-smart-chain-dfa342a5634b">Medium Tutorial</a>*/}
                                                {/*</div>*/}
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' href="https://www.youtube.com/watch?v=xc2S9Jei7DA">Video Tutorial</a>
                                                </div>
                                                {/*<div className="earn-hero-btns-white m-0 pl-3">*/}
                                                {/*    <a target='_blank' href="https://youtu.be/TIC2UimE-50">Video Tutorial</a>*/}
                                                {/*</div>*/}
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
                                                <h5>Total Value Locked ${this.state.tvlWbnb == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvlWbnb,2)
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
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDT.png" alt="Image not found " />
                                                    <img src="/img/tokens/DAI.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP-WBNB</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/farming-new-1" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl1 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl1,2)
                                                )
                                                }
                                                </p>
                                                <p>No Lock</p>
                                                <p>{this.state.Apy1 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    this.state.Apy1
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
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDT.png" alt="Image not found " />
                                                    <img src="/img/tokens/DAI.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP-ETH</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/farming-new-2" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl2 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl2,2)
                                                )
                                                }
                                                </p>
                                                <p>3 Days</p>
                                                <p>{this.state.Apy2 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    this.state.Apy2
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
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDT.png" alt="Image not found " />
                                                    <img src="/img/tokens/DAI.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP-BUSD</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/farming-new-3" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl3 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl3,2)
                                                )
                                                }
                                                </p>
                                                <p>30 Days</p>
                                                <p>{this.state.Apy3 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    this.state.Apy3
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
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDT.png" alt="Image not found " />
                                                    <img src="/img/tokens/DAI.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP-BUSD</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/farming-new-4" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl4 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl4,2)
                                                )
                                                }
                                                </p>
                                                <p>60 Days</p>
                                                <p>{this.state.Apy4 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    this.state.Apy4
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
                                                    <img src="/img/tokens/ETH.png" alt="Image not found " />
                                                    <img src="/img/tokens/WBTC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDC.png" alt="Image not found " />
                                                    <img src="/img/tokens/USDT.png" alt="Image not found " />
                                                    <img src="/img/tokens/DAI.png" alt="Image not found " />
                                                </div>
                                                {/*<h3>DYP-BUSD</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/farming-new-5" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>${this.state.tvl5 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvl5,2)
                                                )
                                                }
                                                </p>
                                                <p>90 Days</p>
                                                <p>{this.state.Apy5 == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    this.state.Apy5
                                                )
                                                }%
                                                </p>
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