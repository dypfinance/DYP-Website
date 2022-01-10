import React from 'react'
import { NavLink, Link, Route } from 'react-router-dom'
import getFormattedNumber from './functions/get-formatted-number'
import ScrollTopArrow from './components/ScrollTopArrow'
import GoogleAnalyticsReporter from './components/analytics'

import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import Roadmap from './components/roadmap'
import Tokenomics from './components/tokenomics'
import About from './components/about'
import Farm from './components/farm'
import Stake from './components/stake'
import Vault from './components/vault'
import Pool from './components/pool'
import Bridge from './components/bridge'
import Referral from './components/referral'
import Vote from './components/vote'
import Feature from './components/feature'
import Audit from './components/audit'
import Test from './components/test'
import Bscbridge from './components/bscbridge'
import Avaxbridge from './components/avaxbridge'
import Ethfarm from './components/ethfarms'
import Bscfarm from './components/bscfarms'
import Avaxfarm from './components/avaxfarms'
import Disclaimer from "./components/disclaimer"
import Buyback from './components/buyback'
import Ethbuyback from "./components/ethbuyback"
import Bscbuyback from "./components/bscbuyback"
import Avaxbuyback from "./components/avaxbuyback"
import Dapps from './components/dapps'
import BuyDYP from './components/buyDYP'
import LatestUpdates from './components/latestupdates'
import SingleEvent from './components/singleEvent'
import Presskit from "./components/presskit"
import Dex from "./components/dex"

//Sale of iDYP
import NewDyp from './components/idyp'
import Project from './components/project'

//Claim of iDYP
import ClaimiDYP from './components/claimDYP'
import ClaimiDYPAirdrop from './components/claimDYPAirdrop'

