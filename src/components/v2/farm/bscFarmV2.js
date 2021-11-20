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
            maxApyBusd: ''
        }
    }

    componentDidMount() {
        this.getTotalTvl()
        this.hashMapMax()
    }

    hashMapMax = async () => {

        let maxApyBsc = await window.getHashMapApy()
        maxApyBsc = new Map(JSON.parse(maxApyBsc.Bsc))

        let auxEth = 0,
            maxEth = 0,
            maxBnb = 0,
            auxBnb = 0,
            auxBusd = 0,
            maxBusd = 0

        for (let [key, value] of maxApyBsc.entries()) {
            let pair = key.split('_')[0]

            if ('eth'.localeCompare(pair) == 0){
                auxEth = parseFloat(value)

                if (maxEth <= auxEth)
                    maxEth = auxEth
            }

            if ('bnb'.localeCompare(pair) == 0){
                auxBnb = parseFloat(value)

                if (maxBnb <= auxBnb)
                    maxBnb = auxBnb
            }

            if ('busd'.localeCompare(pair) == 0){
                auxBusd = parseFloat(value)

                if (maxBusd <= auxBusd)
                    maxBusd = auxBusd
            }

        }

        let maxApyBnb = maxBnb
        this.setState({maxApyBnb})

        let maxApyEth = maxEth
        this.setState({maxApyEth})

        let maxApyBusd = maxBusd
        this.setState({maxApyBusd})

        return maxApyBsc
    }

    getTotalTvl = async () => {
        const { LP_IDs, LP_IDs_BSC } = window

        let tvlTotalEth1 = 0
        let tvlTotalBsc1 = 0
        let tvlEth1 = 0
        let tvlWbtc1 = 0
        let tvlUsdc1 = 0
        let tvlUsdt1 = 0
        let tvlWbnb1 = 0
        let tvlBusd1 = 0
        let tvlBeth1 = 0

        let callCombinerTvl = await window.getCombinedTvlUsd()

        tvlTotalEth1 = window.COMBINED_TVL
        tvlTotalBsc1 = window.getTvlBsc

        let tvlTotalEth = tvlTotalEth1
        let tvlTotalBsc = tvlTotalBsc1
        this.setState({tvlTotalEth})
        this.setState({tvlTotalBsc})

        if (window.the_graph_result.lp_data) {

            tvlEth1 = window.the_graph_result.lp_data[LP_IDs.eth[0]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.eth[1]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.eth[2]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.eth[3]].tvl_usd

            tvlWbtc1 = window.the_graph_result.lp_data[LP_IDs.wbtc[0]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.wbtc[1]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.wbtc[2]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.wbtc[3]].tvl_usd

            tvlUsdc1 = window.the_graph_result.lp_data[LP_IDs.usdc[0]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.usdc[1]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.usdc[2]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.usdc[3]].tvl_usd

            tvlUsdt1 = window.the_graph_result.lp_data[LP_IDs.usdt[0]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.usdt[1]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.usdt[2]].tvl_usd +
                window.the_graph_result.lp_data[LP_IDs.usdt[3]].tvl_usd
        }

        let tvlEth = tvlEth1
        this.setState({tvlEth})

        let tvlWbtc = tvlWbtc1
        this.setState({tvlWbtc})

        let tvlUsdc = tvlUsdc1
        this.setState({tvlUsdc})

        let tvlUsdt = tvlUsdt1
        this.setState({tvlUsdt})

        if (window.the_graph_result_BSC.lp_data) {

            tvlBeth1 = window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[0]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[1]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[2]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.eth[3]].tvl_usd

            tvlWbnb1 = window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[0]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[1]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[2]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.wbtc[3]].tvl_usd

            tvlBusd1 = window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[0]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[1]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[2]].tvl_usd +
                window.the_graph_result_BSC.lp_data[LP_IDs_BSC.usdc[3]].tvl_usd
        }

        let tvlWbnb = tvlWbnb1
        this.setState({tvlWbnb})

        let tvlBusd = tvlBusd1
        this.setState({tvlBusd})

        let tvlBeth = tvlBeth1
        this.setState({tvlBeth})

        return {tvlTotalEth, tvlTotalBsc, tvlEth, tvlWbtc, tvlUsdc, tvlUsdt, tvlWbnb, tvlBusd, tvlBeth}
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
                                                <h5>Total Value Locked ${getFormattedNumber(this.state.tvlTotalBsc,2)}</h5>
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
                                                <p>${getFormattedNumber(this.state.tvlWbnb,2)}</p>
                                                <p>No Lock</p>
                                                <p>{this.state.maxApyBnb}%</p>
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
                                                <p>${getFormattedNumber(this.state.tvlBeth,2)}</p>
                                                <p>3 Days</p>
                                                <p>{this.state.maxApyEth}%</p>
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
                                                <p>${getFormattedNumber(this.state.tvlBusd,2)}</p>
                                                <p>30 Days</p>
                                                <p>{this.state.maxApyBusd}%</p>
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
                                                <p>${getFormattedNumber(this.state.tvlBusd,2)}</p>
                                                <p>60 Days</p>
                                                <p>{this.state.maxApyBusd}%</p>
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
                                                <p>${getFormattedNumber(this.state.tvlBusd,2)}</p>
                                                <p>90 Days</p>
                                                <p>{this.state.maxApyBusd}%</p>
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