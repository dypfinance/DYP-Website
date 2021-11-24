import React from 'react'
import { NavLink } from 'react-router-dom'

export default class DappsV2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Apy1: 0,
            Apy2: 0,
            Apy3: 0,
            Apy4: 0,
            Apy5: 0,
            maxApy: 0
        }
    }

    componentDidMount() {
        //this.getTotalTvl()
    }

    getTotalTvl = async () => {
        // const { LP_IDs_BSC_V2 } = window
        //
        // let callCombinerTvl = await window.getCombinedTvlUsd()
        //
        // let Apy1 = 0
        // let Apy2 = 0
        // let Apy3 = 0
        // let Apy4 = 0
        // let Apy5 = 0
        // let maxApy = 0
        //
        // if (window.the_graph_result_bsc_v2.lp_data) {
        //
        //     Apy1 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[0]].apy
        //     Apy2 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[1]].apy
        //     Apy3 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[2]].apy
        //     Apy4 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[3]].apy
        //     Apy5 = window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[4]].apy
        //
        //     maxApy = Apy1 > Apy2 ? Apy1 : Apy2 > Apy3 ? Apy2 : Apy3 > Apy4 ? Apy3 : Apy4 > Apy5 ? Apy4 : Apy5
        // }
        //
        // this.setState({maxApy})
        //
        //
        // return {maxApy}
    }

    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className='col-lg-8 offset-lg-2 mt-5'>
                                    <div className="farming-content">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <NavLink to='/farmv2'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="/img/products/black/bsc-farming.png" alt="Image not found" />
                                                            <img className='blogo' src="/img/products/white/bsc-farming.png" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>Farm V2</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_BSC_V2}% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/buybackv2'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="/img/products/black/buyback.png" alt="Image not found" />
                                                            <img className='blogo' src="/img/products/white/buyback.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Buyback V2</h4>
                                                        <p style={{color: "var(--black)"}}>100% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/stakev2'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="/img/products/black/staking.png" alt="Image not found" />
                                                            <img className='blogo' src="/img/products/white/staking.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Stake V2</h4>
                                                        <p style={{color: "var(--black)"}}>50% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            {/*<div className="col-lg-4">*/}
                                            {/*    <NavLink to='/vault'>*/}
                                            {/*        <div className="fariming-item">*/}
                                            {/*            <div className="icon">*/}
                                            {/*                <img className='logo' src="img/products/black/vault.png" alt="Image not found" />*/}
                                            {/*                <img className='blogo' src="img/products/white/vault.png" alt="Image not found" />*/}
                                            {/*            </div>*/}
                                            {/*            <div className="line"></div>*/}
                                            {/*            <h4>Vault</h4>*/}
                                            {/*            <p style={{color: "var(--black)"}}>23% APY</p>*/}
                                            {/*        </div>*/}
                                            {/*    </NavLink>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-lg-4">*/}
                                            {/*    <a href='https://tools.dyp.finance'>*/}
                                            {/*        <div className="fariming-item">*/}
                                            {/*            <div className="icon">*/}
                                            {/*                <img className='logo' src="img/products/black/tools.png" alt="Image not found" />*/}
                                            {/*                <img className='blogo' src="img/products/white/tools.png" alt="Image not found" />*/}
                                            {/*            </div>*/}
                                            {/*            <div className="line"></div>*/}
                                            {/*            <h4>DYP Tools</h4>*/}
                                            {/*            <p style={{color: "var(--black)"}}>Dashboard</p>*/}
                                            {/*        </div>*/}
                                            {/*    </a>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-lg-4">*/}
                                            {/*    <a href='https://nft.dyp.finance'>*/}
                                            {/*        <div className="fariming-item">*/}
                                            {/*            <div className="icon">*/}
                                            {/*                <img className='logo' src="img/products/black/nft.png" alt="Image not found" />*/}
                                            {/*                <img className='blogo' src="img/products/white/nft.png" alt="Image not found" />*/}
                                            {/*            </div>*/}
                                            {/*            <div className="line"></div>*/}
                                            {/*            <h4>NFT</h4>*/}
                                            {/*            <p style={{color: "var(--black)"}}>Marketplace</p>*/}
                                            {/*        </div>*/}
                                            {/*    </a>*/}
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
