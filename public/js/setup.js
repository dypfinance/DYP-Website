window.IS_CONNECTED = false;
window.the_graph_result = {};
// MAKE SURE THIS ADDRESS IS LOWERCASE
const TOKEN_ADDRESS = "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17";

// MAKE SURE ALL THESE ADDRESSES ARE LOWERCASE
const TOKENS_DISBURSED_PER_YEAR = [
  360_000, 540_000, 900_000, 1_200_000,

  360_000, 540_000, 900_000, 1_200_000,

  360_000, 540_000, 900_000, 1_200_000,

  360_000, 540_000, 900_000, 1_200_000,
];
const LP_IDs = {
  eth: [
    "0xba7872534a6c9097d805d8bee97e030f4e372e54-0xa7d6f5fa9b0be0e98b3b40e6ac884e53f2f9460e",
    "0xba7872534a6c9097d805d8bee97e030f4e372e54-0x0b0a544ae6131801522e3ac1fbac6d311094c94c",
    "0xba7872534a6c9097d805d8bee97e030f4e372e54-0x16caad63bdfc3ec4a2850336b28efe17e802b896",
    "0xba7872534a6c9097d805d8bee97e030f4e372e54-0x512ff8739d39e55d75d80046921e7de20c3e9bff",
  ],
  wbtc: [
    "0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0xef71de5cb40f7985feb92aa49d8e3e84063af3bb",
    "0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0x8b0e324eede360cab670a6ad12940736d74f701e",
    "0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0x78e2da2eda6df49bae46e3b51528baf5c106e654",
    "0x44b77e9ce8a20160290fcbaa44196744f354c1b7-0x350f3fe979bfad4766298713c83b387c2d2d7a7a",
  ],
  usdt: [
    "0x76911e11fddb742d75b83c9e1f611f48f19234e4-0x4a76fc15d3fbf3855127ec5da8aaf02de7ca06b3",
    "0x76911e11fddb742d75b83c9e1f611f48f19234e4-0xf4abc60a08b546fa879508f4261eb4400b55099d",
    "0x76911e11fddb742d75b83c9e1f611f48f19234e4-0x13f421aa823f7d90730812a33f8cac8656e47dfa",
    "0x76911e11fddb742d75b83c9e1f611f48f19234e4-0x86690bbe7a9683a8bad4812c2e816fd17bc9715c",
  ],
  usdc: [
    "0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0x2b5d7a865a3888836d15d69dccbad682663dcdbb",
    "0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0xa52250f98293c17c894d58cf4f78c925dc8955d0",
    "0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0x924becc8f4059987e4bc4b741b7c354ff52c25e4",
    "0xabd9c284116b2e757e3d4f6e36c5050aead24e0c-0xbe528593781988974d83c2655cba4c45fc75c033",
  ],
};

window.LP_IDs = LP_IDs;

const LP_ID_LIST = Object.keys(LP_IDs)
  .map((key) => LP_IDs[key])
  .flat();
const TOKENS_DISBURSED_PER_YEAR_BY_LP_ID = {};
LP_ID_LIST.forEach(
  (lp_id, i) =>
    (TOKENS_DISBURSED_PER_YEAR_BY_LP_ID[lp_id] = TOKENS_DISBURSED_PER_YEAR[i])
);
const VAULT_ADDRESSES_LIST = LP_ID_LIST.map((id) => id.split("-")[1]);

window.config = {
  infura_endpoint:
    "https://mainnet.infura.io/v3/94608dc6ddba490697ec4f9b723b586e",
  bsc_endpoint: "https://bsc-dataseed.binance.org/",
  avax_endpoint: "https://api.avax.network/ext/bc/C/rpc",
  admin_address: "0x6A9D3A1dE06a12Cda1b07D5B3578edf9d51dF254",
  governance_address: "0xd3F0dBdd070224C50b533531b44ecBa8fB3bF0e2",
  vote_duration_in_seconds: 5 * 60, // 5 minutes for test
  execution_allowance_in_seconds: 5 * 60, // 5 minutes for test

  // address of eth token on bsc!
  claim_as_eth_address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",

  MIN_BALANCE_TO_INIT_PROPOSAL: 100e18,
  QUORUM: 1000e18,

  token_address: "0x9020692EedfB2c6B8f6d37dfb37a654088d4bc79",
  staking_address: "0x495bE5c1348A6b80c0fb38a250f419A551644804",

  token_dai_address: "0xa964d4ff6C14822Fc64CE4eC5Dc707D869DaC0bA",
  staking_dai_address: "0x850942B57DD500b73bBdB9F713789Ca72D10D235",

  reward_token_address: "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
  reward_token_idyp_address: "0xbd100d061e120b2c67a24453cf6368e63f1be056",
  BUSD_address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
  USDCe_address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
  USDC_address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  weth_address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
  etherscan_baseURL: "https://rinkeby.etherscan.io",
  max_proposals_per_call: 4,
  default_gasprice_gwei: 100,
  default_gas_amount: 600000,
  token_decimals: 18,
  lp_amplify_factor: 1,

  cg_ids: {
    main: "binancecoin",
    "platform-token": "defi-yield-protocol",

    // lowercase token address => coingecko id
    "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17": "defi-yield-protocol",
  },

  /* DYPS */
  token_dyps_bsc_address: "0x4B2dfB131B0AE1D6d5D0c9a3a09c028a5cD10554",
  token_dyps_avax_address: "0x4689545A1389E7778Fd4e66F854C91Bf8aBacBA9",
  token_dyps_eth_address: "0xd4f11Bf85D751F426EF59b705E42b3da3357250f",

  /* launchpad Config */
  metamask_message: "I want to login to DYP Launchpad, let me in!",
  whitelist_nft: "Meow!",

  // how many IDOs to load per call for homepage
  display_list_step: 3,

  slippage_tolerance_percent: 3, // 3% slippage tolerance
  tx_max_wait_seconds: 20 * 60, // 20 mins - deposit and withdraw tx will fail (swap will fail) after this duration of being pending
  uniswap_router_address: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  pangolin_router_address: "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106",
  pancakeswap_router_address: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  buyback_staking_address: "0xAA0741E312Fe480733e6f11248D414Ffd35098ae",
  buyback_staking_url: "https://dyp.finance/buyback",
  //etherscan_baseURL: 'https://rinkeby.etherscan.io',
  //default_gasprice_gwei: 100,
  default_maxPriorityFeePerGas_gwei: 10,
  //default_gas_amount: 600000,
  api_baseurl: "https://launchpad-api.dyp.finance", // no forward slash!
  whitelist_form_link: "https://forms.google.com/",
  tier_names: ["START", "BRONZE", "SILVER", "GOLD", "PLATINUM"],
  tier_dyp_deposits: ["TBA", "TBA", "TBA", "TBA", "TBA"],
  deposit_tokens: [
    {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      symbol: "WETH",
      decimals: 18,
    },
    {
      address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
      symbol: "WBTC",
      decimals: 8,
    },
    {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      decimals: 6,
    },
    {
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      symbol: "USDT",
      decimals: 6,
    },
    {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      symbol: "DAI",
      decimals: 18,
    },
  ],

  deposit_tokens_binance: [
    {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      symbol: "WBNB",
      decimals: 18,
    },
    {
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      symbol: "BTCB",
      decimals: 18,
    },
    {
      address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
      symbol: "ETH",
      decimals: 18,
    },
    {
      address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
      symbol: "BUSD",
      decimals: 18,
    },
    {
      address: "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
      symbol: "DAI",
      decimals: 18,
    },
  ],

  deposit_tokens_avalanche: [
    {
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      symbol: "WAVAX",
      decimals: 18,
    },
    {
      address: "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
      symbol: "WETH.e",
      decimals: 18,
    },
    {
      address: "0x50b7545627a5162f82a992c33b87adc75187b218",
      symbol: "WBTC.e",
      decimals: 8,
    },
    {
      address: "0xc7198437980c041c805a1edcba50c1ce5db95118",
      symbol: "USDT.e",
      decimals: 6,
    },
    {
      address: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
      symbol: "USDC.e",
      decimals: 6,
    },
    {
      address: "0x60781c2586d68229fde47564546784ab3faca982",
      symbol: "PNG",
      decimals: 18,
    },
  ],

  /* MINT NFT */
  // nft_address: "0x3B7E527eFd16cC9E8bEF0F4d3BCD7cCDbb7d6EC4",
  // nftstaking_address: "0x971D729274fD5856E23A0DEB8C7ECB52A5ac6F8f",
  // nftstaking_address50: "0x971D729274fD5856E23A0DEB8C7ECB52A5ac6F8f",

  /* MINT NFT */
  nft_address: '0xd06cf9e1189feab09c844c597abc3767bc12608c',
  nftstaking_address: "0xEe425BbbEC5e9Bf4a59a1c19eFff522AD8b7A47A",
  nftstaking_address50: "0xEe425BbbEC5e9Bf4a59a1c19eFff522AD8b7A47A",
};

window.infuraWeb3 = new Web3(window.config.infura_endpoint);
window.bscWeb3 = new Web3(window.config.bsc_endpoint);
window.avaxWeb3 = new Web3(window.config.avax_endpoint);

window.vaults = [
  {
    hidden: true,
    contract_address: "0x10f612d6D8521f9d4c888c007Ed72Bf5E8DB2105",
    short_name: "DYP/DAI Pool",
    logo: "/images/uni-v2.webp",
    name: "DYP/DAI LP Vault\n72 Hours Locking",
    description: "Deposit LP and earn WETH",
    return_heading: "Pool Rewards",
    return_description: "3000 DYP / month",
    link: "/staking-dai",
  },
  {
    hidden: true,
    contract_address: "0x23f2552f9D0dd03EAa026b18b1d854546a03a05f",
    short_name: "DYP/ETH Pool",
    logo: "/images/uni-v2.webp",
    name: "DYP/ETH LP Vault\n72 Hours Locking",
    description: "Deposit LP and earn WETH",
    return_heading: "Pool Rewards",
    return_description: "3000 DYP / month",
    link: "/staking-eth",
  },
  {
    hidden: false,
    contract_address: window.config.staking_address,
    short_name: "DYP/ETH Pool",
    logo: "/images/uni-v2.webp",
    name: "DYP/ETH LP Vault\n72 Hours Locking",
    description: "Deposit LP and earn WETH",
    return_heading: "Pool Rewards",
    return_description: "3000 DYP / month",
    link: "/staking-eth",
  },
  {
    hidden: false,
    contract_address: window.config.staking_dai_address,
    short_name: "DYP/DAI Pool",
    logo: "/images/uni-v2.webp",
    name: "DYP/DAI LP Vault\n72 Hours Locking",
    description: "Deposit LP and earn WETH",
    return_heading: "Pool Rewards",
    return_description: "3000 DYP / month",
    link: "/staking-dai",
  },
];

