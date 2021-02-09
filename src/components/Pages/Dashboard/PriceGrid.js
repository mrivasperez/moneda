import React from "react";
import { AppContext } from "../../AppProvider/AppProvider";
import styled from "styled-components";
import PriceTile from "./PriceTile";

const PriceGridElem = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: 35px;
  margin-bottom: 30px;
`;

function PriceGrid() {
  return (
    <AppContext.Consumer>
      {({ prices, currentFavorite }) => (
        <PriceGridElem>
          {prices.map((price, index) => (
            <PriceTile
              key={Object.keys(price)[0]}
              price={price}
              index={index}
              currentFavorite={currentFavorite === Object.keys(price)[0]}
            >
              {Object.keys(price)[0]}
            </PriceTile>
          ))}
        </PriceGridElem>
      )}
    </AppContext.Consumer>
  );
}

export default PriceGrid;
