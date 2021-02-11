import React from "react";
import styled from "styled-components";

const Styled = styled.img`
  height: ${(props) => (props.spotlight ? "150px" : "75px")};
  borderradius: "50%";
  padding: "15px 0";
  display: block;
  margin: 15px auto;
`;

const CoinImage = function ({ coin, spotlight }) {
  return (
    <Styled
      spotlight={spotlight}
      alt={coin.CoinSymbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
};

export default CoinImage;
