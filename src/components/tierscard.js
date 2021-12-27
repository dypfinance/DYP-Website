import React from 'react'

export default class TiersCard extends React.Component {
    render() {
        let tierInfo = this.props.tierInfo
        if (!tierInfo) {
            tierInfo = {progressPercent: 0, tier: 0, depositedAmount: 0}
        }
        // console.log(tierInfo)
        let tierLimits = window.config.tier_dyp_deposits
        let tierNames = window.config.tier_names
        return (
            <div className="p2process-blocks">
                <div className="p2process-block-heading">
                    {/*href={window.config.buyback_staking_url}*/}
                    <h4>Your Launchpad Tier Progress. <a style={{color: 'var(--walet)'}} rel='noopener noreferrer' href={'#'}>Lock DYP to increase tier now.</a></h4>
                </div>
                <div className="p2process-block-bar">
                    <div className="p2progress-bar-wrapper">
                        <div className="p2p2process-block-bar-block">
                            <span style={{width: Number(tierInfo.progressPercent).toFixed(2)+'%'}}></span>
                        </div>
                    </div>
                    <div className="p2process-blocks-devide-blocks">
                        <div className="p2process-blocks-devide-one">
                            <div className="p2process-tik">
                                <span id={tierInfo.tier >= 0 ? "" : "blank"}><img src="/img/tik.svg" alt="images not found"/></span>
                                <div className="p2process-text">
                                    <h4>{tierNames[0]}</h4>
                                    <p>Limit {tierLimits[0]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p2process-blocks-devide-one">
                            <div className="p2process-tik">
                                <span id={tierInfo.tier >= 1 ? "" : "blank"}><img src="/img/tik.svg" alt="images not found"/></span>
                                <div className="p2process-text">
                                    <h4>{tierNames[1]}</h4>
                                    <p>Limit {tierLimits[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p2process-blocks-devide-one">
                            <div className="p2process-tik">
                                <span id={tierInfo.tier >= 2 ? "" : "blank"}><img src="/img/tik.svg" alt="images not found"/></span>
                                <div className="p2process-text">
                                    <h4>{tierNames[2]}</h4>
                                    <p>Limit {tierLimits[2]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p2process-blocks-devide-one">
                            <div className="p2process-tik">
                                <span id={tierInfo.tier >= 3 ? "" : "blank"}><img src="/img/tik.svg" alt="images not found"/></span>
                                <div className="p2process-text">
                                    <h4>{tierNames[3]}</h4>
                                    <p>Limit {tierLimits[3]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p2process-blocks-devide-one">
                            <div className="p2process-tik">
                                <span id={tierInfo.tier >= 4 ? "" : "blank"}><img src="/img/tik.svg" alt="images not found"/></span>
                                <div className="p2process-text">
                                    <h4>{tierNames[4]}</h4>
                                    <p>Limit {tierLimits[4]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}