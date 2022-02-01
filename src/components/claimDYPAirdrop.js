import React from 'react'
import { NavLink } from 'react-router-dom'
import BSC from '../assets/bnb-yield.svg'

export default class claimDYPAirdrop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fundraisers: [],
            fundraisers_count: 0,
            is_loading_fundraisers: false
        }
    }

    componentDidMount() {
        this.loadFundraisers()
    }

    loadFundraisers = () => {
        if (this.state.is_loading_fundraisers) return;
        this.setState({is_loading_fundraisers: true})
        window.$.get(`${window.config.api_baseurl}/api/fundraisers?skip=${this.state.fundraisers.length}&limit=${window.config.display_list_step}`)
            .then(({fundraisers, count}) => {
                this.setState({fundraisers: this.state.fundraisers.concat(fundraisers[0].fundraiser_contract_address), fundraisers_count: count})
                // console.log({fundraisers, count})
            })
            .catch(console.error)
            .always(() => {
                this.setState({is_loading_fundraisers: false})
            })
    }

    render() {
        return (
            <>
                <div className="earn-hero-area App-container">
                    <div className="container">
                        <div className="earn-hero-wrapper">
                            <div className="row">
                                <div className='col-lg-9 offset-lg-3 mt-5'>
                                    {/*<p style={{marginBottom: '3rem', fontWeight: '500'}}>Select a Network before joining the iDYP Community Allocation</p>*/}
                                    <div className="farming-content">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="https://app-bsc.dyp.finance/airdrop" target="_blank">
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src={BSC} alt="Image not found" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="https://app-avax.dyp.finance/airdrop" target="_blank">
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="/img/farms/avax-yield.png" alt="Image not found" />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
