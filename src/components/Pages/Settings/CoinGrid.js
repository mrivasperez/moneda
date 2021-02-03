import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";
import { Tile, SelectableTile } from "../../Layout/Tile";

export const CoinGridElem = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

function CoinGrid() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridElem>
          {Object.keys(coinList).map((coinKey) => (
            <SelectableTile>{coinKey}</SelectableTile>
          ))}
        </CoinGridElem>
      )}
    </AppContext.Consumer>
  );
}

export default CoinGrid;
