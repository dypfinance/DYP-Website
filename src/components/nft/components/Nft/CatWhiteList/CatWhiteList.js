import React from 'react'
import TitleWithParagraph from '../../General/TitleWithParagraph'
import Button from '../../General/Button'

const CatSocietyRanking = () => {
    return (
        <div className="cats-whitelist background">
            <div className="container-fluid position-relative">
                <div className="row align-items-center pt-5 px-0 px-md-4">
                    <div className='col-md-5'>
                        <TitleWithParagraph>
                            <h1 className='mb-4' >


                                <small>
                                    CATS AND WATCHES SOCIETY
                                </small>
                                <br />
                                WHITELIST
                            </h1>
                            <p className='mb-4'>
                                To get your address registered for the upcoming mint you have to connect your wallet, sign a message with your metamask wallet, and join our discord. You will be able to mint your caws only from registered address.
                            </p>
                            <p className='mb-5'>
                                <div className='d-flex'>
                                    <Button icon="arrow-red.svg" type={'secondary'} rounded={false} text={'Connect Wallet'} className="my-4 mr-4" />
                                    <Button icon="arrow.svg" type={'primary'} bordered rounded={false} text={'Join Discord'} className="my-4" />
                                </div>
                            </p>
                        </TitleWithParagraph>
                    </div>
                    <div className='col-md-7 text-center'>
                        <img src={require('../../../../../assets/Nft/cats-whitelist-image.png')} className="img-fluid" />
                    </div>
                </div>
                <div className='svg-container'>

                </div>
            </div>
        </div>
    )
}

export default CatSocietyRanking