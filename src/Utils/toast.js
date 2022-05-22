import React from 'react'
import { toast } from 'react-toastify';
import Toast from '../components/NftMinting/components/General/Toast';
const showToast = (message, icon = require('../assets/General/red-bell.svg').default, toasConfig = {}) => {
    toast(<Toast icon={icon} message={message} />, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
        closeButton: false,
        ...toasConfig
    });
}

export default showToast;