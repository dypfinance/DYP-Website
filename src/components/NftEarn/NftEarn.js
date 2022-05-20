import EarnTypesList from "../../assets/General/NftEarn/EarnTypesList";
import NftEarnHero from "../../assets/General/NftEarn/NftEarnHero";
import SubAssets from "../../assets/General/NftEarn/SubAssets";
import TypeAssets from "../../assets/General/NftEarn/TypeAssets/TypeAssets";
import React, { useState, useEffect } from "react";
import getFormattedNumber from "../../functions/get-formatted-number";

export const handleHorizontalScroll = (scrollOffset, ref) => {
  ref.current.scrollLeft = scrollOffset;
};

const NftEarn = ({ tvl_all, json_totalPaid, high_apy }) => {
  const types = ["Stake", "Farming", "Vault", "Buyback"];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeTypeAsset, setActiveTypeAsset] = useState("ETH Stake");

  const [ethBuyBack, setEthBuyBack] = useState(0);
  const [bscBuyBack, setBscBuyBack] = useState(0);
  const [avaxBuyBack, setAvaxBuyBack] = useState(0);

  const [ethBuyBack1, setEthBuyBack1] = useState(0);
  const [ethBuyBack2, setEthBuyBack2] = useState(0);
  const [ethBuyBackApy1, setEthBuyBackApy1] = useState(0);
  const [ethBuyBackApy2, setEthBuyBackApy2] = useState(0);

  const [bscBuyBack1, setBscBuyBack1] = useState(0);
  const [bscBuyBack2, setBscBuyBack2] = useState(0);
  const [bscBuyBackApy1, setBscBuyBackApy1] = useState(0);
  const [bscBuyBackApy2, setBscBuyBackApy2] = useState(0);

  const [avaxBuyBack1, setAvaxBuyBack1] = useState(0);
  const [avaxBuyBack2, setAvaxBuyBack2] = useState(0);
  const [avaxBuyBackApy1, setAvaxBuyBackApy1] = useState(0);
  const [avaxBuyBackApy2, setAvaxBuyBackApy2] = useState(0);

  const [ethTotalBuyBack, setEthTotalBuyBack] = useState(0);
  const [bscTotalBuyBack, setBscTotalBuyBack] = useState(0);
  const [avaxTotalBuyBack, setAvaxTotalBuyBack] = useState(0);

  const [ethStake1, setEthStake1] = useState(0);
  const [ethStake2, setEthStake2] = useState(0);
  const [ethStake3, setEthStake3] = useState(0);

  const [bscStake1, setBscStake1] = useState(0);
  const [bscStake2, setBscStake2] = useState(0);
  const [bscStake3, setBscStake3] = useState(0);

  const [avaxStake1, setAvaxStake1] = useState(0);
  const [avaxStake2, setAvaxStake2] = useState(0);
  const [avaxStake3, setAvaxStake3] = useState(0);


  const [ethStakeApy1, setEthStakeApy1] = useState(0);
  const [ethStakeApy2, setEthStakeApy2] = useState(0);

  const [bscStakeApy1, setBscStakeApy1] = useState(0);
  const [bscStakeApy2, setBscStakeApy2] = useState(0);

  const [avaxStakeApy1, setAvaxStakeApy1] = useState(0);
  const [avaxStakeApy2, setAvaxStakeApy2] = useState(0);



  const [ethStakeiDyp1, setEthStakeiDyp1] = useState(0);
  const [ethStakeiDyp2, setEthStakeiDyp2] = useState(0);
  const [ethStakeiDyp3, setEthStakeiDyp3] = useState(0);

  const [bscStakeiDyp1, setBscStakeiDyp1] = useState(0);
  const [bscStakeiDyp2, setBscStakeiDyp2] = useState(0);
  const [bscStakeiDyp3, setBscStakeiDyp3] = useState(0);

  const [avaxStakeiDyp1, setAvaxStakeiDyp1] = useState(0);
  const [avaxStakeiDyp2, setAvaxStakeiDyp2] = useState(0);
  const [avaxStakeiDyp3, setAvaxStakeiDyp3] = useState(0);


  const [ethStakeApyiDyp1, setEthStakeApyiDyp1] = useState(0);
  const [ethStakeApyiDyp2, setEthStakeApyiDyp2] = useState(0);
  const [ethStakeApyiDyp3, setEthStakeApyiDyp3] = useState(0);


  const [bscStakeApyiDyp1, setBscStakeApyiDyp1] = useState(0);
  const [bscStakeApyiDyp2, setBscStakeApyiDyp2] = useState(0);
  const [bscStakeApyiDyp3, setBscStakeApyiDyp3] = useState(0);

  const [avaxStakeApyiDyp1, setAvaxStakeApyiDyp1] = useState(0);
  const [avaxStakeApyiDyp2, setAvaxStakeApyiDyp2] = useState(0);
  const [avaxStakeApyiDyp3, setAvaxStakeApyiDyp3] = useState(0);

  const [ethStakeTotal, setEthStakeTotal] = useState(0);
  const [bscStakeTotal, setStakeTotalBsc] = useState(0);
  const [avaxStakeTotal, setStakeTotalAvax] = useState(0);

  const [ethFarm1, setEthFarm1] = useState(0);
  const [ethFarm2, setEthFarm2] = useState(0);
  const [ethFarm3, setEthFarm3] = useState(0);
  const [ethFarm4, setEthFarm4] = useState(0);
  const [ethFarm5, setEthFarm5] = useState(0);

  const [bscFarm1, setBscFarm1] = useState(0);
  const [bscFarm2, setBscFarm2] = useState(0);
  const [bscFarm3, setBscFarm3] = useState(0);
  const [bscFarm4, setBscFarm4] = useState(0);
  const [bscFarm5, setBscFarm5] = useState(0);

  const [avaxFarm1, setAvaxFarm1] = useState(0);
  const [avaxFarm2, setAvaxFarm2] = useState(0);
  const [avaxFarm3, setAvaxFarm3] = useState(0);
  const [avaxFarm4, setAvaxFarm4] = useState(0);
  const [avaxFarm5, setAvaxFarm5] = useState(0);

  const [ethFarmApy1, setEthFarmApy1] = useState(0);
  const [ethFarmApy2, setEthFarmApy2] = useState(0);
  const [ethFarmApy3, setEthFarmApy3] = useState(0);
  const [ethFarmApy4, setEthFarmApy4] = useState(0);
  const [ethFarmApy5, setEthFarmApy5] = useState(0);

  const [bscFarmApy1, setBscFarmApy1] = useState(0);
  const [bscFarmApy2, setBscFarmApy2] = useState(0);
  const [bscFarmApy3, setBscFarmApy3] = useState(0);
  const [bscFarmApy4, setBscFarmApy4] = useState(0);
  const [bscFarmApy5, setBscFarmApy5] = useState(0);

  const [avaxFarmApy1, setAvaxFarmApy1] = useState(0);
  const [avaxFarmApy2, setAvaxFarmApy2] = useState(0);
  const [avaxFarmApy3, setAvaxFarmApy3] = useState(0);
  const [avaxFarmApy4, setAvaxFarmApy4] = useState(0);
  const [avaxFarmApy5, setAvaxFarmApy5] = useState(0);

  const [ethFarmTotal, setEthFarmTotal] = useState(0);
  const [bscFarmTotal, setBscFarmTotal] = useState(0);
  const [avaxFarmTotal, setAvaxFarmTotal] = useState(0);

  const [totalVault, setTotalVault] = useState(0);

  const getTotalTvlEthStake = async () => {
    const { BigNumber } = window;

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
    setEthStake1(ethTvlTotalStake1);

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
    setEthStake2(ethTvlTotalStake2);

    //TODO take the DYP from Staking DYP 3
    let tokensStakingDYP3 =
      (await window.getTokenHolderBalance(
        "0x44bed8ea3296bda44870d0da98575520de1735d4",
        1
      )) / 1e18;
    let tokensStakingDAI3 =
      (await window.getTokenHolderBalanceDai(
        "0x44bed8ea3296bda44870d0da98575520de1735d4",
        1
      )) / 1e18;

    //TODO Calulate $ Value
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken;
    let ethTvlTotalStake3 = tvlDYP3 + tokensStakingDAI3;
    setEthStake3(ethTvlTotalStake3);

    let ethTvlTotalStake =
      ethTvlTotalStake1 + ethTvlTotalStake2 + ethTvlTotalStake3;
    setEthStakeTotal(ethTvlTotalStake);
    let apr1 = 25;
    let apr2 = 50;
    let ethApyStake1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    setEthStakeApy1(ethApyStake1);

    let ethApyStake2 = new BigNumber(apr2)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);

    setEthStakeApy2(ethApyStake2);
  };

  const getTotalTvlEthStakeiDyp = async () => {

    const { BigNumber } = window

    // let [usdPerTokeniDYP] = await Promise.all([window.getPriceiDYPEth()])
    let [usdPerTokeniDYP, usdPerTokenDYPS] =
        await Promise.all([
            window.getPriceiDYPEth(),
            window.getPriceDYPSBsc()
        ])

    /* Calculate with DYPS */
    let tokensStakingDYPS = await window.getTokenHolderBalanceDYPS('0x9ea966b4023049bff858bb5e698ecff24ea54c4a',1) / 1e18
    let tokensStakingDYPS2 = await window.getTokenHolderBalanceDYPS('0x3fab09acaeddaf579d7a72c24ef3e9eb1d2975c4',1) / 1e18

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x9ea966b4023049bff858bb5e698ecff24ea54c4a',1) / 1e18

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP
    let tvl30 = tvliDYP + tokensStakingDYPS

    setEthStakeiDyp1(tvl30)

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x3fab09acaeddaf579d7a72c24ef3e9eb1d2975c4',1) / 1e18

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP
    let tvl60 = tvliDYP2 + tokensStakingDYPS2
    setEthStakeiDyp2(tvl60)


    let tvlTotal = tvl30 + tvl60

    
    setEthStakeiDyp3(tvlTotal)
    // this.setState({tvlTotal})

    let apy1 = 20

    let apy2 = 45
setEthStakeApyiDyp1(apy1)
setEthStakeApyiDyp2(apy2)

}

  const getTotalTvlAvaxStake = async () => {
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
    setAvaxStake1(avaxTvlTotalStake1);

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

    setAvaxStake2(avaxTvlTotalStake2);

    let tokensStakingDYP3 =
      (await window.getTokenHolderBalance(
        "0x16429e51A64B7f88D4C018fbf66266A693df64b3",
        3
      )) / 1e18;
    let tokensStakingDAI3 =
      (await window.getTokenHolderBalanceDai(
        "0x16429e51A64B7f88D4C018fbf66266A693df64b3",
        3
      )) / 1e18;

    //TODO Calulate $ Value
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken;
    let avaxTvlTotalStake3 = tvlDYP3 + tokensStakingDAI3;

    setAvaxStake3(avaxTvlTotalStake3);

    let avaxTvlTotalStake =
      avaxTvlTotalStake1 + avaxTvlTotalStake2 + avaxTvlTotalStake3;
    setStakeTotalAvax(avaxTvlTotalStake);

    let apr1 = 25;
    let apr2 = 50;
    let avaxApyStake1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    setAvaxStakeApy1(avaxApyStake1);
    let avaxApyStake2 = new BigNumber(apr2)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    setAvaxStakeApy2(avaxApyStake2);
  };


  const getTotalTvlAvaxStakeiDyp = async () => {

    const { BigNumber } = window

    // let [usdPerTokeniDYP] = await Promise.all([window.getPriceiDYPAvax()])
    let [usdPerTokeniDYP, usdPerTokenDYPS] =
        await Promise.all([
            window.getPriceiDYPAvax(),
            window.getPriceDYPSBsc()
        ])

    /* Calculate with DYPS */
    let tokensStakingDYPS = await window.getTokenHolderBalanceDYPS('0x8f28110325a727f70b64bffebf2b9dc94b932452',3) / 1e18
    let tokensStakingDYPS2 = await window.getTokenHolderBalanceDYPS('0x5536e02336771cfa0317d4b6a042f3c38749535e',3) / 1e18

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x8f28110325a727f70b64bffebf2b9dc94b932452',3) / 1e18

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP
    let tvl30 = tvliDYP + tokensStakingDYPS
    setAvaxStakeiDyp1(tvl30)

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x5536e02336771cfa0317d4b6a042f3c38749535e',3) / 1e18

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP
    let tvl60 = tvliDYP2 + tokensStakingDYPS2
    setAvaxStakeiDyp2(tvl60)


    let tvlTotal = tvl30 + tvl60
    setAvaxStakeiDyp3(tvlTotal)

    let apr1 = 25
    let apr2 = 50
    let apy1 = 20

    let apy2 = 45

    setAvaxStakeApyiDyp1(apy1)
    setAvaxStakeApyiDyp2(apy2)

}

  const getTotalTvlBscStake = async () => {
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
    setBscStake1(bscTvlTotalStake1);

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
    setBscStake2(bscTvlTotalStake2);

    let tokensStakingDYP3 =
      (await window.getTokenHolderBalance(
        "0xa9efab22ccbfeabb6dc4583d81421e76342faf8b",
        2
      )) / 1e18;
    let tokensStakingDAI3 =
      (await window.getTokenHolderBalanceDai(
        "0xa9efab22ccbfeabb6dc4583d81421e76342faf8b",
        2
      )) / 1e18;

    //TODO Calulate $ Value
    let tvlDYP3 = tokensStakingDYP3 * usdPerToken;
    let bscTvlTotalStake3 = tvlDYP3 + tokensStakingDAI3;
    setBscStake3(bscTvlTotalStake3);

    let bscTvlTotalStake =
      bscTvlTotalStake1 + bscTvlTotalStake2 + bscTvlTotalStake3;
    setStakeTotalBsc(bscTvlTotalStake);

    let apr1 = 25;
    let apr2 = 50;
    let bscApyStake1 = new BigNumber(apr1)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    setBscStakeApy1(bscApyStake1);
    let bscApyStake2 = new BigNumber(apr2)
      .div(1e2)
      .times(usdPerTokeniDYP)
      .div(usdPerToken)
      .times(1e2)
      .toFixed(2);
    setBscStakeApy2(bscApyStake2);
  };

  const getTotalTvlBscStakeiDyp = async () => {

    const { BigNumber } = window

    // let [usdPerTokeniDYP] = await Promise.all([window.getPriceiDYP()])
    let [usdPerTokeniDYP, usdPerTokenDYPS] =
        await Promise.all([
            window.getPriceiDYP(),
            window.getPriceDYPSBsc()
        ])

    /* Calculate with DYPS */
    let tokensStakingDYPS = await window.getTokenHolderBalanceDYPS('0x58366902082b90fca01be07d929478bd48acfb19',2) / 1e18
    let tokensStakingDYPS2 = await window.getTokenHolderBalanceDYPS('0x160ff3c4a6e9aa8e4271aa71226cc811bfef7ed9',2) / 1e18

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS
    /* End DYPS */

    usdPerTokeniDYP = parseFloat(usdPerTokeniDYP)

    //TODO take the iDYP & DYP from staking
    let tokensStakingiDYP = await window.getTokenHolderBalanceiDYP('0x58366902082b90fca01be07d929478bd48acfb19',2) / 1e18

    //TODO Calulate $ Value
    let tvliDYP = tokensStakingiDYP * usdPerTokeniDYP
    let tvl30 = tvliDYP + tokensStakingDYPS
    setBscStakeiDyp1(tvl30)

    //TODO take the iDYP from Buyback & DYP + iDYP from Staking
    let tokensStakingiDYP2 = await window.getTokenHolderBalanceiDYP('0x160ff3c4a6e9aa8e4271aa71226cc811bfef7ed9',2) / 1e18

    //TODO Calulate $ Value
    let tvliDYP2 = tokensStakingiDYP2 * usdPerTokeniDYP
    let tvl60 = tvliDYP2 + tokensStakingDYPS2
    setBscStakeiDyp2(tvl60)

    let tvlTotal = tvl30 + tvl60
    setBscStakeiDyp3(tvlTotal)

    let apr1 = 25
    let apr2 = 50
    let apy1 = 20

    let apy2 = 45
setBscStakeApyiDyp1(apy1)
setBscStakeApyiDyp2(apy2)

}

  const getTotalTvlBuyBack = async () => {
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
    setBscBuyBack(apyBuyback2);
    //Apy Avax V2 APR is 100%
    apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPAvax);

    let apyBuybackAvax = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    setAvaxBuyBack(apyBuybackAvax);

    //Apy ETH V2 APR is 100%
    apy2_buyback2 = new BigNumber(0.25).div(usdPerToken).times(usdiDYPEth);

    let apyBuybackEth = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    setEthBuyBack(apyBuybackEth);
  };

  const getTotalEthTvlYield = async () => {
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

    if (window.the_graph_result_eth_v2?.lp_data) {
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

    setEthFarmApy1(ethTotalApyYield1);
    setEthFarmApy2(ethTotalApyYield2);
    setEthFarmApy3(ethTotalApyYield3);
    setEthFarmApy4(ethTotalApyYield4);
    setEthFarmApy5(ethTotalApyYield5);

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
    const ethTotalYield =
      ethTotalTvlYield1 +
      ethTotalTvlYield2 +
      ethTotalTvlYield3 +
      ethTotalTvlYield4 +
      ethTotalTvlYield5;
    setEthFarmTotal(ethTotalYield);
    setEthFarm1(ethTotalTvlYield1);
    setEthFarm2(ethTotalTvlYield2);
    setEthFarm3(ethTotalTvlYield3);
    setEthFarm4(ethTotalTvlYield4);
    setEthFarm5(ethTotalTvlYield5);
  };

  const getTotalBscTvlYield = async () => {
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
    if (window.the_graph_result_bsc_v2?.lp_data) {
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
    setBscFarmApy1(bscTotalApyYield1);
    setBscFarmApy2(bscTotalApyYield2);
    setBscFarmApy3(bscTotalApyYield3);
    setBscFarmApy4(bscTotalApyYield4);
    setBscFarmApy5(bscTotalApyYield5);

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

    setBscFarm1(bscTotalTvlYield1);
    setBscFarm2(bscTotalTvlYield2);
    setBscFarm3(bscTotalTvlYield3);
    setBscFarm4(bscTotalTvlYield4);
    setBscFarm5(bscTotalTvlYield5);

    const total =
      bscTotalTvlYield1 +
      bscTotalTvlYield2 +
      bscTotalTvlYield3 +
      bscTotalTvlYield4 +
      bscTotalTvlYield5;
    setBscFarmTotal(total);
  };

  const getTotalAvaxTvlYield = async () => {
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

    if (window.the_graph_result_avax_v2?.lp_data) {
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

    setAvaxFarmApy1(avaxTotalApyYield1);
    setAvaxFarmApy2(avaxTotalApyYield2);
    setAvaxFarmApy3(avaxTotalApyYield3);
    setAvaxFarmApy4(avaxTotalApyYield4);
    setAvaxFarmApy5(avaxTotalApyYield5);

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
    setAvaxFarm1(avaxTotalTvlYield1);
    setAvaxFarm2(avaxTotalTvlYield2);
    setAvaxFarm3(avaxTotalTvlYield3);
    setAvaxFarm4(avaxTotalTvlYield4);
    setAvaxFarm5(avaxTotalTvlYield5);

    const total =
      avaxTotalTvlYield1 +
      avaxTotalTvlYield2 +
      avaxTotalTvlYield3 +
      avaxTotalTvlYield4 +
      avaxTotalTvlYield5;
    setAvaxFarmTotal(total);
  };

  const getTotalTvlBuyBackAvax = async () => {
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
    setAvaxBuyBack1(avaxTvlTotalBuyback1);

    let avaxTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2;
    setAvaxBuyBack2(avaxTvlTotalBuyback2);

    let avaxTvlTotal = avaxTvlTotalBuyback1 + avaxTvlTotalBuyback2;
    // this.setState({ avaxTvlTotal });
    setAvaxTotalBuyBack(avaxTvlTotal);
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
    setAvaxBuyBackApy1(avaxApyBuyback1);
    setAvaxBuyBackApy2(avaxApyBuyback2);
  };

  const getTotalTvlBscBuyback = async () => {
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
    setBscBuyBack1(bscTvlTotalBuyback1);

    let bscTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2;
    setBscBuyBack2(bscTvlTotalBuyback2);

    let bscTvlTotal = bscTvlTotalBuyback1 + bscTvlTotalBuyback2;
    setBscTotalBuyBack(bscTvlTotal);

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
    setBscBuyBackApy1(bscApyBuyback1);
    let bscApyBuyback2 = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    setBscBuyBackApy2(bscApyBuyback2);
  };

  const getTotalTvlBuyBackEth = async () => {
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
    setEthBuyBack1(ethTvlTotalBuyback1);

    let ethTvlTotalBuyback2 = tvlDYP2 + tvliDYP2 + tokensBuybackDYPS2;
    setEthBuyBack2(ethTvlTotalBuyback2);

    let ethTvlTotal = ethTvlTotalBuyback1 + ethTvlTotalBuyback2;
    setEthTotalBuyBack(ethTvlTotal);

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
    setEthBuyBackApy1(ethApyBuyback1);
    let ethApyBuyback2 = new BigNumber(apy1_buyback2)
      .plus(apy2_buyback2)
      .times(1e2)
      .toFixed(0);
    setEthBuyBackApy2(ethApyBuyback2);
  };

  const getTotalTvlVault = async () => {
    let tvlTotal = await window.getTotalTvlVaults();

    let [usdPerTokenDYPS] = await Promise.all([window.getPriceDYPSBsc()]);

    /* Calculate with DYPS */
    let tokensStakingDYPS =
      (await window.getTokenHolderBalanceDYPS(
        "0x28eabA060E5EF0d41eeB20d41aafaE8f685739d9",
        1
      )) / 1e18;
    let tokensStakingDYPS1 =
      (await window.getTokenHolderBalanceDYPS(
        "0x2F2cff66fEB7320FC9Adf91b7B74bFb5a80C7C35",
        1
      )) / 1e18;
    let tokensStakingDYPS2 =
      (await window.getTokenHolderBalanceDYPS(
        "0xA987aEE0189Af45d5FA95a9FBBCB4374228f375E",
        1
      )) / 1e18;
    let tokensStakingDYPS3 =
      (await window.getTokenHolderBalanceDYPS(
        "0x251B9ee6cEd97565A821C5608014a107ddc9C98F",
        1
      )) / 1e18;
    let tokensStakingDYPS4 =
      (await window.getTokenHolderBalanceDYPS(
        "0x54F30bFfeb925F47225e148f0bAe17a452d6b8c0",
        1
      )) / 1e18;

    tokensStakingDYPS = tokensStakingDYPS * usdPerTokenDYPS;
    tokensStakingDYPS1 = tokensStakingDYPS1 * usdPerTokenDYPS;
    tokensStakingDYPS2 = tokensStakingDYPS2 * usdPerTokenDYPS;
    tokensStakingDYPS3 = tokensStakingDYPS3 * usdPerTokenDYPS;
    tokensStakingDYPS4 = tokensStakingDYPS4 * usdPerTokenDYPS;
    /* End DYPS */

    tvlTotal =
      tvlTotal +
      tokensStakingDYPS +
      tokensStakingDYPS1 +
      tokensStakingDYPS2 +
      tokensStakingDYPS3 +
      tokensStakingDYPS4;

    setTotalVault(tvlTotal);
  };

  const nftEarnData = [
    {
      type: "Farming",
      totalValue: `$ ${getFormattedNumber(
        activeTypeAsset === "ETH Yield"
          ? ethFarmTotal
          : activeTypeAsset === "BSC Yield"
          ? bscFarmTotal
          : avaxFarmTotal,
        2
      )}`,
      totalValueText: "Pools",
      assets: [
        {
          text: "ETH Yield",
          percentage: `${
            high_apy.highestAPY.highestAPY_ETH_V2 === undefined
              ? "..."
              : high_apy.highestAPY.highestAPY_ETH_V2
          } %`,
        },
        {
          text: "BSC Yield",
          percentage: `${
            high_apy.highestAPY.highestAPY_BSC_V2 === undefined
              ? "..."
              : high_apy.highestAPY.highestAPY_BSC_V2
          } %`,
        },
        {
          text: "AVAX Yield",
          percentage: `${
            high_apy.highestAPY.highestAPY_AVAX_V2 === undefined
              ? "..."
              : high_apy.highestAPY.highestAPY_AVAX_V2
          } %`,
        },
      ],
      subAssets: [
        {
          icons: [
            "eth-icon2.png",
            "wbtc-icon.png",
            "usdc-icon.png",
            "usdt-icon.png",
            "dai-icon.png",
          ],
          title: "",
          percentage: `${ethFarmApy1 === 0 ? "..." : ethFarmApy1} %`,
          total_value_locked: `$ ${
            ethFarm1 === 0 ? "..." : getFormattedNumber(ethFarm1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
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
          title: "",
          percentage: `${ethFarmApy2 === 0 ? "..." : ethFarmApy2} %`,
          total_value_locked: `$ ${
            ethFarm2 === 0 ? "..." : getFormattedNumber(ethFarm2, 2)
          }`,
          lock_time: "3 Days",
          top_tick: false,
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
          title: "",
          percentage: `${ethFarmApy3 === 0 ? "..." : ethFarmApy3} %`,
          total_value_locked: `$ ${
            ethFarm3 === 0 ? "..." : getFormattedNumber(ethFarm3, 2)
          }`,
          lock_time: "30 Days",
          top_tick: false,
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
          title: "",
          percentage: `${ethFarmApy4 === 0 ? "..." : ethFarmApy4} %`,
          total_value_locked: `$ ${
            ethFarm4 === 0 ? "..." : getFormattedNumber(ethFarm4, 2)
          }`,
          lock_time: "60 Days",
          top_tick: false,
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
          title: "",
          percentage: `${ethFarmApy5 === 0 ? "..." : ethFarmApy5} %`,
          total_value_locked: `$ ${
            ethFarm5 === 0 ? "..." : getFormattedNumber(ethFarm5, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app.dyp.finance/farming-new-4",
        },
      ],

      subAssetsBSC: [
        {
          icons: [
            "bnb_colour.svg",
            "wbtc-icon.png",
            "eth-icon2.png",
            "dai-icon.png",
            "cake-icon.png",
          ],
          title: "",
          percentage: `${bscFarmApy1 === 0 ? "..." : bscFarmApy1} %`,
          total_value_locked: `$ ${
            bscFarm1 === 0 ? "..." : getFormattedNumber(bscFarm1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
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
          title: "",
          percentage: `${bscFarmApy2 === 0 ? "..." : bscFarmApy2} %`,
          total_value_locked: `$ ${
            bscFarm2 === 0 ? "..." : getFormattedNumber(bscFarm2, 2)
          }`,
          lock_time: "3 Days",
          top_tick: false,
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
          title: "",
          percentage: `${bscFarmApy3 === 0 ? "..." : bscFarmApy3} %`,
          total_value_locked: `$ ${
            bscFarm3 === 0 ? "..." : getFormattedNumber(bscFarm3, 2)
          }`,
          lock_time: "30 Days",
          top_tick: false,
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
          title: "",
          percentage: `${bscFarmApy4 === 0 ? "..." : bscFarmApy4} %`,
          total_value_locked: `$ ${
            bscFarm4 === 0 ? "..." : getFormattedNumber(bscFarm4, 2)
          }`,
          lock_time: "60 Days",
          top_tick: false,
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
          title: "",
          percentage: `${bscFarmApy5 === 0 ? "..." : bscFarmApy5} %`,
          total_value_locked: `$ ${
            bscFarm5 === 0 ? "..." : getFormattedNumber(bscFarm5, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app-bsc.dyp.finance/farming-new-5",
        },
      ],

      subAssetsAVAX: [
        {
          icons: [
            "avax-icon.png",
            "eth-icon2.png",
            "wbtc-icon.png",
            "usdt-icon.png",
            "pang-icon.png",
          ],
          title: "",
          percentage: `${avaxFarmApy1 === 0 ? "..." : avaxFarmApy1} %`,
          total_value_locked: `$ ${
            avaxFarm1 === 0 ? "..." : getFormattedNumber(avaxFarm1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
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
          title: "",
          percentage: `${avaxFarmApy2 === 0 ? "..." : avaxFarmApy2} %`,
          total_value_locked: `$ ${
            avaxFarm2 === 0 ? "..." : getFormattedNumber(avaxFarm2, 2)
          }`,
          lock_time: "3 Days",
          top_tick: false,
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
          title: "",
          percentage: `${avaxFarmApy3 === 0 ? "..." : avaxFarmApy3} %`,
          total_value_locked: `$ ${
            avaxFarm3 === 0 ? "..." : getFormattedNumber(avaxFarm3, 2)
          }`,
          lock_time: "30 Days",
          top_tick: false,
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
          title: "",
          percentage: `${avaxFarmApy4 === 0 ? "..." : avaxFarmApy4} %`,
          total_value_locked: `$ ${
            avaxFarm4 === 0 ? "..." : getFormattedNumber(avaxFarm4, 2)
          }`,
          lock_time: "60 Days",
          top_tick: false,
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
          title: "",
          percentage: `${avaxFarmApy5 === 0 ? "..." : avaxFarmApy5} %`,
          total_value_locked: `$ ${
            avaxFarm5 === 0 ? "..." : getFormattedNumber(avaxFarm5, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app-avax.dyp.finance/farming-new-5",
        },
      ],
    },
    {
      type: "Stake",
      totalValue: `$ ${getFormattedNumber(
        activeTypeAsset === "ETH Stake"
          ? (ethStakeTotal + ethStakeiDyp3)
          : activeTypeAsset === "BSC Stake"
          ? (bscStakeTotal + bscStakeiDyp3)
          : (avaxStakeTotal + avaxStakeiDyp3),
        2
      )}`,
      totalValueText: "Pools",
      assets: [
        {
          text: "ETH Stake",
          percentage: "25%",
        },
        {
          text: "BSC Stake",
          percentage: "25%",
        },
        {
          text: "AVAX Stake",
          percentage: "25%",
        },
      ],
      subAssets: [
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: "25 %",
          total_value_locked: `$ ${
            ethStake3 === 0 ? "..." : getFormattedNumber(ethStake3, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app.dyp.finance/constant-staking-3",
        },
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `${ethStakeApy1 === 0 ? "..." : ethStakeApy1} %`,
          total_value_locked: `$ ${
            ethStake1 === 0 ? "..." : getFormattedNumber(ethStake1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
          link: "https://app.dyp.finance/constant-staking-1",
        },
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `${ethStakeApy2 === 0 ? "..." : ethStakeApy2} %`,
          total_value_locked: `$ ${
            ethStake2 === 0 ? "..." : getFormattedNumber(ethStake2, 2)
          }`,
          lock_time: "90 Days",
          link: "https://app.dyp.finance/constant-staking-2",
        },
        {
          icons: ["iDyp-logo.png"],
          title: "iDYP",
          percentage: `${ethStakeApyiDyp1 === 0 ? "..." : ethStakeApyiDyp1} %`,
          total_value_locked: `$ ${
            ethStakeiDyp1 === 0 ? "..." : getFormattedNumber(ethStakeiDyp1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
          link: "https://app.dyp.finance/staking-idyp-1",
        },
        {
          icons: ["iDyp-logo.png"],
          title: "iDYP",
          percentage: `${ethStakeApyiDyp2 === 0 ? "..." : ethStakeApyiDyp2} %`,
          total_value_locked: `$ ${
            ethStakeiDyp2 === 0 ? "..." : getFormattedNumber(ethStakeiDyp2, 2)
          }`,
          lock_time: "90 Days",
          link: "https://app.dyp.finance/staking-idyp-2",
        },
        
      ],
      subAssetsBSC: [
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: "25 %",
          total_value_locked: `$ ${
            bscStake3 === 0 ? "..." : getFormattedNumber(bscStake3, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app-bsc.dyp.finance/constant-staking-3",
        },
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `${bscStakeApy1 === 0 ? "..." : bscStakeApy1} %`,
          total_value_locked: `$ ${
            bscStake1 === 0 ? "..." : getFormattedNumber(bscStake1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
          link: "https://app-bsc.dyp.finance/constant-staking-1",
        },
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `${bscStakeApy2 === 0 ? "..." : bscStakeApy2} %`,
          total_value_locked: `$ ${
            bscStake2 === 0 ? "..." : getFormattedNumber(bscStake2, 2)
          }`,
          lock_time: "90 Days",
          link: "https://app-bsc.dyp.finance/constant-staking-2",
        },
        {
          icons: ["iDyp-logo.png"],
          title: "iDYP",
          percentage: `${bscStakeApyiDyp1 === 0 ? "..." : bscStakeApyiDyp1} %`,
          total_value_locked: `$ ${
            bscStakeiDyp1 === 0 ? "..." : getFormattedNumber(bscStakeiDyp1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
          link: "https://app-bsc.dyp.finance/staking-idyp-1",
        },
        {
          icons: ["iDyp-logo.png"],
          title: "iDYP",
          percentage: `${bscStakeApyiDyp2 === 0 ? "..." : bscStakeApyiDyp2} %`,
          total_value_locked: `$ ${
            bscStakeiDyp2 === 0 ? "..." : getFormattedNumber(bscStakeiDyp2, 2)
          }`,
          lock_time: "90 Days",
          link: "https://app-bsc.dyp.finance/staking-idyp-2",
        },
        
      ],
      subAssetsAVAX: [
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `25 %`,
          total_value_locked: `$ ${
            avaxStake3 === 0 ? "..." : getFormattedNumber(avaxStake3, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app-avax.dyp.finance/constant-staking-3",
        },

        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `${avaxStakeApy1 === 0 ? "..." : avaxStakeApy1} %`,
          total_value_locked: `$ ${
            avaxStake1 === 0 ? "..." : getFormattedNumber(avaxStake1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
          link: "https://app-avax.dyp.finance/constant-staking-1",
        },
        {
          icons: ["DYP.png"],
          title: "DYP",
          percentage: `${avaxStakeApy2 === 0 ? "..." : avaxStakeApy2} %`,
          total_value_locked: `$ ${
            avaxStake2 === 0 ? "..." : getFormattedNumber(avaxStake2, 2)
          }`,
          lock_time: "90 Days",
          link: "https://app-avax.dyp.finance/constant-staking-2",
        },
        {
          icons: ["iDyp-logo.png"],
          title: "iDYP",
          percentage: `${avaxStakeApyiDyp1 === 0 ? "..." : avaxStakeApyiDyp1} %`,
          total_value_locked: `$ ${
            avaxStakeiDyp1 === 0 ? "..." : getFormattedNumber(avaxStakeiDyp1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
          link: "https://app-avax.dyp.finance/staking-idyp-1",
        },
        {
          icons: ["iDyp-logo.png"],
          title: "iDYP",
          percentage: `${avaxStakeApyiDyp2 === 0 ? "..." : avaxStakeApyiDyp2} %`,
          total_value_locked: `$ ${
            avaxStakeiDyp2 === 0 ? "..." : getFormattedNumber(avaxStakeiDyp2, 2)
          }`,
          lock_time: "90 Days",
          link: "https://app-avax.dyp.finance/staking-idyp-2",
        },
        
      ],
    },
    {
      type: "Vault",
      totalValue: `$ ${
        totalVault === 0 ? "..." : getFormattedNumber(totalVault, 2)
      }`,
      totalValueText: "Vaults",
      assets: [],
      subAssets: [
        {
          icons: ["eth-icon2.png"],
          title: "ETH",
          percentage: "3% - 13%",
          total_value_locked: "",
          lock_time: "No lock",
          top_tick: true,
          link: "https://vault.dyp.finance/vault-weth",
        },
        {
          icons: ["wbtc-icon.png"],
          title: "WBTC",
          percentage: "3% - 13%",
          total_value_locked: "",
          lock_time: "No lock",
          link: "https://vault.dyp.finance/vault-wbtc",
        },
        {
          icons: ["usdc-icon.png"],
          title: "USDC",
          percentage: "8% - 22%",
          total_value_locked: "",
          lock_time: "No lock",
          top_tick: false,
          link: "https://vault.dyp.finance/vault-usdc",
        },
        {
          icons: ["usdt-icon.png"],
          title: "USDT",
          percentage: "9% - 23%",
          total_value_locked: "",
          lock_time: "No lock",
          top_tick: false,
          link: "https://vault.dyp.finance/vault-usdt",
        },
        {
          icons: ["dai-icon.png"],
          title: "DAI",
          percentage: "8% - 21%",
          total_value_locked: "",
          lock_time: "No lock",
          top_tick: false,
          link: "https://vault.dyp.finance/vault-dai",
        },
      ],
    },
    {
      type: "Buyback",
      totalValue: `$ ${getFormattedNumber(
        activeTypeAsset === "ETH Buyback"
          ? ethTotalBuyBack
          : activeTypeAsset === "BSC Buyback"
          ? bscTotalBuyBack
          : avaxTotalBuyBack,
        2
      )}`,
      totalValueText: "Pools",
      assets: [
        {
          text: "ETH Buyback",
          percentage: `${ethBuyBack} %`,
        },
        {
          text: "BSC Buyback",
          percentage: `${bscBuyBack} %`,
        },
        {
          text: "AVAX Buyback",
          percentage: `${avaxBuyBack} %`,
        },
      ],
      subAssets: [
        {
          icons: [
            "eth-icon2.png",
            "wbtc-icon.png",
            "usdc-icon.png",
            "usdt-icon.png",
            "dai-icon.png",
          ],
          title: "",
          percentage: `${ethBuyBackApy1 === 0 ? "..." : ethBuyBackApy1} %`,
          total_value_locked: `$ ${
            ethBuyBack1 === 0 ? "..." : getFormattedNumber(ethBuyBack1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
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
          title: "",
          percentage: `${ethBuyBackApy2 === 0 ? "..." : ethBuyBackApy2}  %`,
          total_value_locked: `$ ${
            ethBuyBack2 === 0 ? "..." : getFormattedNumber(ethBuyBack2, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app.dyp.finance/staking-buyback-2",
        },
      ],
      subAssetsBSC: [
        {
          icons: [
            "bnb_colour.svg",
            "wbtc-icon.png",
            "eth-icon2.png",
            "dai-icon.png",
            "cake-icon.png",
          ],
          title: "",
          percentage: `$ ${bscBuyBackApy1 === 0 ? "..." : bscBuyBackApy1} %`,
          total_value_locked: `$ ${
            bscBuyBack1 === 0 ? "..." : getFormattedNumber(bscBuyBack1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
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
          title: "",
          percentage: `${bscBuyBackApy2 === 0 ? "..." : bscBuyBackApy2} %`,
          total_value_locked: `$ ${
            bscBuyBack2 === 0 ? "..." : getFormattedNumber(bscBuyBack2, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app-bsc.dyp.finance/staking-buyback-1",
        },
      ],
      subAssetsAVAX: [
        {
          icons: [
            "avax-icon.png",
            "eth-icon2.png",
            "wbtc-icon.png",
            "usdt-icon.png",
            "pang-icon.png",
          ],
          title: "",
          percentage: `${avaxBuyBackApy1 === 0 ? "..." : avaxBuyBackApy1} %`,
          total_value_locked: `$ ${
            avaxBuyBack1 === 0 ? "..." : getFormattedNumber(avaxBuyBack1, 2)
          }`,
          lock_time: "No lock",
          top_tick: false,
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
          title: "",
          percentage: `${avaxBuyBackApy2 === 0 ? "..." : avaxBuyBackApy2} %`,
          total_value_locked: `$ ${
            avaxBuyBack2 === 0 ? "..." : getFormattedNumber(avaxBuyBack2, 2)
          }`,
          lock_time: "90 Days",
          top_tick: false,
          link: "https://app-avax.dyp.finance/staking-buyback-2",
        },
      ],
    },
  ];

  const [typesDataArray, settypesDataArray] = useState(nftEarnData[1]);
  const [subData, setSubData] = useState(typesDataArray.subAssets);
  const [title, setTitle] = useState("DYP Staking");
  const [subTitle, setSubTitle] = useState("");

  const handleTypeClick = (item) => {
    getTotalTvlBuyBack().then();
    getTotalTvlEthStake().then();
    getTotalEthTvlYield().then();

    setActiveType(item);
    const temp = nftEarnData.filter((type) => type.type === item);
    settypesDataArray(temp[0]);
  };

  const buybackSubtitles = {
    avax: `Deposit WETH, WBTC, USDC, USDT, DAI, or LINK.e, and earn ${avaxBuyBack  === 0 ? '...' : avaxBuyBack}% APR in DYP. To start earning, all you need is to deposit one of the supported assets into the Buyback contract. Then, all assets will automatically be converted into DYP + iDYP and deposited into a staking contract. You can choose from two different options, with rewards starting from 23% APR up to ${avaxBuyBack === 0 ? '...' : avaxBuyBack}% APR, depending on the lock time from a minimum of zero-days up to a maximum of 90 days. The rewards are distributed automatically and can be claimed every day. When you unstake you will receive all the deposited amounts in DYP.` ,
    bsc: `Deposit WBNB, BTCB, ETH, BUSD, or CAKE, and earn ${bscBuyBack  === 0 ? '...' : bscBuyBack}% APR in DYP. To start earning, all you need is to deposit one of the supported assets into the Buyback contract. Then, all assets will automatically be converted into DYP + iDYP and deposited into a staking contract. You can choose from two different options, with rewards starting from 23% APR up to ${bscBuyBack === 0 ? '...' : bscBuyBack}% APR, depending on the lock time from a minimum of zero-days up to a maximum of 90 days. The rewards are distributed automatically and can be claimed every day. When you unstake you will receive all the deposited amounts in DYP.`,
    eth: `Deposit WAVAX, USDC.e, USDT.e, WETH.e, PNG, QI, DAI.e, XAVA, WBTC.e, or LINK.e, and earn ${ethBuyBack  === 0 ? '...' : ethBuyBack}% APR in DYP. To start earning, all you need is to deposit one of the supported assets into the Buyback contract. Then, all assets will automatically be converted into DYP + iDYP and deposited into a staking contract. You can choose from two different options, with rewards starting from 23% APR up to ${ethBuyBack === 0 ? '...' : ethBuyBack}% APR, depending on the lock time from a minimum of zero-days up to a maximum of 90 days. The rewards are distributed automatically and can be claimed every day. When you unstake you will receive all the deposited amounts in DYP.`
    
  };

  const handleChangeSubtitle = () => {
    if (activeType === "Stake") {
      if (activeTypeAsset === "BSC Stake") {
        setSubTitle(
          "Stake your DYP tokens and earn 25% APR in BNB. No Impermanent Loss. To start earning, all you need is to deposit DYP tokens into the Staking contract and earn BNB as rewards. The staking pools have the REINVEST function integrated, meaning that you can automatically add your daily rewards to the staking pool. Moreover, the DYP Referral is available. If you refer DYP to your friends, 5% of your friends’ rewards will automatically be sent to you whenever your friends stake DYP. You do not need to stake, it will’ be automatically sent to you, free of gas fee."
        );
      } else if (activeTypeAsset === "AVAX Stake") {
        setSubTitle(
          "Stake your DYP tokens and earn 25% APR in AVAX. No Impermanent Loss. To start earning, all you need is to deposit DYP tokens into the Staking contract and earn AVAX as rewards. The staking pools have the REINVEST function integrated, meaning that you can automatically add your daily rewards to the staking pool. Moreover, the DYP Referral is available. If you refer DYP to your friends, 5% of your friends’ rewards will automatically be sent to you whenever your friends stake DYP. You do not need to stake, it will’ be automatically sent to you, free of gas fee."
        );
      }
    } else if (activeType === "Farming") {
      if (activeTypeAsset === "ETH Yield") {
        setSubTitle(
          "Automatically adds liquidity to UNISWAP V2 & DEPOSIT TO STAKING contract using one asset. To start earning, all you need is to deposit one of the supported assets (WETH, WBTC, USDC, or USDT) and earn WETH/USDT/DYP AS REWARDS. All pool rewards are automatically converted from iDYP to WETH by the smart contract, decreasing the risk of iDYP price volatility."
        );
      } else if (activeTypeAsset === "BSC Yield") {
        setSubTitle(
          "Automatically adds liquidity to PANCAKESWAP V2 & DEPOSIT TO STAKING contract using one asset. To start earning, all you need is to deposit one of the supported assets (WBNB, BTCB, ETH, BUSD, CAKE, or iDYP) and earn WBNB/ETH/DYP AS REWARDS.All pool rewards are automatically converted from iDYP to WBNB by the smart contract, decreasing the risk of iDYP price volatility."
        );
      } else if (activeTypeAsset === "AVAX Yield") {
        setSubTitle(
          "Automatically adds liquidity to PANGOLIN & DEPOSIT TO STAKING contract using one asset. To start earning, all you need is to deposit one of the supported assets (WAVAX, USDC.e, USDT.e, WETH.e, PNG, QI, DAI.e, XAVA, WBTC.e, LINK.e, or iDYP) and earn WAVAX/ETH/DYP AS REWARDS. All pool rewards are automatically converted from iDYP to WAVAX by the smart contract, decreasing the risk of iDYP price volatility."
        );
      }
    } else if (activeType === "Buyback") {
      if (activeTypeAsset === "ETH Buyback") {
        setSubTitle(buybackSubtitles["eth"]);
      } else if (activeTypeAsset === "BSC Buyback") {
        setSubTitle(buybackSubtitles["bsc"]);
      } else if (activeTypeAsset === "AVAX Buyback") {
        setSubTitle(buybackSubtitles["avax"]);
      }
    }
  };

  const handleTypeAssetClick = (clicked) => {
    //when user clicks on card with cryptocurrency(ETH,BSC,AVAX)
    setActiveTypeAsset(clicked);
    handleChangeSubtitle();
    if (
      clicked === "ETH Stake" ||
      clicked === "ETH Yield" ||
      clicked === "ETH Buyback"
    ) {
      setSubData(typesDataArray.subAssets);
    } else if (
      clicked === "BSC Stake" ||
      clicked === "BSC Yield" ||
      clicked === "BSC Buyback"
    ) {
      setSubData(typesDataArray.subAssetsBSC);
    } else if (
      clicked === "AVAX Stake" ||
      clicked === "AVAX Yield" ||
      clicked === "AVAX Buyback"
    ) {
      setSubData(typesDataArray.subAssetsAVAX);
    }
  };

  const handleSubAssetButtonClick = () => {
    //when user clicks on button in subasset card
    console.log("Deposit/Supply");
  };

  useEffect(() => {
    getTotalTvlBuyBack().then();
    getTotalTvlEthStake().then();
    getTotalTvlBscStake().then();
    getTotalTvlAvaxStake().then();
    getTotalTvlEthStakeiDyp().then();
    getTotalTvlAvaxStakeiDyp().then();
    getTotalTvlBscStakeiDyp().then();
    getTotalEthTvlYield().then();
    getTotalBscTvlYield().then();
    getTotalAvaxTvlYield().then();
    getTotalTvlBuyBackAvax().then();
    getTotalTvlBscBuyback().then();
    getTotalTvlBuyBackEth().then();
    getTotalTvlVault().then();

    if (activeType === "Stake") {
      setTitle("DYP Staking");

      setActiveTypeAsset("ETH Stake");
      setSubTitle(
        "Stake your DYP tokens and earn 25% APR in ETH. No Impermanent Loss. To start earning, all you need is to deposit DYP tokens into the Staking contract and earn ETH as rewards. The staking pools have the REINVEST function integrated, meaning that you can automatically add your daily rewards to the staking pool. Moreover, the DYP Referral is available. If you refer DYP to your friends, 5% of your friends’ rewards will automatically be sent to you whenever your friends stake DYP. You do not need to stake, it will’ be automatically sent to you, free of gas fee."
      );
    } else if (activeType === "Farming") {
      setTitle("DYP Farming");
      setActiveTypeAsset("ETH Yield");
    } else if (activeType === "Buyback") {
      setTitle("DYP Buyback");

      setActiveTypeAsset("ETH Buyback");
    } else if (activeType === "Vault") {
      setTitle("DYP Earn Vault");
      setSubTitle(
        "The DYP Earn Vault is an automated smart contract with Compound Protocol integration and support for ETH, WBTC, USDC, USDT, and DAI markets. The rewards from Compound Protocol are entirely distributed to the users; from the other strategies, a substantial proportion of the rewards (75%) is converted to ETH and distributed to the users, whereas the remainder (25%) is used to buy back our protocol token and burn it."
      );
    }
  }, [activeType, activeTypeAsset]);

  useEffect(() => {
    handleTypeClick(activeType);
    handleTypeAssetClick(activeTypeAsset);
  }, [
    ethStake1,
    ethStake2,
    ethStakeApy1,
    ethStakeApy2,
    activeTypeAsset,
    bscStake1,
    bscStake2,
    bscStake3,
  ]);

  return (
    <div className="nft-earn">
      <div className="hero">
        <NftEarnHero
          eth={getFormattedNumber(json_totalPaid.ethTotal.wethPaiOutTotals, 0)}
          bnb={getFormattedNumber(json_totalPaid.bnbTotal.wbnbPaidOutTotals, 0)}
          avax={getFormattedNumber(
            json_totalPaid.avaxTotal.avaxPaidOutTotals,
            0
          )}
          rewardsValue={getFormattedNumber(json_totalPaid.totalPaidInUsd, 0)}
          rewardsLabel="Rewards paid out"
          mainTitle={title}
          subTitle={subTitle}
        />
        <EarnTypesList
          typesArray={types}
          activeType={activeType}
          onItemClick={handleTypeClick}
        />
      </div>
      {typesDataArray.type !== "Vault" && (
        <TypeAssets
          assets={typesDataArray.assets}
          onTypeAssetClicked={handleTypeAssetClick}
          clickedAsset={activeTypeAsset}
        />
      )}
      <SubAssets
        data={typesDataArray}
        subdata={activeType === "Vault" ? typesDataArray : subData}
        onSubAssetButtonClick={handleSubAssetButtonClick}
        tvl={tvl_all}
      />
    </div>
  );
};

export default NftEarn;
