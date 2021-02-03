import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const Logo = styled.div`
  font-size: 1.6em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

function NavBar() {
  return (
    <Bar>
      <Logo>Moneda</Logo>
      <div />
      <NavButton active="active" name="Dashboard" />
      <NavButton name="Settings" />
    </Bar>
  );
}

export default NavBar;
