import React from 'react'
import PropTypes from 'prop-types'


const OurPartnersItem = ({ image, text }) => {
    return (
        <div className="partners-item-wrapper">
            {image && <img src={require("../PartnerIcons/" + image)} alt={text} />}
            <p>{text}</p>
        </div>
    )
}
OurPartnersItem.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
}

export default OurPartnersItem