import React from 'react'
import OwlCarousel from 'react-owl-carousel';

const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
       0: {
          items: 4
       },
       576: {
          items: 5
       },
       768: {
          items: 3
       },
       960: {
          items: 6
       },
       1200: {
          items: 10
       },
       1920: {
          items: 10
       }
    }
}

const activateLasers = () => {
    window.$.alert('Coming Soon!')
}

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.carousel = React.createRef()
    }
    render() {
        return (
            <>
            <a id="brand-area"></a>
            <div className="brand-area">
                
                <div className="container">
                    {this.props.showHeader && <div class="brand-header">
                        <h3>Press Highlights</h3>
                    </div>}
                    <div className="brand-wrapper">
                        {/* <div className="owl-carousel owl-theme brand-slider"> */}
                        <OwlCarousel ref={this.carousel} className="owl-carousel owl-theme brand-slider" {...owlCarouselOptions}>
                            <div className=" brand-item item">
                              <a href='/vault'>
                                <img className='logo' src="img/products/black/vault.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/vault.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>Vault</div>  
                              </a>
                            </div>
                            <div className=" brand-item item">
                              <a href='/farm'>
                                <img className='logo' src="img/products/black/eth-farming.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/eth-farming.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>ETH Farming</div>  
                              </a>
                            </div>
                            <div className=" brand-item item">
                              <a href='/farm'>
                                <img className='logo' src="img/products/black/bsc-farming.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/bsc-farming.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>BSC Farming</div> 
                              </a> 
                            </div>
                            <div className=" brand-item item">
                                <a href='/farm'>
                                    <img className='logo' src="img/products/black/avax-farming.png" alt="Image not found" />
                                    <img className='blogo' src="img/products/white/avax-farming.png" alt="Image not found" />
                                    <div className='pt-2' style={{color: 'var(--box-text)'}}>AVAX Farming</div>
                                </a>
                            </div>
                            <div className=" brand-item item">
                                <a href='/buyback'>
                                    <img className='logo' src="img/products/black/buyback.png" alt="Image not found" />
                                    <img className='blogo' src="img/products/white/buyback.png" alt="Image not found" />
                                    <div className='pt-2' style={{color: 'var(--box-text)'}}>Buyback</div>
                                </a>
                            </div>
                            <div className=" brand-item item">
                              <a href='/stake'>
                                <img className='logo' src="img/products/black/staking.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/staking.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>DYP Staking</div>  
                              </a>
                            </div>
                            <div className=" brand-item item">
                              <a href='/bridge'>
                                <img className='logo' src="img/products/black/bridge.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/bridge.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>Bridge</div>  
                              </a>
                            </div>
                            <div className=" brand-item item">
                              <a href='/vote'>
                                <img className='logo' src="img/products/black/eth-governance.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/eth-governance.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>ETH GOV</div> 
                              </a> 
                            </div>
                            <div className=" brand-item item">
                              <a href='/vote'>
                                <img className='logo' src="img/products/black/bsc-governance.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/bsc-governance.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>BSC GOV</div>  
                              </a>
                            </div>
                            <div className=" brand-item item">
                                <a href='/vote'>
                                    <img className='logo' src="img/products/black/avax-governance.png" alt="Image not found" />
                                    <img className='blogo' src="img/products/white/avax-governance.png" alt="Image not found" />
                                    <div className='pt-2' style={{color: 'var(--box-text)'}}>AVAX GOV</div>
                                </a>
                            </div>
                            <div className=" brand-item item">
                              <a href='https://tools.dyp.finance' target='_blank' >
                                <img className='logo' src="img/products/black/tools.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/tools.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>DYP Tools</div>  
                              </a>
                            </div>
                            <div className=" brand-item item">
                              {/*<div onClick={activateLasers} >*/}
                                <a href='https://nft.dyp.finance'>
                                  <img className='logo' src="img/products/black/nft.png" alt="Image not found" />
                                  <img className='blogo' src="img/products/white/nft.png" alt="Image not found" />
                                  <div className='pt-2' style={{color: 'var(--box-text)'}}>NFT</div>  
                                </a>
                              {/*</div>*/}
                            </div>
                            <div className=" brand-item item">
                              <a href='/feature'>
                                <img className='logo' src="img/products/black/anti-manipulation.png" alt="Image not found" />
                                <img className='blogo' src="img/products/white/anti-manipulation.png" alt="Image not found" />
                                <div className='pt-2' style={{color: 'var(--box-text)'}}>Anti Manipulation</div>
                              </a>  
                            </div>
                            </OwlCarousel>
                        {/* </div> */}
                        
                        <div className="brand-slider-arrow">
                            <div onClick={() => this.carousel?.current?.prev()} className="left">
                                <span><i className="fas fa-angle-left"></i></span>
                            </div>
                            <div onClick={() => this.carousel?.current?.next()} className="right">
                                <span><i className="fas fa-angle-right"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}