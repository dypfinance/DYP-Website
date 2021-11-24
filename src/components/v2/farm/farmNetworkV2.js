import React from 'react'
import { NavLink } from 'react-router-dom'

export default class FarmNetworkV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            maxApy: 0
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {

        let callCombinerTvl = await window.getCombinedTvlUsd()

        let maxApy = 0

        let highApy = 0
        let highApyArray = []
        let highApyContractBSC = []

        if (window.the_graph_result_bsc_v2.lp_data) {

            let lp_ids = Object.keys(window.the_graph_result_bsc_v2.lp_data)
            for (let id of lp_ids) {
                highApy = window.the_graph_result_bsc_v2.lp_data[id].apy
                highApyArray.push(highApy)
                //console.log('highhh', highApy)
                let contractAddress = id.split('-')[1]
                highApyContractBSC[highApy] = contractAddress
            }

            highApyArray.sort(function(a, b) {
                return a - b
            })

            highApy = highApyArray[highApyArray.length - 1]

            maxApy = highApy
        }
        this.setState({maxApy})


        return {maxApy}
    }

    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className='col-lg-10 offset-lg-4 mt-5'>
                                    <div className="farming-content">
                                        <div className="row">
                                            {/*<div className="col-lg-4">*/}
                                            {/*    <NavLink to='/ethbuyback'>*/}
                                            {/*        <div className="fariming-item">*/}
                                            {/*            <div className="icon">*/}
                                            {/*                <img src="img/i1.svg" alt="Image not found" />*/}
                                            {/*                <div className="line"></div>*/}
                                            {/*            </div>*/}
                                            {/*            <h4>ETH Buyback</h4>*/}
                                            {/*            <p style={{color: "var(--black)"}}>100% APR</p>*/}
                                            {/*        </div>*/}
                                            {/*    </NavLink>*/}
                                            {/*</div>*/}
                                            <div className="col-lg-5">
                                                <NavLink to='/farmv2/bsc'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>BSC Yield</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_BSC_V2}% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            {/*<div className="col-lg-4">*/}
                                            {/*    <NavLink to='/avaxbuyback'>*/}
                                            {/*        <div className="fariming-item">*/}
                                            {/*            <div className="icon">*/}
                                            {/*                <img src="img/farms/avax-yield.png" alt="Image not found" />*/}
                                            {/*            </div>*/}
                                            {/*            <div className="line"></div>*/}
                                            {/*            <h4>AVAX Buyback</h4>*/}
                                            {/*            <p style={{color: "var(--black)"}}>100% APR</p>*/}
                                            {/*        </div>*/}
                                            {/*    </NavLink>*/}
                                            {/*</div>*/}
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