window.GOVERNANCE_ABI = [
  {
    inputs: [],
    name: "MIN_BALANCE_TO_INIT_PROPOSAL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "QUORUM",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESULT_EXECUTION_ALLOWANCE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VOTE_DURATION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "actions",
    outputs: [
      {
        internalType: "enum Governance.Action",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "enum Governance.Option",
        name: "option",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "_proposalId",
        type: "uint256",
      },
      {
        internalType: "enum Governance.Action",
        name: "_proposalAction",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_optionOneVotes",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_optionTwoVotes",
        type: "uint256",
      },
      {
        internalType: "contract StakingPool",
        name: "_stakingPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newGovernance",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_proposalStartTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isProposalExecuted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isProposalExecuted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "isProposalExecutible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "isProposalOpen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastVotedProposalStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "newGovernances",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "optionOneVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "optionTwoVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposalStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract StakingPool",
        name: "pool",
        type: "address",
      },
    ],
    name: "proposeDisburseOrBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract StakingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "newGovernance",
        type: "address",
      },
    ],
    name: "proposeUpgradeGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "removeVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakingPools",
    outputs: [
      {
        internalType: "contract StakingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalDepositedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votedForOption",
    outputs: [
      {
        internalType: "enum Governance.Option",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votesForProposalByAddress",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAllTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

window.STAKING_ABI = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "swapPath",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthRewardsDisbursed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EthRewardsTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsDisbursed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "BURN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAGIC_NUMBER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SLIPPAGE_TOLERANCE_X_100",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "SWAP_PATH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addContractBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adminCanClaimAfter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adminClaimableTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnOrDisburseTokensPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnRewardTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cliffTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractDeployTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToDeposit",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "depositTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "depositedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disburseAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disburseDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disbursePercentX100",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "disburseRewardTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToWithdraw",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "getDepositorsList",
    outputs: [
      {
        internalType: "address[]",
        name: "stakers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "stakingTimestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lastClaimedTimeStamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "stakedTokens",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxSwappableAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfHolders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingDisbursement",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_holder",
        type: "address",
      },
    ],
    name: "getPendingDivs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_holder",
        type: "address",
      },
    ],
    name: "getPendingDivsEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastBurnOrTokenDistributeTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastDisburseTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastDivPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastEthDivPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastSwapExecutionTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapAttemptPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensToBeDisbursedOrBurnt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokensToBeSwapped",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimedRewardsEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDivPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalEarnedEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalEarnedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEthDivPoints",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferAnyERC20Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferAnyOldERC20Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedDepositTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "trustedRewardTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapRouterV2",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV2Pair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToWithdraw",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

window.NFTSTAKING_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingDestinationAddress",
        type: "address",
      },
      { internalType: "uint256", name: "_rate", type: "uint256" },
      { internalType: "uint256", name: "_expiration", type: "uint256" },
      { internalType: "address", name: "_erc20Address", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "_depositBlocks",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "calculateReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
    ],
    name: "calculateRewards",
    outputs: [
      { internalType: "uint256[]", name: "rewards", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "depositsOf",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20Address",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "expiration",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "bytes", name: "", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_expiration", type: "uint256" }],
    name: "setExpiration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_rate", type: "uint256" }],
    name: "setRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingDestinationAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakingTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256[]", name: "tokenIds", type: "uint256[]" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

window.WETH_ABI = window.TOKEN_ABI;
window.REWARD_TOKEN_ABI = window.TOKEN_ABI;
window.cached_contracts = {};

Object.keys(window.config)
  .filter(
    (k) =>
      (k.startsWith("token_") || k.startsWith("staking_")) &&
      k.endsWith("_address")
  )
  .forEach((k) => {
    window[k.replace("_address", "_ABI").toUpperCase()] = k.startsWith("token_")
      ? window.TOKEN_ABI
      : window.STAKING_ABI;
  });

window.isConnected = false;
// function to connect metamask
async function connectWallet() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      console.log("Connected!");
      window.isConnected = true;
      return true;
    } catch (e) {
      console.error(e);
      throw new Error("Cannot Connect Wallet: User denied wallet connection!");
    }
  } else if (window.injectedWeb3) {
    window.web3 = new Web3(window.injectedWeb3.currentProvider);
    console.log("connected to old web3");
    window.isConnected = true;
    return true;
  } else {
    throw new Error("No web3 detected! Install Metamask!");
  }
}

/**
 *
 * @param {"TOKEN" | "STAKING" | "NFTSTAKING" | "NFTSTAKING50"} key
 */
async function getContract(key) {
  let ABI = window[key + "_ABI"];
  let address = window.config[key.toLowerCase() + "_address"];
  if (!window.cached_contracts[key]) {
    window.cached_contracts[key] = new window.web3.eth.Contract(
      key === 'NFTSTAKING50' ? window.NFTSTAKING_ABI :
      ABI,
      key === "NFTSTAKING"
        ? "0x971D729274fD5856E23A0DEB8C7ECB52A5ac6F8f"
        : key === 'NFTSTAKING50' ? '0x971D729274fD5856E23A0DEB8C7ECB52A5ac6F8f'
        : address,
      {
        from: await window.web3.eth.getCoinbase(),
      }
    );
  }

  return window.cached_contracts[key];
}

function getCoinbase() {
  return window.web3.eth.getCoinbase();
}

class TOKEN {
  constructor(key = "TOKEN") {
    this.key = key;
    let address = window.config[key.toLowerCase() + "_address"];
    this._address = address;
  }

  async transfer(to, amount) {
    let contract = await getContract(this.key);
    return await contract.methods.transfer(to, amount).send({
      gas: window.config.default_gas_amount,
      from: await window.web3.eth.getCoinbase(),
      gasPrice: window.config.default_gasprice_gwei * 1e9,
    });
  }
  async totalSupply() {
    let contract = await getContract(this.key);
    return await contract.methods.totalSupply().call();
  }
  async approve(spender, amount) {
    let contract = await getContract(this.key);
    return await contract.methods.approve(spender, amount).send({
      gas: window.config.default_gas_amount,
      from: await getCoinbase(),
      gasPrice: window.config.default_gasprice_gwei * 1e9,
    });
  }
  async balanceOf(address) {
    let contract = await getContract(this.key);
    return await contract.methods.balanceOf(address).call();
  }
}

class STAKING {
  constructor(ticker = "STAKING", token = "TOKEN") {
    this.ticker = ticker;
    this.token = token;
    let address = window.config[ticker.toLowerCase() + "_address"];
    this._address = address;
    [
      "owner",
      "depositedTokens",
      "depositTime",
      "cliffTime",
      "lastClaimedTime",
      "totalEarnedTokens",
      "totalEarnedEth",
      "getPendingDivs",
      "getPendingDivsEth",
      "tokensToBeDisbursedOrBurnt",
      "tokensToBeSwapped",
      "getNumberOfHolders",
      "getDepositorsList",
    ].forEach((fn_name) => {
      this[fn_name] = async function (...args) {
        let contract = await getContract(this.ticker);
        return await contract.methods[fn_name](...args).call();
      };
    });

    ["deposit", "withdraw", "claim"].forEach((fn_name) => {
      this[fn_name] = async function (...args) {
        let contract = await getContract(this.ticker);
        let value = 0;
        console.log(value);
        return await contract.methods[fn_name](...args).send({
          value,
          gas: window.config.default_gas_amount,
          from: await getCoinbase(),
          gasPrice: window.config.default_gasprice_gwei * 1e9,
        });
      };
    });
  }

  async depositTOKEN(amount) {
    let token_contract = await getContract(this.token);
    let staking_contract = await getContract(this.ticker);
    let batch = new window.web3.eth.BatchRequest();
    batch.add(
      token_contract.methods
        .approve(staking_contract._address, amount)
        .send.request({
          gas: window.config.default_gas_amount,
          from: await getCoinbase(),
          gasPrice: window.config.default_gasprice_gwei * 1e9,
        })
    );
    batch.add(
      staking_contract.methods.deposit(amount).send.request({
        gas: window.config.default_gas_amount,
        from: await getCoinbase(),
        gasPrice: window.config.default_gasprice_gwei * 1e9,
      })
    );
    return batch.execute();
  }
}

class GOVERNANCE {
  constructor(ticker = "GOVERNANCE", token = "REWARD_TOKEN") {
    this.ticker = ticker;
    this.token = token;
    let address = window.config[ticker.toLowerCase() + "_address"];
    this._address = address;
    [
      "QUORUM",
      "MIN_BALANCE_TO_INIT_PROPOSAL",
      "VOTE_DURATION",
      "RESULT_EXECUTION_ALLOWANCE_PERIOD",
      "actions",
      "optionOneVotes",
      "optionTwoVotes",
      "stakingPools",
      "newGovernances",
      "proposalStartTime",
      "isProposalExecuted",
      "totalDepositedTokens",
      "votesForProposalByAddress",
      "votedForOption",
      "lastVotedProposalStartTime",
      "lastIndex",
      "getProposal",
      "isProposalOpen",
      "isProposalExecutible",
    ].forEach((fn_name) => {
      this[fn_name] = async function (...args) {
        let contract = await getContract(this.ticker);
        return await contract.methods[fn_name](...args).call();
      };
    });

    [
      "proposeDisburseOrBurn",
      "proposeUpgradeGovernance",
      "addVotes",
      "removeVotes",
      "withdrawAllTokens",
      "executeProposal",
    ].forEach((fn_name) => {
      this[fn_name] = async function (...args) {
        let contract = await getContract(this.ticker);
        let value = 0;
        console.log(value);
        return await contract.methods[fn_name](...args).send({
          value,
          gas: window.config.default_gas_amount,
          from: await getCoinbase(),
          gasPrice: window.config.default_gasprice_gwei * 1e9,
        });
      };
    });
  }

  async addVotesOneClick(proposalId, option, amount) {
    let token_contract = await getContract(this.token);
    let governance_contract = await getContract(this.ticker);
    let batch = new window.web3.eth.BatchRequest();
    batch.add(
      token_contract.methods
        .approve(governance_contract._address, amount)
        .send.request({
          gas: window.config.default_gas_amount,
          from: await getCoinbase(),
          gasPrice: window.config.default_gasprice_gwei * 1e9,
        })
    );
    batch.add(
      governance_contract.methods
        .addVotes(proposalId, option, amount)
        .send.request({
          gas: window.config.default_gas_amount,
          from: await getCoinbase(),
          gasPrice: window.config.default_gasprice_gwei * 1e9,
        })
    );
    return batch.execute();
  }
}

window.governance = new GOVERNANCE();

window.token = new TOKEN();
window.staking = new STAKING();
window.reward_token = new TOKEN("REWARD_TOKEN");
window.weth = new TOKEN("WETH");

window.token_dai = new TOKEN("TOKEN_DAI");
window.staking_dai = new STAKING("STAKING_DAI", "TOKEN_DAI");

window.the_graph_result_BSC = {};

// MAKE SURE ALL THESE ADDRESSES ARE LOWERCASE
const TOKENS_DISBURSED_PER_YEAR_BSC = [
  180_000, 270_000, 450_000, 600_000,

  180_000, 270_000, 450_000, 600_000,

  180_000, 270_000, 450_000, 600_000,
];

