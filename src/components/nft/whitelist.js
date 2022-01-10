import React from 'react'

export default class Whitelist extends React.Component {
    render() {
        return (
            <>
                <div className="whitelist-nft" style={{maxWidth: '100%', width: '100%'}}>
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className="col-lg-6  offset-lg-3">
                                    <div className="earn-hero-content">
                                        <h2>Cats and Watch Society Whitelist</h2>
                                        {/* <h5>Visit <a style={{textTransform: 'lowercase'}} href='https://mining.dyp.finance'>https://mining.dyp.finance</a> to join the Ethereum Mining Pool Whitelist</h5> */}
                                        <p>DeFi Yield Protocol (DYP) will provide a solution to the risk Yield Farming brought in. How? – The DYP is developing a platform that allows anyone to provide liquidity and to be rewarded for the first time with Ethereum. At the same time, the platform maintains both token price stability as well as secure and simplified DeFi for end users by integrating a DYP anti-manipulation feature.</p>
                                        <div className="earn-hero-btns">
                                            <div className="p2process-reports">
                                                <p style={{cursor: 'pointer'}} onClick={this.props.handleConnection} id="dropdownMenuButton">{this.props.appState.isConnected ? "Wallet Connected" : "Connect Wallet"}</p>
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