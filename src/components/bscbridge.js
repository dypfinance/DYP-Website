import React from 'react'
import {NavLink} from "react-router-dom";

export default class Bscbridge extends React.Component {
    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                               <div className="col-lg-4  offset-lg-2 pb-5">
                                  <div className="earn-hero-content p4token-wrapper">
                                    <div className='text-left'>
                                      <p className='h3'><b>DYP BSC Bridge</b></p>
                                      <p>The Bridge will help you swap DYP tokens between Ethereum Network and Binance Smart Chain Network.</p>
                                      <p>Visit <a target='_blank' href='https://bridge.dyp.finance'>bridge.dyp.finance</a> to start using the DeFi Yield Protocol Bridge</p>
                                      <div style={{display: 'flex'}}>
                                        <div className="earn-hero-btns-bridge m-0">
                                            <a target='_blank' className='m-0' href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">Medium Tutorial</a>
                                        </div>
                                        <div className="earn-hero-btns-white m-0 pl-3">
                                          <a target='_blank' href="https://www.youtube.com/watch?v=SK-9PqZJM-I">Video Tutorial</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                               </div>
                                <div className="col-lg-4">
                                    <div className="earn-hero-content p4token-wrapper">
                                        <div className='text-left'>
                                            <p className='h3'><b>iDYP BSC Bridge</b></p>
                                            <p>The Bridge will help you swap iDYP tokens between Ethereum Network and Binance Smart Chain Network.</p>
                                            <p>Visit <a target='_blank' href='https://ibridge.dyp.finance'>ibridge.dyp.finance</a> to start using the DeFi Yield Protocol Bridge</p>
                                            <div style={{display: 'flex'}}>
                                                <div className="earn-hero-btns-bridge m-0">
                                                    <a target='_blank' className='m-0' href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">Medium Tutorial</a>
                                                </div>
                                                <div className="earn-hero-btns-white m-0 pl-3">
                                                    <a target='_blank' href="https://www.youtube.com/watch?v=SK-9PqZJM-I">Video Tutorial</a>
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