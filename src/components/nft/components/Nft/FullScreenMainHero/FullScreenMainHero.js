import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FullScreenMainHero = ({ image, hasScroll }) => {
    const [showVideoModal, setShowVideoModal] = useState(false)

    const scrollDown = () => {
        window.scrollTo({
            top: document.getElementById('full-screen-main-hero').offsetHeight,
            behavior: 'smooth'
        });
    }
    return (
        <div className="full-screen-main-hero" id="full-screen-main-hero">

            {showVideoModal && <div className="modal-backdrop fade show"></div>}
            <div className={["modal fade", showVideoModal ? "show d-block" : ""].join(' ')} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={() => setShowVideoModal(false)} type="button" className="close" dataDismiss="modal" ariaLabel="Close">
                                <img src={require('../../../../../assets/General/close-icon.svg').default} />
                            </button>
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/07B5QsFqm-Q?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        
                    </div>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="row align-items-center position-relative">
                    <img onClick={() => setShowVideoModal(true)} className='play-icon' src={require('../../../../../assets/General/play-icon-filled.png')} />
                    <div className='col-12 px-0'>
                        <img src={require('../../../../../assets/Nft/' + image)}
                            className="main-hero-graphics graphics"
                            alt="phone-graphics" />
                    </div>
                    {
                        hasScroll &&
                        <div className='scrolling-element d-flex align-items-end justify-content-center'>
                            <button onClick={scrollDown}>
                                <img src={require('../../../../../assets/General/ArrowIcons/scroll-arrows.svg').default}
                                    className="img-fluid"
                                    alt="phone-graphics" />
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
FullScreenMainHero.propTypes = {
    image: PropTypes.string,
    hasScroll: PropTypes.bool,
}
export default FullScreenMainHero