const LP_IDs_BSC = {
  eth: [
    "0x87c546525cf48f28d73ea218c625d6f748721717-0xb4338fc62b1de93f63bfedb9fd9bac455d50a424",
    "0x87c546525cf48f28d73ea218c625d6f748721717-0x2c1411d4f1647b88a7b46c838a3760f925bac83b",
    "0x87c546525cf48f28d73ea218c625d6f748721717-0x2c51df297a2aa972a45ed52110afd24591c6f302",
    "0x87c546525cf48f28d73ea218c625d6f748721717-0xd7180d6fea393158d42d0d0cd66ab93048f581e3",
  ],
  wbtc: [
    "0x2fcf1b0d83f83135b6e5e2e231e07ae89c235f68-0x8a607e099e835bdbc4a606acb600ef475414f450",
    "0x2fcf1b0d83f83135b6e5e2e231e07ae89c235f68-0x34dd0d25fa2e3b220d1eb67460c45e586c61c2bb",
    "0x2fcf1b0d83f83135b6e5e2e231e07ae89c235f68-0xb07c67b65e6916ba87b6e3fa245aa18f77b4413e",
    "0x2fcf1b0d83f83135b6e5e2e231e07ae89c235f68-0x52adfbb5bc9f9fee825bd56feb11f1fc90e0b47e",
  ],
  usdc: [
    "0xc7a4d04699a9539d33e86ce746e88553149c8528-0x111ae4ca424036d09b4e0fc9f1de5e6dc90d586b",
    "0xc7a4d04699a9539d33e86ce746e88553149c8528-0x7637fa253180556ba486d2fa5d2bb328eb0aa7ca",
    "0xc7a4d04699a9539d33e86ce746e88553149c8528-0x2f3c4a08dad0f8a56ede3961ab654020534b8a8c",
    "0xc7a4d04699a9539d33e86ce746e88553149c8528-0x417538f319afddd351f33222592b60f985475a21",
  ],
};

window.LP_IDs_BSC = LP_IDs_BSC;

const LP_ID_LIST_BSC = Object.keys(LP_IDs_BSC)
  .map((key) => LP_IDs_BSC[key])
  .flat();
const TOKENS_DISBURSED_PER_YEAR_BY_LP_ID_BSC = {};
LP_ID_LIST_BSC.forEach(
  (lp_id, i) =>
    (TOKENS_DISBURSED_PER_YEAR_BY_LP_ID_BSC[lp_id] =
      TOKENS_DISBURSED_PER_YEAR_BSC[i])
);
const VAULT_ADDRESSES_LIST_BSC = LP_ID_LIST_BSC.map((id) => id.split("-")[1]);

window.LP_ID_LIST_BSC = LP_ID_LIST_BSC;

const TOKENS_DISBURSED_PER_YEAR_AVAX = [180_000, 270_000, 450_000, 600_000];

const LP_IDs_AVAX = {
  eth: [
    "0x497070e8b6c55fd283d8b259a6971261e2021c01-0x499c588146443235357e9c630a66d6fe0250caa1",
    "0x497070e8b6c55fd283d8b259a6971261e2021c01-0xd8af0591be4fba56e3634c992b7fe4ff0a90b584",
    "0x497070e8b6c55fd283d8b259a6971261e2021c01-0xbebe1fe1444a50ac6ee95ea25ba80adf5ac7322c",
    "0x497070e8b6c55fd283d8b259a6971261e2021c01-0x79be220ab2dfcc2f140b59a97bfe6751ed1579b0",
  ],
};

window.LP_IDs_AVAX = LP_IDs_AVAX;

const LP_ID_LIST_AVAX = Object.keys(LP_IDs_AVAX)
  .map((key) => LP_IDs_AVAX[key])
  .flat();
const TOKENS_DISBURSED_PER_YEAR_BY_LP_ID_AVAX = {};
LP_ID_LIST_AVAX.forEach(
  (lp_id, i) =>
    (TOKENS_DISBURSED_PER_YEAR_BY_LP_ID_AVAX[lp_id] =
      TOKENS_DISBURSED_PER_YEAR_AVAX[i])
);

window.LP_ID_LIST_AVAX = LP_ID_LIST_AVAX;

/**
 * Returns the ETH USD Price, Token USD Prices, LP USD Prices, and amount of LP Staked, usd value of LP staked
 *
 * lp_id example: `"pair_address-pool_contract_address"`
 *
 * @param {{token_contract_addresses: object[], lp_ids: object[], tokens_disbursed_per_year: object}} props - MAKE SURE ALL ADDRESSES ARE LOWERCASE!
 */
function get_usd_values_BSC({ token_contract_addresses, lp_ids }) {
  return new Promise(async (resolve, reject) => {
    let usd_per_eth = await getPrice_BSC(window.config.cg_ids["main"]);
    let usdPerPlatformToken = await getPrice_BSC(
      window.config.cg_ids["platform-token"]
    );

    async function getData(token_contract_addresses, lp_ids) {
      let tokens = [];
      let liquidityPositions = [];
      for (let id of token_contract_addresses) {
        let token_price_usd = await getPrice_BSC(window.config.cg_ids[id]);
        tokens.push({ id, token_price_usd });
      }
      for (let lp_id of lp_ids) {
        let pairAddress = lp_id.split("-")[0];
        let stakingContractAddress = lp_id.split("-")[1];

        let platformTokenContract = new window.bscWeb3.eth.Contract(
          window.TOKEN_ABI,
          window.config.reward_token_address,
          { from: undefined }
        );
        let pairTokenContract = new window.bscWeb3.eth.Contract(
          window.TOKEN_ABI,
          pairAddress,
          { from: undefined }
        );

        let [lpTotalSupply, stakingLpBalance, platformTokenInLp] =
          await Promise.all([
            pairTokenContract.methods.totalSupply().call(),
            pairTokenContract.methods.balanceOf(stakingContractAddress).call(),
            platformTokenContract.methods.balanceOf(pairAddress).call(),
          ]);

        let usd_per_lp =
          ((platformTokenInLp / 1e18) * usdPerPlatformToken * 2) /
          (lpTotalSupply / 1e18);
        let usd_value_of_lp_staked = (stakingLpBalance / 1e18) * usd_per_lp;
        let lp_staked = stakingLpBalance / 1e18;
        let id = lp_id;
        liquidityPositions.push({
          id,
          usd_per_lp,
          usd_value_of_lp_staked,
          lp_staked,
        });
      }
      return {
        data: {
          tokens,
          liquidityPositions,
        },
      };
    }

    getData(
      token_contract_addresses.map((a) => a.toLowerCase()),
      lp_ids.map((a) => a.toLowerCase())
    )
      .then((res) => handleTheGraphData(res))
      .catch(reject);

    function handleTheGraphData(response) {
      try {
        let data = response.data;
        if (!data) return reject(response);

        //console.log({data})

        let token_data = {},
          lp_data = {};

        data.tokens.forEach((t) => {
          token_data[t.id] = t;
        });

        data.liquidityPositions.forEach((lp) => {
          lp_data[lp.id] = lp;
        });
        resolve({ token_data, lp_data, usd_per_eth });
      } catch (e) {
        console.error(e);
        reject(e);
      }
    }
  });
}

/**
 *
 * @param {string[]} staking_pools_list - List of Contract Addresses for Staking Pools
 * @returns {number[]} List of number of stakers for each pool
 */
async function get_number_of_stakers_BSC(staking_pools_list) {
  return (
    await Promise.all(
      staking_pools_list.map((contract_address) => {
        let contract = new window.bscWeb3.eth.Contract(
          window.STAKING_ABI,
          contract_address,
          { from: undefined }
        );
        return contract.methods.getNumberOfHolders().call();
      })
    )
  ).map((h) => Number(h));
}

async function get_token_balances_BSC({ TOKEN_ADDRESS, HOLDERS_LIST }) {
  let token_contract = new window.bscWeb3.eth.Contract(
    window.TOKEN_ABI,
    TOKEN_ADDRESS,
    { from: undefined }
  );

  return await Promise.all(
    HOLDERS_LIST.map((h) => {
      return token_contract.methods.balanceOf(h).call();
    })
  );
}

function wait_BSC(ms) {
  console.log("Waiting _BSC " + ms + "ms");
  return new Promise((r) =>
    setTimeout(() => {
      r(true);
      console.log("Wait over _BSC!");
    }, ms)
  );
}

/**
 *
 * @param {{token_data, lp_data}} usd_values - assuming only one token is there in token_list
 */
async function get_apy_and_tvl_BSC(usd_values) {
  let { token_data, lp_data, usd_per_eth } = usd_values;

  let token_price_usd = token_data[TOKEN_ADDRESS].token_price_usd * 1;
  let balances_by_address = {},
    number_of_holders_by_address = {};
  let lp_ids = Object.keys(lp_data);
  let addrs = lp_ids.map((a) => a.split("-")[1]);
  let token_balances = await get_token_balances_BSC({
    TOKEN_ADDRESS,
    HOLDERS_LIST: addrs,
  });
  addrs.forEach((addr, i) => (balances_by_address[addr] = token_balances[i]));

  await wait_BSC(3000);

  let number_of_holders = await get_number_of_stakers_BSC(addrs);
  addrs.forEach(
    (addr, i) => (number_of_holders_by_address[addr] = number_of_holders[i])
  );

  lp_ids.forEach((lp_id) => {
    let apy = 0,
      tvl_usd = 0;

    let pool_address = lp_id.split("-")[1];
    let token_balance = new BigNumber(balances_by_address[pool_address] || 0);
    let token_balance_value_usd =
      token_balance.div(1e18).times(token_price_usd).toFixed(2) * 1;

    tvl_usd =
      token_balance_value_usd + lp_data[lp_id].usd_value_of_lp_staked * 1;

    apy =
      (
        (TOKENS_DISBURSED_PER_YEAR_BY_LP_ID_BSC[lp_id] *
          token_price_usd *
          100) /
        (lp_data[lp_id].usd_value_of_lp_staked || 1)
      ).toFixed(2) * 1;

    lp_data[lp_id].apy = apy;
    lp_data[lp_id].tvl_usd = tvl_usd;
    lp_data[lp_id].stakers_num = number_of_holders_by_address[pool_address];
  });

  return { token_data, lp_data, usd_per_eth, token_price_usd };
}

async function get_usd_values_with_apy_and_tvl_BSC(...arguments) {
  return await get_apy_and_tvl_BSC(await get_usd_values_BSC(...arguments));
}

async function refresh_the_graph_result_BSC() {
  let result = await get_usd_values_with_apy_and_tvl_BSC({
    token_contract_addresses: [TOKEN_ADDRESS],
    lp_ids: LP_ID_LIST_BSC,
  });
  return result;
}

window.get_usd_values_BSC = get_usd_values_BSC;
window.get_token_balances_BSC = get_token_balances_BSC;
window.get_apy_and_tvl_BSC = get_apy_and_tvl_BSC;
window.get_number_of_stakers_BSC = get_number_of_stakers_BSC;
window.refresh_the_graph_result_BSC = refresh_the_graph_result_BSC;

