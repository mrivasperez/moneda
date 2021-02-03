import React from "react";
import styled, { css } from "styled-components";

const NavButtonElem = styled.p`
  cursor: pointer;
  color: #0e1c1e;
  padding: 10px;
  text-alight: center;
  margin: 0 10px 0 10px;

  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
      text-decoration-color: #ab6ea6;
      text-decoration-thickness: 3px;
    `};
`;

function NavButton({ name, active }) {
  return <NavButtonElem active={active}>{name}</NavButtonElem>;
}

export default NavButton;
