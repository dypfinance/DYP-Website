import Modal from "../../General/Modal";
import React, { useState } from "react";
import PropTypes from "prop-types";
import showToast from "../../../../../Utils/toast";
import { shortAddress } from "../../../../../Utils/string";
import NftStakingCawChecklist from "../../General/NftStakingCawChecklist/NftStakingCawChecklist";
const NftStakeCheckListModal = ({
  nftItem,
  modalId,
  onShareClick,
  visible,
  link,
}) => {
 


  const [active, setActive] = useState(true);

  return (
    <Modal visible={visible} modalId={modalId}>
      <div className="details-modal-content">
        <div className="left-col">
          <div className="d-flex align-items-center justify-content-between width-100">
            <div className="rarity-rank d-grid">
              <h3 className="">Stakeable NFT’S</h3>
              <h6 className="gray-text">
                A list of your NFT collection that can be added and removed from
                the staking rewards
              </h6>
            </div>
          </div>
          <div className="caw-card2">
            {nftItem.length > 0 &&
              nftItem.map((item, id) => {
                return (
                  <NftStakingCawChecklist
                    key={id}
                    nft={item}
                    action={onShareClick}
                    modalId="#newNftchecklist"
                  />
                );
              })}
          </div>

          <div>
            <div>
              <div>
                <h5 className="select-apr">Select APR</h5>
                <div>
                  <form className="d-flex align-items-center">
                    <input
                      type="radio"
                      id="nolock"
                      name="locktime"
                      value="25"
                    />
                     {" "}
                    <span
                      for="nolock"
                      className="radioDesc"
                      style={{ marginRight: 10 }}
                    >
                      No lock time (25% APR)
                    </span>
                    <br />
                    <input type="radio" id="50APR" name="locktime" value="50" />
                     {" "}
                    <span for="50APR" className="radioDesc">
                      30 days lock time (50% APR)
                    </span>
                    <br />
                  </form>
                </div>
                <div
                  className="mt-4 row justify-content-center"
                  style={{ gap: 20 }}
                >
                  <button
                    className="btn activebtn"
                    onClick={() => setActive(false)}
                    style={{
                      background: active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: active ? "auto" : "none",
                    }}
                  >
                    Approve
                  </button>
                  <button
                    className="btn passivebtn"
                    style={{
                      background: !active
                        ? "linear-gradient(51.32deg, #E30613 -12.3%, #FA4A33 50.14%)"
                        : "#C4C4C4",
                      pointerEvents: !active ? "auto" : "none",
                    }}
                  >
                    Deposit
                  </button>
                </div>
                <p className="mt-1" style={{ color: "#F13227" }}>
                  *Please approve before deposit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
NftStakeCheckListModal.propTypes = {
  nftItem: PropTypes.object,
  modalId: PropTypes.string,
  onShareClick: PropTypes.func,
  visible: PropTypes.bool,
};

export default NftStakeCheckListModal;
