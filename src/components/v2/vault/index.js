import React from 'react'
import Dots from "../../elements/dots";
import getFormattedNumber from "../../../functions/get-formatted-number";

export default class Vault extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tvlTotal: 0,
        }
    }

    componentDidMount() {
        this.getTotalTvl()
    }

    getTotalTvl = async () => {

        let tvlTotal = await window.getTotalTvlVaults()

        let [usdPerTokenDYPS] =
            await Promise.all([
                window.getPriceDYPSBsc()
            ])

        /* Calculate with DYPS */
        let tokensStakingDYPS = await window.getTokenHolderBalanceDYPS('0x28eabA060E5EF0d41eeB20d41aafaE8f685739d9',1) / 1e18
        let tokensStakingDYPS1 = await window.getTokenHolderBalanceDYPS('0x2F2cff66fEB7320FC9Adf91b7B74bFb5a80C7C35',1) / 1e18
        let tokensStakingDYPS2 = await window.getTokenHolderBalanceDYPS('0xA987aEE0189Af45d5FA95a9FBBCB4374228f375E',1) / 1e18
        let tokensStakingDYPS3 = await window.getTokenHolderBalanceDYPS('0x251B9ee6cEd97565A821C5608014a107ddc9C98F',1) / 1e18
        let tokensStakingDYPS4 = await window.getTokenHolderBalanceDYPS('0x54F30bFfeb925F47225e148f0bAe17a452d6b8c0',1) / 1e18

        tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS
        tokensStakingDYPS1 = tokensStakingDYPS1 * usdPerTokenDYPS
        tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS
        tokensStakingDYPS3 = tokensStakingDYPS3 * usdPerTokenDYPS
        tokensStakingDYPS4 = tokensStakingDYPS4 * usdPerTokenDYPS
        /* End DYPS */

        tvlTotal = tvlTotal + tokensStakingDYPS + tokensStakingDYPS1 + tokensStakingDYPS2 + tokensStakingDYPS3 + tokensStakingDYPS4

        this.setState({tvlTotal})
        console.log(tvlTotal)

        return tvlTotal
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
                                            <div className="right">
                                                <h5>Total Value Locked ${this.state.tvlTotal == 0 ? (
                                                    <Dots />
                                                ) : (
                                                    getFormattedNumber(this.state.tvlTotal,2)
                                                )
                                                }
                                                </h5>
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
                                                <p>No Lock</p>
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