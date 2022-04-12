import React from 'react'
import PropTypes from "prop-types"

const Modal = ({ modalId, visible, children }) => {
    if(!visible){
        return null
    }
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`modalLabel` + modalId} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <img src={require("../../../Assets/General/times-icon.svg").default} alt="" aria-hidden="true" className="close" data-dismiss="modal" aria-label="Close" /> */}
                    <span aria-hidden="true" className="close" data-dismiss="modal" aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3334 2.55317L17.4467 0.666504L10 8.11317L2.55335 0.666504L0.666687 2.55317L8.11336 9.99984L0.666687 17.4465L2.55335 19.3332L10 11.8865L17.4467 19.3332L19.3334 17.4465L11.8867 9.99984L19.3334 2.55317Z" fill="#001922" />
                        </svg>
                    </span>
                    {children}
                </div>
            </div>
        </div>
    )
}
Modal.propTypes = {
    modalId: PropTypes.string,
    children: PropTypes.element,
    visible: PropTypes.bool
}


export default Modal