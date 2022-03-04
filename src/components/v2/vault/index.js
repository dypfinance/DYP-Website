import React from 'react'

export default class Vault extends React.Component {
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
                                            <p className='h3'><b>DYP Earn Vault</b></p>
                                            <p>The DYP Earn Vault is an automated yield farming contract with Compound integration and support for ETH, WBTC, USDC, USDT, and DAI markets. The interest from Compound is entirely distributed to the users; from the other strategies, a substantial proportion of the profits (75%) is converted to ETH and distributed to the liquidity providers, whereas the remainder (25%) is used to buy back our protocol token and burn it.</p>
                                            {/*<div style={{display: "flex"}}>*/}
                                            {/*    <div className="earn-hero-btns-bridge m-0">*/}
                                            {/*        <a target='_blank' href="https://dypfinance.medium.com/supplying-assets-to-the-defi-yield-protocol-earn-vault-b9599b92443a">Medium Tutorial</a>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="earn-hero-btns-white m-0 pl-3">*/}
                                            {/*        <a target='_blank' href="https://www.youtube.com/watch?v=t8Yr3ZIxHJA">Video Tutorial</a>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
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
                                                <h5>Vaults</h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/ETH.png" alt="Image not found " />
                                                </div>
                                                <h3>ETH</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://vault.dyp.finance/vault-weth" target='_blank'>Supply</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>No Lock</p>
                                                <p>11.05%</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/WBTC.png" alt="Image not found " />
                                                </div>
                                                <h3>WBTC</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://vault.dyp.finance/vault-wbtc" target='_blank'>Supply</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>No Lock</p>
                                                <p>11.10%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/USDT.png" alt="Image not found " />
                                                </div>
                                                <h3>USDT</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://vault.dyp.finance/vault-usdt" target='_blank'>Supply</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>No Lock</p>
                                                <p>18.85%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/USDC.png" alt="Image not found " />
                                                </div>
                                                <h3>USDC</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://vault.dyp.finance/vault-usdc" target='_blank'>Supply</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>3 Days</p>
                                                <p>17.76%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="participar-item">
                                        <div className="participar-item-header">
                                            <div className="left">
                                                <div className="img">
                                                    <img src="img/tokens/DAI.png" alt="Image not found " />
                                                </div>
                                                <h3>DAI</h3>
                                            </div>
                                            <div className="right">
                                                <a href="https://vault.dyp.finance/vault-dai" target='_blank'>Supply</a>
                                            </div>
                                        </div>
                                        <div className="participar-item-content">
                                            <div className="left">
                                                <p>Minimum Lock time</p>
                                                <p>APR</p>
                                            </div>
                                            <div className="right">
                                                <p>No Lock</p>
                                                <p>18.43%</p>
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