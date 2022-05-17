// import { Form, Formik } from 'formik'
// import * as Yup from 'yup';
import React, { useEffect, useState } from 'react'
import Button from '../../../assets/General/Button'
import PillsSlider from '../../../assets/General/PillsSlider';
import PillButton from '../../../assets/General/PillButton';
import PropTypes from "prop-types"
import { isMobile } from 'react-device-detect';
import ChevronArrowSvg from '../../../assets/General/ChevronArrowSvg/ChevronArrowSvg';
const CalculateFarmingForm = ({ setSelectedMethod }) => {
    const chainButtonsArray = [
        {
            icon: "eth-icon.svg",
            text: "ETH Chain",
            action: () => console.log("chain button")
        },
        {
            icon: "bsc-icon.svg",
            text: "BSC Chain",
            action: () => console.log("chain button")
        },
        {
            icon: "avax-icon.svg",
            text: "Avax Chain",
            action: () => console.log("chain button")
        },
    ]
    const timePillsArray = [
        {

            text: "1 month",
            action: () => console.log("pill button")
        },
        {

            text: "3 months",
            action: () => console.log("pill button")
        },
        {

            text: "6 months",
            action: () => console.log("pill button")
        },
        {

            text: "1 year",
            action: () => console.log("pill button")
        },
    ]
    const pillsNames = ["Staking", "Buyback", "Vault", "Farming"]


    const getActivePill = (activePill) => {
        setActiveMethod(activePill)
        setSelectedMethod(activePill)
    }

    const [usdToDeposit, setUsdToDeposit] = useState("")
    const [days, setDays] = useState("")
    const [activeChain, setActiveChain] = useState(chainButtonsArray[0])
    const [activeTime, setActiveTime] = useState(timePillsArray[0])
    const [activeMethod, setActiveMethod] = useState(pillsNames[0])
    let formData = {}


    if (isMobile) {
        const newChainButtons = [...chainButtonsArray]

        newChainButtons.map((item) => {
            item.text = item.text.split(" ")[0]
            return item
        })
    }

    useEffect(() => {
        // console.log("ACTIVE CHAIN BUTTON", activeChain.text)
    }, [activeChain])
    useEffect(() => {
        // console.log("ACTIVE TIME BUTTON", activeTime.text)
    }, [activeTime])


    const handleSubmit = (e) => {
        e.preventDefault()
        formData = {
            usdToDeposit,
            days,
            chain: activeChain,
            time: activeTime.text,
            method: activeMethod,


        }

        console.log(formData)
    }

    // console.log(activeChain.text, days, usdToDeposit, activeMethod)

    return (
        <div className='elevated-container form mr-lg-4' >
            <div className="ball-decoration"></div>
            <div className="ball-decoration"></div>

            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="p-md-0 col-12">
                        <PillsSlider pillsNames={pillsNames} getActivePill={getActivePill} initialActivePill={pillsNames[0]} />
                    </div>
                    <div className="p-md-0 col-12">
                        <div className="pill-buttons-wrapper">
                            {chainButtonsArray.length > 0 && chainButtonsArray.map((item, id) => (
                                <PillButton type="chain" onClick={() => setActiveChain(item)} key={id} icon={item.icon} text={item.text} active={activeChain} />
                            ))}

                        </div>
                    </div>
                </div>
                <div className="row price-row">
                    <div className="p-md-0 col-7 d-flex ">
                        <div className="price-box">
                            <span className="sub">
                                Approx.
                            </span>
                            <span className="price">
                                $78.42 <span className="currency">USD</span>
                            </span>
                            <span className="sup">
                                (0.193458 WBNB)
                            </span>
                        </div>

                    </div>
                    <div className="p-0 col-5 d-flex align-items-end">
                        <img src={require('../../../assets/images/line-graph.svg').default} alt="" />
                    </div>
                </div>
                <div className="row inputs-row">
                    <div className="p-md-0 col-md-6 d-flex  ">
                        <div className="form-group">
                            <label htmlFor="usd_to_deposit" style={{background: 'none'}}><span style={{color: 'var(--text-gray-8b-nft)'}}>USD to deposit</span></label>
                            <input type="text" className="form-control" id='usd_to_deposit' name="usd_to_deposit" value={usdToDeposit} onChange={(e) => setUsdToDeposit(e.target.value)} />
                        </div>
                    </div>
                    <div className="p-md-0 col-md-6">
                        <div className="form-group">
                            <label htmlFor="days" style={{background: 'none'}}><span style={{color: 'var(--text-gray-8b-nft)'}}>Days</span></label>
                            <input type="text" className="form-control" id='days' name="days"
                                value={days} onChange={(e) => setDays(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="p-md-0 col-md-6 order-2 order-md-1 ">

                        <Button text="Earn now" icon={<ChevronArrowSvg />} />

                    </div>
                    <div className="p-md-0 col-md-6 order-1- order-md-2 d-flex align-items-center">
                        <div className="pill-buttons-wrapper time-buttons">
                            {timePillsArray.length > 0 && timePillsArray.map((item, id) => (
                                <PillButton type="time" onClick={() => setActiveTime(item)} key={id} icon={item.icon} text={item.text} active={activeTime} />
                            ))}

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="p-md-0 col">
                        <p className="form-info">
                        *This calculator is for informational purposes only. <br />  Calculated yields assume that prices of the deposited assets don't change.
                        </p>
                    </div>
                </div>
            </form>

        </div>
    )
}
CalculateFarmingForm.propTypes = {
    values: PropTypes.shape({
        usd_to_deposit: PropTypes.string,
        days: PropTypes.string,
        method: PropTypes.string,
        type_of_chain: PropTypes.string,
        time_period: PropTypes.string,


    }),
    setSelectedMethod: PropTypes.any,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,

}

export default CalculateFarmingForm