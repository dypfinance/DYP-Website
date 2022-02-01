import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Test extends React.Component {
    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                {/*<div className="col-lg-8  offset-lg-2">*/}
                                {/*    <div className="earn-hero-content p4token-wrapper">*/}
                                {/*        <div className='text-left'>*/}
                                {/*            <p className='h3' style={{display: 'flex', justifyContent: 'center'}}><b>Defi Yield Protocol FARMS</b></p>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className='col-lg-8 offset-lg-2 mt-5'>
                                    <div className="farming-content">
                                        {/*<div className="row">*/}
                                        {/*    <div className="col-lg-4 col-md-4 col-6">*/}
                                        {/*        <a href="https://www.blockchainconsilium.com/" target='_blank'>*/}
                                        {/*            <div className="fariming-item">*/}
                                        {/*                <div className="icon">*/}
                                        {/*                    <img src="img/w2.svg" alt="Image not found" />*/}
                                        {/*                    <div className="line"></div>*/}
                                        {/*                </div>*/}
                                        {/*                <p>Blockchain Consilium</p>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-lg-4 col-md-4 col-6">*/}
                                        {/*        <a href='https://www.certik.org/' target='_blank'>*/}
                                        {/*            <div className="fariming-item">*/}
                                        {/*                <div className="icon">*/}
                                        {/*                    <img src="img/w3.svg" alt="Image not found" />*/}
                                        {/*                </div>*/}
                                        {/*                <div className="line"></div>*/}
                                        {/*                <p>Certik Foundation</p>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-lg-4 col-md-4 col-6">*/}
                                        {/*        <a href="https://peckshield.com/en" target='_blank'>*/}
                                        {/*            <div className="fariming-item">*/}
                                        {/*                <div className="icon">*/}
                                        {/*                    <img src="img/w1.svg" alt="Image not found" />*/}
                                        {/*                </div>*/}
                                        {/*                <div className="line"></div>*/}
                                        {/*                <p>Peckshield</p>*/}
                                        {/*            </div>*/}
                                        {/*        </a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <NavLink to='/ethfarms'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/i1.svg" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>ETH yield</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_ETH}% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/bscfarms'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>BSC yield</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_BSC}% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/avaxfarms'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/avax-yield.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>AVAX yield</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_AVAX}% APY</p>
                                                    </div>
                                                </NavLink>
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
