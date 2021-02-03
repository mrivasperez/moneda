import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../AppProvider/AppProvider";

const NavButtonElem = styled.p`
  cursor: pointer;
  color: #0e1c1e;
  padding: 10px;
  text-alight: center;
  margin: 0 10px 0 10px;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    color: #46466f;
  }

  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
      text-decoration-color: #e4ab4f;
      text-decoration-thickness: 3px;
    `};
`;

function NavButton({ name }) {
  const toUpperCase = (text) => {
    return text[0].toUpperCase() + text.substring(1);
  };
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <NavButtonElem active={page === name} onClick={() => setPage(name)}>
          {toUpperCase(name)}
        </NavButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default NavButton;
