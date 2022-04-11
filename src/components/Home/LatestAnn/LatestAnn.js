import AnnCard from '../../../assets/General/AnnCard'
import Button from '../../../assets/General/Button'
import ChevronArrowSvg from '../../../assets/General/ChevronArrowSvg/ChevronArrowSvg'
import TitleWithParagraph from '../../../assets/General/TitleWithParagraph'
import React, { useEffect, useState } from 'react'

const LatestAnn = () => {
    const annsArray = [{
        image: "ann-image-1.png",
        title: "Cats and Watches Society NFT’s",
        text: "🔥Join Cats and Watches Society #NFTs Whitelist 🎉One Brand New Rolex Daytona Ceramic 116500LN worth $40k Giveaway",
        date: "February 22, 2022",


    },
    {
        image: "ann-image-2.png",
        title: "V.R. is the next step for #DYP",
        text: "We are excited to announce that the new pools for staking, buyback, and farming have been launched on Ethereum. All the users are",
        date: "February 22, 2022",


    },
    {
        image: "ann-image-3.png",
        title: "V.R. is the next step for #DYP",
        text: "⚡️ Find out more about the #Metaverse play-to-earn game that we are developing. 📢 https://dypfinance.medium.com/how-defi-yield",
        date: "February 22, 2022",


    }
    ]

    const [isMobile, setIsMobile] = useState(false)

    const resize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)

        }

    }
    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)

        }
    }, [])

    useEffect(() => {
        window.addEventListener("resize", resize, false)

        return () => {
            window.removeEventListener("resize", resize, false)
        }
    }, [])
    return (
        <div className="container latest-ann-container">
            <div className="ball-decoration"></div>
            <div className="ball-decoration"></div>
            <div className="big-circle-decoration"></div>
            <div className="row">
                <div className=" col-md-6 ">
                    <TitleWithParagraph>
                        <h1><mark>Latest</mark> <br />
                            Announcements</h1>
                        <p>
                            Here’s a list of every service we partner and collaborate with                        </p>
                    </TitleWithParagraph>
                    <Button text="More news" action={() => console.log("more news out")} icon={<ChevronArrowSvg />} />
                </div>
                {isMobile ? (
                    <div id="carouselAnnouncements" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselAnnouncements" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselAnnouncements" data-slide-to="1"></li>
                            <li data-target="#carouselAnnouncements" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">

                            {annsArray.length > 0 && annsArray.map((item, id) => (

                                <div key={id} className={`carousel-item ${id == 0 ? 'active' : ""}`}>
                                    <div className="col d-flex justify-content-center">
                                        <AnnCard image={item.image} title={item.title} text={item.text} date={item.date} action={() => console.log(item.title)} />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ) : (<><div className=" col-md-6  d-flex justify-content-end negative ">
                    <AnnCard image={annsArray[1].image} title={annsArray[1].title} text={annsArray[1].text} date={annsArray[1].date} action={() => console.log(annsArray[1].title)} />

                </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-7 d-flex justify-content-end negative">
                                <AnnCard image={annsArray[0].image} title={annsArray[0].title} text={annsArray[0].text} date={annsArray[0].date} action={() => console.log(annsArray[0].title)} />
                            </div>
                            <div className="col-md-5 margin-top">
                                <AnnCard image={annsArray[2].image} title={annsArray[2].title} text={annsArray[2].text} date={annsArray[2].date} action={() => console.log(annsArray[2].title)} />
                            </div>
                        </div>
                    </div>
                </>
                )}

            </div>

        </div>
    )
}

export default LatestAnn