//New Smart Contracts
import BuybackNetworkV2 from "./components/v2/buyback/buybackNetwork"
import BscBuybackV2 from "./components/v2/buyback/bscBuybackV2"
import AvaxBuybackV2 from "./components/v2/buyback/avaxBuybackV2"
import EthBuybackV2 from "./components/v2/buyback/ethBuybackV2";
import StakeNetworkV2 from "./components/v2/stake/stakeNetworkV2"
import BscStakeV2 from "./components/v2/stake/bscStakeV2"
import AvaxStakeV2 from "./components/v2/stake/avaxStakeV2"
import EthStakeV2 from "./components/v2/stake/ethStakeV2";
import FarmNetworkV2 from "./components/v2/farm/farmNetworkV2"
import BscFarmV2 from "./components/v2/farm/bscFarmV2"
import AvaxFarmV2 from "./components/v2/farm/avaxFarmV2"
import EthFarmV2 from "./components/v2/farm/ethFarmV2";
import ReferralV2 from "./components/v2/referral"
import ReferralV2Bsc from "./components/v2/referral/bscReferralV2"
import ReferralV2Avax from "./components/v2/referral/avaxReferralV2"
import ReferralV2Eth from "./components/v2/referral/ethReferralV2"
import DappsV2 from "./components/v2/marketing/dappsV2"
import Launchpad from "./components/launchpad";
import Account from './components/account'
import Intro from "./components/nft";
import Whitelist from "./components/nft/whitelist";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isConnected: false,
      darkTheme: false,
      coinbase: undefined,
      // tierInfo: undefined,

      tvl_all: 0,
      totalHolders: 0,

      high_apy: {
        highestAPY: {
          highestAPY_TOTAL: '0.00',
          highestAPY_ETH: '0.00',
          highestAPY_BSC: '0.00',
          highestAPY_AVAX: '0.00'
        }
      },

      json_totalPaid: {
        ethTotal: {
          wethPaiOutTotals: ''
        },
        bnbTotal: {
          wbnbPaidOutTotals: ''
        },
        avaxTotal: {
          avaxPaidOutTotals: ''
        },
        totalPaidInUsd: ''
      }
    }
  }
  componentDidMount() {
    this.getHolders()
    this.getTotalTvl()
    this.getCombinedTvlUsd()
    this.getHighestAPY()
    this.getTotalPaid()
  }

  getTotalTvl = async () => {
      let tvl = 0
      tvl = await window.getTotalTvl()

      let tvl_all = parseInt(tvl)
      this.setState({tvl_all})
      return tvl_all
  }

  getHolders = async () => {
    let holders = await window.getHolders()

    let totalHolders = parseInt(holders)
    this.setState({totalHolders})
    return totalHolders
  }

  getCombinedTvlUsd = async () => {
    let tvl = 0
    tvl = await window.getCombinedTvlUsd()

    let tvl_all_2 = parseInt(tvl)
    this.setState({tvl_all_2})
    return tvl_all_2
  }

  getHighestAPY = async () => {
    let apy = {}
    apy = await window.getHighestAPY()

    let high_apy = apy
    this.setState({high_apy})
    return high_apy
  }

  getTotalPaid = async () => {
    let json = {}
    json = await window.getTotalPaid()

    let json_totalPaid = json
    this.setState({json_totalPaid})
    return json_totalPaid
  }

  handleConnectionLaunchpad = async () => {
    let isConnected = await window.connectWallet()
    this.setState({ isConnected })
    if (isConnected) {
      let coinbase = await window.getCoinbase()
      this.setState({ coinbase })
      this.refreshTier()
    }
  }

  refreshTier = async () => {
    let coinbase = await window.getCoinbase()
    if (!coinbase) return;
    //let tierInfo = await window.getTierInfo(coinbase)
    //this.setState({ tierInfo })
  }

  toggleTheme = () => {
    let darkTheme = !this.state.darkTheme
    document.body.classList[darkTheme?'add':'remove']('dark')
    this.setState({ darkTheme })
  }

  render () {
    return (
      <>
        <Route component={GoogleAnalyticsReporter} />
        
        <div className='App'>

          <Header appState={this.state} toggleTheme={this.toggleTheme} />

          <Route exact path='/' render={props =>  <Home totalHolders={getFormattedNumber(this.state.totalHolders,0)} tvl_all={this.state.tvl_all} high_apy={this.state.high_apy} json_totalPaid={this.state.json_totalPaid} timeout={9000000} startPosition={0} {...props} />} />

          {/* this is for Buyback Etherscan */}
          {/*<Route exact path='/earn' render={props =>  <Home tvl_all={getFormattedNumber(this.state.tvl_all, 2)} high_apy={this.state.high_apy} json_totalPaid={this.state.json_totalPaid} timeout={9000000} startPosition={0} {...props} />} />*/}

          {/* this is for yield Etherscan */}
          {/*<Route exact path='/yield' render={props =>  <Home tvl_all={getFormattedNumber(this.state.tvl_all, 2)} high_apy={this.state.high_apy} json_totalPaid={this.state.json_totalPaid} timeout={9000000} startPosition={1} {...props} />} />*/}

          {/* this is for iDYP Etherescan */}
          <Route exact path='/earn' render={props =>  <Home totalHolders={getFormattedNumber(this.state.totalHolders,0)} tvl_all={getFormattedNumber(this.state.tvl_all, 2)} high_apy={this.state.high_apy} json_totalPaid={this.state.json_totalPaid} timeout={9000000} startPosition={1} {...props} />} />


          {/*<Route exact path='/farm' render={props =>  <Farm {...props} />} />*/}
          <Route exact path='/roadmap' render={props =>  <Roadmap {...props} />} />
          <Route exact path='/tokenomics' render={props =>  <Tokenomics {...props} />} />
          <Route exact path='/about' render={props =>  <About {...props} />} />
          <Route exact path='/stake' render={props =>  <Stake {...props} />} />
          <Route exact path='/vault' render={props =>  <Vault {...props} />} />
          <Route exact path='/bridge' render={props =>  <Bridge {...props} />} />
          <Route exact path='/pool' render={props =>  <Pool {...props} />} />
          <Route exact path='/vote' render={props =>  <Vote {...props} />} />
          <Route exact path='/referral' render={props =>  <Referral {...props} />} />
          <Route exact path='/feature' render={props =>  <Feature {...props} />} />
          <Route exact path='/audit' render={props =>  <Audit {...props} />} />
          <Route exact path='/disclaimer' render={props =>  <Disclaimer {...props} />} />
          <Route exact path='/farm' render={props =>  <Test high_apy={this.state.high_apy} {...props} />} />
          <Route exact path='/bscbridge' render={props =>  <Bscbridge {...props} />} />
          <Route exact path='/avaxbridge' render={props =>  <Avaxbridge {...props} />} />
          <Route exact path='/ethfarms' render={props =>  <Ethfarm {...props} />} />
          <Route exact path='/bscfarms' render={props =>  <Bscfarm {...props} />} />
          <Route exact path='/avaxfarms' render={props =>  <Avaxfarm {...props} />} />

          <Route exact path='/buyback' render={props =>  <Buyback {...props} />} />
          <Route exact path='/ethbuyback' render={props =>  <Ethbuyback {...props} />} />
          <Route exact path='/bscbuyback' render={props =>  <Bscbuyback {...props} />} />
          <Route exact path='/avaxbuyback' render={props =>  <Avaxbuyback {...props} />} />

          <Route exact path='/dapps' render={props =>  <Dapps high_apy={this.state.high_apy} {...props} />} />

          <Route exact path='/latestupdates' render={props =>  <LatestUpdates {...props} />} />
          <Route exact path='/buyDYP' render={props =>  <BuyDYP {...props} />} />
          <Route exact path='/event' render={props =>  <SingleEvent {...props} />} />

          <Route exact path='/presskit' render={props => <Presskit {...props} />} />

          <Route exact path='/dex' render={props => <Dex {...props} />} />

          <Route exact path='/idyp' render={props => <NewDyp {...props} />} />
          <Route exact path='/idyp/:id/:network' render={props => <Project appState={this.state} handleConnectionLaunchpad={this.handleConnectionLaunchpad} {...props} />} />

          <Route exact path='/idyp/claim' render={props => <ClaimiDYP {...props} />} />

          <Route exact path='/idyp/airdrop' render={props => <ClaimiDYPAirdrop {...props} />} />

          {/* New Contracts */}
          <Route exact path='/buybackv2' render={props =>  <BuybackNetworkV2 {...props} />} />
          <Route exact path='/buybackv2/bsc' render={props =>  <BscBuybackV2 {...props} />} />
          <Route exact path='/buybackv2/avax' render={props =>  <AvaxBuybackV2 {...props} />} />
          <Route exact path='/buybackv2/eth' render={props =>  <EthBuybackV2 {...props} />} />

          <Route exact path='/stakev2' render={props =>  <StakeNetworkV2 {...props} />} />
          <Route exact path='/stakev2/bsc' render={props =>  <BscStakeV2 {...props} />} />
          <Route exact path='/stakev2/avax' render={props =>  <AvaxStakeV2 {...props} />} />
          <Route exact path='/stakev2/eth' render={props =>  <EthStakeV2 {...props} />} />

          <Route exact path='/farmv2' render={props =>  <FarmNetworkV2 high_apy={this.state.high_apy} {...props} />} />
          <Route exact path='/farmv2/bsc' render={props =>  <BscFarmV2 {...props} />} />
          <Route exact path='/farmv2/avax' render={props =>  <AvaxFarmV2 {...props} />} />
          <Route exact path='/farmv2/eth' render={props =>  <EthFarmV2 {...props} />} />

          <Route exact path='/referralv2' render={props =>  <ReferralV2 {...props} />} />
          <Route exact path='/referralv2/bsc' render={props =>  <ReferralV2Bsc {...props} />} />
          <Route exact path='/referralv2/avax' render={props =>  <ReferralV2Avax {...props} />} />
          <Route exact path='/referralv2/eth' render={props =>  <ReferralV2Eth {...props} />} />

          <Route exact path='/earnv2' render={props =>  <DappsV2 high_apy={this.state.high_apy} {...props} />} />

          <Route exact path='/launchpad' render={props =>  <Launchpad {...props} />} />
          <Route exact path='/account' render={props => <Account refreshTier={this.refreshTier} appState={this.state} handleConnection={this.handleConnectionLaunchpad} {...props} />} />

          <Route exact path='/nft' render={props =>  <Intro {...props} />} />

          <Route exact path='/whitelist' render={props =>  <Whitelist appState={this.state} handleConnection={this.handleConnectionLaunchpad} {...props} />} />

          <ScrollTopArrow/>

          <Footer />
        </div>
      </>
    );
  }
}


export default App;
