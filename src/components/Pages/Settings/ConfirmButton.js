import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";

const ConfirmButtonElem = styled.div`
  margin: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: #e4ab4f;
  text-decoration-thickness: 3px;
  &:hover {
    color: #46466f;
  }
`;

const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonElem onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonElem>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}

export default ConfirmButton;