function getPrice_BSC(coingecko_id = "ethereum", vs_currency = "usd") {
  return new Promise((resolve, reject) => {
    window.$.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_id}&vs_currencies=${vs_currency}`
    )
      .then((result) => {
        resolve(result[coingecko_id][vs_currency]);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

window.getPrice_BSC = getPrice_BSC;

/**
 * Returns the ETH USD Price, Token USD Prices, LP USD Prices, and amount of LP Staked, usd value of LP staked
 *
 * lp_id example: `"pair_address-pool_contract_address"`
 *
 * @param {{token_contract_addresses: object[], lp_ids: object[], tokens_disbursed_per_year: object}} props - MAKE SURE ALL ADDRESSES ARE LOWERCASE!
 */
function get_usd_values({ token_contract_addresses, lp_ids }) {
  return new Promise((resolve, reject) => {
    fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
  
	tokens(where:{
  id_in: ${JSON.stringify(
    token_contract_addresses.map((a) => a.toLowerCase())
  )}}) {
	  id
	  symbol
	  name
	  decimals
	  untrackedVolumeUSD
		derivedETH
	}
	
	bundle(id: 1) {
	  id
	  ethPrice
	}
	
	liquidityPositions(where: 
	  {id_in: 
		  ${JSON.stringify(lp_ids.map((id) => id.toLowerCase()))},
	  }) {
	  id
	  pair {
		reserveUSD
		totalSupply
	  }
	  liquidityTokenBalance
	}
  }
  `,
        variables: null,
      }),
    })
      .then((res) => res.json())
      .then((res) => handleTheGraphData(res))
      .catch(reject);

    function handleTheGraphData(response) {
      try {
        let data = response.data;
        if (!data) return reject(response);

        //console.log(data)

        let usd_per_eth = new BigNumber(data.bundle.ethPrice).toFixed(2) * 1;

        let token_data = {},
          lp_data = {};

        data.tokens.forEach((t) => {
          token_data[t.id] = {
            token_volume_usd_all_time:
              new BigNumber(t.untrackedVolumeUSD).toFixed(2) * 1,
            token_price_usd:
              new BigNumber(t.derivedETH).times(usd_per_eth).toFixed(2) * 1,
          };
        });

        data.liquidityPositions.forEach((lp) => {
          let usd_per_lp =
            new BigNumber(lp.pair.reserveUSD)
              .div(lp.pair.totalSupply)
              .toFixed(2) * 1;
          let lp_staked = lp.liquidityTokenBalance;
          let usd_value_of_lp_staked =
            new BigNumber(lp_staked).times(usd_per_lp).toFixed(2) * 1;
          lp_data[lp.id] = {
            lp_staked,
            usd_per_lp,
            usd_value_of_lp_staked,
          };
        });
        resolve({ token_data, lp_data, usd_per_eth });
      } catch (e) {
        console.error(e);
        reject(e);
      }
    }
  });
}

/**
 *
 * @param {string[]} staking_pools_list - List of Contract Addresses for Staking Pools
 * @returns {number[]} List of number of stakers for each pool
 */
async function get_number_of_stakers(staking_pools_list) {
  return (
    await Promise.all(
      staking_pools_list.map((contract_address) => {
        let contract = new window.infuraWeb3.eth.Contract(
          window.STAKING_ABI,
          contract_address,
          { from: undefined }
        );
        return contract.methods.getNumberOfHolders().call();
      })
    )
  ).map((h) => Number(h));
}

async function get_token_balances({ TOKEN_ADDRESS, HOLDERS_LIST }) {
  let token_contract = new window.infuraWeb3.eth.Contract(
    window.TOKEN_ABI,
    TOKEN_ADDRESS,
    { from: undefined }
  );

  return await Promise.all(
    HOLDERS_LIST.map((h) => {
      return token_contract.methods.balanceOf(h).call();
    })
  );
}

function wait(ms) {
  console.log("Waiting " + ms + "ms");
  return new Promise((r) =>
    setTimeout(() => {
      r(true);
      console.log("Wait over!");
    }, ms)
  );
}

/**
 *
 * vau@param {{token_data, lp_data}} usd_values - assuming only one token is there in token_list
 */
async function get_apy_and_tvl(usd_values) {
  let { token_data, lp_data, usd_per_eth } = usd_values;

  let token_price_usd = token_data[TOKEN_ADDRESS].token_price_usd * 1;
  let balances_by_address = {},
    number_of_holders_by_address = {};
  let lp_ids = Object.keys(lp_data);
  let addrs = lp_ids.map((a) => a.split("-")[1]);
  let token_balances = await get_token_balances({
    TOKEN_ADDRESS,
    HOLDERS_LIST: addrs,
  });
  addrs.forEach((addr, i) => (balances_by_address[addr] = token_balances[i]));

  await wait(2000);

  let number_of_holders = await get_number_of_stakers(addrs);
  addrs.forEach(
    (addr, i) => (number_of_holders_by_address[addr] = number_of_holders[i])
  );

  lp_ids.forEach((lp_id) => {
    let apy = 0,
      tvl_usd = 0;

    let pool_address = lp_id.split("-")[1];
    let token_balance = new BigNumber(balances_by_address[pool_address] || 0);
    let token_balance_value_usd =
      token_balance.div(1e18).times(token_price_usd).toFixed(2) * 1;

    tvl_usd =
      token_balance_value_usd + lp_data[lp_id].usd_value_of_lp_staked * 1;

    apy =
      (
        (TOKENS_DISBURSED_PER_YEAR_BY_LP_ID[lp_id] * token_price_usd * 100) /
        (lp_data[lp_id].usd_value_of_lp_staked || 1)
      ).toFixed(2) * 1;

    lp_data[lp_id].apy = apy;
    lp_data[lp_id].tvl_usd = tvl_usd;
    lp_data[lp_id].stakers_num = number_of_holders_by_address[pool_address];
  });

  return { token_data, lp_data, usd_per_eth, token_price_usd };
}

async function get_usd_values_with_apy_and_tvl(...arguments) {
  return await get_apy_and_tvl(await get_usd_values(...arguments));
}

async function refresh_the_graph_result() {
  let result = await get_usd_values_with_apy_and_tvl({
    token_contract_addresses: [TOKEN_ADDRESS],
    lp_ids: LP_ID_LIST,
  });
  //window.the_graph_result = result
  //await refresh_the_graph_result_BSC()
  return result;
}

window.get_usd_values = get_usd_values;
window.get_token_balances = get_token_balances;
window.get_apy_and_tvl = get_apy_and_tvl;
window.get_number_of_stakers = get_number_of_stakers;
window.refresh_the_graph_result = refresh_the_graph_result;

async function test() {
  try {
    const res = await getData("https://api.dyp.finance/api/circulating-supply");
    window.get_circulating_supply = parseInt(res);
    //console.log(res)
  } catch (err) {
    console.log(err);
  }
  return window.get_circulating_supply;
}

window.get_circulating_supply_idyp = 0;

async function getCirculatingSupplyiDYP() {
  try {
    const res = await getData(
      "https://api.dyp.finance/api/circulating-supply-idyp"
    );
    window.get_circulating_supply_idyp = parseInt(res);
    //console.log(res)
  } catch (err) {
    console.log(err);
  }
  return window.get_circulating_supply_idyp;
}

window.getCirculatingSupplyiDYP = getCirculatingSupplyiDYP;

const getCirculatingSupply = async () => {
  const circSupply = await test();
  return circSupply;
};
window.getCirculatingSupply = getCirculatingSupply;

window.getTvlBsc = 0;

async function getTvlBscApi() {
  try {
    const res = await getData("https://api.dyp.finance/tvl-bsc");
    window.getTvlBsc = parseInt(res);
    //console.log(res)
  } catch (err) {
    console.log(err);
  }
}

async function get_the_graph_eth() {
  try {
    const res = await getData("https://api.dyp.finance/api/the_graph_eth");
    window.the_graph_result = res.the_graph_eth;
  } catch (err) {
    console.log(err);
  }
}

async function get_the_graph_bsc() {
  try {
    const res = await getData("https://api.dyp.finance/api/the_graph_bsc");
    window.the_graph_result_BSC = res.the_graph_bsc;
  } catch (err) {
    console.log(err);
  }
}

async function get_the_graph_avax() {
  try {
    const res = await getData("https://api.dyp.finance/api/the_graph_avax");
    window.the_graph_result_AVAX = res.the_graph_avax;
  } catch (err) {
    console.log(err);
  }
}

async function get_the_graph_bsc_v2() {
  try {
    const res = await getData("https://api.dyp.finance/api/the_graph_bsc_v2");
    window.the_graph_result_bsc_v2 = res.the_graph_bsc_v2;
  } catch (err) {
    console.log(err);
  }
}

async function get_the_graph_eth_v2() {
  try {
    const res = await getData("https://api.dyp.finance/api/the_graph_eth_v2");
    window.the_graph_result_eth_v2 = res.the_graph_eth_v2;
  } catch (err) {
    console.log(err);
  }
}

async function get_the_graph_avax_v2() {
  try {
    const res = await getData("https://api.dyp.finance/api/the_graph_avax_v2");
    window.the_graph_result_avax_v2 = res.the_graph_avax_v2;
  } catch (err) {
    console.log(err);
  }
}

window.totaltvl = 0;

async function getTotalTvl() {
  try {
    const res = await getData("https://api.dyp.finance/api/totaltvl");
    window.totaltvl = parseInt(res);
    //console.log(res)
  } catch (err) {
    console.log(err);
  }

  return window.totaltvl;
}

window.getTotalTvl = getTotalTvl;

async function getHolders() {
  try {
    const res = await getData("https://api.dyp.finance/api/getHolders");
    window.totalHolders = parseInt(res);
  } catch (err) {
    console.log(err);
  }

  return window.totalHolders;
}

window.getHolders = getHolders;

window.highestAPY = {};

async function getHighestAPYApi() {
  try {
    const res = await getData("https://api.dyp.finance/api/highest-apy");
    window.highestAPY = res;
    //console.log(res)
  } catch (err) {
    console.log(err);
  }
  return window.highestAPY;
}

window.hashMapApy = {};

async function getHashMapApy() {
  try {
    const res = await getData("https://api.dyp.finance/api/getHashMapApy");
    window.hashMapApy = res;
    //console.log(res)
  } catch (err) {
    console.log(err);
  }
  return window.hashMapApy;
}

window.getHashMapApy = getHashMapApy;

const getHighestAPY = async () => {
  const highestApy = await getHighestAPYApi();
  return highestApy;
};
window.getHighestAPY = getHighestAPY;

window.jsonTotalPaid = {};

async function getTotalPaidApi() {
  try {
    const res = await getData("https://api.dyp.finance/api/totalpaid");
    window.jsonTotalPaid = res;
    //console.log('total paic', res)
  } catch (err) {
    console.log(err);
  }
  return window.jsonTotalPaid;
}

