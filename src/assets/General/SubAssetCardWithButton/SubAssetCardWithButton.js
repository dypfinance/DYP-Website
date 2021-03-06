import React from 'react'
import PropTypes from "prop-types"
import ChevronArrowSvg from '../ChevronArrowSvg/ChevronArrowSvg'
import NewBadge from './newbadge.svg'

const SubAssetCardWithButton = ({ action, children, buttonText, top_tick, link }) => {

    return (
        <div className="subasset-card-with-button">
            {top_tick && link.includes('staking') && (
                <img src={NewBadge} alt='' id='newbadge'/>
            )}
            <div className={`elevated-container ${top_tick ? "top-tick" : ""}`}>
                {children}
                <div className="button-wrapper">

                    <a href = {link} target='blank' style={{color: 'white'}}><button onClick={action}>
                        
                        {buttonText}
                        <ChevronArrowSvg />
                       
                    </button> </a>
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