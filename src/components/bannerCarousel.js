import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import CircleButton from '../assets/General/CircleButton';
import ChevronArrowSvg from '../assets/General/ChevronArrowSvg/ChevronArrowSvg';
import ImageMetaverse from "../assets/Home/ann-image-7.png";

const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
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
                                <a target="_blank" href='https://youtu.be/t5v6YU5tqRM'>
                                    <img src={ImageMetaverse} alt="Image not found"/>
                                </a>
                            </div>

                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1565674483863752710'>
                                    <img src="https://pbs.twimg.com/media/FbpknKWXEAw0QB8?format=jpg&name=small" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/SwftCoin/status/1564993999496429568'>
                                    <img src="https://pbs.twimg.com/media/Fbf5fKMUIAA3M4k?format=jpg&name=small" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1561019891196518403'>
                                    <img src="https://pbs.twimg.com/media/FanaYV2WQAAOjOU?format=jpg&name=small" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/HuobiGlobal/status/1551568414933602304'>
                                    <img src="https://pbs.twimg.com/media/FYhHOLpUYAEYGgP?format=png&name=small" alt="Image not found"/>
                                </a>
                            </div>

                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1539620413461958656'>
                                    <img src="https://pbs.twimg.com/media/FV3UaozWYAE8y_F?format=jpg&name=small" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://dypfinance.medium.com/metaverse-the-next-step-for-dyp-4c6586a1e3f0'>
                                    <img src="https://miro.medium.com/max/1400/1*VKmKepkkPCmkMcF_0kU5Dg.jpeg" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1531613663450251264'>
                                    <img src="https://pbs.twimg.com/media/FUFifRpX0AEoGYt?format=jpg&name=small" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1530181037766189059'>
                                    <img src="https://pbs.twimg.com/media/FTxLMb9WIAE0fA7?format=jpg&name=medium" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1524075021379022848'>
                                    <img src="https://pbs.twimg.com/media/FSaZJ_mXIAAlf_J?format=jpg&name=medium" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1522968871812141057'>
                                    <img src="https://pbs.twimg.com/media/FSKsEt2XMAA-ZUX?format=jpg&name=medium" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1514627082025852936'>
                                    <img src="https://pbs.twimg.com/media/FQUJHzJXEA0kQ7h?format=jpg&name=medium" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1499761913001136136'>
                                    <img src="https://pbs.twimg.com/media/FNA4t82WUAUfX9z?format=jpg&name=medium" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1496072467814756353'>
                                    <img src="/img/news/vr.png" alt="Image not found"/>
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1480623073208549380'>
                                    <img src="/img/nft/roadmap_caws.jpg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/KyberNetwork/status/1480850588980051969'>
                                    <img src="/img/news/kyber_phase2.jpg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1471162808041713665'>
                                    <img src="https://miro.medium.com/max/1400/1*uQCbsnPYwQdlQ8Wdtrgojg.jpeg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1468652091799482378'>
                                    <img src="https://miro.medium.com/max/1400/1*edJgopIexXunb7eiy4KTvA.jpeg" alt="Image not found" />
                                </a>
                            </div>
                            <div className="banner-item">
                                <a target="_blank" href='https://twitter.com/dypfinance/status/1462032099708391428'>
                                    <img src="https://miro.medium.com/max/1400/1*5hnErea6YNBD8id8I5cm2A.jpeg" alt="Image not found" />
                                </a>
                            </div>
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
                            <div onClick={() => this.carousel?.current?.prev()} className="left" style={{background: 'none', boxShadow: 'none', height: 0}}>
                            <CircleButton action={() => this.carousel?.current?.prev()} size='35' className='left' transform='rotate(180deg)'>
                                <ChevronArrowSvg/>
                            </CircleButton>
                            </div>
                            
                            <div onClick={() => this.carousel?.current?.next()} className="right" style={{background: 'none', boxShadow: 'none', height: 0}}>
                            <CircleButton action={() => this.carousel?.current?.next()} size='35' className='right'>
                                <ChevronArrowSvg/>
                            </CircleButton>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}