import React from 'react'
import TitleWithParagraph from '../../General/TitleWithParagraph'

const CawsTraits = () => {
    return (
        <div className="caws-traits container-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* to be checked if text on blue cards is static */}
                    <div className="col-md-5 position-relative order-2 order-md-1 mt-5 mt-md-0">
                        {/* <span className='blur-backgroud-top-left left-0' /> */}
                        <img src={require("../../../../../assets/Nft/caw_trait.gif")}
                            className="graphics white-gif"
                            alt="phone-graphics" />
                        <img src={require("../../../../../assets/Nft/caw_trait_dark.gif")}
                            className="graphics dark-gif"
                            alt="phone-graphics" />
                    </div>
                    <div className="col-md-6 offset-md-1 order-1 order-md-2">
                        <TitleWithParagraph >
                            <h1 style={{color: 'var(--black)'}}>
                                <small>ALL THE</small> <br />
                                TRAITS
                            </h1>
                            <p className="mb-2">
                                Discover all the little details that make each cat as smug, cute and adoptable as the other. You can easily discover their story and personality by checking out their outfit, their expression – and of course, <mark>what kind of watch they’re into.</mark>
                            </p>
                            <p className="mb-2">
                                We love all of our cats, but some of their watches make them stand out a bit more than others. We’ll let you be the judge of that.
                            </p>
                        </TitleWithParagraph>
                    </div>
                </div>
            </div>
            <span className='blur-backgroud-bottom-right bottom--150 right--150' />
        </div>
    )
}

export default CawsTraits