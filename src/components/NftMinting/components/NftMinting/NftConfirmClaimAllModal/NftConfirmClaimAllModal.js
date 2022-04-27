import Modal from '../../General/Modal'
import React from 'react'
import PropTypes from "prop-types"

const NftConfirmClaimAllModal = ({ visible, onSuccessClick, onCancelClick, setIsVisible }) => {
    return (
        <Modal visible={visible} modalId='claimAll' setIsVisible={setIsVisible}>
            <div className="loading-modal-content">
                <div className="spinner-border " role="status">
                    <img src={require("../../../../../assets/General/spinner-img.png")} alt="" />
                    
                </div>
                <h1 className="loading-modal-content-title">
                Are you sure you want to Claim all your current selected NFT’s?
                </h1>
                <p className="loading-modal-content-text">
                By Claiming your NFT you will still be able to recieve your current amout of ETH rewards that will be added to your wallet.
                </p>
                <div className="loading-modal-content-buttons">
                    <button onClick={onSuccessClick} className="btn btn-primary" data-dismiss="modal">
                    Continue
                    </button>
                    <button onClick={onCancelClick} className="btn btn-outline-primary" data-dismiss="modal">
                    Go back
                    </button>
                </div>
            </div>
        </Modal>
    )


}

NftConfirmClaimAllModal.propTypes = {
    visible: PropTypes.bool,
    onSuccessClick: PropTypes.func,
    onCancelClick: PropTypes.func,
}

export default NftConfirmClaimAllModal