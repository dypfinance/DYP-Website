import OurPartnersItem from '../../../assets/General/OutPartnersItem'
import TitleWithParagraph from '../../../assets/General/TitleWithParagraph'
import React from 'react'

const OurPartners = () => {

    const partnersArray = [
        {
            image: "chainlink.png",
            text: "Chainlink"
        },
        {
            image: "avax.png",
            text: "Avalanche"
        },
        {
            image: "pangolin.png",
            text: "Pangolin"
        },
        {
            image: "kyber-network.png",
            text: "Kyber Network"
        },
        {
            image: "coin98.png",
            text: "Coin98"
        },
        {
            image: "hummingbot.png",
            text: "Hummingbot"
        },
        {
            image: "efficient-frontier.png",
            text: "Efficient Frontier"
        },
        {
            image: "aircoins.png",
            text: "Aircoins"
        },
        {
            image: "certic-foundation.png",
            text: "Certic Foundation"
        },
        {
            image: "cryptoAdventure.png",
            text: "CryptoAdventure"
        },
        {
            image: "peckShield.png",
            text: "PeckShield"
        },
        {
            image: "blockchain-consillium.png",
            text: "Blockchain Consillium"
        },
        {
            image: "crypto.com.png",
            text: "Crypto.com"
        },
        {
            image: "kuCoin.png",
            text: "KuCoin"
        },
        {
            image: "gate.io.png",
            text: "Gate.io"
        },
        {
            image: "poloniex.png",
            text: "Poloniex"
        },

    ]

    return (
        <div className="container our-partners-section-container" id="our-partners">
            <div className="ball-decoration"></div>
            <div className="ball-decoration"></div>
            <div className="big-circle-decoration"></div>
            <div className="row">
                <div className="col">
                    <TitleWithParagraph isCenter>
                        <h1>
                            Our <mark>Partners</mark>
                        </h1>
                        <p>We are proud of our growing list of partners.</p>
                    </TitleWithParagraph>
                </div>
            </div>
            <div className="row d-flex justify-content-md-center partners-row">
                <div className="col partners-flex-col d-flex    align-items-start">
                    <div className="row d-flex  flex-nowrap flex-md-wrap">

                        {partnersArray.length > 0 && partnersArray.slice(0, 4).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} />
                            </div>
                        ))}

                        {partnersArray.length > 0 && partnersArray.slice(4, 8).map((item, id) => (
                            <div className=" col-md-3" key={id} >

                                <OurPartnersItem image={item.image} text={item.text} />
                            </div>
                        ))}


                        {partnersArray.length > 0 && partnersArray.slice(8, 12).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} />
                            </div>
                        ))}


                        {partnersArray.length > 0 && partnersArray.slice(12, 16).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} />
                            </div>
                        ))}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurPartners