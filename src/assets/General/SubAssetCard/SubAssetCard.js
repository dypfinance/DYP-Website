import React from 'react'
import { PropTypes } from 'prop-types'
import CircleButton from '../CircleButton'
import ChevronArrowSvg from '../ChevronArrowSvg/ChevronArrowSvg'

const SubAssetCard = ({ icons, percentage, total_value_locked, lock_time, big_icon, action, hasCircleButton, name }) => {
    return (
        <div className="sub-asset-card-wrapper">
            <div className="data-section">
                <div className="data-section-top">
                    <div className="icons-name">

                        <div className="icons">
                            {icons?.length > 0 && icons.map((icon, id) => (
                                <img key={id} src={require("../Icons/" +
                                    icon)} alt="" className={`${icons.length == 1 ? "one-image" : ""}`} />
                            ))}
                        </div>

                        <p>
                            {name && name}
                        </p>
                    </div>
                    <p>{percentage} APR</p>
                </div>
                {total_value_locked && <div className="data-section-middle">
                    <p>Total Value Locked</p> <p>{total_value_locked}</p>
                </div>}
                <div className="data-section-bottom">
                    <p>Lock Time</p> <p>{lock_time}</p>
                </div>
            </div>
            {hasCircleButton && <div className={`button-icon-section d-flex flex-column ${big_icon ? "justify-content-between align-items-center" : "justify-content-center"}`}>
                {big_icon && <img src={require("../Icons/" + big_icon)} alt="" className='big_icon' />}
                <CircleButton action={action} size="30">
                    <ChevronArrowSvg />
                </CircleButton>
            </div>}
        </div>
    )
}
SubAssetCard.defaultProps = {
    hasCircleButton: true
}
SubAssetCard.propTypes = {
    icons: PropTypes.array,
    percentage: PropTypes.string,
    total_value_locked: PropTypes.string,
    lock_time: PropTypes.string,
    big_icon: PropTypes.string,
    action: PropTypes.func,
    hasCircleButton: PropTypes.bool,
    name: PropTypes.string
}

export default SubAssetCard