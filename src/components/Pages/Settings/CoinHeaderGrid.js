import React from "react";
import styled from "styled-components";
import { DeletableTile } from "../../Layout/Tile";

export const CoinHeaderGridElem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const CoinSymbolElem = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

function CoinHeaderGrid({ name, symbol, topSection }) {
  return (
    <CoinHeaderGridElem>
      <div>{name}</div>
      {topSection ? (
        <DeleteIcon>
          <img
            alt="delete"
            style={{ height: "15px" }}
            src="https://img.icons8.com/ios/50/000000/delete-sign--v3.png"
          />
        </DeleteIcon>
      ) : (
        <CoinSymbolElem>{symbol}</CoinSymbolElem>
      )}
    </CoinHeaderGridElem>
  );
}

export default CoinHeaderGrid;