const getTotalPaid = async () => {
  const totalPaid = await getTotalPaidApi();
  return totalPaid;
};
window.getTotalPaid = getTotalPaid;

async function getAprPangolin() {
  try {
    const res = await getData("https://api.pangolin.exchange/pangolin/apr2/28");
    window.pangolinApr = res;
  } catch (err) {
    console.log(err);
  }
  return window.pangolinApr;
}

window.getAprPangolin = getAprPangolin;

window.tvlStakingEth = [];

async function getTvlStakingEth() {
  try {
    const res = await getData("https://api.dyp.finance/api/tvlStakingEth");
    window.tvlStakingEth = res.ethTotalStaking;
    //console.log('total paic', res)
  } catch (err) {
    console.log(err);
  }
  return window.tvlStakingEth;
}

async function refreshBalance() {
  await getTvlStakingEth();

  let ethTotal = window.tvlStakingEth;
  //let usdPerToken = the_graph_result.token_data ? the_graph_result.token_data["0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17"].token_price_usd : 1
  //console.log({usd_per_token})
  //let reward_token = window.reward_token

  //let token_contract = new window.infuraWeb3.eth.Contract(window.TOKEN_ABI, TOKEN_ADDRESS, {from: undefined})

  // let [usdPerToken] = await Promise.all([window.getPrice('defi-yield-protocol')])

  // let _tvl30 = await token_contract.methods.balanceOf('0x7fc2174670d672ad7f666af0704c2d961ef32c73').call()
  // _tvl30 = _tvl30 / 1e18 * usdPerToken
  // window._tvl30 = _tvl30
  //
  // let _tvl60 = await token_contract.methods.balanceOf('0x036e336ea3ac2e255124cf775c4fdab94b2c42e4').call()
  // _tvl60 = _tvl60 / 1e18 * usdPerToken
  // window._tvl60 = _tvl60
  //
  // let _tvl90 = await token_contract.methods.balanceOf('0x0a32749d95217b7ee50127e24711c97849b70c6a').call()
  // _tvl90 = _tvl90 / 1e18 * usdPerToken
  // window._tvl90 = _tvl90
  //
  // let _tvl120 = await token_contract.methods.balanceOf('0x82df1450efd6b504ee069f5e4548f2d5cb229880').call()
  // _tvl120 = (_tvl120 / 1e18 + 0.1) * usdPerToken
  // window._tvl120 = _tvl120

  window._tvl30 = ethTotal.tvl30;
  window._tvl60 = ethTotal.tvl60;
  window._tvl90 = ethTotal.tvl90;
  window._tvl120 = ethTotal.tvl120;

  let valueee = window._tvl30 + window._tvl60 + window._tvl90 + window._tvl120;
  return valueee;
}

/* this is for BSC only */
window.highApy_BSC = 0;
window.COMBINED_TVL_BSC = 0;
window.CALLED_ONCE_BSC = false;
window.CALLED_ONCE_2_BSC = false;

const GetHighAPY_BSC = async () => {
  let highApyArray = [];
  if (window.CALLED_ONCE_2_BSC) {
    return window.highApy_BSC;
  }
  window.CALLED_ONCE_2_BSC = true;
  let the_graph_result_BSC = await refresh_the_graph_result_BSC();
  let highApy = 0;
  if (!the_graph_result_BSC.LP_IDs_BSC_V2data) return 0;

  let lp_ids = Object.keys(the_graph_result_BSC.lp_data);
  for (let id of lp_ids) {
    highApy = the_graph_result_BSC.lp_data[id].apy;
    highApyArray.push(highApy);
    //console.log('highhh', highApy)
  }
  highApyArray.sort(function (a, b) {
    return a - b;
  });
  //console.log('bbbbb', highApyArray)

  highApy = highApyArray[highApyArray.length - 1];

  window.highApy_BSC = highApy;
  return highApy;
};
window.GetHighAPY_BSC = GetHighAPY_BSC;

const getCombinedTvlUsd_BSC = async () => {
  if (window.CALLED_ONCE_BSC) {
    return window.COMBINED_TVL;
  }
  window.CALLED_ONCE = true;
  let the_graph_result_bsc = await refresh_the_graph_result_BSC();
  let tvl = 0;
  if (!the_graph_result_bsc.lp_data) return 0;

  let lp_ids = Object.keys(the_graph_result_bsc.lp_data);
  for (let id of lp_ids) {
    tvl += the_graph_result_bsc.lp_data[id].tvl_usd * 1 || 0;
  }
  window.COMBINED_TVL_BSC = tvl;
  return tvl;
};

window.getCombinedTvlUsd_BSC = getCombinedTvlUsd_BSC;

window.get_circulating_supply = 0;

window.COMBINED_TVL = 0;
window.CALLED_ONCE = false;

const WETH_ADDRESS = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

const getWethBalance = async (contractAddress) => {
  let contract = new window.infuraWeb3.eth.Contract(
    window.TOKEN_ABI,
    WETH_ADDRESS,
    { from: undefined }
  );
  return await contract.methods.balanceOf(contractAddress).call();
};

const getWethPaidOut = async (contractAddress) => {
  let contract = new window.infuraWeb3.eth.Contract(
    window.STAKING_ABI,
    contractAddress,
    { from: undefined }
  );
  let wethPaidOut = await contract.methods.totalClaimedRewardsEth().call();
  let wethBalance = await getWethBalance(contractAddress);
  return new window.BigNumber(wethBalance).plus(wethPaidOut).toString(10);
};

const getCombinedTvlUsd = async () => {
  await get_the_graph_eth();
  await get_the_graph_bsc();
  await get_the_graph_avax();
  await get_the_graph_bsc_v2();
  await get_the_graph_avax_v2();
  await get_the_graph_eth_v2();
  await getTvlBscApi();
  let tvl = await getTotalTvl();
  GetHighAPY_BSC();
  let hello = await refreshBalance();
  let tvleth = 0;
  window.tvl_farming = hello;
  if (window.CALLED_ONCE) {
    return window.totaltvl;
  }
  window.CALLED_ONCE = true;
  // //refresh_the_graph_result_BSC()
  // //let the_graph_result = await refresh_the_graph_result()
  // let tvl = 0
  // if (!the_graph_result.lp_data) return 0
  //
  let lp_ids = Object.keys(the_graph_result.lp_data);
  for (let id of lp_ids) {
    tvleth += the_graph_result.lp_data[id].tvl_usd * 1 || 0;
  }
  //
  // let tvlAvax1 = window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[0]].tvl_usd +
  //     window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[1]].tvl_usd +
  //     window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[2]].tvl_usd +
  //     window.the_graph_result_AVAX.lp_data[LP_IDs_AVAX.eth[3]].tvl_usd
  //
  window.COMBINED_TVL = tvleth;
  // tvl = window.totaltvl + tvlAvax1
  return tvl;
};

const PaidOutETH = async () => {
  let wethPaiOutTotal = 0;
  let lp_ids = LP_ID_LIST;
  for (let id of lp_ids) {
    let contractAddress = id.split("-")[1];
    let wethPaidOut = await Promise.all([getWethPaidOut(contractAddress)]);
    wethPaiOutTotal += parseInt(wethPaidOut, 10);
  }
  return wethPaiOutTotal / 1e18;
};
window.PaidOutETH = PaidOutETH;

const PaidEthInUsd = async () => {
  let [usdPerToken] = await Promise.all([window.getPrice("ethereum")]);
  let wethPaidOutTotal = await PaidOutETH();
  return wethPaidOutTotal * usdPerToken;
};

window.PaidEthInUsd = PaidEthInUsd;

window.highApy = 0;

const GetHighAPY = async () => {
  let highApyArray = [];
  if (window.CALLED_ONCE_2) {
    return window.highApy;
  }
  window.CALLED_ONCE_2 = true;
  let the_graph_result = await refresh_the_graph_result();
  let highApy = 0;
  if (!the_graph_result.lp_data) return 0;

  let lp_ids = Object.keys(the_graph_result.lp_data);
  for (let id of lp_ids) {
    highApy = the_graph_result.lp_data[id].apy;
    highApyArray.push(highApy);
    //console.log('highhh', highApy)
  }
  highApyArray.sort(function (a, b) {
    return a - b;
  });
  //console.log('bbbbb', highApyArray)

  highApy = highApyArray[highApyArray.length - 1];
  window.highApy = highApy;
  return highApy;
};
window.GetHighAPY = GetHighAPY;

const FarmingTvl = async () => {
  let hello = await refreshBalance();
  return hello;
};
window.FarmingTvl = FarmingTvl;
window.getCombinedTvlUsd = getCombinedTvlUsd;

function getData(ajaxurl) {
  return $.ajax({
    url: ajaxurl,
    type: "GET",
  });
}

