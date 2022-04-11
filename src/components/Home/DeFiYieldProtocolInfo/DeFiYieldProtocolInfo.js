import React from 'react'
import PropTypes from 'prop-types'
import DeFiYieldStatisticItem from '../DeFiYieldStatisticItem'
import TitleWithParagraph from '../../../assets/General/TitleWithParagraph'
import DefiBanner from './DefiBanner'

const DeFiYieldProtocolInfo = ({statistics, volume, paid, providers}) => {
    
    return (
        <div className="defi-yield-protocol">
            <div className="big-circle-decoration"></div>
            <div className="big-circle-decoration"></div>
            <div className="container">
                <div className="row">
                    {/* to be checked if text on blue cards is static */}
                    <div className="col-md-6 order-2 order-md-1 banner">

                        <DefiBanner
                            volume={volume}
                            paid={paid}
                            providers={providers}
                        />

                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <TitleWithParagraph >
                            <h1 >
                                Why <mark >DeFi </mark> <br />
                                Yield Protocol
                            </h1>
                            <p >
                                The DeFi Yield Protocol (DYP) is a unique platform that offers solutions for <mark >yield farming, staking, NFTs, </mark> and enabling users to leverage the advanced <mark >trading tools</mark> of the DYP. <br />
                                What makes the DYP a unique yield farming aggregator? <br />
                                The DYP made history in the DeFi space by becoming the first and only protocol to reward users in <mark >ETH, BNB, AVAX.</mark>
                            </p>
                        </TitleWithParagraph>

                        <div className="statistics-section">
                            {statistics.length > 0 && statistics.map((item, id) => (
                                <DeFiYieldStatisticItem key={id} statisticInfo={item.statisticInfo} statisticName={item.statisticName} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

DeFiYieldProtocolInfo.propTypes = {
    statistics: PropTypes.array,
    volume: PropTypes.string,
    paid: PropTypes.string,
    providers: PropTypes.string,
}

export default DeFiYieldProtocolInfo