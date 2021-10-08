import React from 'react'
import { Link as a, NavLink } from 'react-router-dom'

const activateLasers = () => {
    window.$.alert('Coming Soon!')
}

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileMenuOpen: false,
            shownDropdowns: {}
        }
    }

    toggleMobileMenu = () => {
        let mobileMenuOpen = !this.state.mobileMenuOpen
        document.body.setAttribute('id', !mobileMenuOpen ? '' : 'over')
        this.setState({ mobileMenuOpen })
    }
    toggleDropdown = (id) => (e) => {
        if (e && e.target.getAttribute('href') == '#') {
            e.preventDefault()
            e.stopPropagation()
            // alert("Stopped!")
        }
        let showThisDropdown = !this.state.shownDropdowns[id]
        let shownDropdowns = {}
        shownDropdowns[id] = showThisDropdown

        this.setState({ shownDropdowns })
    }

    closeDropDowns = () => {
        this.setState({ shownDropdowns: {} })
    }

    componentDidMount() {
        window.addEventListener('click', this.closeDropDowns)
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.closeDropDowns)
    }

    GetMenuList = () => {
        let { isConnected } = this.props

        return (
            <>
                {/*<li><a href="/">Home</a></li>*/}
                <li onClick={this.toggleDropdown(1)} className={`dropdown ${this.state.shownDropdowns[1]?'show':''}`}>
                    <a href='#' className='dropdown-toggle'>Earn</a>
                    <div className={`dropdown-menu ${this.state.shownDropdowns[1]?'show':''}`} style={{zIndex: '99999'}}>
                        <NavLink className='ml-0 dropdown-item' to='/dex'>Dex <p className='new-logo-earn'>NEW</p></NavLink>
                        <NavLink className='ml-0 dropdown-item' to='/buyback'>Buyback 💯</NavLink>
                        <NavLink className='ml-0 dropdown-item' to='/vault'>Vault <img className='hover-comp' src='img/favicon/comp.png' width='16px' /></NavLink>
                        <NavLink className='ml-0 dropdown-item' to='/farm'>Farm 🔥</NavLink>
                        <NavLink className='ml-0 dropdown-item' to='/stake'>Stake 🚜</NavLink>
                        <NavLink className='ml-0 dropdown-item' to='/referral'>Referral 💰</NavLink>
                        <NavLink className='ml-0 dropdown-item' to='/bridge'>Bridge 🌁</NavLink>
                    </div>
                </li>
                <li><NavLink to="/vote">Gov</NavLink></li>
                <li><a onClick={activateLasers} href="javascript:void(0)">LaunchPad</a></li>
                <li><a href="https://nft.dyp.finance/">NFT</a></li>
                {/*<li><NavLink to="/pool">Pool</NavLink></li>*/}
                <li><NavLink to="/buyDYP">Buy DYP</NavLink></li>
                {/* <li onClick={this.toggleDropdown(2)} className={`dropdown ${this.state.shownDropdowns[2]?'show':''}`} style={{zIndex: '99998'}}>
                    <a className="dropdown-toggle" href="#">Buy DYP</a>
                    <div className={`dropdown-menu ${this.state.shownDropdowns[2]?'show':''}`}>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'><img className='logo' src='img/favicon/uniswap.png' width='16px' /><img className='blogo' src='img/favicon/uniswapb.svg' width='16px' /> Uniswap V2 </a>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://app.pangolin.exchange/#/swap?&outputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'><img src='img/favicon/pangolin.svg' width='16px' /> Pangolin </a>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://v1exchange.pancakeswap.finance/#/swap?inputCurrency=0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17'><img src='img/favicon/pancake.ico' width='16px' /> PancakeSwap V1 </a>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://app.1inch.io/#/1/swap/DYP/ETH'><img src='img/favicon/1inch.svg' width='16px' /> 1inch </a>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://trade.kucoin.com/DYP-USDT'><img src='img/favicon/kucoin.png' width='16px' /> KuCoin </a>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://www.gate.io/trade/DYP_USDT'><img src='img/favicon/gate.ico' width='16px' /> Gate.io </a>
                        <a rel='noopener noreferrer' target='_blank' className='ml-0 dropdown-item' href='https://www.mycointainer.com/dashboard/invest/dyp/'><img src='img/favicon/mycointainer.ico' width='16px' /> MyCointainer </a>
                    </div>
                </li> */}

                <li><NavLink to="/audit">Security</NavLink></li>
            
                <li onClick={this.toggleDropdown(3)} className={`dropdown ${this.state.shownDropdowns[3]?'show':''}`} style={{zIndex: '99997'}}>
                    <a className="dropdown-toggle" href="#">About</a>
                    <div className={`dropdown-menu ${this.state.shownDropdowns[3]?'show':''}`}>
                        <a rel='noopener noreferrer' className='ml-0 dropdown-item' href='/about'><i class="fas fa-users"></i> About Us </a>
                        <a rel='noopener noreferrer' className='ml-0 dropdown-item' href='/roadmap'><i class="fas fa-road"></i> Roadmap </a>
                        <a rel='noopener noreferrer' className='ml-0 dropdown-item' href='/tokenomics'><i class="fas fa-chart-pie"></i> Tokenomics </a>
                        <a rel='noopener noreferrer' className='ml-0 dropdown-item' href='/presskit'><i className="fas fa-address-card"></i> Media Kit </a>
                    </div>
                </li>
            </>
        )
    }

    render() {
        let darkTheme = this.props.appState.darkTheme
        let toggleTheme = this.props.toggleTheme
        let { isConnected } = this.props
        return (
            <>
            <div className="header d-none d-lg-block App-header">
    <div className="container-fluid">
        <div className="header-wrapper">
            <div className="header-left">
                <NavLink to='/' >
                    <img className="logo" src="/img/logo.svg" alt="images not found" />
                    <img className="blogo" src="/img/blogo.svg" alt="images not found" />
                </NavLink>
            </div>
            <div className="header-right">
                <ul>
                    {this.GetMenuList()}
                    {/* {!isConnected ?  */}
                        {/* <li><a onClick={this.props.handleConnection} className="connet" href="javascript:void">Connect Wallet</a></li> */}
                        {/* : */}
                        <li><a className="connet" target='_blank' href="https://tools.dyp.finance">DYP Tools</a></li>
                    {/* } */}
                    <li>
                        <div className="checkbox-drak">
                          <label className="ui-switcher" aria-checked={darkTheme}>
                          <input checked={darkTheme} autoComplete="off" id="myCheck" onChange={toggleTheme} className="form-check-input d-none" type="checkbox" name="inlineRadioOptions" />
                          </label>
                            {/* <input autocomplete="off" id="myCheck" onchange="myFunction()" className="form-check-input" type="checkbox" name="inlineRadioOptions" /> */}
                        </div>
                    </li>							
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="sm-header d-block d-lg-none App-header">
    <div className="container">
        <div className="sm-header-wrapper">
            <div className="sm-header-left">
                <a href="/">
                    <img className="logo" src="/img/logo.svg" alt="images not found" />
                    <img className="blogo d-none" src="/img/blogo.svg" alt="images not found" />
                </a>
            </div>
            <div onClick={this.toggleMobileMenu} className="sm-header-right">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <div onClick={this.toggleMobileMenu} className="sm-menu-items">
        <div className="container">
            <div className="sm-menu-items-wrapper">
                <div className="sm-menu-heading">
                    <div className="sm-menu-heading-left">
                        <div className="checkbox-drak" style={{marginLeft: 0}}>
                        <label className="ui-switcher" aria-checked={darkTheme}>
                          <input checked={darkTheme} autoComplete="off" id="myCheck" onChange={toggleTheme} className="form-check-input d-none" type="checkbox" name="inlineRadioOptions" />
                          </label>
                            {/* <input autocomplete="off" id="myChecks" onchange="myFunctions()" className="form-check-input" type="checkbox" name="inlineRadioOptions" /> */}
                        </div> 
                    </div>
                    <div className="sm-menu-heading-right">
                        <span><img className="logo" src="/img/close.svg" alt="images not found" /></span>
                        <span><img className="blogo" src="/img/wclose.svg" alt="images not found" /></span>
                    </div>
                </div>
                <div className="sm-menu-link">
                    <ul>
                        {this.GetMenuList()}
                    </ul>
                    {/* {!isConnected ?  */}
                         {/* <a style={{marginTop: '2rem'}} onClick={this.props.handleConnection} className="connet" href="javascript:void">Connect Wallet</a> */}
                         {/* : */}
                        <a target='_blank' style={{marginTop: '2rem'}} className="connet" href="https://tools.dyp.finance">DYP Tools</a>
                        <div><div className='mt-5 mb-5' style={{opacity: '0'}}>sda</div></div>
                        <div><div className='mt-5' style={{opacity: '0'}}>sda</div></div>
                    {/* } */}
                </div>
            </div>
        </div>
    </div>
</div>
</>
        )
    }
}