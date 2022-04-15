import React from 'react'
import PropTypes from "prop-types"
import ChevronArrowSvg from '../ChevronArrowSvg/ChevronArrowSvg'

const SubAssetCardWithButton = ({ action, children, buttonText, top_tick, link }) => {

    return (
        <div className="subasset-card-with-button">

            <div className={`elevated-container ${top_tick ? "top-tick" : ""}`}>
                {children}
                <div className="button-wrapper">

                    <button onClick={action}>
                        <a href = {link} target='blank' style={{color: 'white'}}>
                        {buttonText}
                        <ChevronArrowSvg />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}
SubAssetCardWithButton.propTypes = {
    action: PropTypes.func,
    children: PropTypes.element,
    buttonText: PropTypes.string,
    top_tick: PropTypes.bool
}


export default SubAssetCardWithButton