import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridElem = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 35px;
  margin-bottom: 30px;
`;

const getCoinGrid = (coinList, filteredCoins) => {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
};

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
  return topSection ? favorites : getCoinGrid(coinList, filteredCoins);
};

function CoinGrid({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridElem>
          {getCoinsToDisplay(
            coinList,
            topSection,
            favorites,
            filteredCoins
          ).map((coinKey) => (
            <CoinTile topSection={topSection} coinKey={coinKey} key={coinKey} />
          ))}
        </CoinGridElem>
      )}
    </AppContext.Consumer>
  );
}

export default CoinGrid;
