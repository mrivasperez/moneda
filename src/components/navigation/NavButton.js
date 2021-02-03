import React from "react";
import styled, { css } from "styled-components";

const NavButtonElem = styled.div`
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      color: blue;
    `}
`;

function NavButton({ name, active }) {
  return <NavButtonElem active={active}>{name}</NavButtonElem>;
}

export default NavButton;
