import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridElem = styled.div`
  margin-top: 45px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-bottom: 15px;
`;

const getCoinsToDisplay = (coinList, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

function CoinGrid({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridElem>
          {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
            <CoinTile topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGridElem>
      )}
    </AppContext.Consumer>
  );
}

export default CoinGrid;
