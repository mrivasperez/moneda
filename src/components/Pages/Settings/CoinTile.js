import React from "react";
import { AppContext } from "../../AppProvider/AppProvider";
import CoinImage from "../../Layout/CoinImage";
import { SelectableTile, DisabledTile, DeletableTile } from "../../Layout/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";

// handler for onClick event
const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

function CoinTile({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        // get coin info
        let coin = coinList[coinKey];
        //
        let TileClass = SelectableTile;
        if (topSection) {
          TileClass = DeletableTile;
        } else if (isInFavorites(coinKey)) {
          TileClass = DisabledTile;
        }

        return (
          <TileClass
            onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
            key={coinKey}
          >
            <CoinImage coin={coin} />
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}

export default CoinTile;
