import React from 'react'
import PropTypes from 'prop-types'
import AssetsCard from '../../../assets/General/AssetsCard'
import TitleWithParagraph from '../../../assets/General/TitleWithParagraph'

const SupportedAssetsAndRates = ({assets}) => {
    return (
        <div className="container supported-assets-rates">
            {/* <div className="ball-decoration"></div>
            <div className="big-circle-decoration"></div>
            <div className="big-circle-decoration"></div> */}
            <div className="row pb-5">
                <div className="col">
                    <TitleWithParagraph isCenter>
                        <h1>Supported Assets {window.innerWidth < 445 && <br />}  &amp; <mark>Rates</mark></h1>
                        <p>
                            Diversify your portfolio with our growing selection of digital assets
                        </p>
                    </TitleWithParagraph>
                </div>
            </div>
            <div className="row pt-5">
                {assets.length > 0 && assets.map((item) => (
                    <div className=" col-sm-6 col-lg-4 mb-4" key={item.field}>
                        <div className="elevated-container">
                            <AssetsCard assets={item.assets} action={() => console.log("toggle")} field={item.field} />
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}

SupportedAssetsAndRates.propTypes = {
    assets: PropTypes.array
}

export default SupportedAssetsAndRates