import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridElem = styled.div`
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

const getCoinsToDisplay = (coinList) => {
  return Object.keys(coinList).slice(0, 100);
};

function CoinGrid() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridElem>
          {getCoinsToDisplay(coinList).map((coinKey) => (
            <CoinTile coinKey={coinKey} />
          ))}
        </CoinGridElem>
      )}
    </AppContext.Consumer>
  );
}

export default CoinGrid;
