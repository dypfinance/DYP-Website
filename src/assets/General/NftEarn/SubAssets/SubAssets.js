import PoolsVaultsRow from "../../PoolsVaultsRow/PoolsVaultsRow";
import React from "react";
import PropTypes from "prop-types";
import SubAssetCard from "../../SubAssetCard/SubAssetCard";
import SubAssetCardWithButton from "../../SubAssetCardWithButton/SubAssetCardWithButton";

const SubAssets = ({ data, onSubAssetButtonClick, total_value_locked }) => {
  const buttonText = data.type !== "Vault" ? "Deposit now" : "Supply";

  return (
    <div className="container-fluid" style={{ padding: "0px 80px 80px 80px" }}>
      <PoolsVaultsRow
        totalValue={data.totalValue}
        totalValueText={data.totalValueText}
      />
      <div className="subassets-wrapper row">
        {data?.subAssets.length > 0 &&
          data?.subAssets.map((item, id) => (
            <div key={id} className="col-md-3">
              <SubAssetCardWithButton
                action={onSubAssetButtonClick}
                buttonText={buttonText}
                top_tick={item.top_tick}
                link= {item.link}
              >
                <SubAssetCard
                  lock_time={item.lock_time}
                  percentage={item.percentage}
                  total_value_locked={item.total_value_locked}
                  hasCircleButton={false}
                  icons={item.icons}
                  name={item.title}
                />
              </SubAssetCardWithButton>
            </div>
          ))}
      </div>
    </div>
  );
};
SubAssets.propTypes = {
  data: PropTypes.object,
  onSubAssetButtonClick: PropTypes.func,
};

export default SubAssets;
