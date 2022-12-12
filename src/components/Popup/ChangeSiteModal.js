import React, { useEffect, useState } from 'react'
import defiChange from './assets/defiChange.svg'
import siteChange from './assets/siteChange.png'
import continueButton from './assets/continueButton.svg'
import techDypius from './assets/techDypius.png'
import xMark from './assets/xMark.svg'
import './changesitemodal.css'



const ChangeSiteModal = ({onModalClose, modalState}) => {

    const html = document.querySelector("html");
    const siteModal = document.querySelector('#changeModal')
  
    useEffect(() => {
     
    if (modalState === true) {
        html.classList.add('hidescroll')
        siteModal?.classList.add('showscroll');
      } else {
        // Enable scroll
        html.classList.remove('hidescroll')
      }
      if(modalState === true){
        setTimeout(() => {
            window.location.replace('https://dypius.com/')
          }, 5000);
      }
    }, [modalState])
    
    

  return (
    <a href='https://dypius.com/' className={`change-site-modal ${modalState && 'change-modal-open'} d-flex flex-column align-items-center justify-content-center px-5 pb-5 gap-3`} id="changeModal">
        <img src={xMark} className="x-mark" alt="" onClick={onModalClose} />
        <img src={siteChange} alt="" className='modal-image' />
        <img src={techDypius} alt="" className='modal-image' />
        <img src={defiChange} alt="" className='modal-image' />
        <a href="https://dypius.com/">
        <img src={continueButton} alt="" width={200} />
        </a>
    </a>
  )
}

export default ChangeSiteModal