import React from "react";

function CoinImage({ coin, style }) {
  return (
    <img
      alt={coin.CoinSymbol}
      style={
        style || { height: "50px", borderRadius: "50%", padding: "15px 0" }
      }
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
    />
  );
}

export default CoinImage;
