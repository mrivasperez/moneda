import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";

export const CoinGridElem = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

function CoinGrid() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridElem>
          {Object.keys(coinList).map((coinKey) => (
            <div>{coinKey}</div>
          ))}
        </CoinGridElem>
      )}
    </AppContext.Consumer>
  );
}

export default CoinGrid;
