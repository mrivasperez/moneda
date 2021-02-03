import React from "react";
import styled from "styled-components";

export const CoinHeaderGridElem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const CoinSymbolElem = styled.div`
  justify-self: right;
`;

function CoinHeaderGrid({ name, symbol }) {
  return (
    <CoinHeaderGridElem>
      <div>{name}</div>
      <CoinSymbolElem>{symbol}</CoinSymbolElem>
    </CoinHeaderGridElem>
  );
}

export default CoinHeaderGrid;
