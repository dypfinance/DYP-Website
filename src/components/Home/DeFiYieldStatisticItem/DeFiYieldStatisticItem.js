import React from 'react'
import { PropTypes } from "prop-types"
import LittleCircle from "../../../assets/General/Icons/little-circle-decoration.svg"


const DeFiYieldStatisticItem = ({ statisticInfo, statisticName }) => {
    return (
        <div className='statistic-item'>
            <img src={LittleCircle} alt="" />
            <p className='statistic-item-info'>{statisticInfo}</p>
            <p className='statistic-item-name'>{statisticName}</p>
        </div>
    )
}
DeFiYieldStatisticItem.propTypes = {
    statisticInfo: PropTypes.string,
    statisticName: PropTypes.string,

}

export default DeFiYieldStatisticItem