import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Buyback extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            apyPangolin: '...',
            apyDmm: '193%'
        }
    }

    componentDidMount() {
        this.getApyPangolin()
    }

    getApyPangolin = async () => {

        let apyPangolin  = await window.getAprPangolin()

        this.setState({apyPangolin: apyPangolin.combinedApr})

        return apyPangolin
    }
    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className='col-lg-9 offset-lg-3 mt-5'>
                                    <div className="farming-content">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="https://app.pangolin.exchange/#/png/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/AVAX/2" target="_blank">
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="/img/favicon/pangolin.svg" alt="Image not found" />
                                                            <div className="line"></div>
                                                        </div>
                                                        <h4>Pangolin</h4>
                                                        <p style={{color: "var(--black)"}}>{this.state.apyPangolin}% APY</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#">
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/about/kyber-logo-knc-square.png" alt="Image not found" />
                                                        </div>
                                                        <div className="line"></div>
                                                        <h4>KyberSwap</h4>
                                                        <p style={{color: "var(--black)"}}>Coming Soon!</p>
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
