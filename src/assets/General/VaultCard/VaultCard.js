import React from 'react'
import { PropTypes } from "prop-types"
import CircleButton from '../CircleButton'
import ChevronArrowSvg from '../ChevronArrowSvg/ChevronArrowSvg'


const VaultCard = ({ icon, text, min_lock_time, percentage, action, link }) => {
    return (
        <div className="vault-card">
            <div className="vault-card-top">
                {icon && <img src={require("../Icons/" + icon)} alt="" className='coin-icon' width={40}/>}
                <p className='accent-text'>{text}</p>
                <div className='action-button' >
                    <a href={link} target="_blank">
                    <CircleButton size='30' action={action}>
                        <ChevronArrowSvg />
                    </CircleButton></a>
                </div>
            </div>
            <div className="vault-card-middle">
                <p className='accent-text'>Minimum Lock time</p> <p>{min_lock_time}</p>
            </div>
            <div className="vault-card-bottom">
                <p className='accent-text'>APR</p> <p className='accent-text'>{percentage}</p>
            </div>

        </div>
    )
}
VaultCard.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    min_lock_time: PropTypes.string,
    percentage: PropTypes.string,
    action: PropTypes.func,


}

export default VaultCard