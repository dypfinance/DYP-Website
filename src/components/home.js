import React from "react";
import Carousel from "./carousel";
import { NavLink } from "react-router-dom";
import getFormattedNumber from "../functions/get-formatted-number";

//Import Elements
import Dots from "./elements/dots";

import CarouselNews from "./carouselNews";
import CarouselApy from "./carouselApy";

import Vaults from "../components/Home/Vaults";
import CalculateFarming from "../components/Home/CalcualteFarming";
import DeFiYieldProtocolInfo from "../components/Home/DeFiYieldProtocolInfo";
import MainHero from "../components/Home/MainHero";
import SupportedAssetsAndRates from "../components/Home/SupportedAssetsAndRates";
import LearnMore from "../components/Home/LearnMore";
import OurPartners from "../components/Home/OurPartners";
import LatestAnn from "../components/Home/LatestAnn";
import Community from "../components/Home/Community";
import styled, { keyframes } from "styled-components";
import { zoomInUp, tada, fadeIn } from "react-animations";
import CloseX from "../assets/images/x_close.png";
import Catpopup from "../assets/images/cat_popup.png";
import Speech from "../assets/images/speech_text.png";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      srow: false,
      showPopup: true,
      //avaxBuyBack
      avaxTvlTotal: 0,
      avaxTvlTotalBuyback1: 0,
      avaxTvlTotalBuyback2: 0,
      avaxApyBuyback1: 0,
      avaxApyBuyback2: 0,
      // ethBuyBack
      ethTvlTotal: 0,
      ethTvlTotalBuyback1: 0,
      ethTvlTotalBuyback2: 0,
      ethApyBuyback1: 0,
      ethApyBuyback2: 0,
      // bscBuyBack
      bscTvlTotal: 0,
      bscTvlTotalBuyback1: 0,
      bscTvlTotalBuyback2: 0,
      bscApyBuyback1: 0,
      bscApyBuyback2: 0,
      // % for 3 buyBacks
      apyBuyback2: 0,
      apyBuybackAvax: 0,
      apyBuybackEth: 0,
      // stake
      stakeApy1: 0,
      stakeApyAvax: 0,
      stakeApyEth: 0,
      // eth
      ethTvlTotalStake: 0,
      ethTvlTotalStake1: 0,
      ethTvlTotalStake2: 0,
      ethApyStake1: 0,
      ethApyStake2: 0,
      // avax
      // bsc
    };
    this.loadMoreArticles = this.loadMoreArticles.bind(this);
  }
  async componentDidMount() {
    // window.initParticles();
    await this.getTotalTvlBuyBack();
    await this.getTotalTvlStake();
    await this.getTotalTvlAvax();
    await this.getTotalTvlEth();
    await this.getTotalTvlBsc();
    await this.getTotalTvlEthStake();
  }

  loadMoreArticles() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));

    if (this.state.count == 0) {
      this.setState((prevState, props) => ({
        srow: true,
      }));
    } else if (this.state.count == 1) {
      this.props.history.push("/latestupdates");
    } else {
      // do nothing
      console.log(this.state.count);
    }
  }
  getTotalTvlAvax = async () => {

    const { BigNumber } = window

    let tvlTotal1 = 0

    //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)
    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPAvax()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] =
      await Promise.all([
        window.getPrice('defi-yield-protocol'),
        window.getPriceiDYPAvax(),
        window.getPriceDYPSBsc()
      ])

    // usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)
    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP = await window.getTokenHolderBalanceiDYP('0xC905D5DD9A4f26eD059F76929D11476B2844A7c3', 3) / 1e18
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0xe6B307CD185f2A541a661eA312E3e7939Ea9d218', 3) / 1e18
    let tokensStakingDYP = await window.getTokenHolderBalance('0xe6B307CD185f2A541a661eA312E3e7939Ea9d218', 3) / 1e18

    //console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})
    //TODO Calulate $ Value
    let tvliDYP = ((tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP)
    let tvlDYP = (tokensStakingDYP * usdPerToken)


    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP2 = await window.getTokenHolderBalanceiDYP('0x267434f01ac323C6A5BCf41Fa111701eE0165a37', 3) / 1e18
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x934819D227B7095595eC9cA6604eF2Dd0C3a9EA2', 3) / 1e18
    let tokensStakingDYP2 = await window.getTokenHolderBalance('0x934819D227B7095595eC9cA6604eF2Dd0C3a9EA2', 3) / 1e18

    //console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})
    //TODO Calulate $ Value
    let tvliDYP2 = ((tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP)
    let tvlDYP2 = (tokensStakingDYP2 * usdPerToken)

    /* Calculate with DYPS */
    let tokensBuybackDYPS = await window.getTokenHolderBalanceDYPS('0xC905D5DD9A4f26eD059F76929D11476B2844A7c3', 3) / 1e18
    let tokensBuybackDYPS2 = await window.getTokenHolderBalanceDYPS('0x267434f01ac323C6A5BCf41Fa111701eE0165a37', 3) / 1e18

    tokensBuybackDYPS = tokensBuybackDYPS * usdPerTokenDYPS
    tokensBuybackDYPS2 = tokensBuybackDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

    let avaxTvlTotalBuyback1 = tvlDYP + tvliDYP + tokensBuybackDYPS
    this.setState({ avaxTvlTotalBuyback1 })

    let avaxTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2
    this.setState({ avaxTvlTotalBuyback2 })

    let avaxTvlTotal = avaxTvlTotalBuyback1 + avaxTvlTotalBuyback2
    this.setState({ avaxTvlTotal })

    //apr is 30%
    let apy1_buyback1 = new BigNumber(0.225)
    let apy2_buyback1 = new BigNumber(0.25).div(usdPerToken).times(30).div(1e2).times(usdPerTokeniDYP)

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75)
    let apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdPerTokeniDYP)

    let avaxApyBuyback1 = new BigNumber(apy1_buyback1).plus(apy2_buyback1).times(1e2).toFixed(0)
    let avaxApyBuyback2 = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)

    this.setState({ avaxApyBuyback1, avaxApyBuyback2 })

    return { avaxTvlTotal }
  }
  getTotalTvlBuyBack = async () => {

    const { BigNumber } = window

    let tvlTotal1 = 0

    //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPEth()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] =
      await Promise.all([
        window.getPrice('defi-yield-protocol'),
        window.getPriceiDYPEth(),
        window.getPriceDYPSBsc()
      ])

    // usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP = await window.getTokenHolderBalanceiDYP('0xdCBB5B2148f0cf1Abd7757Ba04A5821fEaD80587', 1) / 1e18
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x471beCc72AD487249efE521bf9b6744b882830DF', 1) / 1e18
    let tokensStakingDYP = await window.getTokenHolderBalance('0x471beCc72AD487249efE521bf9b6744b882830DF', 1) / 1e18

    //console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})

    //TODO Calulate $ Value
    let tvliDYP = ((tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP)
    let tvlDYP = (tokensStakingDYP * usdPerToken)


    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP2 = await window.getTokenHolderBalanceiDYP('0xDC65C4277d626d6A29C9Dc42Eb396d354fa5E85b', 1) / 1e18
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x7b7132E7BF4e754855191a978F3979e1E3c8617b', 1) / 1e18
    let tokensStakingDYP2 = await window.getTokenHolderBalance('0x7b7132E7BF4e754855191a978F3979e1E3c8617b', 1) / 1e18

    //console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})

    //TODO Calulate $ Value
    let tvliDYP2 = ((tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP)
    let tvlDYP2 = (tokensStakingDYP2 * usdPerToken)

    /* Calculate with DYPS */
    let tokensBuybackDYPS = await window.getTokenHolderBalanceDYPS('0xdCBB5B2148f0cf1Abd7757Ba04A5821fEaD80587', 1) / 1e18
    let tokensBuybackDYPS2 = await window.getTokenHolderBalanceDYPS('0xDC65C4277d626d6A29C9Dc42Eb396d354fa5E85b', 1) / 1e18

    tokensBuybackDYPS = tokensBuybackDYPS * usdPerTokenDYPS
    tokensBuybackDYPS2 = tokensBuybackDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

    let ethTvlTotalBuyback1 = tvlDYP + tvliDYP + tokensBuybackDYPS
    this.setState({ ethTvlTotalBuyback1 })

    let ethTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2
    this.setState({ ethTvlTotalBuyback2 })

    let ethTvlTotal = ethTvlTotalBuyback1 + ethTvlTotalBuyback2
    this.setState({ ethTvlTotal })

    //apr is 30%
    let apy1_buyback1 = new BigNumber(0.225)
    let apy2_buyback1 = new BigNumber(0.25).div(usdPerToken).times(30).div(1e2).times(usdPerTokeniDYP)

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75)
    let apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdPerTokeniDYP)

    let ethApyBuyback1 = new BigNumber(apy1_buyback1).plus(apy2_buyback1).times(1e2).toFixed(0)
    let ethApyBuyback2 = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)

    this.setState({ ethApyBuyback1, ethApyBuyback2 })

    return { ethTvlTotal }
  }
  getTotalTvlEth = async () => {

    const { BigNumber } = window

    let [usdPerToken, usdPerTokeniDYP, usdiDYPAvax, usdiDYPEth] =
      await Promise.all([
        window.getPrice('defi-yield-protocol'),
        window.getPriceiDYP(),
        window.getPriceiDYPAvax(),
        window.getPriceiDYPEth()
      ])

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75)
    let apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdPerTokeniDYP)

    let apyBuyback2 = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
    this.setState({ apyBuyback2 })

    //Apy Avax V2 APR is 100%
    apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPAvax)

    let apyBuybackAvax = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
    this.setState({ apyBuybackAvax })

    //Apy ETH V2 APR is 100%
    apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPEth)

    let apyBuybackEth = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)
    this.setState({ apyBuybackEth })

    return { apyBuyback2, apyBuybackAvax, apyBuybackEth }
  }
  getTotalTvlBsc = async () => {

    const { BigNumber } = window

    let tvlTotal1 = 0

    //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] =
      await Promise.all([
        window.getPrice('defi-yield-protocol'),
        window.getPriceiDYP(),
        window.getPriceDYPSBsc()
      ])

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP = await window.getTokenHolderBalanceiDYP('0x94B1A7B57C441890b7a0f64291B39ad6f7E14804', 2) / 1e18
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x9af074cE714FE1Eb32448052a38D274E93C5dc28', 2) / 1e18
    let tokensStakingDYP = await window.getTokenHolderBalance('0x9af074cE714FE1Eb32448052a38D274E93C5dc28', 2) / 1e18

    //console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})

    //TODO Calulate $ Value
    let tvliDYP = ((tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP)
    let tvlDYP = (tokensStakingDYP * usdPerToken)


    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP2 = await window.getTokenHolderBalanceiDYP('0x4eF782E66244A0CF002016AA1Db3019448c670aE', 2) / 1e18
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0xDBfb96e2899d52B469C1a1C35eD71fBBa228d2cC', 2) / 1e18
    let tokensStakingDYP2 = await window.getTokenHolderBalance('0xDBfb96e2899d52B469C1a1C35eD71fBBa228d2cC', 2) / 1e18

    //console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})

    //TODO Calulate $ Value
    let tvliDYP2 = ((tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP)
    let tvlDYP2 = (tokensStakingDYP2 * usdPerToken)

    /* Calculate with DYPS */
    let tokensBuybackDYPS = await window.getTokenHolderBalanceDYPS('0x94B1A7B57C441890b7a0f64291B39ad6f7E14804', 2) / 1e18
    let tokensBuybackDYPS2 = await window.getTokenHolderBalanceDYPS('0x4eF782E66244A0CF002016AA1Db3019448c670aE', 2) / 1e18

    tokensBuybackDYPS = tokensBuybackDYPS * usdPerTokenDYPS
    tokensBuybackDYPS2 = tokensBuybackDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

    let bscTvlTotalBuyback1 = tvlDYP + tvliDYP + tokensBuybackDYPS
    this.setState({ bscTvlTotalBuyback1 })

    let bscTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2
    this.setState({ bscTvlTotalBuyback2 })

    let bscTvlTotal = bscTvlTotalBuyback1 + bscTvlTotalBuyback2
    this.setState({ bscTvlTotal })

    //apr is 30%
    let apy1_buyback1 = new BigNumber(0.225)
    let apy2_buyback1 = new BigNumber(0.25).div(usdPerToken).times(30).div(1e2).times(usdPerTokeniDYP)

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75)
    let apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdPerTokeniDYP)

    let bscApyBuyback1 = new BigNumber(apy1_buyback1).plus(apy2_buyback1).times(1e2).toFixed(0)
    let bscApyBuyback2 = new BigNumber(apy1_buyback2).plus(apy2_buyback2).times(1e2).toFixed(0)

    this.setState({ bscApyBuyback1, bscApyBuyback2 })

    return { bscTvlTotal }

  }
  getTotalTvlStake = async () => {
    const { BigNumber } = window

    let [usdPerToken, usdPerTokeniDYP, usdiDYPAvax, usdiDYPEth] =
      await Promise.all([
        window.getPrice('defi-yield-protocol'),
        window.getPriceiDYP(),
        window.getPriceiDYPAvax(),
        window.getPriceiDYPEth()
      ])

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    let apr1 = 50
    let stakeApy1 = new BigNumber(apr1).div(1e2).times(usdPerTokeniDYP).div(usdPerToken).times(1e2).toFixed(2)

    this.setState({ stakeApy1 })

    let stakeApyAvax = new BigNumber(apr1).div(1e2).times(usdiDYPAvax).div(usdPerToken).times(1e2).toFixed(2)
    this.setState({ stakeApyAvax })

    let stakeApyEth = new BigNumber(apr1).div(1e2).times(usdiDYPEth).div(usdPerToken).times(1e2).toFixed(2)
    this.setState({ stakeApyEth })

    return { stakeApy1, stakeApyAvax, stakeApyEth }
  }
  getTotalTvlEthStake = async () => {

    const { BigNumber } = window

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPEth()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] =
      await Promise.all([
        window.getPrice('defi-yield-protocol'),
        window.getPriceiDYPEth(),
        window.getPriceDYPSBsc()
      ])

    /* Calculate with DYPS */
    let tokensStakingDYPS = await window.getTokenHolderBalanceDYPS('0xa4da28B8e42680916b557459D338aF6e2D8d458f', 1) / 1e18
    let tokensStakingDYPS2 = await window.getTokenHolderBalanceDYPS('0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d', 1) / 1e18

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0xa4da28B8e42680916b557459D338aF6e2D8d458f', 1) / 1e18
    let tokensStakingDYP = await window.getTokenHolderBalance('0xa4da28B8e42680916b557459D338aF6e2D8d458f', 1) / 1e18

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP
    let tvlDYP = tokensStakingDYP * usdPerToken
    let ethTvlTotalStake1 = tvliDYP + tvlDYP + tokensStakingDYPS
    this.setState({ ethTvlTotalStake1 })

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d', 1) / 1e18
    let tokensStakingDYP2 = await window.getTokenHolderBalance('0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d', 1) / 1e18

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken
    let ethTvlTotalStake2 = tvliDYP2 + tvlDYP2 + tokensStakingDYPS2
    this.setState({ ethTvlTotalStake2 })

    let ethTvlTotalStake = ethTvlTotalStake1 + ethTvlTotalStake2
    this.setState({ ethTvlTotalStake })

    let apr1 = 25
    let apr2 = 50
    let ethApyStake1 = new BigNumber(apr1).div(1e2).times(usdPerTokeniDYP).div(usdPerToken).times(1e2).toFixed(2)

    let ethApyStake2 = new BigNumber(apr2).div(1e2).times(usdPerTokeniDYP).div(usdPerToken).times(1e2).toFixed(2)

    this.setState({ ethApyStake1, ethApyStake2 })

    return { ethTvlTotalStake, ethTvlTotalStake1, ethTvlTotalStake2 }
  }
  render() {
    const {
      avaxTvlTotal,
      avaxTvlTotalBuyback1,
      avaxTvlTotalBuyback2,
      avaxApyBuyback1,
      avaxApyBuyback2,
      ethTvlTotal,
      ethTvlTotalBuyback1,
      ethTvlTotalBuyback2,
      ethApyBuyback1,
      ethApyBuyback2,
      apyBuyback2,
      apyBuybackAvax,
      apyBuybackEth,
      bscTvlTotal,
      bscTvlTotalBuyback1,
      bscTvlTotalBuyback2,
      bscApyBuyback1,
      bscApyBuyback2,
      stakeApy1,
      stakeApyAvax,
      stakeApyEth,
      ethTvlTotalStake,
      ethTvlTotalStake1,
      ethTvlTotalStake2,
      ethApyStake1,
      ethApyStake2,
    } = this.state;

    const statisticsArray = [
      {
        statisticInfo: "68",
        statisticName: "Active Pools",
      },
      {
        statisticInfo: "10",
        statisticName: "DYP Products",
      },
      {
        statisticInfo: "70%",
        statisticName: "DYP Locked",
      },
      {
        statisticInfo: "5M+",
        statisticName: "DYP Burned",
      },
    ];

    const volume = "$775M+";
    const paid = "$43M+";
    const providers = "2.5K+";

    const auditedByArray = [
      {
        img: "audited-by-item-1",
        name: "Peck Shield",
      },
      {
        img: "audited-by-item-2",
        name: "Blockchain Consilium",
      },
      {
        img: "audited-by-item-3",
        name: "Certik  Foundation",
      },
    ];

    const assetsArray = [
      {
        field: "Yield",
        assets: [
          {
            icon: "eth-icon.svg",
            text: "ETH Yield",
            percentage: "302.27%",
            assetSubArray: [
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app.dyp.finance/farming-new-1'
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app.dyp.finance/farming-new-2'
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app.dyp.finance/farming-new-3'
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app.dyp.finance/farming-new-4'
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app.dyp.finance/farming-new-5'
              },
            ],
          },
          {
            icon: "bnb_colour.svg",
            text: "BSC Yield",
            percentage: "90.77%",
            assetSubArray: [
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/farming-new-1'
              },
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/farming-new-2'
              },
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/farming-new-3'
              },
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/farming-new-4'
              },
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/farming-new-5'
              },
            ],
          },

          {
            icon: "avax-icon.svg",
            text: "Avax Yield",
            percentage: "124.64%",
            assetSubArray: [
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/farming-new-1'
              },
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/farming-new-2'
              },
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/farming-new-3'
              },
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/farming-new-4'
              },
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/farming-new-5'
              },
            ],
          },
        ],
      },
      ////
      {
        field: "Buyback",
        assets: [
          {
            icon: "eth-icon.svg",
            text: "ETH Buyback",
            percentage: `${apyBuybackEth === 0 ? '...' : getFormattedNumber(apyBuybackEth, 0)}%`,
            assetSubArray: [
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${ethApyBuyback1 == 0 ? '...' : getFormattedNumber(ethApyBuyback1, 0)}%`,
                total_value_locked: `$${ethTvlTotalBuyback1 === 0 ? '...' : getFormattedNumber(ethTvlTotalBuyback1, 2)}`,
                lock_time: "No lock",
                link: 'https://app.dyp.finance/staking-buyback-1'
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${ethApyBuyback2 == 0 ? '...' : getFormattedNumber(ethApyBuyback2, 0)}%`,
                total_value_locked: `$${ethTvlTotalBuyback2 === 0 ? '...' : getFormattedNumber(ethTvlTotalBuyback2, 2)}`,
                lock_time: "No lock",
                link: 'https://app.dyp.finance/staking-buyback-2'
              },

            ],
          },
          {
            icon: "bsc-icon.svg",
            text: "BSC Buyback",
            percentage: `${apyBuyback2 === 0 ? '...' : getFormattedNumber(apyBuyback2, 0)}%`,
            assetSubArray: [
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: `${bscApyBuyback1 == 0 ? '...' : getFormattedNumber(bscApyBuyback1, 0)}%`,
                total_value_locked: `$${bscTvlTotalBuyback1 === 0 ? '...' : getFormattedNumber(bscTvlTotalBuyback1, 2)}`,
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/staking-buyback-1'
              },
              {
                icons: [
                  "bnb_colour.svg", "wbtc-icon.png", "eth-icon2.png", "dai-icon.png", "cake-icon.png"
                ],
                percentage: `${bscApyBuyback2 == 0 ? '...' : getFormattedNumber(bscApyBuyback2, 0)}%`,
                total_value_locked: `$${bscTvlTotalBuyback2 === 0 ? '...' : getFormattedNumber(bscTvlTotalBuyback2, 2)}`,
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/staking-buyback-2'
              },

            ],
          },
          {
            icon: "avax-icon.svg",
            text: "Avax Buyback",
            percentage: `${apyBuybackAvax === 0 ? '...' : getFormattedNumber(apyBuybackAvax, 0)}%`,
            assetSubArray: [
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: `${avaxApyBuyback1 == 0 ? '...' : getFormattedNumber(avaxApyBuyback1, 0)}%`,
                total_value_locked: `$${avaxTvlTotalBuyback1 === 0 ? '...' : getFormattedNumber(avaxTvlTotalBuyback1, 2)}`,
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/staking-buyback-1'
              },
              {
                icons: [
                  "avax-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdt-icon.png", "pang-icon.png"
                ],
                percentage: `$${avaxApyBuyback2 == 0 ? '...' : getFormattedNumber(avaxApyBuyback2, 0)}%`,
                total_value_locked: `$${avaxTvlTotalBuyback2 === 0 ? '...' : getFormattedNumber(avaxTvlTotalBuyback2, 2)}`,
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/staking-buyback-2'
              },

            ],
          },
        ],
      },
      {
        field: "Stake",
        assets: [
          {
            icon: "eth-icon.svg",
            text: "ETH Stake",
            percentage: `${stakeApyEth === 0 ? '...' : getFormattedNumber(stakeApyEth, 0)}%`,
            assetSubArray: [
              {
                icons: [
                  "DYP.png"
                ],
                percentage: `${ethApyStake1 == 0 ? '...' : getFormattedNumber(ethApyStake1, 0)}%`,
                total_value_locked: `$${ethTvlTotalStake1 === 0 ? '...' : getFormattedNumber(ethTvlTotalStake1, 2)}`,
                lock_time: "No lock",
                link: 'https://app.dyp.finance/constant-staking-1'
              },
              {
                icons: [
                  "DYP.png"
                ],
                percentage: `${ethApyStake2 == 0 ? '...' : getFormattedNumber(ethApyStake2, 0)}%`,
                total_value_locked: `$${ethTvlTotalStake2 === 0 ? '...' : getFormattedNumber(ethTvlTotalStake2, 2)}`,
                lock_time: "No lock",
                link: 'https://app.dyp.finance/constant-staking-2'
              },

            ],
          },
          {
            icon: "bsc-icon.svg",
            text: "BSC Stake",
            percentage: `${stakeApy1 === 0 ? '...' : getFormattedNumber(stakeApy1, 0)}%`,
            assetSubArray: [
              {
                icons: [
                  "DYP.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/constant-staking-1'
              },
              {
                icons: [
                  "DYP.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-bsc.dyp.finance/constant-staking-2'
              },


            ],
          },
          {
            icon: "avax-icon.svg",
            text: "Avax Stake",
            percentage: `${stakeApyAvax === 0 ? '...' : getFormattedNumber(stakeApyAvax, 0)}%`,
            assetSubArray: [
              {
                icons: [
                  "DYP.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/constant-staking-1'
              },


              {
                icons: [
                  "DYP.png"
                ],
                percentage: "302.27%",
                total_value_locked: "$99,740.31",
                lock_time: "No lock",
                link: 'https://app-avax.dyp.finance/constant-staking-2'
              },

            ],
          },
        ],
      },
    ];

    const vaultsArray = [
      {
        field: "Markets",
        assets: [
          {
            icon: "eth-icon2.png",
            text: "ETH",
            min_lock_time: "3 Days",
            percentage: "3% - 13%",
            link: "https://vault.dyp.finance/vault-weth",
          },
          {
            icon: "wbtc-icon.png",
            text: "WBTC",
            min_lock_time: "3 Days",
            percentage: "3% - 13%",
            link: "https://vault.dyp.finance/vault-wbtc",
          },
        ],
      },
      {
        field: "Stable coin",
        assets: [
          {
            icon: "usdt-icon.png",
            text: "USDT",
            min_lock_time: "3 Days",
            percentage: "9% - 23%",
            link: "https://vault.dyp.finance/vault-usdt",
          },
          {
            icon: "usdc-icon.png",
            text: "USDC",
            min_lock_time: "3 Days",
            percentage: "8% - 22%",
            link: "https://vault.dyp.finance/vault-usdc",
          },
          {
            icon: "dai-icon.png",
            text: "DAI",
            min_lock_time: "3 Days",
            percentage: "8% - 21%",
            link: "https://vault.dyp.finance/vault-dai",
          },
        ],
      },
    ];

    const ethTotal = getFormattedNumber(
      this.props.json_totalPaid.ethTotal.wethPaiOutTotals,
      0
    );
    const bnbTotal = getFormattedNumber(
      this.props.json_totalPaid.bnbTotal.wbnbPaidOutTotals,
      0
    );
    const avaxTotal = getFormattedNumber(
      this.props.json_totalPaid.avaxTotal.avaxPaidOutTotals,
      0
    );
    const liq = getFormattedNumber(this.props.json_totalPaid.totalPaidInUsd, 0);
    const tvl_all = getFormattedNumber(this.props.tvl_all, 2);
    const holders = this.props.totalHolders;

    const RollInAnimation = keyframes`${zoomInUp}`;
    const fadeInAnimation = keyframes`${fadeIn}`;

    const devicewidth = window.innerWidth;

    const BAnimation = keyframes`${tada}`;

    const RollInDiv = styled.div`
      animation: 1s ${RollInAnimation};
      position: fixed;
      z-index: 4;
      bottom: 20px;
    `;

    const Bounce = styled.div`
      animation: infinite 4s ${BAnimation};
    `;

    const FadeIn = styled.div`
      animation: 1s ${fadeInAnimation};

      position: fixed;
    `;

    return (
      <div className="home">
        {!this.state.showPopup && (
          <RollInDiv style={{ right: devicewidth < 500 ? 100 : 20 }}>
            <Bounce>
              <img
                src={CloseX}
                width={50}
                style={{
                  position: "relative",
                  bottom: devicewidth < 500 ? 25 : 215,
                  left: devicewidth < 500 ? 165 : 250,
                  cursor: "pointer",
                }}
                onClick={() => {
                  this.setState({ showPopup: false });
                }}
              />
              <NavLink to="/mint">
                <FadeIn
                  style={{
                    right: devicewidth < 500 ? "25px" : 7,
                    bottom: devicewidth < 500 ? 130 : 140,
                  }}
                >
                  <img
                    src={Speech}
                    style={{ width: devicewidth < 700 ? 100 : 200 }}
                  />
                </FadeIn>
                <img
                  src={Catpopup}
                  style={{ width: devicewidth < 500 ? 200 : 250 }}
                />
              </NavLink>
            </Bounce>
          </RollInDiv>
        )}

        <MainHero
          eth={ethTotal}
          bnb={bnbTotal}
          avax={avaxTotal}
          liquidity={liq}
          tvl={tvl_all}
          users={holders}
          audited={auditedByArray}
        />
        <DeFiYieldProtocolInfo
          statistics={statisticsArray}
          volume={volume}
          paid={paid}
          providers={providers}
        />
        <CalculateFarming />
        <SupportedAssetsAndRates assets={assetsArray} />
        <Vaults vaults={vaultsArray} />
        <LearnMore />
        <OurPartners />
        <LatestAnn />
        <Community />
      </div>
    );
  }
}
