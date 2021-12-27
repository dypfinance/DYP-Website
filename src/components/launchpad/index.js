import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Card = ({fundraiser}) => (
    <Link className="col-lg-4 col-md-6" to={`/projects/${fundraiser.fundraiser_contract_address}`}>
        <div>
            <div className="upcomming-block-one">
                <div className="upcomming-blcok-heading">
                    <div className="upcomming-blockh-left">
                        <img className="dn-inline-block" src={fundraiser.logo_link} alt="images not found" />
                        <img className="dr-none" src={fundraiser.logo_link} alt="images not found" />
                    </div>
                </div>
                <div className="upcomming-blcok-middle">
                    <h3>{fundraiser.name}</h3>
                    <div className="upcomming-blcok-middle-total">
                        <p>IDO Goal</p>
                        <span>{fundraiser.goal}</span>
                    </div>
                </div>
                <div className="upcomming-blcok-bottom">
                    <div className="upcomming-blcok-bottom-one">
                        <p>Start</p>
                        <h5 title={new Date(fundraiser.start_date)}>{moment(fundraiser.start_date).format('DD/MM/YYYY')}</h5>
                    </div>
                    <div className="upcomming-blcok-bottom-one">
                        <p>End</p>
                        <h5 title={new Date(fundraiser.end_date)}>{moment(fundraiser.end_date).format('DD/MM/YYYY')}</h5>
                    </div>
                    {/* <div className="upcomming-blcok-bottom-one">
					<p>Unlock</p>
					<h5 title={new Date(fundraiser.unlock_date)}>{moment(fundraiser.unlock_date).format('DD/MM/YYYY')}</h5>
				</div> */}
                </div>
            </div>
        </div>
    </Link>
)

