import Modal from '../../General/Modal'
import React from 'react'
import PropTypes from "prop-types"

const NftLoadingModal = ({ visible, onSuccessClick, onCancelClick }) => {
    return (
        <Modal visible={visible} modalId='formModal'>
            <div className="loading-modal-content">
                <div className="spinner-border " role="status">
                    <img src={require("../../../../../assets/General/spinner-img.png")} alt="" />
                    <span className="sr-only">Loading...</span>
                </div>
                <h1 className="loading-modal-content-title">
                    We are creating your NFT
                </h1>
                <p className="loading-modal-content-text">
                    Please stay on this page, don’t reload or press back or press back button! Go to your wallet / MetaMask and confirm the transaction. You will be automatically redirected to your account page once we’re worked out everything!
                </p>
                <div className="loading-modal-content-buttons">
                    <button onClick={onSuccessClick} className="btn btn-primary" data-dismiss="modal">
                        Ok
                    </button>
                    <button onClick={onCancelClick} className="btn btn-outline-primary" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    )


}

NftLoadingModal.propTypes = {
    visible: PropTypes.bool,
    onSuccessClick: PropTypes.func,
    onCancelClick: PropTypes.func,
}

export default NftLoadingModal