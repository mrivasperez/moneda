import React from "react";
import styled, { css } from "styled-components";

import { SelectableTile } from "../../Layout/Tile";
import { CoinHeaderGridElem } from "../Settings/CoinHeaderGrid";

const JustifyRight = styled.div`
  justify-self: right;
`;

const PriceTileElem = styled(SelectableTile)`
  ${(props) =>
    props.currentFavorite &&
    css`
      background: linear-gradient(145deg, #e6e6e6, #ffffff);
      box-shadow: 3px 3px 8px #d4d3d1, -3px -3px 8px #ffffff;
      pointer-events: none;
    `}
`;

const TickerPrice = styled.div`
  font-size: 2em;
`;

const ChangePct = styled.div`
  color: green;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;

const numberFormat = (number) => {
  return +(number + "").slice(0, 7);
};

function PriceTile({ price, index, currentFavorite }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];

  return (
    <PriceTileElem currentFavorite={currentFavorite}>
      <CoinHeaderGridElem>
        <div>{sym}</div>
        {/* TODO: This could be a new component */}
        <JustifyRight>
          <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
          </ChangePct>
        </JustifyRight>
      </CoinHeaderGridElem>
      <TickerPrice>$ {numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileElem>
  );
}

export default PriceTile;
