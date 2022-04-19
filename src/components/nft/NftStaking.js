import React from "react";
import CatHero from "./catHero.png";
import Stakegraph from "../NftMinting/components/NftMinting/MyStakes/stakegraph.png";
import { useHistory } from "react-router-dom";

const NftStaking = () => {
  let navigate = useHistory();
  const gotoMint = () => {
    navigate.push("/mint");
  };
  return (
    <div className="col-lg-10 nft-staking-wrapper" style={{margin: '5rem auto'}}>
      <div className="row">
        <div className="col-lg-4">
          <img src={CatHero} alt="" height={350} />
        </div>
        <div className="col-lg-7">
          <div className="innerwrapper">
            <div className="d-flex flex-column">
              <h2>NFT</h2>
              <h1>STAKING</h1>
            </div>
            <img src={Stakegraph} alt="" height={100} />
          </div>
          <div>
            <p>
              Time for staking has finally arrived! You can now do even more
              with your newly-<br/>acquired icons by staking them.<br/> Staking is as easy
              as you’d expect: To get started, simply select one of your minted
              NFTs,<br/> choose a lock time (0 or 30 Days), and begin earning
              continuous ETH rewards!
            </p>
            <button className="start-staking-btn" onClick={() => gotoMint()}>
              Start Staking NFT’S
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftStaking;
