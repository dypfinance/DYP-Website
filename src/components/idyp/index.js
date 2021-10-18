import React from 'react'
import { NavLink } from 'react-router-dom'

export default class iDyp extends React.Component {

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
                                <div className='col-lg-8 offset-lg-2 mt-5'>
                                    <p style={{marginBottom: '3rem', fontWeight: '500'}}>Select a Network before joining the iDYP Community Allocation</p>
                                    <div className="farming-content">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <NavLink to={`/idyp/${this.state.fundraisers}/ethereum`}>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/i1.svg" alt="Image not found" />
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to={`/idyp/${this.state.fundraisers}/binance`}>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/bnb-yield.svg" alt="Image not found" />
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                            <div className="col-lg-4">
                                                <NavLink to={`/idyp/${this.state.fundraisers}/avalanche`}>
                                                    <div className="fariming-item">
                                                        <div className="icon">
                                                            <img src="img/farms/avax-yield.png" alt="Image not found" />
                                                        </div>
                                                    </div>
                                                </NavLink>
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
