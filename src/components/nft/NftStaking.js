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
    <div className="col-lg-11 nft-staking-wrapper m-auto">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              suscipit, felis nec sollicitudin elementum, risus elit fermentum
              nisi, eget tempus arcu ipsum vel nunc. Maecenas porta venenatis
              placerat. Sed sollicitudin, diam sit amet blandit eleifend, tortor
              urna efficitur felis, id iaculis est leo non nulla. Nulla
              facilisi.
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
