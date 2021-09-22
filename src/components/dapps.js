import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Dapps extends React.Component {
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
                                                <NavLink to='/farm'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/bsc-farming.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/bsc-farming.png" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>Farm</h4>
                                                        <p style={{color: "var(--black)"}}>{this.props.high_apy.highestAPY.highestAPY_TOTAL}% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/buyback'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/buyback.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/buyback.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Buyback</h4>
                                                        <p style={{color: "var(--black)"}}>100% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/stake'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/staking.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/staking.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Stake</h4>
                                                        <p style={{color: "var(--black)"}}>35% APR</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to='/vault'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/vault.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/vault.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>Vault</h4>
                                                        <p style={{color: "var(--black)"}}>23% APY</p>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href='https://tools.dyp.finance'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/tools.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/tools.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>DYP Tools</h4>
                                                        <p style={{color: "var(--black)"}}>Dashboard</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href='https://nft.dyp.finance'>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img className='logo' src="img/products/black/nft.png" alt="Image not found" />
                                                            <img className='blogo' src="img/products/white/nft.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>NFT</h4>
                                                        <p style={{color: "var(--black)"}}>Marketplace</p>
                                                    </div>
                                                </a>
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
