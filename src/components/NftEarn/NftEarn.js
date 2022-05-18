import EarnTypesList from '../../assets/General/NftEarn/EarnTypesList'
import NftEarnHero from '../../assets/General/NftEarn/NftEarnHero'
import SubAssets from '../../assets/General/NftEarn/SubAssets'
import TypeAssets from '../../assets/General/NftEarn/TypeAssets/TypeAssets'
import React, { useState, useEffect } from 'react'
import getFormattedNumber from "../../functions/get-formatted-number";
import Dots from '../elements/dots'
export const handleHorizontalScroll = (scrollOffset, ref) => {
    ref.current.scrollLeft = scrollOffset;
}

const NftEarn = ({tvl_all, json_totalPaid, high_apy}) => {
    const types = ["Farming", "Stake", "Vault", "Buyback"]

    const [ethBuyBack, setEthBuyBack] = useState(0)
    const [bscBuyBack, setBscBuyBack] = useState(0)
    const [avaxBuyBack, setAvaxBuyBack] = useState(0)
    const [ethStake1, setEthStake1] = useState(0)
    const [ethStake2, setEthStake2] = useState(0)
    const [ethStakeApy1, setEthStakeApy1] = useState(0)
    const [ethStakeApy2, setEthStakeApy2] = useState(0)

    const [ethFarm1, setEthFarm1] = useState(0)
    const [ethFarm2, setEthFarm2] = useState(0)
    const [ethFarm3, setEthFarm3] = useState(0)
    const [ethFarm4, setEthFarm4] = useState(0)
    const [ethFarm5, setEthFarm5] = useState(0)

    const [ethFarmApy1, setEthFarmApy1] = useState(0)
    const [ethFarmApy2, setEthFarmApy2] = useState(0)
    const [ethFarmApy3, setEthFarmApy3] = useState(0)
    const [ethFarmApy4, setEthFarmApy4] = useState(0)
    const [ethFarmApy5, setEthFarmApy5] = useState(0)



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
    
        let ethTvlTotalStake = ethTvlTotalStake1 + ethTvlTotalStake2;
       
    
        let apr1 = 25;
        let apr2 = 50;
        let ethApyStake1 = new BigNumber(apr1)
          .div(1e2)
          .times(usdPerTokeniDYP)
          .div(usdPerToken)
          .times(1e2)
          .toFixed(2);
          setEthStakeApy1(ethApyStake1)

        let ethApyStake2 = new BigNumber(apr2)
          .div(1e2)
          .times(usdPerTokeniDYP)
          .div(usdPerToken)
          .times(1e2)
          .toFixed(2);
    
          setEthStakeApy2(ethApyStake2)
        // this.setState({ ethApyStake1, ethApyStake2 });
    
        // return { ethTvlTotalStake, ethTvlTotalStake1, ethTvlTotalStake2 };
      };
      
      
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
    
        let avaxTvlTotalStake = avaxTvlTotalStake1 + avaxTvlTotalStake2;
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
    
        return { avaxTvlTotalStake, avaxTvlTotalStake1, avaxTvlTotalStake2 };
      };
      
      
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
    
        let bscTvlTotalStake = bscTvlTotalStake1 + bscTvlTotalStake2;
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
    
        return { bscTvlTotalStake, bscTvlTotalStake1, bscTvlTotalStake2 };
      };


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

        setEthFarmApy1(ethTotalApyYield1)
        setEthFarmApy2(ethTotalApyYield2)
        setEthFarmApy3(ethTotalApyYield3)
        setEthFarmApy4(ethTotalApyYield4)
        setEthFarmApy5(ethTotalApyYield5)

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
    
        setEthFarm1(ethTotalTvlYield1)
        setEthFarm2(ethTotalTvlYield2)
        setEthFarm3(ethTotalTvlYield3)
        setEthFarm4(ethTotalTvlYield4)
        setEthFarm5(ethTotalTvlYield5)

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


      useEffect(()=>{
        getTotalTvlBuyBack().then()
        getTotalTvlEthStake().then()
        getTotalEthTvlYield().then()
       
      }, [getTotalTvlBuyBack, high_apy.highestAPY])
    const nftEarnData = [
        {
            type: "Farming",
            totalValue: "$816,818.88",
            totalValueText: "Pools",
            assets: [
                {
                    text: "ETH Yield",
                    percentage: `${high_apy.highestAPY.highestAPY_ETH_V2 === undefined ? '...' :  high_apy.highestAPY.highestAPY_ETH_V2} %`
                },
                {
                    text: "BSC Yield",
                    percentage: `${high_apy.highestAPY.highestAPY_BSC_V2 === undefined ? '...' :  high_apy.highestAPY.highestAPY_BSC_V2} %`
                },
                {
                    text: "AVAX Yield",
                    percentage: `${high_apy.highestAPY.highestAPY_AVAX_V2 === undefined ? '...' :  high_apy.highestAPY.highestAPY_AVAX_V2} %`
                }
            ],
            subAssets: [
                {
                    icons: [ "eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "dai-icon.png"],
                    title: "",
                    percentage: `${ethFarmApy1} %`,
                    total_value_locked: `$ ${getFormattedNumber(ethFarm1,2)}`,
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app.dyp.finance/farming-new-1'
                },
                {
                    icons: ["eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "dai-icon.png"],
                    title: "",
                    percentage: `${ethFarmApy2} %`,
                    total_value_locked: `$ ${getFormattedNumber(ethFarm2,2)}`,
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app.dyp.finance/farming-new-2'
                },
                {
                    icons: ["eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "dai-icon.png"],
                    title: "",
                    percentage: `${ethFarmApy3} %`,
                    total_value_locked: `$ ${getFormattedNumber(ethFarm3,2)}`,
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app.dyp.finance/farming-new-3'
                },
                {
                    icons: ["eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "dai-icon.png"],
                    title: "",
                    percentage: `${ethFarmApy4} %`,
                    total_value_locked: `$ ${getFormattedNumber(ethFarm4,2)}`,
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app.dyp.finance/farming-new-4'
                },
                {
                    icons: ["eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "dai-icon.png"],
                    title: "",
                    percentage: `${ethFarmApy5} %`,
                    total_value_locked: `$ ${getFormattedNumber(ethFarm5,2)}`,
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app.dyp.finance/farming-new-4'
                },
    
            ]
        },
        {
            type: "Stake",
            totalValue: "$366,875.15",
            totalValueText: "Pools",
            assets: [
                {
                    text: "ETH Stake",
                    percentage: "25%"
                },
                {
                    text: "BSC Stake",
                    percentage: "25%"
                },
                {
                    text: "AVAX Stake",
                    percentage: "25%"
                }
            ],
            subAssets: [
                {
                    icons: [ "DYP.png"],
                    title: "DYP",
                    percentage: `${ethStakeApy1} %`,
                    total_value_locked: `${getFormattedNumber(ethStake1, 2)}`,
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app.dyp.finance/constant-staking-1'
    
    
    
                },
                {
                    icons: [ "DYP.png"],
                    title: "DYP",
                    percentage: `${ethStakeApy2} %`,
                    total_value_locked: `${getFormattedNumber(ethStake2,2)}`,
                    lock_time: "90 Days",
                    link: 'https://app.dyp.finance/constant-staking-2'
    
                },
                // {
                //     icons: ["iDyp-logo.png"],
                //     title: "iDYP",
                //     percentage: "20%",
                //     total_value_locked: `${ethStake3}`,
                //     lock_time: "No lock",
                //     top_tick: false,
                //     link: 'https://app.dyp.finance/staking-idyp-1'
                    
                // },
                // {
                //     icons: ["iDyp-logo.png"],
                //     title: "iDYP",
                //     percentage: "45%",
                //     total_value_locked: "$23,989.61",
                //     lock_time: "No lock",
                //     top_tick: false,
                //     link: 'https://app.dyp.finance/staking-idyp-2'
                // },
    
            ]
        },
        {
            type: "Vault",
            totalValue: "$329,529.00",
            totalValueText: "Vaults",
            assets: [],
            subAssets: [
                {
                    icons: ["eth-icon2.png"],
                    title: "ETH",
                    percentage: "11.05%",
                    total_value_locked: "",
                    lock_time: "No lock",
                    top_tick: true,
                    link: "https://vault.dyp.finance/vault-weth",
    
                },
                {
                    icons: ["wbtc-icon.png"],
                    title: "WBTC",
                    percentage: "11.05%",
                    total_value_locked: "",
                    lock_time: "90 Days",
                    link: "https://vault.dyp.finance/vault-wbtc",
    
                },
                {
                    icons: ["usdc-icon.png"],
                    title: "USDC",
                    percentage: "11.05%",
                    total_value_locked: "",
                    lock_time: "No lock",
                    top_tick: false,
                    link: "https://vault.dyp.finance/vault-usdc",
    
    
                },
                {
                    icons: ["usdt-icon.png"],
                    title: "USDT",
                    percentage: "11.05%",
                    total_value_locked: "",
                    lock_time: "No lock",
                    top_tick: false,
                    link: "https://vault.dyp.finance/vault-usdt",
                },
                {
                    icons: ["dai-icon.png"],
                    title: "DAI",
                    percentage: "11.05%",
                    total_value_locked: "",
                    lock_time: "No lock",
                    top_tick: false,
                    link: "https://vault.dyp.finance/vault-dai"
    
                },
    
            ]
        },
        {
            type: "Buyback",
            totalValue: "$23,630.70",
            totalValueText: "Pools",
            assets: [
                {
                    text: "ETH Stale",
                    percentage: `${ethBuyBack} %`
                },
                {
                    text: "BSC Yield",
                    percentage: `${bscBuyBack} %`
                },
                {
                    text: "AVAX Stake",
                    percentage: `${avaxBuyBack} %`
                }
            ],
            subAssets: [
                {
                    icons: ["avalanche-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "coin-icon.png"],
                    title: "",
                    percentage: "24%",
                    total_value_locked: "$11,749.47",
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app-avax.dyp.finance/staking-buyback-1'
    
    
                },
                {
                    icons: ["avalanche-icon.png", "eth-icon2.png", "wbtc-icon.png", "usdc-icon.png", "usdt-icon.png", "coin-icon.png"],
                    title: "",
                    percentage: "24%",
                    total_value_locked: "$11,749.47",
                    lock_time: "No lock",
                    top_tick: false,
                    link: 'https://app-avax.dyp.finance/staking-buyback-2'
    
    
    
                },
    
    
            ]
        }
    ]

    const [activeType, setActiveType] = useState(types[0])
    const [activeTypeAsset, setActiveTypeAsset] = useState("ETH Yield")
    const [typesDataArray, settypesDataArray] = useState(nftEarnData[0])

    const handleTypeClick = (item) => {
        setActiveType(item)
        const temp = nftEarnData.filter((type) => type.type === item)
        settypesDataArray(temp[0])

    }

    const handleTypeAssetClick = (clicked) => {
        //when user clicks on card with cryptocurrency(ETH,BSC,AVAX)
        setActiveTypeAsset(clicked)
    }

    const handleSubAssetButtonClick = () => {
        //when user clicks on button in subasset card 
        console.log("Deposit/Supply")
    }

    return (
       
        <div className='nft-earn'>
            <div className="hero">
                <NftEarnHero
                    eth= {getFormattedNumber(json_totalPaid.ethTotal.wethPaiOutTotals,0)}
                    bnb={getFormattedNumber(json_totalPaid.bnbTotal.wbnbPaidOutTotals,0)}
                    avax= {getFormattedNumber(json_totalPaid.avaxTotal.avaxPaidOutTotals,0)}
                    rewardsValue= {getFormattedNumber(json_totalPaid.totalPaidInUsd,0)}
                    rewardsLabel="Rewards paid out"
                    mainTitle="Earn"
                    subTitle="DYP tokens to earn."
                />
                <EarnTypesList
                    typesArray={types}
                    activeType={activeType}
                    onItemClick={handleTypeClick} />
            </div>
            {typesDataArray.type !== "Vault" &&
                <TypeAssets
                    assets={typesDataArray.assets}
                    onTypeAssetClicked={handleTypeAssetClick}
                    clickedAsset={activeTypeAsset} />
            }
            <SubAssets data={typesDataArray} onSubAssetButtonClick={handleSubAssetButtonClick} tvl={tvl_all}/>
        </div>
    )
}

export default NftEarn