export default class Launchpad extends React.Component {

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
                this.setState({fundraisers: this.state.fundraisers.concat(fundraisers), fundraisers_count: count})
                console.log({fundraisers, count})
            })
            .catch(console.error)
            .always(() => {
                this.setState({is_loading_fundraisers: false})
            })
    }

    render() {
        return (
            <>
                <div className="hero-launchpad" style={{maxWidth: '100%', width: '100%'}}>
                    <div className="container">
                        <div className="hero-wrapper">
                            <div className="row">
                                <div className="col-lg-6 col-md-8">
                                    <div className="hero-left-launchpad">
                                        <h3>Raise Capital safely with <br /> a Decentralized Ecosystem</h3>
                                        <p>Join DeFi Yield Protocol, an Ecosystem designed for DeFi users to earn a yield on their assets, supplying advanced features to track tokens, NFTs, and more. The LaunchPad enables projects to raise capital in a decentralized environment per DYP Tools to deliver the highest security for investors.</p>
                                        <div className='row'>
                                            <div className="col-sm-6 col-md-7 col-lg-7 col-xl-6 pb-2 pr-0">
                                                <a target='_blank' rel='noopener noreferrer' href={window.config.whitelist_form_link}>Launch your project <img src="img/arrowleft.svg" alt="images not found" /></a>
                                            </div>
                                            <div className="col-sm-5">
                                                <a className="earn-hero-btns-white m-0 pl-3 pr-3" target="_blank" href="https://link.medium.com/zp2QDmvLkmb">How It Works</a>
                                            </div>

                                        </div>
                                        <br />

                                        {/* <span><img className="dn-inline-block" src="img/arrowdown.svg" alt="images not found" /></span> */}
                                        {/* <span><img className="dr-none" src="img/darkar.svg" alt="images not found" /></span> */}
                                    </div>
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blockfull">
                    <div className="upcomming">
                        <div className="container">
                            <div className="upcomming-wrapper">
                                <div className="upcomming-heading-launchpad">
                                    <h3>Upcoming Projects</h3>
                                </div>
                                <div className="upcomming-block">
                                    <div className="row">

                                        {/*{this.state.fundraisers.map(fundraiser => <Card key={fundraiser._id} fundraiser={fundraiser} />)}*/}


								<div className="col-lg-4 col-md-6">
									<div className="upcomming-block-one">
										<div className="upcomming-blcok-heading"style={{opacity: '.1'}}>
											<div className="upcomming-blockh-left">
												<img className="dn-inline-block" src="img/de.svg" alt="images not found" />
												<img className="dr-none" src="img/smg.svg" alt="images not found" />
											</div>
											<div className="upcomming-blockh-right">
												{/*<span>In about 4 hours</span>*/}
											</div>
										</div>
										<div className="upcomming-blcok-middle" style={{opacity: '.1'}}>
											<h3>DeFiYieldProtocol</h3>
											<div className="upcomming-blcok-middle-total">
												<p>IDO Goal</p>
												<span>$100K</span>
											</div>
										</div>
										<div className="upcomming-blcok-bottom">
											<div className="upcomming-blcok-bottom-one">
												<p>Start</p>
												<h5>TBA</h5>
											</div>
											{/*<div className="upcomming-blcok-bottom-one">*/}
											{/*	<p>Max allocation</p>*/}
											{/*	<h5>TBA</h5>*/}
											{/*</div>*/}
											<div className="upcomming-blcok-bottom-one">
												<p>End</p>
												<h5>TBA</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="upcomming-block-one">
										<div className="upcomming-blcok-heading" style={{opacity: '.1'}}>
											<div className="upcomming-blockh-left">
												<img className="dn-inline-block" src="img/de.svg" alt="images not found" />
												<img className="dr-none" src="img/smg.svg" alt="images not found" />
											</div>
										</div>
										<div className="upcomming-blcok-middle" style={{opacity: '.1'}}>
											<h3>DeFiYieldProtocol</h3>
											<div className="upcomming-blcok-middle-total">
												<p>IDO Goal</p>
												<span>$100K</span>
											</div>
										</div>
										<div className="upcomming-blcok-bottom">
											<div className="upcomming-blcok-bottom-one">
												<p>Start</p>
												<h5>TBA</h5>
											</div>
											{/*<div className="upcomming-blcok-bottom-one">*/}
											{/*	<p>Max allocation</p>*/}
											{/*	<h5>TBA</h5>*/}
											{/*</div>*/}
											<div className="upcomming-blcok-bottom-one">
												<p>End</p>
												<h5>TBA</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="upcomming-block-one">
										<div className="upcomming-blcok-heading" style={{opacity: '.1'}}>
											<div className="upcomming-blockh-left">
												<img className="dn-inline-block" src="img/de.svg" alt="images not found" />
												<img className="dr-none" src="img/smg.svg" alt="images not found" />
											</div>
											<div className="upcomming-blockh-right">
												{/*<span>In about 4 hours</span>*/}
											</div>
										</div>
										<div className="upcomming-blcok-middle" style={{opacity: '.1'}}>
											<h3>DeFiYieldProtocol</h3>
											<div className="upcomming-blcok-middle-total">
												<p>IDO Goal</p>
												<span>$100K</span>
											</div>
										</div>
										<div className="upcomming-blcok-bottom">
											<div className="upcomming-blcok-bottom-one">
												<p>Start</p>
												<h5>TBA</h5>
											</div>
											{/*<div className="upcomming-blcok-bottom-one">*/}
											{/*	<p>Max allocation</p>*/}
											{/*	<h5>TBA</h5>*/}
											{/*</div>*/}
											<div className="upcomming-blcok-bottom-one">
												<p>End</p>
												<h5>TBA</h5>
											</div>
										</div>
									</div>
								</div>

                                    </div>
                                    <div className='text-center mt-4'>
                                        {(this.state.is_loading_fundraisers || this.state.fundraisers.length != this.state.fundraisers_count) && <button onClick={this.loadFundraisers} className='btn btn-danger'>{this.state.is_loading_fundraisers ? 'Loading...' : 'Load More'}</button>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className="upcomming previous">
                        <div className="container">
                            <div className="upcomming-wrapper">
                                <div className="upcomming-heading">
                                    <h3>Previous Projects</h3>
                                </div>
                                <div className="upcomming-block">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="upcomming-block-one">
                                                <div className="upcomming-blcok-heading">
                                                    <div className="upcomming-blockh-left">
                                                        <img className="dn-inline-block" src="img/de.svg" alt="images not found" />
                                                        <img className="dr-none" src="img/smg.svg" alt="images not found" />
                                                    </div>
                                                    <div className="upcomming-blockh-right">
                                                        <p><img src="img/eth.svg" alt="images not found" /><span>Filled</span></p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-middle">
                                                    <h3>Project Name</h3>
                                                    <p id="eth-price">1 ETH = 6511.05 DYP</p>
                                                    <div className="upcomming-blcok-middle-total">
                                                        <p>Total Raise</p>
                                                        <span>$30K</span>
                                                    </div>
                                                </div>
                                                <div className="process">
                                                    <p id="process-heading">Progress</p>
                                                    <div className="process-bar">
                                                        <span></span>
                                                    </div>
                                                    <div className="process-bar-text">
                                                        <p>100% (min 50%)</p>
                                                        <p>1/500</p>
                                                    </div>
                                                </div>
                                                <div className="upcomming-blcok-bottom">
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Participants</p>
                                                        <h5>617</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Max ETH</p>
                                                        <h5>1.707</h5>
                                                    </div>
                                                    <div className="upcomming-blcok-bottom-one">
                                                        <p>Access</p>
                                                        <h5>Private</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 */}
                </div>
            </>
        )
    }
}