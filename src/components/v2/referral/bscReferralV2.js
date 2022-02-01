import React from 'react'
import {Route} from "react-router-dom";

export default class ReferralV2Bsc extends React.Component {
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
                                            <p className='h3'><b>DYP Referral Binance Smart Chain</b></p>
                                            <p>Should you refer DYP to your friends, 5% of your friends rewards will be automatically sent to you whenever your friends stake DYP. You do not need to stake, it’s automatically sent to you, free of gas fee.</p>
                                            <p>Visit <a target='_blank' href='https://app-bsc.dyp.finance/constant-staking-2'>app-bsc.dyp.finance</a> to get your Referral link.</p>
                                            <div className="earn-hero-btns">
                                                {/* <a href="https://dypfinance.medium.com/defi-yield-protocol-bridge-tutorial-9dad5226537f">DYP Bridge Tutorial</a> */}
                                                {/* <a href="#">Read More about DYP</a> */}
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