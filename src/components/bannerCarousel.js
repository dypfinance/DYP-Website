import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: false,
    autoplay: true,
    rewind: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
       0: {
          items: 1
       },
       576: {
          items: 1
       },
       768: {
          items: 3
       },
       960: {
          items: 3
       },
       1200: {
          items: 3
       },
       1920: {
          items: 3
       }
    }
}

const activateLasers = () => {
    window.$.alert('Coming Soon!')
}

export default class BannerCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.carousel = React.createRef()
    }
    render() {
        return (
            <>
                    <div className="brand-wrapper banner-wrapper">
                        <OwlCarousel ref={this.carousel} className="owl-carousel owl-theme brand-slider" {...owlCarouselOptions}>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1450102523361206276'>
                                    <img src="https://miro.medium.com/max/1400/1*OHIOvUx1ybWesknybKuAiA.jpeg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1448664965598957577'>
                                    <img src="https://miro.medium.com/max/1400/1*kbELYDIMwLtlU0JomEji0A.jpeg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/KyberNetwork/status/1445210348944912388'>
                                    <img src="https://miro.medium.com/max/1400/1*iM7ctAGi7pD0k_MmMuUWjg.png" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/defipulse/status/1436388557896159235'>
                                    <img src="img/defipulse.png" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1433086017045680128'>
                                    <img src="https://miro.medium.com/max/1400/1*XgOsgpsvvrahEiDZSE65Yw.jpeg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1425400583012425730?s=20'>
                                    <img src="https://miro.medium.com/max/1400/1*gimouGn5M4Mp6t8opTsNLw.jpeg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                              <a target="_blank" href='https://twitter.com/dypfinance/status/1422907203338518533?s=20'>
                                <img src="https://pbs.twimg.com/media/E78uR22WQAE-VVh?format=jpg&name=large" alt="Image not found" />
                              </a>
                            </div>  
                            <div className="banner-item">
                              <a target="_blank" href='https://twitter.com/dypfinance/status/1414541027248050178?s=20'>
                                <img src="https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg"/>
                              </a>
                            </div>  
                            <div className="banner-item">
                              <a target="_blank" href='https://twitter.com/dypfinance/status/1413176606068203520?s=20'>
                                <img src="https://miro.medium.com/max/1400/1*e2gdKr1KM3QlpGPewZu-gw.jpeg"/>
                              </a>
                            </div>
                            <div className="banner-item">
                              <a target="_blank" href='https://dypfinance.medium.com/pangolin-partners-with-defi-yield-protocol-dyp-a-unique-cross-chain-platform-b52b7e93e0a9'>
                                <img src="https://miro.medium.com/max/1400/1*JKSLJ9I73fKciwH5yTnU3A.jpeg"/>
                              </a>
                            </div>

                            <div className="banner-item">
                              <a target="_blank" href='https://twitter.com/avalancheavax/status/1407685010673397762?s=20'>
                                <img src="img/avalanche.jpg"/>
                              </a>
                            </div>
                            <div className="banner-item">
                              <a target="_blank" href='https://dypfinance.medium.com/defi-yield-protocol-integrates-chainlink-price-feeds-to-secure-yield-farming-data-on-ethereum-and-3fe85062a0e5'>
                                <img src="https://miro.medium.com/max/1400/1*lut5I2B3ZEnaIULOfGnDVw.jpeg"/>
                              </a>
                            </div>
                            </OwlCarousel>
                        
                        <div className="banner-slider-arrow">
                            <div onClick={() => this.carousel?.current?.prev()} className="left">
                                <span><i class="fas fa-long-arrow-alt-left"></i></span>
                            </div>
                            <div onClick={() => this.carousel?.current?.next()} className="right">
                                <span><i class="fas fa-long-arrow-alt-right"></i></span>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}