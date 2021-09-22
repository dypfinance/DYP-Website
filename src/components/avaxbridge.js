import React from 'react'
import {NavLink} from "react-router-dom";

export default class Avaxbridge extends React.Component {
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
                                            <p className='h3'><b>DYP AVAX Bridge</b></p>
                                            <p>The Bridge will help you swap DYP tokens between Ethereum Network and Avalanche Network.</p>
                                            <p>Visit <a target='_blank' href='https://avax-bridge.dyp.finance'>avax-bridge.dyp.finance</a> to start using the DeFi Yield Protocol Bridge</p>
                                            <div style={{display: 'flex'}}>
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' className='m-0' href="https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a">DYP Bridge Tutorial</a>
                                                </div>
                                                <div className="earn-hero-btns-white m-0 pl-3">
                                                    <a target='_blank' href="https://www.youtube.com/watch?v=k--YXSSYUMY">Video Tutorial</a>
                                                </div>
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