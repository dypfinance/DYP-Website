import TitleWithParagraph from '../../../assets/General/TitleWithParagraph'
import VaultCard from '../../../assets/General/VaultCard'
import React from 'react'
import { PropTypes } from "prop-types"


const Vaults = ({vaults}) => {
    return (
        <div className='container vaults-section-container'>
            <div className="ball-decoration"></div>
            <div className="ball-decoration"></div>
            <div className="ball-decoration"></div>
            <div className="big-circle-decoration"></div>
            <div className="row ">
                <div className="col-md-4">
                    <TitleWithParagraph>
                        <h1>Vaults</h1>
                        <p>Diversify your portfolio with our growing selection of digital assets</p>
                    </TitleWithParagraph>
                </div>
                <div className="col-md-8 mb-4 mt-4 mt-md-0">
                    <div className="elevated-container">
                        <h3>Markets</h3>
                        <div className="row">

                            {vaults[0].assets.length > 0 && vaults[0].assets.map((item, id) => (
                                <div className="col-md-6 col-card" key={id} >

                                    <VaultCard icon={item.icon} action={() => console.log(item.text)} min_lock_time={item.min_lock_time} percentage={item.percentage} text={item.text} />
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col">
                    <div className="elevated-container 3-cols">
                        <h3>Stable coin</h3>
                        <div className="row">

                            {vaults[1].assets.length > 0 && vaults[1].assets.map((item, id) => (
                                <div className="col-md-4 col-card" key={id}>

                                    <VaultCard icon={item.icon} action={() => console.log(item.text)} min_lock_time={item.min_lock_time} percentage={item.percentage} text={item.text} />

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Vaults.propTypes = {
    vaults: PropTypes.array,
}

export default Vaults