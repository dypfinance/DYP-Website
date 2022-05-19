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
      ethTvlTotalStake3: 0,

      ethApyStake1: 0,
      ethApyStake2: 0,
      ethApyStake3: 25,

      // avax
      avaxTvlTotalStake: 0,
      avaxTvlTotalStake1: 0,
      avaxTvlTotalStake2: 0,
      avaxTvlTotalStake3: 0,

      avaxApyStake1: 0,
      avaxApyStake2: 0,
      avaxApyStake3: 25,

      // bsc
      bscTvlTotalStake: 0,
      bscTvlTotalStake1: 0,
      bscTvlTotalStake2: 0,
      bscTvlTotalStake3: 0,

      bscApyStake1: 0,
      bscApyStake2: 0,
      bscApyStake3: 25,


      //yield
      //eth

      ethTotalApyYield1: 0,
      ethTotalTvlYield1: 0,

      ethTotalTvlYield2: 0,
      ethTotalApyYield2: 0,

      ethTotalTvlYield3: 0,
      ethTotalApyYield3: 0,

      ethTotalTvlYield4: 0,
      ethTotalApyYield4: 0,

      ethTotalTvlYield5: 0,
      ethTotalApyYield5: 0,

      //bsc

      bscTotalApyYield1: 0,
      bscTotalTvlYield1: 0,

      bscTotalTvlYield2: 0,
      bscTotalApyYield2: 0,

      bscTotalTvlYield3: 0,
      bscTotalApyYield3: 0,

      bscTotalTvlYield4: 0,
      bscTotalApyYield4: 0,

      bscTotalTvlYield5: 0,
      bscTotalApyYield5: 0,

      //avax

      avaxTotalApyYield1: 0,
      avaxTotalTvlYield1: 0,

      avaxTotalTvlYield2: 0,
      avaxTotalApyYield2: 0,

      avaxTotalTvlYield3: 0,
      avaxTotalApyYield3: 0,

      avaxTotalTvlYield4: 0,
      avaxTotalApyYield4: 0,

      avaxTotalTvlYield5: 0,
      avaxTotalApyYield5: 0,
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
    await this.getTotalTvlAvaxStake();
    await this.getTotalTvlBscStake();
    await this.getTotalEthTvlYield();
    await this.getTotalBscTvlYield();
    await this.getTotalAvaxTvlYield();
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
    const { BigNumber } = window;

    let tvlTotal1 = 0;

    //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)
    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPAvax()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYPAvax(),
      window.getPriceDYPSBsc(),
    ]);

    // usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)
    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xC905D5DD9A4f26eD059F76929D11476B2844A7c3",
        3
      )) / 1e18;
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xe6B307CD185f2A541a661eA312E3e7939Ea9d218",
        3
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0xe6B307CD185f2A541a661eA312E3e7939Ea9d218",
        3
      )) / 1e18;

    //console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})
    //TODO Calulate $ Value
    let tvliDYP = (tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken;

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x267434f01ac323C6A5BCf41Fa111701eE0165a37",
        3
      )) / 1e18;
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x934819D227B7095595eC9cA6604eF2Dd0C3a9EA2",
        3
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0x934819D227B7095595eC9cA6604eF2Dd0C3a9EA2",
        3
      )) / 1e18;

    //console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})
    //TODO Calulate $ Value
    let tvliDYP2 = (tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken;

    /* Calculate with DYPS */
    let tokensBuybackDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0xC905D5DD9A4f26eD059F76929D11476B2844A7c3",
        3
      )) / 1e18;
    let tokensBuybackDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0x267434f01ac323C6A5BCf41Fa111701eE0165a37",
        3
      )) / 1e18;

    tokensBuybackDYPS = tokensBuybackDYPS * usdPerTokenDYPS;
    tokensBuybackDYPS2 = tokensBuybackDYPS2 * usdPerTokenDYPS;
    /* End DYPS */

    //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

    let avaxTvlTotalBuyback1 = tvlDYP + tvliDYP + tokensBuybackDYPS;
    this.setState({ avaxTvlTotalBuyback1 });

    let avaxTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2;
    this.setState({ avaxTvlTotalBuyback2 });

    let avaxTvlTotal = avaxTvlTotalBuyback1 + avaxTvlTotalBuyback2;
    this.setState({ avaxTvlTotal });

    //apr is 30%
    let apy1_buyback1 = new BigNumber(0.225);
    let apy2_buyback1 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(30)
      .div(1e2)
      .times(usdPerTokeniDYP);

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75);
    let apy2_buyback2 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(usdPerTokeniDYP);

    let avaxApyBuyback1 = new BigNumber(apy1_buyback1)
      .plus(apy2_buyback1)
      .times(1e2)
      .toFixed(0);
    let avaxApyBuyback2 = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);

    this.setState({ avaxApyBuyback1, avaxApyBuyback2 });

    return { avaxTvlTotal };
  };
  getTotalTvlBuyBack = async () => {
    const { BigNumber } = window;

    let tvlTotal1 = 0;

    //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPEth()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYPEth(),
      window.getPriceDYPSBsc(),
    ]);

    // usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xdCBB5B2148f0cf1Abd7757Ba04A5821fEaD80587",
        1
      )) / 1e18;
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x471beCc72AD487249efE521bf9b6744b882830DF",
        1
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0x471beCc72AD487249efE521bf9b6744b882830DF",
        1
      )) / 1e18;

    //console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})

    //TODO Calulate $ Value
    let tvliDYP = (tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken;

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0xDC65C4277d626d6A29C9Dc42Eb396d354fa5E85b",
        1
      )) / 1e18;
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x7b7132E7BF4e754855191a978F3979e1E3c8617b",
        1
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0x7b7132E7BF4e754855191a978F3979e1E3c8617b",
        1
      )) / 1e18;

    //console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})

    //TODO Calulate $ Value
    let tvliDYP2 = (tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken;

    /* Calculate with DYPS */
    let tokensBuybackDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0xdCBB5B2148f0cf1Abd7757Ba04A5821fEaD80587",
        1
      )) / 1e18;
    let tokensBuybackDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0xDC65C4277d626d6A29C9Dc42Eb396d354fa5E85b",
        1
      )) / 1e18;

    tokensBuybackDYPS = tokensBuybackDYPS * usdPerTokenDYPS;
    tokensBuybackDYPS2 = tokensBuybackDYPS2 * usdPerTokenDYPS;
    /* End DYPS */

    //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

    let ethTvlTotalBuyback1 = tvlDYP + tvliDYP + tokensBuybackDYPS;
    this.setState({ ethTvlTotalBuyback1 });

    let ethTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2;
    this.setState({ ethTvlTotalBuyback2 });

    let ethTvlTotal = ethTvlTotalBuyback1 + ethTvlTotalBuyback2;
    this.setState({ ethTvlTotal });

    //apr is 30%
    let apy1_buyback1 = new BigNumber(0.225);
    let apy2_buyback1 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(30)
      .div(1e2)
      .times(usdPerTokeniDYP);

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75);
    let apy2_buyback2 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(usdPerTokeniDYP);

    let ethApyBuyback1 = new BigNumber(apy1_buyback1)
      .plus(apy2_buyback1)
      .times(1e2)
      .toFixed(0);
    let ethApyBuyback2 = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);

    this.setState({ ethApyBuyback1, ethApyBuyback2 });

    return { ethTvlTotal };
  };
  getTotalTvlEth = async () => {
    const { BigNumber } = window;

    let [usdPerToken, usdPerTokeniDYP, usdiDYPAvax, usdiDYPEth] =
      await Promise.all([
        window.getPrice("defi-yield-protocol"),
        window.getPriceiDYP(),
        window.getPriceiDYPAvax(),
        window.getPriceiDYPEth(),
      ]);

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75);
    let apy2_buyback2 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(usdPerTokeniDYP);

    let apyBuyback2 = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    this.setState({ apyBuyback2 });

    //Apy Avax V2 APR is 100%
    apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPAvax);

    let apyBuybackAvax = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    this.setState({ apyBuybackAvax });

    //Apy ETH V2 APR is 100%
    apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPEth);

    let apyBuybackEth = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    this.setState({ apyBuybackEth });

    return { apyBuyback2, apyBuybackAvax, apyBuybackEth };
  };
  getTotalTvlBsc = async () => {
    const { BigNumber } = window;

    let tvlTotal1 = 0;

    //let callCombinerTvl = await window.getTokenHolderBalance('0x350f3fe979bfad4766298713c83b387c2d2d7a7a', 2)

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYP(),
      window.getPriceDYPSBsc(),
    ]);

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x94B1A7B57C441890b7a0f64291B39ad6f7E14804",
        2
      )) / 1e18;
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x9af074cE714FE1Eb32448052a38D274E93C5dc28",
        2
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0x9af074cE714FE1Eb32448052a38D274E93C5dc28",
        2
      )) / 1e18;

    //console.log({tokensBuybackiDYP, tokensStakingiDYP, tokensStakingDYP})

    //TODO Calulate $ Value
    let tvliDYP = (tokensBuybackiDYP + tokensStakingiDYP) * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken;

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensBuybackiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x4eF782E66244A0CF002016AA1Db3019448c670aE",
        2
      )) / 1e18;
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0xDBfb96e2899d52B469C1a1C35eD71fBBa228d2cC",
        2
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0xDBfb96e2899d52B469C1a1C35eD71fBBa228d2cC",
        2
      )) / 1e18;

    //console.log({tokensBuybackiDYP2, tokensStakingiDYP2, tokensStakingDYP2})

    //TODO Calulate $ Value
    let tvliDYP2 = (tokensBuybackiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken;

    /* Calculate with DYPS */
    let tokensBuybackDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0x94B1A7B57C441890b7a0f64291B39ad6f7E14804",
        2
      )) / 1e18;
    let tokensBuybackDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0x4eF782E66244A0CF002016AA1Db3019448c670aE",
        2
      )) / 1e18;

    tokensBuybackDYPS = tokensBuybackDYPS * usdPerTokenDYPS;
    tokensBuybackDYPS2 = tokensBuybackDYPS2 * usdPerTokenDYPS;
    /* End DYPS */

    //tvlTotal1 = usdPerToken * (callCombinerTvl/1e18)

    let bscTvlTotalBuyback1 = tvlDYP + tvliDYP + tokensBuybackDYPS;
    this.setState({ bscTvlTotalBuyback1 });

    let bscTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2;
    this.setState({ bscTvlTotalBuyback2 });

    let bscTvlTotal = bscTvlTotalBuyback1 + bscTvlTotalBuyback2;
    this.setState({ bscTvlTotal });

    //apr is 30%
    let apy1_buyback1 = new BigNumber(0.225);
    let apy2_buyback1 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(30)
      .div(1e2)
      .times(usdPerTokeniDYP);

    // APR is 100% considering 1$ as initial investment, 0.75$ goes to Buyback
    let apy1_buyback2 = new BigNumber(0.75);
    let apy2_buyback2 = new BigNumber(0.25)
      .div(usdPerToken)
      .times(usdPerTokeniDYP);

    let bscApyBuyback1 = new BigNumber(apy1_buyback1)
      .plus(apy2_buyback1)
      .times(1e2)
      .toFixed(0);
    let bscApyBuyback2 = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);

    this.setState({ bscApyBuyback1, bscApyBuyback2 });

    return { bscTvlTotal };
  };
  getTotalTvlStake = async () => {
    const { BigNumber } = window;

    let [usdPerToken, usdPerTokeniDYP, usdiDYPAvax, usdiDYPEth] =
      await Promise.all([
        window.getPrice("defi-yield-protocol"),
        window.getPriceiDYP(),
        window.getPriceiDYPAvax(),
        window.getPriceiDYPEth(),
      ]);

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP);

    let apr1 = 50;
    let stakeApy1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    this.setState({ stakeApy1 });

    let stakeApyAvax = new BigNumber(apr1)
      .div(1e2)
      .times(usdiDYPAvax)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    this.setState({ stakeApyAvax });

    let stakeApyEth = new BigNumber(apr1)
      .div(1e2)
      .times(usdiDYPEth)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    this.setState({ stakeApyEth });

    return { stakeApy1, stakeApyAvax, stakeApyEth };
  };
  getTotalTvlEthStake = async () => {
    const { BigNumber } = window;

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPEth()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYPEth(),
      window.getPriceDYPSBsc(),
    ]);

    /* Calculate with DYPS */
    let tokensStakingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0xa4da28B8e42680916b557459D338aF6e2D8d458f",
        1
      )) / 1e18;
    let tokensStakingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d",
        1
      )) / 1e18;

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS;
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS;
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP);

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xa4da28B8e42680916b557459D338aF6e2D8d458f",
        1
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0xa4da28B8e42680916b557459D338aF6e2D8d458f",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken;
    let ethTvlTotalStake1 = tvliDYP + tvlDYP + tokensStakingDYPS;
    this.setState({ ethTvlTotalStake1 });

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d",
        1
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0x8A30Be7B2780b503ff27dBeaCdecC4Fe2587Af5d",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken;
    let ethTvlTotalStake2 = tvliDYP2 + tvlDYP2 + tokensStakingDYPS2;
    this.setState({ ethTvlTotalStake2 });

     //TODO take the DYP from Staking DYP 3
     let tokensStakingDYP3 = await window.getTokenHolderBalance( '0x44bed8ea3296bda44870d0da98575520de1735d4',1) / 1e18
     let tokensStakingDAI3 = await window.getTokenHolderBalanceDai( '0x44bed8ea3296bda44870d0da98575520de1735d4',1) / 1e18

     //TODO Calulate $ Value
     let tvlDYP3 = tokensStakingDYP3 * usdPerToken
     let ethTvlTotalStake3 = tvlDYP3 + tokensStakingDAI3
     this.setState({ethTvlTotalStake3})

    let ethTvlTotalStake = ethTvlTotalStake1 + ethTvlTotalStake2 + ethTvlTotalStake3;
    this.setState({ ethTvlTotalStake });

    let apr1 = 25;
    let apr2 = 50;
    let ethApyStake1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    let ethApyStake2 = new BigNumber(apr2)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    this.setState({ ethApyStake1, ethApyStake2 });

    return { ethTvlTotalStake, ethTvlTotalStake1, ethTvlTotalStake2, ethTvlTotalStake3 };
  };

  getTotalTvlAvaxStake = async () => {
    const { BigNumber } = window;

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPAvax()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYPAvax(),
      window.getPriceDYPSBsc(),
    ]);

    /* Calculate with DYPS */
    let tokensStakingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0x1A4fd0E9046aeD92B6344F17B0a53969F4d5309B",
        3
      )) / 1e18;
    let tokensStakingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0x5566B51a1B7D5E6CAC57a68182C63Cb615cAf3f9",
        3
      )) / 1e18;

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS;
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS;
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP);

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x1A4fd0E9046aeD92B6344F17B0a53969F4d5309B",
        3
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0x1A4fd0E9046aeD92B6344F17B0a53969F4d5309B",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken;
    let avaxTvlTotalStake1 = tvliDYP + tvlDYP + tokensStakingDYPS;
    this.setState({ avaxTvlTotalStake1 });

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x5566B51a1B7D5E6CAC57a68182C63Cb615cAf3f9",
        3
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0x5566B51a1B7D5E6CAC57a68182C63Cb615cAf3f9",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken;
    let avaxTvlTotalStake2 = tvliDYP2 + tvlDYP2 + tokensStakingDYPS2;
    this.setState({ avaxTvlTotalStake2 });

    let tokensStakingDYP3 = await window.getTokenHolderBalance( '0x16429e51A64B7f88D4C018fbf66266A693df64b3',3) / 1e18
        let tokensStakingDAI3 = await window.getTokenHolderBalanceDai( '0x16429e51A64B7f88D4C018fbf66266A693df64b3',3) / 1e18

        //TODO Calulate $ Value
        let tvlDYP3 = tokensStakingDYP3 * usdPerToken
        let avaxTvlTotalStake3 = tvlDYP3 + tokensStakingDAI3
        this.setState({avaxTvlTotalStake3})



    let avaxTvlTotalStake = avaxTvlTotalStake1 + avaxTvlTotalStake2 + avaxTvlTotalStake3;
    this.setState({ avaxTvlTotalStake });

    let apr1 = 25;
    let apr2 = 50;
    let avaxApyStake1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    let avaxApyStake2 = new BigNumber(apr2)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    this.setState({ avaxApyStake1, avaxApyStake2 });

    return { avaxTvlTotalStake, avaxTvlTotalStake1, avaxTvlTotalStake2, avaxTvlTotalStake3 };
  };



  getTotalTvlBscStake = async () => {
    const { BigNumber } = window;

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYP(),
      window.getPriceDYPSBsc(),
    ]);

    /* Calculate with DYPS */
    let tokensStakingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0xf13adbeb27ea9d9469d95e925e56a1cf79c06e90",
        2
      )) / 1e18;
    let tokensStakingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0xaf411bf994da1435a3150b874395b86376c5f2d5",
        2
      )) / 1e18;

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS;
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS;
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP);

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xf13adbeb27ea9d9469d95e925e56a1cf79c06e90",
        2
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0xf13adbeb27ea9d9469d95e925e56a1cf79c06e90",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken;
    let bscTvlTotalStake1 = tvliDYP + tvlDYP + tokensStakingDYPS;
    this.setState({ bscTvlTotalStake1 });

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0xaf411bf994da1435a3150b874395b86376c5f2d5",
        2
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0xaf411bf994da1435a3150b874395b86376c5f2d5",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken;
    let bscTvlTotalStake2 = tvliDYP2 + tvlDYP2 + tokensStakingDYPS2;
    this.setState({ bscTvlTotalStake2 });

    let tokensStakingDYP3 = await window.getTokenHolderBalance( '0xa9efab22ccbfeabb6dc4583d81421e76342faf8b',2) / 1e18
    let tokensStakingDAI3 = await window.getTokenHolderBalanceDai( '0xa9efab22ccbfeabb6dc4583d81421e76342faf8b',2) / 1e18

    //TODO Calulate $ Value
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken
    let bscTvlTotalStake3 = tvlDYP3 + tokensStakingDAI3
    this.setState({bscTvlTotalStake3})


    let bscTvlTotalStake = bscTvlTotalStake1 + bscTvlTotalStake2 + bscTvlTotalStake3;
    this.setState({ bscTvlTotalStake });

    let apr1 = 25;
    let apr2 = 50;
    let bscApyStake1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    let bscApyStake2 = new BigNumber(apr2)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    this.setState({ bscApyStake1, bscApyStake2 });

    return { bscTvlTotalStake, bscTvlTotalStake1, bscTvlTotalStake2, bscTvlTotalStake3 };
  };

  getTotalEthTvlYield = async () => {
    const { LP_IDs_ETH_V2 } = window;

    let ethTotalApyYield1 = 0;
    let ethTotalApyYield2 = 0;
    let ethTotalApyYield3 = 0;
    let ethTotalApyYield4 = 0;
    let ethTotalApyYield5 = 0;
    let {
      ethTotalTvlYield1,
      ethTotalTvlYield2,
      ethTotalTvlYield3,
      ethTotalTvlYield4,
      ethTotalTvlYield5,
    } = 0;

    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYPEth(),
      window.getPriceDYPSBsc(),
    ]);

    if (window.the_graph_result_eth_v2.lp_data) {
      ethTotalTvlYield1 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[0]].tvl_usd;
      ethTotalTvlYield2 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[1]].tvl_usd;
      ethTotalTvlYield3 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[2]].tvl_usd;
      ethTotalTvlYield4 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[3]].tvl_usd;
      ethTotalTvlYield5 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[4]].tvl_usd;

      ethTotalApyYield1 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[0]].apy;
      ethTotalApyYield2 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[1]].apy;
      ethTotalApyYield3 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[2]].apy;
      ethTotalApyYield4 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[3]].apy;
      ethTotalApyYield5 =
        window.the_graph_result_eth_v2.lp_data[LP_IDs_ETH_V2.weth[4]].apy;
    }
    this.setState({
      ethTotalApyYield1,
      ethTotalApyYield2,
      ethTotalApyYield3,
      ethTotalApyYield4,
      ethTotalApyYield5,
    });

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xa68BBe793ad52d0E62bBf34A67F02235bA69E737",
        1
      )) / 1e18;
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x0b92E7f074e7Ade0181A29647ea8474522e6A7C2",
        1
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0x0b92E7f074e7Ade0181A29647ea8474522e6A7C2",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP = (tokensFarmiDYP + tokensStakingiDYP) * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken * 1;

    ethTotalTvlYield1 = ethTotalTvlYield1 + tvliDYP + tvlDYP;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP1 =
      (await window.getTokenHolderBalanceiDYP(
        "0xCFd970494a0b3C52a81dcE1EcBFF2245e6b0B0E7",
        1
      )) / 1e18;
    let tokensStakingiDYP1 =
      (await window.getTokenHolderBalanceiDYP(
        "0xff32a38016422F51e8C0aF5D333472392822FeEf",
        1
      )) / 1e18;
    let tokensStakingDYP1 =
      (await window.getTokenHolderBalance(
        "0xff32a38016422F51e8C0aF5D333472392822FeEf",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP1 = (tokensFarmiDYP1 + tokensStakingiDYP1) * usdPerTokeniDYP;
    let tvlDYP1 = tokensStakingDYP1 * usdPerToken * 1;

    ethTotalTvlYield2 = ethTotalTvlYield2 + tvliDYP1 + tvlDYP1;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x49D02CF81Cc352517350F25E200365360426aF94",
        1
      )) / 1e18;
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x62AAE8C0c50038236d075AC595Ae0BE4F201bBdd",
        1
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0x62AAE8C0c50038236d075AC595Ae0BE4F201bBdd",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP2 = (tokensFarmiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken * 1;

    ethTotalTvlYield3 = ethTotalTvlYield3 + tvliDYP2 + tvlDYP2;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP3 =
      (await window.getTokenHolderBalanceiDYP(
        "0xf51965c570419F2576ec9AeAD6A3C5F674424A99",
        1
      )) / 1e18;
    let tokensStakingiDYP3 =
      (await window.getTokenHolderBalanceiDYP(
        "0xb67F464b558e3055C2B6F017546Ed53b2e6333d7",
        1
      )) / 1e18;
    let tokensStakingDYP3 =
      (await window.getTokenHolderBalance(
        "0xb67F464b558e3055C2B6F017546Ed53b2e6333d7",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP3 = (tokensFarmiDYP3 + tokensStakingiDYP3) * usdPerTokeniDYP;
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken * 1;

    ethTotalTvlYield4 = ethTotalTvlYield4 + tvliDYP3 + tvlDYP3;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP4 =
      (await window.getTokenHolderBalanceiDYP(
        "0x997A7254E5567d0A70329DEFCc1E4d29d71Ba224",
        1
      )) / 1e18;
    let tokensStakingiDYP4 =
      (await window.getTokenHolderBalanceiDYP(
        "0x1aB008CbfC99d0CA7e3FD8987ce1ebf832506F53",
        1
      )) / 1e18;
    let tokensStakingDYP4 =
      (await window.getTokenHolderBalance(
        "0x1aB008CbfC99d0CA7e3FD8987ce1ebf832506F53",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP4 = (tokensFarmiDYP4 + tokensStakingiDYP4) * usdPerTokeniDYP;
    let tvlDYP4 = tokensStakingDYP4 * usdPerToken * 1;

    ethTotalTvlYield5 = ethTotalTvlYield5 + tvliDYP4 + tvlDYP4;

    /* Calculate with DYPS */
    let tokensFarmingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0xa68BBe793ad52d0E62bBf34A67F02235bA69E737",
        1
      )) / 1e18;
    let tokensFarmingDYPS1 =
      (await window.getTokenHolderBalanceDYPS(
        "0xCFd970494a0b3C52a81dcE1EcBFF2245e6b0B0E7",
        1
      )) / 1e18;
    let tokensFarmingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0x49D02CF81Cc352517350F25E200365360426aF94",
        1
      )) / 1e18;
    let tokensFarmingDYPS3 =
      (await window.getTokenHolderBalanceDYPS(
        "0xf51965c570419F2576ec9AeAD6A3C5F674424A99",
        1
      )) / 1e18;
    let tokensFarmingDYPS4 =
      (await window.getTokenHolderBalanceDYPS(
        "0x997A7254E5567d0A70329DEFCc1E4d29d71Ba224",
        1
      )) / 1e18;

    tokensFarmingDYPS = tokensFarmingDYPS * usdPerTokenDYPS;
    tokensFarmingDYPS1 = tokensFarmingDYPS1 * usdPerTokenDYPS;
    tokensFarmingDYPS2 = tokensFarmingDYPS2 * usdPerTokenDYPS;
    tokensFarmingDYPS3 = tokensFarmingDYPS3 * usdPerTokenDYPS;
    tokensFarmingDYPS4 = tokensFarmingDYPS4 * usdPerTokenDYPS;

    ethTotalTvlYield1 = ethTotalTvlYield1 + tokensFarmingDYPS;
    ethTotalTvlYield2 = ethTotalTvlYield2 + tokensFarmingDYPS1;
    ethTotalTvlYield3 = ethTotalTvlYield3 + tokensFarmingDYPS2;
    ethTotalTvlYield4 = ethTotalTvlYield4 + tokensFarmingDYPS3;
    ethTotalTvlYield5 = ethTotalTvlYield5 + tokensFarmingDYPS4;
    /* End DYPS */

    this.setState({
      ethTotalTvlYield1,
      ethTotalTvlYield2,
      ethTotalTvlYield3,
      ethTotalTvlYield4,
      ethTotalTvlYield5,
    });
  };

  getTotalBscTvlYield = async () => {
    const { LP_IDs_BSC_V2 } = window;

    let bscTotalApyYield1 = 0;
    let bscTotalApyYield2 = 0;
    let bscTotalApyYield3 = 0;
    let bscTotalApyYield4 = 0;
    let bscTotalApyYield5 = 0;
    let {
      bscTotalTvlYield1,
      bscTotalTvlYield2,
      bscTotalTvlYield3,
      bscTotalTvlYield4,
      bscTotalTvlYield5,
    } = 0;

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYP()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYP(),
      window.getPriceDYPSBsc(),
    ]);
    if (window.the_graph_result_bsc_v2.lp_data) {
      bscTotalTvlYield1 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[0]].tvl_usd;
      bscTotalTvlYield2 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[1]].tvl_usd;
      bscTotalTvlYield3 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[2]].tvl_usd;
      bscTotalTvlYield4 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[3]].tvl_usd;
      bscTotalTvlYield5 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[4]].tvl_usd;

      bscTotalApyYield1 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[0]].apy;
      bscTotalApyYield2 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[1]].apy;
      bscTotalApyYield3 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[2]].apy;
      bscTotalApyYield4 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[3]].apy;
      bscTotalApyYield5 =
        window.the_graph_result_bsc_v2.lp_data[LP_IDs_BSC_V2.wbnb[4]].apy;
    }
    this.setState({
      bscTotalApyYield1,
      bscTotalApyYield2,
      bscTotalApyYield3,
      bscTotalApyYield4,
      bscTotalApyYield5,
    });

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x537dc4fee298ea79a7f65676735415f1e2882f92",
        2
      )) / 1e18;
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0xc794cDb8D6aC5eB42d5ABa9c1E641ae17c239c8c",
        2
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0xc794cDb8D6aC5eB42d5ABa9c1E641ae17c239c8c",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP = (tokensFarmiDYP + tokensStakingiDYP) * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken * 1;

    bscTotalTvlYield1 = bscTotalTvlYield1 + tvliDYP + tvlDYP;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP1 =
      (await window.getTokenHolderBalanceiDYP(
        "0x219717bf0bc33b2764a6c1a772f75305458bda3d",
        2
      )) / 1e18;
    let tokensStakingiDYP1 =
      (await window.getTokenHolderBalanceiDYP(
        "0x23609B1f5274160564e4afC5eB9329A8Bf81c744",
        2
      )) / 1e18;
    let tokensStakingDYP1 =
      (await window.getTokenHolderBalance(
        "0x23609B1f5274160564e4afC5eB9329A8Bf81c744",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP1 = (tokensFarmiDYP1 + tokensStakingiDYP1) * usdPerTokeniDYP;
    let tvlDYP1 = tokensStakingDYP1 * usdPerToken * 1;

    bscTotalTvlYield2 = bscTotalTvlYield2 + tvliDYP1 + tvlDYP1;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0xd1151a2434931f34bcfa6c27639b67c1a23d93af",
        2
      )) / 1e18;
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x264922696b9972687522b6e98Bf78A0430E2163C",
        2
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0x264922696b9972687522b6e98Bf78A0430E2163C",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP2 = (tokensFarmiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken * 1;

    bscTotalTvlYield3 = bscTotalTvlYield3 + tvliDYP2 + tvlDYP2;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP3 =
      (await window.getTokenHolderBalanceiDYP(
        "0xed869ba773c3f1a1adcc87930ca36ee2dc73435d",
        2
      )) / 1e18;
    let tokensStakingiDYP3 =
      (await window.getTokenHolderBalanceiDYP(
        "0x9DF0A645BeB6F7aDFaDC56f3689E79405337EFE2",
        2
      )) / 1e18;
    let tokensStakingDYP3 =
      (await window.getTokenHolderBalance(
        "0x9DF0A645BeB6F7aDFaDC56f3689E79405337EFE2",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP3 = (tokensFarmiDYP3 + tokensStakingiDYP3) * usdPerTokeniDYP;
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken * 1;

    bscTotalTvlYield4 = bscTotalTvlYield4 + tvliDYP3 + tvlDYP3;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP4 =
      (await window.getTokenHolderBalanceiDYP(
        "0x415b1624710296717fa96cad84f53454e8f02d18",
        2
      )) / 1e18;
    let tokensStakingiDYP4 =
      (await window.getTokenHolderBalanceiDYP(
        "0xbd574278fEbad04b7A0694C37DeF4f2ecFa9354A",
        2
      )) / 1e18;
    let tokensStakingDYP4 =
      (await window.getTokenHolderBalance(
        "0xbd574278fEbad04b7A0694C37DeF4f2ecFa9354A",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP4 = (tokensFarmiDYP4 + tokensStakingiDYP4) * usdPerTokeniDYP;
    let tvlDYP4 = tokensStakingDYP4 * usdPerToken * 1;

    bscTotalTvlYield5 = bscTotalTvlYield5 + tvliDYP4 + tvlDYP4;

    /* Calculate with DYPS */
    let tokensFarmingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0x537DC4fee298Ea79A7F65676735415f1E2882F92",
        2
      )) / 1e18;
    let tokensFarmingDYPS1 =
      (await window.getTokenHolderBalanceDYPS(
        "0x219717BF0bC33b2764A6c1A772F75305458BDA3d",
        2
      )) / 1e18;
    let tokensFarmingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0xD1151a2434931f34bcFA6c27639b67C1A23D93Af",
        2
      )) / 1e18;
    let tokensFarmingDYPS3 =
      (await window.getTokenHolderBalanceDYPS(
        "0xed869Ba773c3F1A1adCC87930Ca36eE2dC73435d",
        2
      )) / 1e18;
    let tokensFarmingDYPS4 =
      (await window.getTokenHolderBalanceDYPS(
        "0x415B1624710296717FA96cAD84F53454E8F02D18",
        2
      )) / 1e18;

    tokensFarmingDYPS = tokensFarmingDYPS * usdPerTokenDYPS;
    tokensFarmingDYPS1 = tokensFarmingDYPS1 * usdPerTokenDYPS;
    tokensFarmingDYPS2 = tokensFarmingDYPS2 * usdPerTokenDYPS;
    tokensFarmingDYPS3 = tokensFarmingDYPS3 * usdPerTokenDYPS;
    tokensFarmingDYPS4 = tokensFarmingDYPS4 * usdPerTokenDYPS;

    bscTotalTvlYield1 = bscTotalTvlYield1 + tokensFarmingDYPS;
    bscTotalTvlYield2 = bscTotalTvlYield2 + tokensFarmingDYPS1;
    bscTotalTvlYield3 = bscTotalTvlYield3 + tokensFarmingDYPS2;
    bscTotalTvlYield4 = bscTotalTvlYield4 + tokensFarmingDYPS3;
    bscTotalTvlYield5 = bscTotalTvlYield5 + tokensFarmingDYPS4;
    /* End DYPS */

    this.setState({
      bscTotalTvlYield1,
      bscTotalTvlYield2,
      bscTotalTvlYield3,
      bscTotalTvlYield4,
      bscTotalTvlYield5,
    });
  };

  getTotalAvaxTvlYield = async () => {
    const { LP_IDs_AVAX_V2 } = window;
    let avaxTotalApyYield1 = 0;
    let avaxTotalApyYield2 = 0;
    let avaxTotalApyYield3 = 0;
    let avaxTotalApyYield4 = 0;
    let avaxTotalApyYield5 = 0;
    let {
      avaxTotalTvlYield1,
      avaxTotalTvlYield2,
      avaxTotalTvlYield3,
      avaxTotalTvlYield4,
      avaxTotalTvlYield5,
    } = 0;

    // let [usdPerToken, usdPerTokeniDYP] = await Promise.all([window.getPrice('defi-yield-protocol'), window.getPriceiDYPAvax()])
    let [usdPerToken, usdPerTokeniDYP, usdPerTokenDYPS] = await Promise.all([
      window.getPrice("defi-yield-protocol"),
      window.getPriceiDYPAvax(),
      window.getPriceDYPSBsc(),
    ]);

    if (window.the_graph_result_avax_v2.lp_data) {
      avaxTotalTvlYield1 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[0]]
          .tvl_usd;
      avaxTotalTvlYield2 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[1]]
          .tvl_usd;
      avaxTotalTvlYield3 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[2]]
          .tvl_usd;
      avaxTotalTvlYield4 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[3]]
          .tvl_usd;
      avaxTotalTvlYield5 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[4]]
          .tvl_usd;

      avaxTotalApyYield1 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[0]].apy;
      avaxTotalApyYield2 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[1]].apy;
      avaxTotalApyYield3 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[2]].apy;
      avaxTotalApyYield4 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[3]].apy;
      avaxTotalApyYield5 =
        window.the_graph_result_avax_v2.lp_data[LP_IDs_AVAX_V2.wavax[4]].apy;
    }
    this.setState({
      avaxTotalApyYield1,
      avaxTotalApyYield2,
      avaxTotalApyYield3,
      avaxTotalApyYield4,
      avaxTotalApyYield5,
    });

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x035d65babF595758D7A439D5870BAdc44218D028",
        3
      )) / 1e18;
    let tokensStakingiDYP =
      (await window.getTokenHolderBalanceiDYP(
        "0x1cA9Fc98f3b997E08bC04691414e33B1835aa7e5",
        3
      )) / 1e18;
    let tokensStakingDYP =
      (await window.getTokenHolderBalance(
        "0x1cA9Fc98f3b997E08bC04691414e33B1835aa7e5",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP = (tokensFarmiDYP + tokensStakingiDYP) * usdPerTokeniDYP;
    let tvlDYP = tokensStakingDYP * usdPerToken * 1;

    avaxTotalTvlYield1 = avaxTotalTvlYield1 + tvliDYP + tvlDYP;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP1 =
      (await window.getTokenHolderBalanceiDYP(
        "0x6c325DfEA0d18387D423C869E328Ef005cBA024F",
        3
      )) / 1e18;
    let tokensStakingiDYP1 =
      (await window.getTokenHolderBalanceiDYP(
        "0x6a258Bd17456e057A7c6102177EC2f9d64D5F9e4",
        3
      )) / 1e18;
    let tokensStakingDYP1 =
      (await window.getTokenHolderBalance(
        "0x6a258Bd17456e057A7c6102177EC2f9d64D5F9e4",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP1 = (tokensFarmiDYP1 + tokensStakingiDYP1) * usdPerTokeniDYP;
    let tvlDYP1 = tokensStakingDYP1 * usdPerToken * 1;

    avaxTotalTvlYield2 = avaxTotalTvlYield2 + tvliDYP1 + tvlDYP1;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0x85C4f0CEA0994dE365dC47ba22dD0FD9899F93Ab",
        3
      )) / 1e18;
    let tokensStakingiDYP2 =
      (await window.getTokenHolderBalanceiDYP(
        "0xC2ba0abFc89A5A258e6440D82BB95A5e2B541581",
        3
      )) / 1e18;
    let tokensStakingDYP2 =
      (await window.getTokenHolderBalance(
        "0xC2ba0abFc89A5A258e6440D82BB95A5e2B541581",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP2 = (tokensFarmiDYP2 + tokensStakingiDYP2) * usdPerTokeniDYP;
    let tvlDYP2 = tokensStakingDYP2 * usdPerToken * 1;

    avaxTotalTvlYield3 = avaxTotalTvlYield3 + tvliDYP2 + tvlDYP2;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP3 =
      (await window.getTokenHolderBalanceiDYP(
        "0x6f5dC6777b2B4667Bf183D093111867239518af5",
        3
      )) / 1e18;
    let tokensStakingiDYP3 =
      (await window.getTokenHolderBalanceiDYP(
        "0x4c16093Da4BA7a604A1Fe8CD5d387cC904B3D407",
        3
      )) / 1e18;
    let tokensStakingDYP3 =
      (await window.getTokenHolderBalance(
        "0x4c16093Da4BA7a604A1Fe8CD5d387cC904B3D407",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP3 = (tokensFarmiDYP3 + tokensStakingiDYP3) * usdPerTokeniDYP;
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken * 1;

    avaxTotalTvlYield4 = avaxTotalTvlYield4 + tvliDYP3 + tvlDYP3;

    //TODO In farming we have LP $ + iDYP$ also we have in staking DYP$ + iDYP$
    let tokensFarmiDYP4 =
      (await window.getTokenHolderBalanceiDYP(
        "0x10E105676CAC55b74cb6500a8Fb5d2f84804393D",
        3
      )) / 1e18;
    let tokensStakingiDYP4 =
      (await window.getTokenHolderBalanceiDYP(
        "0x9FF3DC1f7042bAF46651029C7284Fc3B93e21a4D",
        3
      )) / 1e18;
    let tokensStakingDYP4 =
      (await window.getTokenHolderBalance(
        "0x9FF3DC1f7042bAF46651029C7284Fc3B93e21a4D",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvliDYP4 = (tokensFarmiDYP4 + tokensStakingiDYP4) * usdPerTokeniDYP;
    let tvlDYP4 = tokensStakingDYP4 * usdPerToken * 1;

    avaxTotalTvlYield5 = avaxTotalTvlYield5 + tvliDYP4 + tvlDYP4;

    /* Calculate with DYPS */
    let tokensFarmingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0x035d65babF595758D7A439D5870BAdc44218D028",
        3
      )) / 1e18;
    let tokensFarmingDYPS1 =
      (await window.getTokenHolderBalanceDYPS(
        "0x6c325DfEA0d18387D423C869E328Ef005cBA024F",
        3
      )) / 1e18;
    let tokensFarmingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0x85C4f0CEA0994dE365dC47ba22dD0FD9899F93Ab",
        3
      )) / 1e18;
    let tokensFarmingDYPS3 =
      (await window.getTokenHolderBalanceDYPS(
        "0x6f5dC6777b2B4667Bf183D093111867239518af5",
        3
      )) / 1e18;
    let tokensFarmingDYPS4 =
      (await window.getTokenHolderBalanceDYPS(
        "0x10E105676CAC55b74cb6500a8Fb5d2f84804393D",
        3
      )) / 1e18;

    tokensFarmingDYPS = tokensFarmingDYPS * usdPerTokenDYPS;
    tokensFarmingDYPS1 = tokensFarmingDYPS1 * usdPerTokenDYPS;
    tokensFarmingDYPS2 = tokensFarmingDYPS2 * usdPerTokenDYPS;
    tokensFarmingDYPS3 = tokensFarmingDYPS3 * usdPerTokenDYPS;
    tokensFarmingDYPS4 = tokensFarmingDYPS4 * usdPerTokenDYPS;

    avaxTotalTvlYield1 = avaxTotalTvlYield1 + tokensFarmingDYPS;
    avaxTotalTvlYield2 = avaxTotalTvlYield2 + tokensFarmingDYPS1;
    avaxTotalTvlYield3 = avaxTotalTvlYield3 + tokensFarmingDYPS2;
    avaxTotalTvlYield4 = avaxTotalTvlYield4 + tokensFarmingDYPS3;
    avaxTotalTvlYield5 = avaxTotalTvlYield5 + tokensFarmingDYPS4;
    /* End DYPS */

    this.setState({
      avaxTotalTvlYield1,
      avaxTotalTvlYield2,
      avaxTotalTvlYield3,
      avaxTotalTvlYield4,
      avaxTotalTvlYield5,
    });
  };

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
      ethTvlTotalStake3,
      ethApyStake1,
      ethApyStake2,
      ethApyStake3,
      avaxTvlTotalStake,
      avaxTvlTotalStake1,
      avaxTvlTotalStake2,
      avaxTvlTotalStake3,
      avaxApyStake1,
      avaxApyStake2,
      avaxApyStake3,
      bscTvlTotalStake,
      bscTvlTotalStake1,
      bscTvlTotalStake2,
      bscTvlTotalStake3,
      bscApyStake1,
      bscApyStake2,
      bscApyStake3,
      ethTotalTvlYield1,
      ethTotalTvlYield2,
      ethTotalTvlYield3,
      ethTotalTvlYield4,
      ethTotalTvlYield5,
      ethTotalApyYield1,
      ethTotalApyYield2,
      ethTotalApyYield3,
      ethTotalApyYield4,
      ethTotalApyYield5,
      bscTotalTvlYield1,
      bscTotalTvlYield2,
      bscTotalTvlYield3,
      bscTotalTvlYield4,
      bscTotalTvlYield5,
      bscTotalApyYield1,
      bscTotalApyYield2,
      bscTotalApyYield3,
      bscTotalApyYield4,
      bscTotalApyYield5,
      avaxTotalTvlYield1,
      avaxTotalTvlYield2,
      avaxTotalTvlYield3,
      avaxTotalTvlYield4,
      avaxTotalTvlYield5,
      avaxTotalApyYield1,
      avaxTotalApyYield2,
      avaxTotalApyYield3,
      avaxTotalApyYield4,
      avaxTotalApyYield5,
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
            percentage: `${this.props.high_apy.highestAPY.highestAPY_ETH_V2} %`,
            assetSubArray: [
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethTotalApyYield1 == 0
                    ? "..."
                    : getFormattedNumber(ethTotalApyYield1, 0)
                }%`,
                total_value_locked: `$${
                  ethTotalTvlYield1 === 0
                    ? "..."
                    : getFormattedNumber(ethTotalTvlYield1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/farming-new-1",
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethTotalApyYield2 == 0
                    ? "..."
                    : getFormattedNumber(ethTotalApyYield2, 0)
                }%`,
                total_value_locked: `$${
                  ethTotalTvlYield2 === 0
                    ? "..."
                    : getFormattedNumber(ethTotalTvlYield2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/farming-new-2",
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethTotalApyYield3 == 0
                    ? "..."
                    : getFormattedNumber(ethTotalApyYield3, 0)
                }%`,
                total_value_locked: `$${
                  ethTotalTvlYield3 === 0
                    ? "..."
                    : getFormattedNumber(ethTotalTvlYield3, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/farming-new-3",
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethTotalApyYield4 == 0
                    ? "..."
                    : getFormattedNumber(ethTotalApyYield4, 0)
                }%`,
                total_value_locked: `$${
                  ethTotalTvlYield4 === 0
                    ? "..."
                    : getFormattedNumber(ethTotalTvlYield4, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/farming-new-4",
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethTotalApyYield5 == 0
                    ? "..."
                    : getFormattedNumber(ethTotalApyYield5, 0)
                }%`,
                total_value_locked: `$${
                  ethTotalTvlYield5 === 0
                    ? "..."
                    : getFormattedNumber(ethTotalTvlYield5, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/farming-new-5",
              },
            ],
          },
          {
            icon: "bnb_colour.svg",
            text: "BSC Yield",
            percentage: `${this.props.high_apy.highestAPY.highestAPY_BSC_V2} %`,
            assetSubArray: [
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscTotalApyYield1 == 0
                    ? "..."
                    : getFormattedNumber(bscTotalApyYield1, 0)
                }%`,
                total_value_locked: `$${
                  bscTotalTvlYield1 === 0
                    ? "..."
                    : getFormattedNumber(bscTotalTvlYield1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/farming-new-1",
              },
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscTotalApyYield2 == 0
                    ? "..."
                    : getFormattedNumber(bscTotalApyYield2, 0)
                }%`,
                total_value_locked: `$${
                  bscTotalTvlYield2 === 0
                    ? "..."
                    : getFormattedNumber(bscTotalTvlYield2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/farming-new-2",
              },
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscTotalApyYield3 == 0
                    ? "..."
                    : getFormattedNumber(bscTotalApyYield3, 0)
                }%`,
                total_value_locked: `$${
                  bscTotalTvlYield3 === 0
                    ? "..."
                    : getFormattedNumber(bscTotalTvlYield3, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/farming-new-3",
              },
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscTotalApyYield4 == 0
                    ? "..."
                    : getFormattedNumber(bscTotalApyYield4, 0)
                }%`,
                total_value_locked: `$${
                  bscTotalTvlYield4 === 0
                    ? "..."
                    : getFormattedNumber(bscTotalTvlYield4, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/farming-new-4",
              },
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscTotalApyYield5 == 0
                    ? "..."
                    : getFormattedNumber(bscTotalApyYield5, 0)
                }%`,
                total_value_locked: `$${
                  bscTotalTvlYield5 === 0
                    ? "..."
                    : getFormattedNumber(bscTotalTvlYield5, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/farming-new-5",
              },
            ],
          },

          {
            icon: "avax-icon.svg",
            text: "Avax Yield",
            percentage: `${this.props.high_apy.highestAPY.highestAPY_AVAX_V2} %`,
            assetSubArray: [
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `${
                  avaxTotalApyYield1 == 0
                    ? "..."
                    : getFormattedNumber(avaxTotalApyYield1, 0)
                }%`,
                total_value_locked: `$${
                  avaxTotalTvlYield1 === 0
                    ? "..."
                    : getFormattedNumber(avaxTotalTvlYield1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/farming-new-1",
              },
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `${
                  avaxTotalApyYield2 == 0
                    ? "..."
                    : getFormattedNumber(avaxTotalApyYield2, 0)
                }%`,
                total_value_locked: `$${
                  avaxTotalTvlYield2 === 0
                    ? "..."
                    : getFormattedNumber(avaxTotalTvlYield2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/farming-new-2",
              },
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `${
                  avaxTotalApyYield3 == 0
                    ? "..."
                    : getFormattedNumber(avaxTotalApyYield3, 0)
                }%`,
                total_value_locked: `$${
                  avaxTotalTvlYield3 === 0
                    ? "..."
                    : getFormattedNumber(avaxTotalTvlYield3, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/farming-new-3",
              },
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `${
                  avaxTotalApyYield4 == 0
                    ? "..."
                    : getFormattedNumber(avaxTotalApyYield4, 0)
                }%`,
                total_value_locked: `$${
                  avaxTotalTvlYield4 === 0
                    ? "..."
                    : getFormattedNumber(avaxTotalTvlYield4, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/farming-new-4",
              },
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `${
                  avaxTotalApyYield5 == 0
                    ? "..."
                    : getFormattedNumber(avaxTotalApyYield5, 0)
                }%`,
                total_value_locked: `$${
                  avaxTotalTvlYield5 === 0
                    ? "..."
                    : getFormattedNumber(avaxTotalTvlYield5, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/farming-new-5",
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
            percentage: `${
              apyBuybackEth === 0 ? "..." : getFormattedNumber(apyBuybackEth, 0)
            }%`,
            assetSubArray: [
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethApyBuyback1 == 0
                    ? "..."
                    : getFormattedNumber(ethApyBuyback1, 0)
                }%`,
                total_value_locked: `$${
                  ethTvlTotalBuyback1 === 0
                    ? "..."
                    : getFormattedNumber(ethTvlTotalBuyback1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/staking-buyback-1",
              },
              {
                icons: [
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdc-icon.png",
                  "usdt-icon.png",
                  "dai-icon.png",
                ],
                percentage: `${
                  ethApyBuyback2 == 0
                    ? "..."
                    : getFormattedNumber(ethApyBuyback2, 0)
                }%`,
                total_value_locked: `$${
                  ethTvlTotalBuyback2 === 0
                    ? "..."
                    : getFormattedNumber(ethTvlTotalBuyback2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/staking-buyback-2",
              },
            ],
          },
          {
            icon: "bsc-icon.svg",
            text: "BSC Buyback",
            percentage: `${
              apyBuyback2 === 0 ? "..." : getFormattedNumber(apyBuyback2, 0)
            }%`,
            assetSubArray: [
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscApyBuyback1 == 0
                    ? "..."
                    : getFormattedNumber(bscApyBuyback1, 0)
                }%`,
                total_value_locked: `$${
                  bscTvlTotalBuyback1 === 0
                    ? "..."
                    : getFormattedNumber(bscTvlTotalBuyback1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/staking-buyback-1",
              },
              {
                icons: [
                  "bnb_colour.svg",
                  "wbtc-icon.png",
                  "eth-icon2.png",
                  "dai-icon.png",
                  "cake-icon.png",
                ],
                percentage: `${
                  bscApyBuyback2 == 0
                    ? "..."
                    : getFormattedNumber(bscApyBuyback2, 0)
                }%`,
                total_value_locked: `$${
                  bscTvlTotalBuyback2 === 0
                    ? "..."
                    : getFormattedNumber(bscTvlTotalBuyback2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/staking-buyback-2",
              },
            ],
          },
          {
            icon: "avax-icon.svg",
            text: "Avax Buyback",
            percentage: `${
              apyBuybackAvax === 0
                ? "..."
                : getFormattedNumber(apyBuybackAvax, 0)
            }%`,
            assetSubArray: [
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `${
                  avaxApyBuyback1 == 0
                    ? "..."
                    : getFormattedNumber(avaxApyBuyback1, 0)
                }%`,
                total_value_locked: `$${
                  avaxTvlTotalBuyback1 === 0
                    ? "..."
                    : getFormattedNumber(avaxTvlTotalBuyback1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/staking-buyback-1",
              },
              {
                icons: [
                  "avax-icon.png",
                  "eth-icon2.png",
                  "wbtc-icon.png",
                  "usdt-icon.png",
                  "pang-icon.png",
                ],
                percentage: `$${
                  avaxApyBuyback2 == 0
                    ? "..."
                    : getFormattedNumber(avaxApyBuyback2, 0)
                }%`,
                total_value_locked: `$${
                  avaxTvlTotalBuyback2 === 0
                    ? "..."
                    : getFormattedNumber(avaxTvlTotalBuyback2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/staking-buyback-2",
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
            percentage: '25%',
            assetSubArray: [
              {
                icons: ["DYP.png"],
                percentage: `${ethApyStake3} %`,
                total_value_locked: `$${
                  ethTvlTotalStake3 === 0
                    ? "..."
                    : getFormattedNumber(ethTvlTotalStake3, 2)
                }`,
                lock_time: "90 days",
                link: "https://app.dyp.finance/constant-staking-3",
              },
              {
                icons: ["DYP.png"],
                percentage: `${
                  ethApyStake1 == 0
                    ? "..."
                    : getFormattedNumber(ethApyStake1, 0)
                }%`,
                total_value_locked: `$${
                  ethTvlTotalStake1 === 0
                    ? "..."
                    : getFormattedNumber(ethTvlTotalStake1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/constant-staking-1",
              },
              {
                icons: ["DYP.png"],
                percentage: `${
                  ethApyStake2 == 0
                    ? "..."
                    : getFormattedNumber(ethApyStake2, 0)
                }%`,
                total_value_locked: `$${
                  ethTvlTotalStake2 === 0
                    ? "..."
                    : getFormattedNumber(ethTvlTotalStake2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app.dyp.finance/constant-staking-2",
              },
            ],
          },
          {
            icon: "bsc-icon.svg",
            text: "BSC Stake",
            percentage: '25%',
            assetSubArray: [
              {
                icons: ["DYP.png"],
                percentage: `${bscApyStake3} %`,
                total_value_locked: `${
                  bscTvlTotalStake3 == 0
                    ? "..."
                    : getFormattedNumber(bscTvlTotalStake3, 0)
                }%`,
                lock_time: "90 days",
                link: "https://app-bsc.dyp.finance/constant-staking-3",
              },
              {
                icons: ["DYP.png"],
                percentage: `${
                  bscApyStake1 == 0
                    ? "..."
                    : getFormattedNumber(bscApyStake1, 0)
                }%`,
                total_value_locked: `$${
                  bscTvlTotalStake1 === 0
                    ? "..."
                    : getFormattedNumber(bscTvlTotalStake1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/constant-staking-1",
              },
              {
                icons: ["DYP.png"],
                percentage: `${
                  bscApyStake2 == 0
                    ? "..."
                    : getFormattedNumber(bscApyStake2, 0)
                }%`,
                total_value_locked: `$${
                  bscTvlTotalStake2 === 0
                    ? "..."
                    : getFormattedNumber(bscTvlTotalStake2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-bsc.dyp.finance/constant-staking-2",
              },
            ],
          },
          {
            icon: "avax-icon.svg",
            text: "Avax Stake",
            percentage: '25%',
            assetSubArray: [
              {
                icons: ["DYP.png"],
                percentage:`${avaxApyStake3} %`,
                total_value_locked: `${
                  avaxTvlTotalStake3 == 0
                    ? "..."
                    : getFormattedNumber(avaxTvlTotalStake3, 0)
                }%`,
                lock_time: "90 days",
                link: "https://app-avax.dyp.finance/constant-staking-3",
              },
              {
                icons: ["DYP.png"],
                percentage: `${
                  avaxApyStake1 == 0
                    ? "..."
                    : getFormattedNumber(avaxApyStake1, 0)
                }%`,
                total_value_locked: `$${
                  avaxTvlTotalStake1 === 0
                    ? "..."
                    : getFormattedNumber(avaxTvlTotalStake1, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/constant-staking-1",
              },

              {
                icons: ["DYP.png"],
                percentage: `${
                  avaxApyStake2 == 0
                    ? "..."
                    : getFormattedNumber(avaxApyStake2, 0)
                }%`,
                total_value_locked: `$${
                  avaxTvlTotalStake2 === 0
                    ? "..."
                    : getFormattedNumber(avaxTvlTotalStake2, 2)
                }`,
                lock_time: "No lock",
                link: "https://app-avax.dyp.finance/constant-staking-2",
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
            min_lock_time: "No Lock",
            percentage: "3% - 13%",
            link: "https://vault.dyp.finance/vault-weth",
          },
          {
            icon: "wbtc-icon.png",
            text: "WBTC",
            min_lock_time: "No Lock",
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
            min_lock_time: "No Lock",
            percentage: "9% - 23%",
            link: "https://vault.dyp.finance/vault-usdt",
          },
          {
            icon: "usdc-icon.png",
            text: "USDC",
            min_lock_time: "No Lock",
            percentage: "8% - 22%",
            link: "https://vault.dyp.finance/vault-usdc",
          },
          {
            icon: "dai-icon.png",
            text: "DAI",
            min_lock_time: "No Lock",
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
        <CalculateFarming high_apy={this.props.high_apy}/>
        <SupportedAssetsAndRates assets={assetsArray} />
        <Vaults vaults={vaultsArray} />
        <LearnMore />
        <OurPartners/>
        <LatestAnn />
        <Community />
      </div>
    );
  }
}
