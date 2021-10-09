import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'

export default class Ethfarm extends React.Component {

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
            maxApyBtc: '',
            maxApyUsdc: '',
            maxApyUsdt: ''
        }
    }

    componentDidMount() {
        this.getTotalTvl()
        this.hashMapMax()
    }

    hashMapMax = async () => {

        let maxApy = await window.getHashMapApy()
        maxApy = new Map(JSON.parse(maxApy.Ethereum))

        let auxEth = 0,
            auxBtc = 0,
            auxUsdc = 0,
            auxUsdt = 0,
            maxEth = 0,
            maxBtc = 0,
            maxUsdc = 0,
            maxUsdt = 0

        for (let [key, value] of maxApy.entries()) {
            let pair = key.split('_')[0]

            if ('eth'.localeCompare(pair) == 0){
                auxEth = parseFloat(value)

                if (maxEth <= auxEth)
                    maxEth = auxEth
            }

            if ('wbtc'.localeCompare(pair) == 0){
                auxBtc = parseFloat(value)

                if (maxBtc <= auxBtc)
                    maxBtc = auxBtc
            }

            if ('usdc'.localeCompare(pair) == 0){
                auxUsdc = parseFloat(value)

                if (maxUsdc <= auxUsdc)
                    maxUsdc = auxUsdc
            }

            if ('usdt'.localeCompare(pair) == 0){
                auxUsdt = parseFloat(value)

                if (maxUsdt <= auxUsdt)
                    maxUsdt = auxUsdt
            }
        }

        let maxApyEth = maxEth
        this.setState({maxApyEth})

        let maxApyBtc = maxBtc
        this.setState({maxApyBtc})

        let maxApyUsdc = maxUsdc
        this.setState({maxApyUsdc})

        let maxApyUsdt = maxUsdt
        this.setState({maxApyUsdt})

        return maxApy
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

            tvlTotalEth = tvlEth1 + tvlWbtc1 + tvlUsdc1 + tvlUsdt1
            this.setState({tvlTotalEth})
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
                                            <p className='h3'><b>Ethereum Farms</b></p>
                                            <p>Deposit your liquidity provider tokens to receive Ethereum rewards.</p>
                                            <p>NOTE: The farming dApp works ONLY with the <a target='_blank' href='https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'>Uniswap V2</a> (old) LP tokens!</p>
                                            <p>In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from DYP to ETH by the smart contract, and ETH is distributed as a reward to the liquidity providers.Maintaining token price stability — every 24 hours, the smart contract will automatically try to convert the DYP rewards to ETH. If the DYP price is affected by more than <img src='img/arrow.svg' alt="images not found" />2.5%, then the maximum DYP amount that does not affect the price will be swapped to ETH, with the remaining amount distributed in the next day’s rewards. After seven days, if we still have undistributed DYP rewards, the DeFi Yield protocol governance will vote on whether the remaining DYP will be distributed to the token holders or burned (all burned tokens are removed from circulation).</p>
                                            <div style={{display: "flex"}}>
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' href="https://dypfinance.medium.com/dyp-staking-pools-tutorial-82bd49e65527">Medium Tutorial</a>
                                                </div>
                                                <div className="earn-hero-btns-white m-0 pl-3">
                                                    <a target='_blank' href="https://www.youtube.com/watch?v=5vvAyDHKNVo">Video Tutorial</a>
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
                                                <h5>Pools
                                                </h5>
                                            </div>
                                            <div className="right">
                                                <h5>Total Value Locked ${getFormattedNumber(this.state.tvlTotalEth,2)}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/DYP.png" alt="Image not found " />
                                                    <img src="img/tokens/ETH.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP-ETH</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/staking-eth" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvlEth,2)}</p>
                                                <p>{this.state.maxApyEth}%</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/DYP.png" alt="Image not found " />
                                                    <img src="img/tokens/WBTC.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP-WBTC</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/staking-wbtc" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvlWbtc,2)}</p>
                                                <p>{this.state.maxApyBtc}%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/DYP.png" alt="Image not found " />
                                                    <img src="img/tokens/USDC.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP-USDC</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/staking-usdc" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvlUsdc,2)}</p>
                                                <p>{this.state.maxApyUsdc}%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/DYP.png" alt="Image not found " />
                                                    <img src="img/tokens/USDT.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP-USDT</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app.dyp.finance/staking-usdt" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                <p>${getFormattedNumber(this.state.tvlUsdt,2)}</p>
                                                <p>{this.state.maxApyUsdt}%</p>
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