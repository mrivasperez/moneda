import React from "react";
import { AppContext } from "../../AppProvider/AppProvider";
import CoinImage from "../../Layout/CoinImage";
import { SelectableTile } from "../../Layout/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";

function CoinTile({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        // get coin info
        let coin = coinList[coinKey];
        //
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}

export default CoinTile;