function getPrice(coingecko_id = "ethereum", vs_currency = "usd") {
  return new Promise((resolve, reject) => {
    window.$.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_id}&vs_currencies=${vs_currency}`
    )
      .then((result) => {
        resolve(result[coingecko_id][vs_currency]);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

window.getPrice = getPrice;

window.PANCAKESWAP_ROUTER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_factory", type: "address" },
      { internalType: "address", name: "_WETH", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "amountADesired", type: "uint256" },
      { internalType: "uint256", name: "amountBDesired", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amountTokenDesired", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountIn",
    outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountOut",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsIn",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsOut",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "reserveA", type: "uint256" },
      { internalType: "uint256", name: "reserveB", type: "uint256" },
    ],
    name: "quote",
    outputs: [{ internalType: "uint256", name: "amountB", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapETHForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
async function getPancakeswapRouterContract(
  address = window.config.pancakeswap_router_address
) {
  return new window.bscWeb3.eth.Contract(
    window.PANCAKESWAP_ROUTER_ABI,
    address,
    { from: undefined }
  );
}

async function getPangolinRouterContract(
  address = window.config.pangolin_router_address
) {
  return new window.avaxWeb3.eth.Contract(window.PANGOLIN_ROUTER_ABI, address, {
    from: undefined,
  });
}

async function getPriceiDYP() {
  let amount = new BigNumber(1000000000000000000).toFixed(0);
  let router = await window.getPancakeswapRouterContract();
  let WETH = await router.methods.WETH().call();
  let platformTokenAddress = window.config.BUSD_address;
  let rewardTokenAddress = window.config.reward_token_idyp_address;
  let path = [
    ...new Set(
      [rewardTokenAddress, WETH, platformTokenAddress].map((a) =>
        a.toLowerCase()
      )
    ),
  ];
  let _amountOutMin = await router.methods.getAmountsOut(amount, path).call();
  _amountOutMin = _amountOutMin[_amountOutMin.length - 1];
  _amountOutMin = new BigNumber(_amountOutMin).div(1e18).toFixed(18);
  return _amountOutMin;
}

window.getPriceiDYP = getPriceiDYP;

async function getPriceiDYPAvax() {
  let amount = new BigNumber(1000000000000000000).toFixed(0);
  let router = await window.getPangolinRouterContract();
  let WETH = await router.methods.WAVAX().call();
  let platformTokenAddress = window.config.USDCe_address;
  let rewardTokenAddress = window.config.reward_token_idyp_address;
  let path = [
    ...new Set(
      [rewardTokenAddress, WETH, platformTokenAddress].map((a) =>
        a.toLowerCase()
      )
    ),
  ];
  let _amountOutMin = await router.methods.getAmountsOut(amount, path).call();
  _amountOutMin = _amountOutMin[_amountOutMin.length - 1];
  _amountOutMin = new BigNumber(_amountOutMin).div(1e6).toFixed(18);
  return _amountOutMin;
}

window.getPriceiDYPAvax = getPriceiDYPAvax;

async function getPriceiDYPEth() {
  let amount = new BigNumber(1000000000000000000).toFixed(0);
  let router = await window.getUniswapRouterContract();
  let WETH = await router.methods.WETH().call();
  let platformTokenAddress = window.config.USDC_address;
  let rewardTokenAddress = window.config.reward_token_idyp_address;
  let path = [
    ...new Set(
      [rewardTokenAddress, WETH, platformTokenAddress].map((a) =>
        a.toLowerCase()
      )
    ),
  ];
  let _amountOutMin = await router.methods.getAmountsOut(amount, path).call();
  _amountOutMin = _amountOutMin[_amountOutMin.length - 1];
  _amountOutMin = new BigNumber(_amountOutMin).div(1e6).toFixed(18);
  return _amountOutMin;
}

window.getPriceiDYPEth = getPriceiDYPEth;

/*buyback*/
async function getTokenHolderBalance(holder, network) {
  if (network == 1) {
    let tokenContract = new window.infuraWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.reward_token_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  if (network == 2) {
    let tokenContract = new window.bscWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.reward_token_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  if (network == 3) {
    let tokenContract = new window.avaxWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.reward_token_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  return 0;
}

/* buyback V2 */
async function getTokenHolderBalanceiDYP(holder, network) {
  if (network == 1) {
    let tokenContract = new window.infuraWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.reward_token_idyp_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  if (network == 2) {
    let tokenContract = new window.bscWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.reward_token_idyp_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  if (network == 3) {
    let tokenContract = new window.avaxWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.reward_token_idyp_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  return 0;
}

/* iDYP */

window.TOKEN_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "approveAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "initialSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferAnyERC20Token",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

window.FUNDRAISER_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "DepositTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "DepositTokenRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "SaleStart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "SaleStop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_verifyAddress",
        type: "address",
      },
    ],
    name: "VerifyAddressSet",
    type: "event",
  },
  {
    inputs: [],
    name: "CHAIN_ID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEPOSIT_TOKEN_DECIMALS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FUNDRAISER_GOAL_IN_DEPOSIT_TOKENS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_TOKEN_PER_DEPOSIT_TOKEN",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_DEPOSIT_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_REWARD_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "addTrustedDepositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claimAnyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToDeposit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountOutMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "contributionLimit",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "depositedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfHolders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_holder",
        type: "address",
      },
    ],
    name: "getPendingDivs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "getStakersList",
    outputs: [
      {
        internalType: "address[]",
        name: "stakers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "stakingTimestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lastClaimedTimeStamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "stakedTokens",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "openSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "removeTrustedDepositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newVerifyAddress",
        type: "address",
      },
    ],
    name: "setVerifyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakingTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDepositedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "trustedDepositTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV2Router",
    outputs: [
      {
        internalType: "contract IUniswapV2Router",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

window.BUYBACK_STAKING_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "DepositTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "DepositTokenRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "EmergencyDeclared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_CAN_CLAIM_AFTER",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EMERGENCY_WAIT_TIME",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCKUP_TIME",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_INTERVAL",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_RATE_X_100",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_TOKEN_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_tokenAddress", type: "address" },
    ],
    name: "addTrustedDepositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adminClaimableTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "claimAnyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractStartTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "declareEmergency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "depositedTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountToWithdraw", type: "uint256" },
    ],
    name: "emergencyUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfHolders",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_holder", type: "address" }],
    name: "getPendingDivs",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "startIndex", type: "uint256" },
      { internalType: "uint256", name: "endIndex", type: "uint256" },
    ],
    name: "getStakersList",
    outputs: [
      { internalType: "address[]", name: "stakers", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "stakingTimestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lastClaimedTimeStamps",
        type: "uint256[]",
      },
      { internalType: "uint256[]", name: "stakedTokens", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_holder", type: "address" }],
    name: "getTotalPendingDivs",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isEmergency",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastClaimedTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_tokenAddress", type: "address" },
    ],
    name: "removeTrustedDepositToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "rewardsPendingClaim",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountToDeposit", type: "uint256" },
      { internalType: "address", name: "depositToken", type: "address" },
      { internalType: "uint256", name: "_amountOutMin", type: "uint256" },
      { internalType: "uint256", name: "_deadline", type: "uint256" },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "stakingTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimedRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDepositedTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalEarnedTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "trustedDepositTokens",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV2Router",
    outputs: [
      { internalType: "contract IUniswapV2Router", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountToWithdraw", type: "uint256" },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

/**
 *
 * @param {"FEE_TOKEN" | "NFT" | "MARKETPLACE"} key
 */
async function getContractiDYP(ABI, address) {
  // remove caching logic (new contract call every time for web3 change allowance)
  // if (!window.cached_contracts[key]) {
  return new window.web3.eth.Contract(ABI, address, {
    from: await getCoinbase(),
  });
  // }

  // return window.cached_contracts[key]
}

function param(name) {
  var f = new RegExp("\\b" + name + "=([^&]+)").exec(document.location.search);
  if (f) return decodeURIComponent(f[1].replace(/\+/g, " "));
}
window.param = param;

// helper functions for csv json and file reading
// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray(strData, strDelimiter) {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = strDelimiter || ",";

  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    "(\\" +
      strDelimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      "\\r\\n]*))",
    "gi"
  );

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    var strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];
    }

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return arrData;
}

function csvToJSON(csv) {
  csv = csv.trim();
  let arr = CSVToArray(csv);
  return arr.slice(1).map((a) => {
    let res = {};
    arr[0].forEach((field, i) => (res[field] = a[i]));
    return res;
  });
}

function readAsText(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      resolve(reader.result);
    });
    reader.readAsText(file);
  });
}

window.sign = async function (msg, account) {
  let signature = await window.web3.eth.personal.sign(msg, account);
  return signature;
};

window.PANGOLIN_ROUTER_ABI = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [
      { type: "address", name: "_factory", internalType: "address" },
      { type: "address", name: "_WAVAX", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "WAVAX",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amountA", internalType: "uint256" },
      { type: "uint256", name: "amountB", internalType: "uint256" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
    ],
    name: "addLiquidity",
    inputs: [
      { type: "address", name: "tokenA", internalType: "address" },
      { type: "address", name: "tokenB", internalType: "address" },
      { type: "uint256", name: "amountADesired", internalType: "uint256" },
      { type: "uint256", name: "amountBDesired", internalType: "uint256" },
      { type: "uint256", name: "amountAMin", internalType: "uint256" },
      { type: "uint256", name: "amountBMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [
      { type: "uint256", name: "amountToken", internalType: "uint256" },
      { type: "uint256", name: "amountAVAX", internalType: "uint256" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
    ],
    name: "addLiquidityAVAX",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "amountTokenDesired", internalType: "uint256" },
      { type: "uint256", name: "amountTokenMin", internalType: "uint256" },
      { type: "uint256", name: "amountAVAXMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "factory",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [{ type: "uint256", name: "amountIn", internalType: "uint256" }],
    name: "getAmountIn",
    inputs: [
      { type: "uint256", name: "amountOut", internalType: "uint256" },
      { type: "uint256", name: "reserveIn", internalType: "uint256" },
      { type: "uint256", name: "reserveOut", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [{ type: "uint256", name: "amountOut", internalType: "uint256" }],
    name: "getAmountOut",
    inputs: [
      { type: "uint256", name: "amountIn", internalType: "uint256" },
      { type: "uint256", name: "reserveIn", internalType: "uint256" },
      { type: "uint256", name: "reserveOut", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "getAmountsIn",
    inputs: [
      { type: "uint256", name: "amountOut", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "getAmountsOut",
    inputs: [
      { type: "uint256", name: "amountIn", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "pure",
    outputs: [{ type: "uint256", name: "amountB", internalType: "uint256" }],
    name: "quote",
    inputs: [
      { type: "uint256", name: "amountA", internalType: "uint256" },
      { type: "uint256", name: "reserveA", internalType: "uint256" },
      { type: "uint256", name: "reserveB", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amountA", internalType: "uint256" },
      { type: "uint256", name: "amountB", internalType: "uint256" },
    ],
    name: "removeLiquidity",
    inputs: [
      { type: "address", name: "tokenA", internalType: "address" },
      { type: "address", name: "tokenB", internalType: "address" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
      { type: "uint256", name: "amountAMin", internalType: "uint256" },
      { type: "uint256", name: "amountBMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amountToken", internalType: "uint256" },
      { type: "uint256", name: "amountAVAX", internalType: "uint256" },
    ],
    name: "removeLiquidityAVAX",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
      { type: "uint256", name: "amountTokenMin", internalType: "uint256" },
      { type: "uint256", name: "amountAVAXMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "amountAVAX", internalType: "uint256" }],
    name: "removeLiquidityAVAXSupportingFeeOnTransferTokens",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
      { type: "uint256", name: "amountTokenMin", internalType: "uint256" },
      { type: "uint256", name: "amountAVAXMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amountToken", internalType: "uint256" },
      { type: "uint256", name: "amountAVAX", internalType: "uint256" },
    ],
    name: "removeLiquidityAVAXWithPermit",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
      { type: "uint256", name: "amountTokenMin", internalType: "uint256" },
      { type: "uint256", name: "amountAVAXMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
      { type: "bool", name: "approveMax", internalType: "bool" },
      { type: "uint8", name: "v", internalType: "uint8" },
      { type: "bytes32", name: "r", internalType: "bytes32" },
      { type: "bytes32", name: "s", internalType: "bytes32" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [{ type: "uint256", name: "amountAVAX", internalType: "uint256" }],
    name: "removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens",
    inputs: [
      { type: "address", name: "token", internalType: "address" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
      { type: "uint256", name: "amountTokenMin", internalType: "uint256" },
      { type: "uint256", name: "amountAVAXMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
      { type: "bool", name: "approveMax", internalType: "bool" },
      { type: "uint8", name: "v", internalType: "uint8" },
      { type: "bytes32", name: "r", internalType: "bytes32" },
      { type: "bytes32", name: "s", internalType: "bytes32" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256", name: "amountA", internalType: "uint256" },
      { type: "uint256", name: "amountB", internalType: "uint256" },
    ],
    name: "removeLiquidityWithPermit",
    inputs: [
      { type: "address", name: "tokenA", internalType: "address" },
      { type: "address", name: "tokenB", internalType: "address" },
      { type: "uint256", name: "liquidity", internalType: "uint256" },
      { type: "uint256", name: "amountAMin", internalType: "uint256" },
      { type: "uint256", name: "amountBMin", internalType: "uint256" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
      { type: "bool", name: "approveMax", internalType: "bool" },
      { type: "uint8", name: "v", internalType: "uint8" },
      { type: "bytes32", name: "r", internalType: "bytes32" },
      { type: "bytes32", name: "s", internalType: "bytes32" },
    ],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "swapAVAXForExactTokens",
    inputs: [
      { type: "uint256", name: "amountOut", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "swapExactAVAXForTokens",
    inputs: [
      { type: "uint256", name: "amountOutMin", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "payable",
    outputs: [],
    name: "swapExactAVAXForTokensSupportingFeeOnTransferTokens",
    inputs: [
      { type: "uint256", name: "amountOutMin", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "swapExactTokensForAVAX",
    inputs: [
      { type: "uint256", name: "amountIn", internalType: "uint256" },
      { type: "uint256", name: "amountOutMin", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "swapExactTokensForAVAXSupportingFeeOnTransferTokens",
    inputs: [
      { type: "uint256", name: "amountIn", internalType: "uint256" },
      { type: "uint256", name: "amountOutMin", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "swapExactTokensForTokens",
    inputs: [
      { type: "uint256", name: "amountIn", internalType: "uint256" },
      { type: "uint256", name: "amountOutMin", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    inputs: [
      { type: "uint256", name: "amountIn", internalType: "uint256" },
      { type: "uint256", name: "amountOutMin", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "swapTokensForExactAVAX",
    inputs: [
      { type: "uint256", name: "amountOut", internalType: "uint256" },
      { type: "uint256", name: "amountInMax", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [
      { type: "uint256[]", name: "amounts", internalType: "uint256[]" },
    ],
    name: "swapTokensForExactTokens",
    inputs: [
      { type: "uint256", name: "amountOut", internalType: "uint256" },
      { type: "uint256", name: "amountInMax", internalType: "uint256" },
      { type: "address[]", name: "path", internalType: "address[]" },
      { type: "address", name: "to", internalType: "address" },
      { type: "uint256", name: "deadline", internalType: "uint256" },
    ],
  },
  { type: "receive", stateMutability: "payable" },
];
window.UNISWAP_ROUTER_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_factory", type: "address" },
      { internalType: "address", name: "_WETH", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "amountADesired", type: "uint256" },
      { internalType: "uint256", name: "amountBDesired", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amountTokenDesired", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "addLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountIn",
    outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "reserveIn", type: "uint256" },
      { internalType: "uint256", name: "reserveOut", type: "uint256" },
    ],
    name: "getAmountOut",
    outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsIn",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
    ],
    name: "getAmountsOut",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "reserveA", type: "uint256" },
      { internalType: "uint256", name: "reserveB", type: "uint256" },
    ],
    name: "quote",
    outputs: [{ internalType: "uint256", name: "amountB", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidity",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETH",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "removeLiquidityETHSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountToken", type: "uint256" },
      { internalType: "uint256", name: "amountETH", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
      { internalType: "uint256", name: "amountETHMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    outputs: [{ internalType: "uint256", name: "amountETH", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenA", type: "address" },
      { internalType: "address", name: "tokenB", type: "address" },
      { internalType: "uint256", name: "liquidity", type: "uint256" },
      { internalType: "uint256", name: "amountAMin", type: "uint256" },
      { internalType: "uint256", name: "amountBMin", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "approveMax", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "removeLiquidityWithPermit",
    outputs: [
      { internalType: "uint256", name: "amountA", type: "uint256" },
      { internalType: "uint256", name: "amountB", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapETHForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOutMin", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactETH",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "amountInMax", type: "uint256" },
      { internalType: "address[]", name: "path", type: "address[]" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "swapTokensForExactTokens",
    outputs: [
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];
async function getUniswapRouterContract(
  address = window.config.uniswap_router_address,
  abi = window.UNISWAP_ROUTER_ABI
) {
  return new window.infuraWeb3.eth.Contract(abi, address, { from: undefined });
}

window.getBuybackStakingDepositAmount = async (account) => {
  let contract = await window.getContractiDYP(
    window.BUYBACK_STAKING_ABI,
    window.config.buyback_staking_address
  );
  let depositedAmount = await contract.methods.depositedTokens(account).call();
  depositedAmount = new BigNumber(depositedAmount).div(1e18).toFixed(18);
  return depositedAmount;
};

window.getTierInfo = async (account) => {
  let depositedAmount = await window.getBuybackStakingDepositAmount(account);
  depositedAmount = Number(depositedAmount) || 0;

  let tier = 0;

  for (let i = 0; i < window.config.tier_dyp_deposits.length; i++) {
    if (window.config.tier_dyp_deposits[i] <= depositedAmount) {
      tier = i;
    }
  }

  let maxDepositAmount =
    window.config.tier_dyp_deposits[window.config.tier_dyp_deposits.length - 1];

  let progressDepositAmount = Math.min(maxDepositAmount, depositedAmount);
  let progressPercent =
    ((progressDepositAmount / maxDepositAmount) * 100).toFixed(2) * 1;

  return { tier, depositedAmount, progressPercent };
};

window.getChainId = async () => {
  let chainId = "";
  if (window.web3) chainId = await web3.eth.getChainId();
  return chainId;
};

async function checkWhitelistNft(address) {
  try {
    const res = await getData(
      "https://launchpad-api.dyp.finance/api/whitelist-nft-check?address=" +
        address
    );
    return res.result;
  } catch (err) {
    console.log(err);
  }
}

window.checkWhitelistNft = checkWhitelistNft;

let LP_IDs_BSC_V2 = {
  wbnb: [
    "0x1bc61d08a300892e784ed37b2d0e63c85d1d57fb-0x537dc4fee298ea79a7f65676735415f1e2882f92",
    "0x1bc61d08a300892e784ed37b2d0e63c85d1d57fb-0x219717bf0bc33b2764a6c1a772f75305458bda3d",
    "0x1bc61d08a300892e784ed37b2d0e63c85d1d57fb-0xd1151a2434931f34bcfa6c27639b67c1a23d93af",
    "0x1bc61d08a300892e784ed37b2d0e63c85d1d57fb-0xed869ba773c3f1a1adcc87930ca36ee2dc73435d",
    "0x1bc61d08a300892e784ed37b2d0e63c85d1d57fb-0x415b1624710296717fa96cad84f53454e8f02d18",
  ],
};

window.LP_IDs_BSC_V2 = LP_IDs_BSC_V2;

let LP_IDs_AVAX_V2 = {
  wavax: [
    "0x66eecc97203704d9e2db4a431cb0e9ce92539d5a-0x035d65babf595758d7a439d5870badc44218d028",
    "0x66eecc97203704d9e2db4a431cb0e9ce92539d5a-0x6c325dfea0d18387d423c869e328ef005cba024f",
    "0x66eecc97203704d9e2db4a431cb0e9ce92539d5a-0x85c4f0cea0994de365dc47ba22dd0fd9899f93ab",
    "0x66eecc97203704d9e2db4a431cb0e9ce92539d5a-0x6f5dc6777b2b4667bf183d093111867239518af5",
    "0x66eecc97203704d9e2db4a431cb0e9ce92539d5a-0x10e105676cac55b74cb6500a8fb5d2f84804393d",
  ],
};

window.LP_IDs_AVAX_V2 = LP_IDs_AVAX_V2;

let LP_IDs_ETH_V2 = {
  weth: [
    "0x7463286a379f6f128058bb92b355e3d6e8bdb219-0xa68bbe793ad52d0e62bbf34a67f02235ba69e737",
    "0x7463286a379f6f128058bb92b355e3d6e8bdb219-0xcfd970494a0b3c52a81dce1ecbff2245e6b0b0e7",
    "0x7463286a379f6f128058bb92b355e3d6e8bdb219-0x49d02cf81cc352517350f25e200365360426af94",
    "0x7463286a379f6f128058bb92b355e3d6e8bdb219-0xf51965c570419f2576ec9aead6a3c5f674424a99",
    "0x7463286a379f6f128058bb92b355e3d6e8bdb219-0x997a7254e5567d0a70329defcc1e4d29d71ba224",
  ],
};

window.LP_IDs_ETH_V2 = LP_IDs_ETH_V2;

const VAULT_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CompoundRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EtherRewardDisbursed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PlatformTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PlatformTokenRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenRewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenRewardDisbursed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_CAN_CLAIM_AFTER",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BURN_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE_PERCENT_TO_BUYBACK_X_100",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FEE_PERCENT_X_100",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCKUP_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_ETH_FEE_IN_WEI",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE_HUNDRED_X_100",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POINT_MULTIPLIER",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_INTERVAL",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_RETURN_PERCENT_X_100",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_CTOKEN_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_DEPOSIT_TOKEN_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_PLATFORM_TOKEN_ADDRESS",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "addPlatformTokenBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "cTokenBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountOutMin_platformTokens",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "claimAnyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimCompoundDivs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimEthDivs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "claimExtraTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountOutMin_platformTokens",
        type: "uint256",
      },
    ],
    name: "claimPlatformTokenDivs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimTokenDivs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractStartTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "_amountOutMin_ethFeeBuyBack",
        type: "uint256",
      },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "depositTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "depositTokenBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "ethDivsBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "ethDivsOwing",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_cTokenBalance", type: "uint256" },
    ],
    name: "getConvertedBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "startIndex", type: "uint256" },
      { internalType: "uint256", name: "endIndex", type: "uint256" },
    ],
    name: "getDepositorsList",
    outputs: [
      { internalType: "address[]", name: "stakers", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "stakingTimestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lastClaimedTimeStamps",
        type: "uint256[]",
      },
      { internalType: "uint256[]", name: "stakedTokens", type: "uint256[]" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getEstimatedCompoundDivsOwing",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getExchangeRateCurrent",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getExchangeRateStored",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfHolders",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastClaimedTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastEthDivPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lastTokenDivPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "platformTokenDivsBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "platformTokenDivsOwing",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "tokenBalances",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "tokenDivsBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "tokenDivsOwing",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDepositedTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalEarnedCompoundDivs",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalEarnedEthDivs",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalEarnedPlatformTokenDivs",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalEarnedTokenDivs",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEthDisbursed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEthDivPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokenDivPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalTokensDepositedByUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokensDisbursed",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "totalTokensWithdrawnByUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapRouterV2",
    outputs: [
      { internalType: "contract IUniswapV2Router", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "_amountOutMin_ethFeeBuyBack",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountOutMin_tokenFeeBuyBack",
        type: "uint256",
      },
      { internalType: "uint256", name: "deadline", type: "uint256" },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  { stateMutability: "payable", type: "receive" },
];

const totalDepositedTokens = async (contractAddress) => {
  let contract = new window.infuraWeb3.eth.Contract(
    VAULT_ABI,
    contractAddress,
    { from: undefined }
  );
  let totalDepositedTokens = await contract.methods
    .totalDepositedTokens()
    .call();

  let contractiDYP = new window.infuraWeb3.eth.Contract(
    window.TOKEN_ABI,
    "0xBD100d061E120b2c67A24453CF6368E63f1Be056",
    { from: undefined }
  );
  let balanceOfiDYP = await contractiDYP.methods
    .balanceOf(contractAddress)
    .call();

  totalDepositedTokens = new window.BigNumber(totalDepositedTokens);

  return [totalDepositedTokens, balanceOfiDYP];
};

const getTotalTvlVaults = async () => {
  let [_usdEth, _usdBtc, _usdiDYP] = await Promise.all([
    window.getPrice("weth"),
    window.getPrice("bitcoin"),
    window.getPrice("idefiyieldprotocol"),
  ]);

  let [_ethDeposit, iDYP1] = await totalDepositedTokens(
    "0x28eabA060E5EF0d41eeB20d41aafaE8f685739d9"
  );
  let [_btcDeposit, iDYP2] = await totalDepositedTokens(
    "0x2F2cff66fEB7320FC9Adf91b7B74bFb5a80C7C35"
  );
  let [_usdtDeposit, iDYP3] = await totalDepositedTokens(
    "0xA987aEE0189Af45d5FA95a9FBBCB4374228f375E"
  );
  let [_usdcDeposit, iDYP4] = await totalDepositedTokens(
    "0x251B9ee6cEd97565A821C5608014a107ddc9C98F"
  );
  let [_daiDeposit, iDYP5] = await totalDepositedTokens(
    "0x54F30bFfeb925F47225e148f0bAe17a452d6b8c0"
  );

  let usdEth = new window.BigNumber(_ethDeposit)
    .div(1e18)
    .times(_usdEth)
    .toFixed(2);
  let usdBtc = new window.BigNumber(_btcDeposit)
    .div(1e8)
    .times(_usdBtc)
    .toFixed(2);
  let usdUsdt = new window.BigNumber(_usdtDeposit).div(1e6).toFixed(2);
  let usdUsdc = new window.BigNumber(_usdcDeposit).div(1e6).toFixed(2);
  let usdDai = new window.BigNumber(_daiDeposit).div(1e18).toFixed(2);

  let totaliDYPDeposited = new window.BigNumber(iDYP1)
    .plus(iDYP2)
    .plus(iDYP3)
    .plus(iDYP4)
    .plus(iDYP5);
  totaliDYPDeposited = new window.BigNumber(totaliDYPDeposited)
    .div(1e18)
    .toFixed(2);

  let usdiDYP = new window.BigNumber(totaliDYPDeposited)
    .times(_usdiDYP)
    .toFixed(2);

  let tvlTotal =
    parseInt(usdEth) +
    parseInt(usdBtc) +
    parseInt(usdUsdt) +
    parseInt(usdUsdc) +
    parseInt(usdDai) +
    parseInt(usdiDYP);

  return tvlTotal;
};

window.getTotalTvlVaults = getTotalTvlVaults;

/* DYPS */

async function getTokenHolderBalanceDYPS(holder, network) {
  if (network == 1) {
    let tokenContract = new window.infuraWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.token_dyps_eth_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  if (network == 2) {
    let tokenContract = new window.bscWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.token_dyps_bsc_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  if (network == 3) {
    let tokenContract = new window.avaxWeb3.eth.Contract(
      window.TOKEN_ABI,
      window.config.token_dyps_avax_address,
      { from: undefined }
    );
    return await tokenContract.methods.balanceOf(holder).call();
  }
  return 0;
}

async function getPriceDYPSBsc() {
  let amount = new BigNumber(1000000000000000000).toFixed(0);
  let router = await window.getPancakeswapRouterContract();
  let WETH = await router.methods.WETH().call();
  let platformTokenAddress = window.config.BUSD_address;
  let rewardTokenAddress = window.config.token_dyps_bsc_address;
  let path = [
    ...new Set(
      [rewardTokenAddress, WETH, platformTokenAddress].map((a) =>
        a.toLowerCase()
      )
    ),
  ];
  let _amountOutMin = await router.methods.getAmountsOut(amount, path).call();
  _amountOutMin = _amountOutMin[_amountOutMin.length - 1];
  _amountOutMin = new BigNumber(_amountOutMin).div(1e18).toFixed(18);
  return _amountOutMin;
}

window.getPriceDYPSBsc = getPriceDYPSBsc;

/* DYP MINT API */

// Create Array range from x to y

function range(start, end, step = 1) {
  const len = Math.floor((end - start) / step) + 1;
  return Array(len)
    .fill()
    .map((_, idx) => start + idx * step);
}

// Request Latest Mint Total

async function latestMint() {
  return await window.$.get("https://mint.dyp.finance/api/v1/latest/mint").then(
    (result) => {
      return parseInt(result.total);
    }
  );
}

// Request My Nft List from Address (By Contract Call)

async function myNftListContract(address) {
  let nft_contract = await getContract("NFT");

  let getBalanceOf = await nft_contract.methods.balanceOf(address).call();

  let nftList = [];

  for (let i = 0; i < getBalanceOf; i++)
    nftList.push(
      await nft_contract.methods.tokenOfOwnerByIndex(address, i).call()
    );

  return nftList;
}

// Request My Nft List from Address

async function myNftList(address) {
  return await window.$.get(
    `https://mint.dyp.finance/api/v1/my/${address}`
  ).then((result) => {
    return result;
  });
}

