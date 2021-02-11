import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";
import CoinImage from "../../Layout/CoinImage";
import { Tile } from "../../Layout/Tile";

const SpotlightName = styled.h2`
  text-align: center;
`;

function CoinSpotlight() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
        <Tile>
          <SpotlightName>{coinList[currentFavorite].CoinName}</SpotlightName>
          <CoinImage coin={coinList[currentFavorite]} spotlight />
        </Tile>
      )}
    </AppContext.Consumer>
  );
}

export default CoinSpotlight;
