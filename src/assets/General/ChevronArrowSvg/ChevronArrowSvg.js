import React from 'react'
import PropTypes from "prop-types"

const ChevronArrowSvg = ({ color }) => {
    return (
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L6 6L1 1" stroke={color} strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
ChevronArrowSvg.defaultProps = {
    color: "white"
}
ChevronArrowSvg.propTypes = {
    color: PropTypes.string
}

export default ChevronArrowSvg