// Request NFT JSON

async function getNft(id) {
  return await window.$.get(`https://mint.dyp.finance/metadata/${id}`).then(
    (result) => {
      return result;
    }
  );
}

// Check Whitelist

async function checkWhitelist(id) {
  return await window.$.get(
    `https://mint.dyp.finance/api/v1/check/list/${id}`
  ).then((result) => {
    return result;
  });
}

/* END DYP MINT API */

/* NFT MINTINT */

// window.nft = {
//
// }

window.NFTSTAKING_ABI = [{"inputs":[{"internalType":"address","name":"_stakingDestinationAddress","type":"address"},{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"uint256","name":"_expiration","type":"uint256"},{"internalType":"address","name":"_erc20Address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newExpiration","type":"uint256"}],"name":"ExpirationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLockTime","type":"uint256"}],"name":"LockTimeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"RateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"LOCKUP_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_depositBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"calculateReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"calculateRewards","outputs":[{"internalType":"uint256[]","name":"rewards","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"depositsOf","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"erc20Address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"expiration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_expiration","type":"uint256"}],"name":"setExpiration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockTime","type":"uint256"}],"name":"setLockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingDestinationAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.CONSTANT_STAKING_ABI = [
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToWithdraw",
        type: "uint256",
      },
    ],
    name: "emergencyUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "referrer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ReferralFeeTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "reInvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Reinvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToStake",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferAnyERC20Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferAnyLegacyERC20Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToWithdraw",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ADMIN_CAN_CLAIM_AFTER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "depositedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getActiveReferredStaker",
    outputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalEarned",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfHolders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referrer",
        type: "address",
      },
    ],
    name: "getNumberOfReferredStakers",
    outputs: [
      {
        internalType: "uint256",
        name: "_activeStakers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalStakers",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_holder",
        type: "address",
      },
    ],
    name: "getPendingDivs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "getReferredStaker",
    outputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalEarned",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "getStakersList",
    outputs: [
      {
        internalType: "address[]",
        name: "stakers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "stakingTimestamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "lastClaimedTimeStamps",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "stakedTokens",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_holder",
        type: "address",
      },
    ],
    name: "getTotalPendingDivs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimedTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LOCKUP_TIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REFERRAL_FEE_RATE_X_100",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "referrals",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_INTERVAL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REWARD_RATE_X_100",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardsPendingClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "STAKING_FEE_RATE_X_100",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakingTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimedReferralFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalEarnedTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "totalReferralFeeEarned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TRUSTED_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNSTAKING_FEE_RATE_X_100",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

