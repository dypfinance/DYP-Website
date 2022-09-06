import OurPartnersItem from '../../../assets/General/OutPartnersItem'
import TitleWithParagraph from '../../../assets/General/TitleWithParagraph'
import React from 'react'

const OurPartners = () => {

    const partnersArray = [
        {
            image: "chainlink.png",
            text: "Chainlink",
            href: 'https://chain.link/'
        },
        {
            image: "coinbase.png",
            text: "Coinbase",
            href: 'https://www.coinbase.com/'
        },
        {
            image: "huobi.png",
            text: "Huobi",
            href: 'https://www.huobi.com/'
        },
        {
            image: "kuCoin.png",
            text: "KuCoin",
            href: 'https://www.kucoin.com/trade/DYP-USDT'

        },
        {
            image: "avax.png",
            text: "Avalanche",
            href: 'https://www.avalabs.org/'
        },
        {
            image: "pangolin.png",
            text: "Pangolin",
            href: 'https://pangolin.exchange/'
        },
        {
            image: "kyber-network.png",
            text: "Kyber Network",
            href: 'https://kyber.network/'
        },
        {
            image: "coin98.png",
            text: "Coin98",
            href: 'https://coin98.com/wallet'
        },
        // {
        //     image: "uniswap.png",
        //     text: "Uniswap V2",
        //     href: 'https://app.uniswap.org/'
        // },
        {
            image: "efficient-frontier.png",
            text: "Efficient Frontier",
            href: 'https://www.efrontier.io/'
        },
        {
            image: "aircoins.png",
            text: "Aircoins",
            href: 'https://www.aircoins.io/'

        },
        {
            image: "cryptoAdventure.png",
            text: "CryptoAdventure",
            href: 'https://cryptoadventure.com/'

        },
        {
            image: "hummingbot.png",
            text: "Hummingbot",
            href: 'https://hummingbot.io/'
        },
        {
            image: "certic-foundation.png",
            text: "CertiK Security",
            href: 'https://www.certik.com/'

        },
        {
            image: "peckShield.png",
            text: "PeckShield",
            href: 'https://peckshield.com/'

        },
        {
            image: "blockchain-consillium.png",
            text: "Blockchain Consillium",
            href: 'https://www.blockchainconsilium.com/'

        },
        {
            image: "crypto.com.png",
            text: "Crypto.com",
            href: 'https://crypto.com/price/defi-yield-protocol'

        },
        {
            image: "gate.io.png",
            text: "Gate.io",
            href: 'https://www.gate.io/trade/dyp_usdt'

        },
        {
            image: "poloniex.png",
            text: "Poloniex",
            href: 'https://poloniex.com/exchange/USDT_DYP'

        },
        {
            image: "mexc.png",
            text: "Mexc",
            href: 'https://www.mexc.com/'
        },
        {
            image: "ankr.png",
            text: "ANKR",
            href: 'https://www.ankr.com/'

        },
        {
            image: "swft.svg",
            text: "SWFT",
            href: 'https://www.swft.pro/'

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
                    <div className="row d-flex  flex-nowrap flex-md-wrap justify-content-center">

                        {partnersArray.length > 0 && partnersArray.slice(0, 4).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} href={item.href}/>
                            </div>
                        ))}

                        {partnersArray.length > 0 && partnersArray.slice(4, 8).map((item, id) => (
                            <div className=" col-md-3" key={id} >

                                <OurPartnersItem image={item.image} text={item.text} href={item.href}/>
                            </div>
                        ))}


                        {partnersArray.length > 0 && partnersArray.slice(8, 12).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} href={item.href}/>
                            </div>
                        ))}


                        {partnersArray.length > 0 && partnersArray.slice(12, 16).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} href={item.href}/>
                            </div>
                        ))}
                          {partnersArray.length > 0 && partnersArray.slice(16, 22).map((item, id) => (
                            <div className=" col-md-3" key={id}>

                                <OurPartnersItem image={item.image} text={item.text} href={item.href}/>
                            </div>
                        ))}
                       

                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurPartners