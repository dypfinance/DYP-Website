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
                            {
                                this.props.announcements.map((announcements) =>
                                    <div className="banner-item">
                                        <a target="_blank" href={announcements.link}>
                                            <img src={announcements.image} alt="Image not found" />
                                        </a>
                                    </div>
                                )
                            }
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