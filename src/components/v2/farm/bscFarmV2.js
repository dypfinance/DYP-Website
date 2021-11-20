import React from 'react'
import getFormattedNumber from '../../../functions/get-formatted-number'

export default class BscFarmV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotalEth: '',
            tvlTotalBsc: '',
            tvlEth: '',
            tvlWbtc: '',
            tvlUsdc: '',
            tvlUsdt: '',
            tvlWbnb: '',
            tvlBusd: '',
            tvlBeth: '',

            maxApyEth: '',
            maxApyBnb: '',
            maxApyBusd: '',

            Apy1: 0,
            Apy2: 0,
            Apy3: 0,
            Apy4: 0,
            Apy5: 0,

            tvl1: 0,
            tvl2: 0,
            tvl3: 0,
            tvl4: 0,
            tvl5: 0
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
        const { LP_IDs_BSC_V2 } = window

        let callCombinerTvl = await window.getCombinedTvlUsd()

        let tvlWbnb1 = 0
        let Apy1 = 0
        let Apy2 = 0
        let Apy3 = 0
        let Apy4 = 0
        let Apy5 = 0
        let {tvl1, tvl2, tvl3, tvl4, tvl5} = 0

        let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])

        if (window.the_graph_result_bsc_v2.lp_data) {

            tvl1 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[0]].tvl_usd
            tvl2 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[1]].tvl_usd
            tvl3 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[2]].tvl_usd
            tvl4 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[3]].tvl_usd
            tvl5 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[4]].tvl_usd

            Apy1 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[0]].apy
            Apy2 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[1]].apy
            Apy3 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[2]].apy
            Apy4 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[3]].apy
            Apy5 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[4]].apy
        }
        this.setState({Apy1, Apy2, Apy3, Apy4, Apy5})

        let tvlWbnb = tvlWbnb1
        this.setState({tvlWbnb})

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP = await window.getTokenHolderBalanceiDYP('0x47902C36E1a0BB31D63d9ebB1DE0505C50db8D9C',2) / 1e18
        let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0xc794cDb8D6aC5eB42d5ABa9c1E641ae17c239c8c',2) / 1e18
        let tokensStakingDYP = await window.getTokenHolderBalance( '0xc794cDb8D6aC5eB42d5ABa9c1E641ae17c239c8c',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP = ((tokensFarmiDYP + tokensStakingiDYP) * usdPerTokeniDYP)
        let tvlDYP = (tokensStakingDYP * usdPerToken) * 1

        tvl1 = tvl1 + tvliDYP + tvlDYP

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP1 = await window.getTokenHolderBalanceiDYP('0x4d3B5d5BB0f4a6001fC78E10D34a52625d9dB172',2) / 1e18
        let tokensStakingiDYP1 = await window.getTokenHolderBalanceiDYP('0x23609B1f5274160564e4afC5eB9329A8Bf81c744',2) / 1e18
        let tokensStakingDYP1 = await window.getTokenHolderBalance( '0x23609B1f5274160564e4afC5eB9329A8Bf81c744',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP1 = ((tokensFarmiDYP1 + tokensStakingiDYP1) * usdPerTokeniDYP)
        let tvlDYP1 = (tokensStakingDYP1 * usdPerToken) * 1

        tvl2 = tvl2 + tvliDYP1 + tvlDYP1

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP2 = await window.getTokenHolderBalanceiDYP('0x0032a480ef94a3310fbC09FE95A03897aC0C6e1A',2) / 1e18
        let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x264922696b9972687522b6e98Bf78A0430E2163C',2) / 1e18
        let tokensStakingDYP2 = await window.getTokenHolderBalance( '0x264922696b9972687522b6e98Bf78A0430E2163C',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP2 = ((tokensFarmiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP)
        let tvlDYP2 = (tokensStakingDYP2 * usdPerToken) * 1

        tvl3 = tvl3 + tvliDYP2 + tvlDYP2

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP3 = await window.getTokenHolderBalanceiDYP('0x29F3991998138f1cac7A1c6AA0A62eDbeE54AaC7',2) / 1e18
        let tokensStakingiDYP3 = await window.getTokenHolderBalanceiDYP('0x9DF0A645BeB6F7aDFaDC56f3689E79405337EFE2',2) / 1e18
        let tokensStakingDYP3 = await window.getTokenHolderBalance( '0x9DF0A645BeB6F7aDFaDC56f3689E79405337EFE2',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP3 = ((tokensFarmiDYP3 + tokensStakingiDYP3) * usdPerTokeniDYP)
        let tvlDYP3 = (tokensStakingDYP3 * usdPerToken) * 1

        tvl4 = tvl4 + tvliDYP3 + tvlDYP3

        //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
        let tokensFarmiDYP4 = await window.getTokenHolderBalanceiDYP('0x4B01Aa07A35Fa4beCcE1D431Bb82e1dAE7Ca77CC',2) / 1e18
        let tokensStakingiDYP4 = await window.getTokenHolderBalanceiDYP('0xbd574278fEbad04b7A0694C37DeF4f2ecFa9354A',2) / 1e18
        let tokensStakingDYP4 = await window.getTokenHolderBalance( '0xbd574278fEbad04b7A0694C37DeF4f2ecFa9354A',2) / 1e18

        //TODO Calulate $ Value
        let tvliDYP4 = ((tokensFarmiDYP4 + tokensStakingiDYP4) * usdPerTokeniDYP)
        let tvlDYP4 = (tokensStakingDYP4 * usdPerToken) * 1

        tvl5 = tvl5 + tvliDYP4 + tvlDYP4

        tvlWbnb = tvl1 + tvl2 + tvl3 + tvl4 + tvl5
        this.setState({tvlWbnb, tvl1, tvl2, tvl3, tvl4, tvl5})

        return {tvlWbnb}
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
                                            <p className='h3'><b>Binance Smart Chain Farms</b></p>
                                            <p>Maximize your Yield Farming Rewards</p>
                                            <p>Automatically adds liquidity to PancakeSwap V2 & deposit to Staking
                                                contract using one asset. To start earning, all you need is to deposit
                                                one of the supported assets (WBNB, BTCB, ETH, BUSD, or CAKE) and earn
                                                WBNB/ETH/DYP as rewards.</p>
                                            <p>All pool rewards are automatically converted from iDYP to WBNB by the
                                                smart contract, decreasing the risk of iDYP price volatility. WBNB/ETH
                                                + DYP is a double reward to the liquidity providers. The users can
                                                choose between two different types of rewards: WBNB or ETH. Maintaining
                                                token price stability — every 24 hours, the smart contract will
                                                automatically try converting the iDYP rewards to WBNB. If the iDYP
                                                price is affected by more than
                                                <img src='/img/arrow.svg' alt="images not found" />2.5%, then the
                                                maximum iDYP amount not influencing the price will be swapped to WBNB,
                                                with the remaining amount distributed in the next day’s rewards. After
                                                seven days, if we still have undistributed iDYP rewards, the DeFi Yield
                                                Protocol governance will vote on whether the remaining iDYP will be
                                                distributed to the token holders or burned (all burned tokens are out
                                                of circulation).</p>
                                            <p>You will receive the total amount in the initial deposit asset with
                                                withdrawal by burning LP tokens when you unstake.</p>
                                            <div style={{display: "flex"}}>
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' href="https://dypfinance.medium.com/defi-yield-protocol-community-update-staking-pools-tutorial-on-binance-smart-chain-dfa342a5634b">Medium Tutorial</a>
                                                </div>
                                                {/*<div className="earn-hero-btns-white m-0 pl-3">*/}
                                                {/*    <a target='_blank' href="https://www.youtube.com/watch?v=DxOwCeIFEgA">Video Tutorial</a>*/}
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
                                                <h5>Total Value Locked ${getFormattedNumber(this.state.tvlWbnb,2)}</h5>
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
                                                {/*<h3>DYP-WBNB</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/farming-new-1" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvl1,2)}</p>
                                                <p>No Lock</p>
                                                <p>{this.state.Apy1}%</p>
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
                                                {/*<h3>DYP-ETH</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/farming-new-2" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvl2,2)}</p>
                                                <p>3 Days</p>
                                                <p>{this.state.Apy2}%</p>
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
                                                {/*<h3>DYP-BUSD</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/farming-new-3" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvl3,2)}</p>
                                                <p>30 Days</p>
                                                <p>{this.state.Apy3}%</p>
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
                                                {/*<h3>DYP-BUSD</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/farming-new-4" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvl4,2)}</p>
                                                <p>60 Days</p>
                                                <p>{this.state.Apy4}%</p>
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
                                                {/*<h3>DYP-BUSD</h3>*/}
                                            </div>
                                            <div className="right">
                                                <a href="https://app-bsc.dyp.finance/farming-new-5" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>Lock time</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvl5,2)}</p>
                                                <p>90 Days</p>
                                                <p>{this.state.Apy5}%</p>
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