import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../../Layout/Tile";
import { CoinHeaderGridElem } from "../Settings/CoinHeaderGrid";

const JustifyRight = styled.div`
  justify-self: right;
`;

const PriceTileElem = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      $font-size: 0.75em;
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

function PriceTile({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];

  return (
    <PriceTileElem compact={index >= 5}>
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
