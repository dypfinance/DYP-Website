import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'

export default class Avaxfarm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlAvax: '',

            maxApyAvax: ''
        }
    }

    componentDidMount() {
        this.getTotalTvl()
        this.hashMapMax()
    }

    hashMapMax = async () => {

        let maxApy = await window.getHashMapApy()
        maxApy = new Map(JSON.parse(maxApy.AVAX))

        let auxAvax = 0,
            maxAvax = 0

        for (let [key, value] of maxApy.entries()) {
            let pair = key.split('_')[0]

            if ('avax'.localeCompare(pair) == 0){
                auxAvax = parseFloat(value)

                if (maxAvax <= auxAvax)
                    maxAvax = auxAvax
            }

        }

        let maxApyAvax = maxAvax
        this.setState({maxApyAvax})

        return maxApy
    }

    getTotalTvl = async () => {
        const { LP_IDs_AVAX } = window

        let tvlAvax1 = 0


        if (window.the_graph_result_BSC.lp_data) {

            tvlAvax1 = window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[0]].tvl_usd +
                window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[1]].tvl_usd +
                window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[2]].tvl_usd +
                window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[3]].tvl_usd
        }

        let tvlAvax = tvlAvax1
        this.setState({tvlAvax})

        return {tvlAvax}
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
                                            <p className='h3'><b>Avalanche Farms</b></p>
                                            <p>Deposit your liquidity provider tokens to receive WAVAX/ETH/DYP as rewards.</p>
                                            <p>In order to lower the risk of DYP price volatility, all pool rewards are automatically converted from DYP to WAVAX by the smart contract, and WAVAX/ETH/DYP is distributed as a reward to the liquidity providers. The users can choose between three different type of rewards: WAVAX, ETH, or DYP. Maintaining token price stability — every 24 hours, the smart contract will automatically try to convert the DYP rewards to WAVAX. If the DYP price is affected by more than <img src='img/arrow.svg' alt="images not found" />2.5%, then the maximum DYP amount that does not affect the price will be swapped to WAVAX, with the remaining amount distributed in the next day’s rewards. After seven days, if we still have undistributed DYP rewards, the DeFi Yield Protocol Governance will vote on whether the remaining DYP will be distributed to the token holders or burned (all burned tokens are removed from circulation).</p>
                                            <div style={{display: "flex"}}>
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' href="https://dypfinance.medium.com/defi-yield-protocol-community-update-yield-farming-tutorial-on-avalanche-9c0053593cd8">Medium Tutorial</a>
                                                </div>
                                                <div className="earn-hero-btns-white m-0 pl-3">
                                                    <a target='_blank' href="https://www.youtube.com/watch?v=7EkEfOpIKP8">Video Tutorial</a>
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
                                                <h5>Total Value Locked ${getFormattedNumber(this.state.tvlAvax,2)}</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/DYP.png" alt="Image not found " />
                                                    <img src="img/farms/avax-yield.png" alt="Image not found " />
                                                </div>
                                                <h3>DYP-AVAX</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://app-avax.dyp.finance/" target='_blank'>Deposit</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Total Value Locked</p>
                                                <p>APY</p>
                                            </div>
                                            <div className="right">
                                                {/*<p>$479,398.29</p>*/}
                                                <p>${getFormattedNumber(this.state.tvlAvax,2)}</p>
                                                <p>{this.state.maxApyAvax}%</p>
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