window.NFT_ABI = [
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint256", name: "maxNftSupply", type: "uint256" },
      { internalType: "uint256", name: "saleStart", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "CAWS_PROVENANCE",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_CAWS",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REVEAL_TIMESTAMP",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cawsPrice",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencySetStartingIndexBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "flipSaleState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "getApproved",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "operator", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxCawsPurchase",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "numberOfTokens", type: "uint256" },
    ],
    name: "mintCaws",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextOwnerToExplicitlySet",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reserveCaws",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "saleIsActive",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "operator", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "tokenURI", type: "string" }],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "provenanceHash", type: "string" },
    ],
    name: "setProvenanceHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "revealTimeStamp", type: "uint256" },
    ],
    name: "setRevealTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setStartingIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startingIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startingIndexBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokenId", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

class NFT {
  constructor(key = "NFT") {
    this.key = key;
    [
      "MAX_CAWS",
      "balanceOf",
      "baseURI",
      "cawsPrice",
      "maxCawsPurchase",
      "ownerOf",
    ].forEach((fn_name) => {
      this[fn_name] = async function (...args) {
        let contract = await getContract(this.key);
        return await contract.methods[fn_name](...args).call();
      };
    });

    ["mintCaws"].forEach((fn_name) => {
      this[fn_name] = async function (...args) {
        let contract = await getContract(this.key);
        return await contract.methods[fn_name](...args).send({
          from: await getCoinbase(),
        });
      };
    });
  }

  async mintNFT(amount) {
    let nft_contract = await getContract("NFT");
    let priceCaws = await nft_contract.methods.cawsPrice().call();
    let value = new BigNumber(priceCaws).times(amount);

    let second = nft_contract.methods
      .mintCaws(amount)
      .send({ value, from: await getCoinbase() });
    // batch.execute()
    let result = await second;
    let sizeResult = Object.keys(result.events["Transfer"]).length;
    if (result.events["Transfer"].blockNumber > 0) sizeResult = 101;
    if (result.status == true) {
      let nftId = 0;
      if (sizeResult != 101) {
        nftId = window.web3.utils
          .toBN(result.events["Transfer"][sizeResult - 1].raw.topics[3])
          .toString(10);
      } else {
        nftId = window.web3.utils
          .toBN(result.events["Transfer"].raw.topics[3])
          .toString(10);
      }
      return nftId;
    } else {
      throw new Error("Minting failed!");
    }
  }

  async approveStake(addr) {
    let nft_contract = await getContract("NFT");
    let staking_addr = addr;
    return await nft_contract.methods
      .setApprovalForAll(staking_addr, true)
      .send();
  }

  async checkapproveStake(useraddr, addr) {
    let nft_contract = await getContract("NFT");

    return await nft_contract.methods.isApprovedForAll(useraddr, addr).call();
  }

  async depositStake() {
    let nft_contract = await getContract("NFT");

    return await nft_contract.methods.deposit([]).send();
  }

  async checkLockoutTime() {
    let nft_contract = await getContract("NFTSTAKING");
    const time = await nft_contract.methods.LOCKUP_TIME().call();
    return time
  }

  async checkLockoutTime50() {
    let nft_contract = await getContract("NFTSTAKING50");
    const time = await nft_contract.methods.LOCKUP_TIME().call();
    return time
  }
}

window.nft = new NFT();
