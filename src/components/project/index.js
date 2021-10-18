import React from 'react'
import moment from 'moment'
//import TiersCard from '../tierscard'

import f from '../../functions/get-formatted-number'

const {BigNumber}  = window
const tier_names = window.config.tier_names

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fundraiser: undefined,
            isLoadingFundraiser: false,
            deposit_token_symbol: '',
            reward_token_symbol: '',
            total_deposited: '',
            my_deposit: '',
            my_share: '',
            deposit_token_balance: '',
            deposit_token_decimals: '',
            deposit_token_address: '',
            reward_token_decimals: '',
            reward_token_per_deposit_token: '',
            pending_divs: '',

            selectedTokenAddress: '',
            selectedTokenDecimals: '',
            selectedTokenSymbol: '',
            selectedTokenBalance: '',

            amountToDeposit: '',
            now: Date.now(),

            notWhitelisted: false,
        }
    }

    componentDidMount() {
        this.loadSelectedTokenAddress()
        this.loadFundraiser()
        window._rbalInternal = setInterval(this.refreshBalance, 5000)
        window._clockInterval = setInterval(() => this.setState({now: Date.now()}), 1000)
        this.handleSelectedTokenChange(this.state.selectedTokenAddress)
    }
    componentWillUnmount() {
        clearInterval(window._rbalInternal)
        clearInterval(window._clockInterval)
        // this.setState({selectedTokenSymbol: '', selectedTokenBalance: '', selectedTokenDecimals: '', selectedTokenAddress: ''})
    }

    loadSelectedTokenAddress = () => {
        let network = this.props.match.params.network

        if (network == 'ethereum'){
            let selectedTokenAddress = window.config.deposit_tokens[0].address.toLowerCase()
            let selectedTokenDecimals = window.config.deposit_tokens[0].decimals
            this.setState({selectedTokenAddress, selectedTokenDecimals})
        }
        if (network == 'binance'){
            let selectedTokenAddress = window.config.deposit_tokens_binance[0].address.toLowerCase()
            let selectedTokenDecimals = window.config.deposit_tokens_binance[0].decimals
            this.setState({selectedTokenAddress, selectedTokenDecimals})
        }
        if (network == 'avalanche'){
            let selectedTokenAddress = window.config.deposit_tokens_avalanche[0].address.toLowerCase()
            let selectedTokenDecimals = window.config.deposit_tokens_avalanche[0].decimals
            this.setState({selectedTokenAddress, selectedTokenDecimals})
        }
        console.log(this.state.selectedTokenAddress)
    }

    handleSetMaxDeposit = () => {
        this.setState({ amountToDeposit: this.state.selectedTokenBalance })
    }

    handleApprove = async (e) => {
        e.preventDefault()
        if (!window.isConnected) return;
        let coinbase = await window.getCoinbase()
        let selectedTokenContract = await window.getContractiDYP(window.TOKEN_ABI, this.state.selectedTokenAddress)
        selectedTokenContract.methods.approve(this.state.fundraiser?.fundraiser_contract_address, this.state.amountToDeposit).send({from: coinbase/*, maxPriorityFeePerGas: window.config.default_maxPriorityFeePerGas_gwei * 1e9, gas: window.config.default_gas_amount, maxFeePerGas: window.config.default_gasprice_gwei * 1e9, gasPrice: window.config.default_gasprice_gwei * 1e9*/})
    }

    handleDeposit = async (e) => {
        e.preventDefault()
        let coinbase = await window.getCoinbase()
        if (!coinbase) return;
        let selectedTokenAddress = this.state.selectedTokenAddress.toLowerCase()
        let amountToDeposit = this.state.amountToDeposit
        let deadline = Math.floor(Date.now()/1e3 + window.config.tx_max_wait_seconds)

        let network = this.props.match.params.network
        let router = ''
        let WETH = ''

        if (network == 'ethereum') {
            router = await window.getUniswapRouterContract(window.config.uniswap_router_address, window.UNISWAP_ROUTER_ABI)
            WETH = await router.methods.WETH().call()
        }
        if (network == 'binance') {
            router = await window.getUniswapRouterContract(window.config.pancakeswap_router_address, window.UNISWAP_ROUTER_ABI)
            WETH = await router.methods.WETH().call()
        }
        if (network == 'avalanche') {
            router = await window.getUniswapRouterContract(window.config.pangolin_router_address, window.PANGOLIN_ROUTER_ABI)
            WETH = await router.methods.WAVAX().call()
        }

        let amountOutMin = 0

        if (selectedTokenAddress != this.state.deposit_token_address.toLowerCase()) {
            let path = [...new Set([selectedTokenAddress, WETH, this.state.deposit_token_address].map(a => a.toLowerCase()))]
            let _amountOutMin = await router.methods.getAmountsOut(amountToDeposit, path).call()
            amountOutMin = _amountOutMin[_amountOutMin.length - 1]
            amountOutMin = new BigNumber(amountOutMin).times(100 - window.config.slippage_tolerance_percent).div(100).toFixed(0)
        }
        console.log({ amountOutMin, deadline, amountToDeposit, selectedTokenAddress })

        let fundraiserContract = await window.getContractiDYP(window.FUNDRAISER_ABI, this.state.fundraiser?.fundraiser_contract_address)

        let whitelistArgs = await this.refreshWhitelistArgs()
        console.log({ whitelistArgs })

        if (!whitelistArgs || !whitelistArgs.args) return;

        // alert(JSON.stringify(whitelistArgs.args))

        fundraiserContract.methods.deposit(amountToDeposit, selectedTokenAddress, amountOutMin, deadline, whitelistArgs.args[0], whitelistArgs.args[1]).send({ from: coinbase/*, maxPriorityFeePerGas: window.config.default_maxPriorityFeePerGas_gwei * 1e9, gas: window.config.default_gas_amount, maxFeePerGas: window.config.default_gasprice_gwei * 1e9, gasPrice: window.config.default_gasprice_gwei * 1e9 */})

    }
    handleClaim = async (e) => {
        e.preventDefault()
        let coinbase = await window.getCoinbase()
        if (!coinbase) return;
        let fundraiserContract = await window.getContractiDYP(window.FUNDRAISER_ABI, this.state.fundraiser?.fundraiser_contract_address)
        fundraiserContract.methods.claim().send({ from: coinbase/*, maxPriorityFeePerGas: window.config.default_maxPriorityFeePerGas_gwei * 1e9, gas: window.config.default_gas_amount, maxFeePerGas: window.config.default_gasprice_gwei * 1e9, gasPrice: window.config.default_gasprice_gwei * 1e9 */})
    }

    refreshWhitelistArgs = async () => {
        let coinbase = await window.getCoinbase()
        if (!coinbase) return;
        let args
        try {
            args = await window.$.get(`${window.config.api_baseurl}/api/whitelist/args?account=${coinbase}&fundraiser_contract_address=${this.state.fundraiser?.fundraiser_contract_address}`)
            if (!args || !(args.args instanceof Array) || args.args.length !== 2) {
                throw new Error("Invalid whitelist args!")
            }
            this.setState({ notWhitelisted: false })
        } catch (e) {
            this.setState({ notWhitelisted: true })
            console.error(e)
        }
        console.log( args )
        return args
    }

    refreshBalance = async () => {
        if (!this.state.fundraiser) return;
        if (!window.isConnected) return;
        let coinbase = await window.getCoinbase()
        this.setState({ coinbase })
        if (!coinbase) return;
        //this.props.refreshTier()
        this.refreshWhitelistArgs()
        this.handleSelectedTokenChange(this.state.selectedTokenAddress)
        let fundraiserContract = await window.getContractiDYP(window.FUNDRAISER_ABI, this.state.fundraiser.fundraiser_contract_address)
        let depositTokenContractAddress = await fundraiserContract.methods.TRUSTED_DEPOSIT_TOKEN_ADDRESS().call()
        let rewardTokenContractAddress = await fundraiserContract.methods.TRUSTED_REWARD_TOKEN_ADDRESS().call()
        this.setState({ deposit_token_address: depositTokenContractAddress })
        let depositTokenContract = await window.getContractiDYP(window.TOKEN_ABI, depositTokenContractAddress)
        let rewardTokenContract = await window.getContractiDYP(window.TOKEN_ABI, rewardTokenContractAddress)

        let reward_token_per_deposit_token = await fundraiserContract.methods.REWARD_TOKEN_PER_DEPOSIT_TOKEN().call()
        console.log( {reward_token_per_deposit_token} )
        console.log({depositTokenContractAddress, rewardTokenContractAddress})

        let deposit_token_symbol = await depositTokenContract.methods.symbol().call()
        let reward_token_symbol = await rewardTokenContract.methods.symbol().call()

        this.setState({ deposit_token_symbol, reward_token_symbol })
        let deposit_token_balance = await depositTokenContract.methods.balanceOf(coinbase).call()
        let deposit_token_decimals = await depositTokenContract.methods.decimals().call()

        this.setState({ deposit_token_balance, deposit_token_decimals })

        let reward_token_decimals = await rewardTokenContract.methods.decimals().call()
        reward_token_per_deposit_token = reward_token_per_deposit_token/10**reward_token_decimals
        console.log({reward_token_per_deposit_token})
        this.setState({ reward_token_decimals, reward_token_per_deposit_token })

        let pending_divs = await fundraiserContract.methods.getPendingDivs(coinbase).call()
        this.setState({ pending_divs })

        let total_deposited = await fundraiserContract.methods.totalDepositedTokens().call()
        let my_deposit = await fundraiserContract.methods.depositedTokens(coinbase).call()

        this.setState({ total_deposited, my_deposit })

        let myShare = (new BigNumber(my_deposit)).div(new BigNumber(total_deposited)).times(100).toFixed(2)+'%'
        this.setState({ my_share: total_deposited*1>0? myShare : '0%' })
    }

    handleSelectedTokenChange = async (selectedTokenAddress) => {
        if (!this.state.coinbase) return;

        if (selectedTokenAddress.toLowerCase() != this.state.selectedTokenAddress.toLowerCase()) {
            this.setState({ amountToDeposit: '' })
        }

        let network = this.props.match.params.network

        if (network == 'ethereum') {
            this.setState({ selectedTokenAddress,
                selectedTokenDecimals: window.config.deposit_tokens.filter(t => t.address.toLowerCase() == selectedTokenAddress)[0].decimals,
                selectedTokenSymbol: window.config.deposit_tokens.filter(t => t.address.toLowerCase() == selectedTokenAddress)[0].symbol,

            })
        }
        if (network == 'binance') {
            this.setState({ selectedTokenAddress,
                selectedTokenDecimals: window.config.deposit_tokens_binance.filter(t => t.address.toLowerCase() == selectedTokenAddress)[0].decimals,
                selectedTokenSymbol: window.config.deposit_tokens_binance.filter(t => t.address.toLowerCase() == selectedTokenAddress)[0].symbol,

            })
        }
        if (network == 'avalanche') {
            this.setState({ selectedTokenAddress,
                selectedTokenDecimals: window.config.deposit_tokens_avalanche.filter(t => t.address.toLowerCase() == selectedTokenAddress)[0].decimals,
                selectedTokenSymbol: window.config.deposit_tokens_avalanche.filter(t => t.address.toLowerCase() == selectedTokenAddress)[0].symbol,

            })
        }

        let selectedTokenContract = await window.getContractiDYP(window.TOKEN_ABI, selectedTokenAddress)
        let selectedTokenBalance = await selectedTokenContract.methods.balanceOf(this.state.coinbase).call()
        this.setState({ selectedTokenBalance })

    }

    loadFundraiser = () => {
        this.setState({ isLoadingFundraiser: true })
        let id = this.props.match.params.id
        window.$.get(`${window.config.api_baseurl}/api/fundraiser/${id}`)
            .then(fundraiser => {
                this.setState({ fundraiser })
                console.log(fundraiser)
                // this.loadContractInfo(fundraiser.fundraiser_contract_address)
            })
            .catch(console.error)
            .always(() => {
                this.setState({ isLoadingFundraiser: false })
            })
    }

    render() {
        if (!this.state.fundraiser)
            return <div style={{minHeight: '600px'}}></div>
        let appState = this.props.appState

        let now = moment(this.state.now)
        let unlock_date = moment(this.state.fundraiser?.unlock_date)

        let diff = unlock_date.diff(now)

        let diffDuration = moment.duration(diff)

        let days = diffDuration.days(), hours = diffDuration.hours(), minutes = diffDuration.minutes(), seconds = diffDuration.seconds()
        days = Math.max(0, days)
        hours = Math.max(0, hours)
        minutes = Math.max(0, minutes)
        seconds = Math.max(0, seconds)
        let can_claim = diffDuration.asSeconds() <= 0

        let sale_price = (1 / this.state.reward_token_per_deposit_token) || ''
        if (sale_price == Infinity || isNaN(sale_price)) {
            sale_price = ''
        }

        let network = this.props.match.params.network

        return (
            <>
                <div className="p2main">
                    <div className="p2process">
                        <div className="container">
                            <div className="p2process-wrapper">
                                <div className="p2process-reports text-right">
                                    <div className='dropdown' style={{display: 'inline-block'}}>
                                        <p style={{cursor: 'pointer'}} onClick={this.props.handleConnectionLaunchpad} id="dropdownMenuButton">{appState.isConnected ? "Wallet Connected" : "Connect Wallet"}</p>
                                    </div>
                                </div>
                                {/*<TiersCard tierInfo={this.props.appState.tierInfo} />*/}
                            </div>
                        </div>
                    </div>

                    <div className="p2process-blocks-devides">
                        <div className="totalbar">
                            <div className="totalbar-block">
                                <div className="totalbar-block-one">
                                    <span id="fill"></span>
                                </div>
                                <div className="totalbar-block-one">
                                    <span id="halffill"></span>
                                </div>
                                <div className="totalbar-block-one">
                                </div>
                                <div className="totalbar-block-one">
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="prodet-sm-bg">
                        <div className="prodet">
                            <div className="container">
                                <div className="prodet-wrapper">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="prodet-left">
                                                <div className="prodet-left-one">
                                                    <div className="prodet-left-heading">
                                                        <h4>iDYP x DeFi Yield Protocol</h4>
                                                        {this.state.notWhitelisted && <p> <span><i className="fas fa-times-circle"></i></span> Wallet not whitelisted</p>}
                                                    </div>
                                                    <div className="prodet-para">
                                                        <p style={{margin: '0'}}>iDYP is a token that will be available on Ethereum, Binance Smart Chain, and Avalanche chains. Later, it will be available on other chains.</p>
                                                        <p style={{margin: '0'}}>iDYP is an excellent investment for DYP holders who wish to get a passive income by using our products. Our new smart contracts will use iDYP as part of novel strategies, adding constant buying pressure on the DYP token and boost the rewards for the farm, buyback, and staking pools.</p>
                                                        <p style={{margin: '0'}}>What is critical to understand is that iDYP cannot work without the native token of our platform, DYP.</p>
                                                    </div>
                                                    {/*<div>*/}
                                                    {/*    <h5 className='mt-3'>Audit Reports</h5>*/}
                                                    {/*    {this.state.fundraiser.audit_reports.map((r, i) => <a key={i} style={{display: 'block', color: '#888'}} target='_blank' rel='noopener noreferrer' href={r}> <i className='far fa-file-pdf'></i> {r} </a>)}*/}
                                                    {/*</div>*/}
                                                    {/*<div>*/}
                                                    {/*    <h5 className='mt-3'>Due Diligence Reports</h5>*/}
                                                    {/*    {this.state.fundraiser.due_diligence_reports.map((r, i) => <a key={i} style={{display: 'block', color: '#888'}} target='_blank' rel='noopener noreferrer' href={r}> <i className='far fa-file-pdf'></i> {r} </a>)}*/}
                                                    {/*</div>*/}
                                                    <div className="prodet-para">
                                                        <h5 className='mt-3'>Contribution Limits & Allocation</h5>
                                                        <p style={{margin: '0'}} >There is no Minimum or Maximum Deposit, that means any amount can be contributed.</p>
                                                        <p style={{margin: '0'}} >The sold tokens for the community allocation will be vested and released in three months. The users eligible to buy the iDYP during this sale will be able to stake them immediately and earn 100% APR. If not, the tokens may be claimed during a three month period.</p>
                                                        <p style={{margin: '0'}} >Consider a scenario wherein you purchase 10,000 iDYP tokens; You will have two options, to claim for a three-month period or to stake the tokens with a three-month lock time.</p>
                                                        <p style={{margin: '0'}} >If you choose to claim you will get ~ 111 iDYP tokens daily, tokens can be claimed once every 24 hours.</p>
                                                        <p style={{margin: '0'}} >If you choose to stake you will lock the tokens for a three-month period with 100% APR, that means you will earn 8.33% monthly ~ 833 iDYP tokens.</p>
                                                    </div>
                                                    <div className="prodet-link">
                                                        <a rel='noopener noreferrer' target='_blank' href='https://dyp.finance/'>Visit Website <img className="logo" src="/img/arrow1.svg" alt="images not found"/> <img className="blogo" src="/img/arrowcustom.svg" alt="images not found"/></a>
                                                    </div>
                                                    {/* <div className="prodet-bar-wrapper">
                                                    <div className="prodet-bar">
                                                        <span></span>
                                                    </div>
                                                </div> */}
                                                    <div className="prodet-date">
                                                        <div className="prodet-date-left">
                                                            <h4>Start date</h4>
                                                            <p title={new Date(this.state.fundraiser?.start_date)}>{moment(this.state.fundraiser?.start_date).format('DD-MM-YYYY')}</p>
                                                        </div>
                                                        <div className="prodet-date-left">
                                                            <h4>End date</h4>
                                                            <p title={new Date(this.state.fundraiser?.end_date)}>{moment(this.state.fundraiser?.end_date).format('DD-MM-YYYY')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="p2total">
                                                        <div className="p2total-heading text-center">
                                                            <p>My Tokens: {f(this.state.pending_divs/10**this.state.reward_token_decimals, 6)} {this.state.reward_token_symbol}</p>
                                                        </div>
                                                        <div className="p2total-block">
                                                            <div className="row no-gutters">
                                                                {/*<div className="col-lg-4 col-6 col-md-4">*/}
                                                                {/*    <div className="p2total-block-one p2total-block-onex">*/}
                                                                {/*        <p>Goal</p>*/}
                                                                {/*        <h3>{this.state.fundraiser?.goal}</h3>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="col-lg-4 col-6 col-md-4">*/}
                                                                {/*    <div className="p2total-block-one p2total-block-two">*/}
                                                                {/*        <p>Deposit Token</p>*/}
                                                                {/*        <h3>{this.state.deposit_token_symbol}&nbsp;</h3>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                                {/*<div className="col-lg-4 col-6 col-md-4">*/}
                                                                {/*    <div className="p2total-block-one p2total-block-three">*/}
                                                                {/*        <p>Reward Token</p>*/}
                                                                {/*        <h3>{this.state.reward_token_symbol}&nbsp;</h3>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                                <div className="col-lg-4 col-6 col-md-4">
                                                                    <div className="p2total-block-one p2total-block-onex">
                                                                        {/* <p>My Share</p>
                                                                    <h3>{this.state.my_share}</h3> */}
                                                                        <p>Token Price</p>
                                                                        <h3> 0.2 {this.state.deposit_token_symbol==''? 'USD' : this.state.deposit_token_symbol}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-6 col-md-4">
                                                                    <div className="p2total-block-one p2total-block-two pop">
                                                                        <p>Listing Price</p>
                                                                        <h3>0.4 {this.state.deposit_token_symbol==''? 'USD' : this.state.deposit_token_symbol}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-4 col-6 col-md-4">
                                                                    <div className="p2total-block-one p2total-block-three pop">
                                                                        <p>Your Deposit</p>
                                                                        <h3>{f(this.state.my_deposit/10**this.state.deposit_token_decimals, 2)} {this.state.deposit_token_symbol}</h3>
                                                                    </div>
                                                                </div>
                                                                {/*<div className="col-lg-4 col-6 col-md-4">*/}
                                                                {/*    <div className="p2total-block-one p2total-block-twox  p2total-block-two customboefc pop">*/}
                                                                {/*        <p>Total Raised</p>*/}
                                                                {/*        <h3>{f(this.state.total_deposited/10**this.state.deposit_token_decimals, 2)} {this.state.deposit_token_symbol}</h3>*/}
                                                                {/*    </div>*/}
                                                                {/*</div>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="prodet-right">
                                                <div className="prodet-right-approve">
                                                    <div className="prodet-right-heading">
                                                        <h3 style={{marginBottom: '1rem'}}>Buy iDYP by depositing one of the supported assets</h3>
                                                        <div>Balance: {f(this.state.selectedTokenBalance/10**this.state.selectedTokenDecimals, 6)} {this.state.selectedTokenSymbol}</div>
                                                    </div>
                                                    <div className='mb-3'>
                                                        <select value={this.state.selectedTokenAddress} onChange={e => this.handleSelectedTokenChange(e.target.value)} className='form-control form-control-lg'>
                                                            {
                                                                network == 'ethereum' ?
                                                                window.config.deposit_tokens.map((t,i) => <option value={t.address.toLowerCase()} key={i}>{t.symbol}</option>) :
                                                                network == 'binance' ?
                                                                    window.config.deposit_tokens_binance.map((t,i) => <option value={t.address.toLowerCase()} key={i}>{t.symbol}</option>) :
                                                                    window.config.deposit_tokens_avalanche.map((t,i) => <option value={t.address.toLowerCase()} key={i}>{t.symbol}</option>)
                                                            }
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <div className="input-group input-group-lg mb-3">
                                                            <input value={(this.state.amountToDeposit*1) ? this.state.amountToDeposit/10**this.state.selectedTokenDecimals : this.state.amountToDeposit} onChange={e => {
                                                                let value = e.target.value
                                                                if ((value*1)) {
                                                                    value = new BigNumber(value).times(10**this.state.selectedTokenDecimals).toFixed(0)
                                                                }
                                                                this.setState({ amountToDeposit: value })
                                                            }} style={{paddingTop: '15px', boxShadow: 'none', outline: 'none', background: 'var(--inputbg)', borderColor: 'var(--inputbg)', color: '#A1A1A1'}} type="text" className="form-control" placeholder="Enter Amount" />
                                                            <div style={{cursor: 'pointer'}} className="input-group-append">
                                                                <span onClick={this.handleSetMaxDeposit} style={{ background: 'var(--inputbg)', borderColor: 'var(--inputbg)', borderLeftWidth: '2px', cursor: 'pointer' }} className="input-group-text">MAX</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="prodet-input">
                                                    <div style={{width: '100%'}} className="prodet-input-left">
                                                        <p>Enter Amount</p>
                                                        <input style={{width: '100%'}} type="text" name="text" placeholder="0.0"/>
                                                    </div> */}
                                                    {/* <div className="prodet-input-right">
                                                        <p>Your wallet balance: 0</p>
                                                        <div className="prodet-input-right-select">
														<div className="prodet-input-right-select-label">
															<span>MAX</span>
														</div> */}
                                                    {/* <div className="prodet-input-right-select-items">
															<div className="select-wrapper">
																<div className="lang-select">
																	<button className="btn-select" value="en"><li><img src="img/ethx.svg" alt="" value="en"/><span>ETH</span></li></button>
																	<div className="b" style={{display: 'block'}}>
																		<ul id="a"><li><img src="img/ethx.svg" alt="" value="en"/><span>ETH</span></li><li><img src="img/ethx.svg" alt="" value="en"/><span>ETH</span></li><li><img src="img/ethx.svg" alt="" value="en"/><span>ETH</span></li><li><img src="img/ethx.svg" alt="" value="en"/><span>ETH</span></li></ul>
																	</div>
																</div>
															</div>
														</div> */}
                                                    {/* </div> */}
                                                    {/* </div> */}
                                                    {/* </div> */}
                                                    {/* <div className="prodet-text">
                                                    <p>+ 3% Fee: 0 DYP</p>
                                                    <p>Total: 0 DYP</p>
                                                </div> */}
                                                    <div className="prodet-right-link">
                                                        <a onClick={this.handleApprove} href="#">Approve</a>
                                                        <a onClick={this.handleDeposit} href="#">Deposit</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reward-counter-wrapper">
                                                <div className="reward-counter">
                                                    <div className="reward">
                                                        <div className="reward-heading">
                                                            <h3>iDYP purchased tokens will be distributed in approx.</h3>
                                                        </div>
                                                    </div>
                                                    <div className="countdown-container">
                                                        <ul>
                                                            <li>Days<span className="countdown-days d-block">{String(days).padStart(2, '0')}</span></li>
                                                            <li>Hours<span className="countdown-hours d-block">{String(hours).padStart(2, '0')}</span></li>
                                                            <li>Minutes<span className="countdown-minutes d-block">{String(minutes).padStart(2, '0')}</span></li>
                                                            <li>Seconds<span className="countdown-seconds d-block">{String(seconds).padStart(2, '0')}</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="dyp-token">
                                                        <p>My Tokens: {f(this.state.pending_divs/10**this.state.reward_token_decimals, 6)} {this.state.reward_token_symbol}</p>
                                                        <p></p>
                                                    </div>
                                                    <div className="dyp-token-link">
                                                        <a onClick={ can_claim ? this.handleClaim : e => e.preventDefault()} className={`${can_claim ? 'disabled' : 'disabled'}`} href="#">Claim</a>
                                                    </div>
                                                </div>
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