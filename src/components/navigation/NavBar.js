import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const Logo = styled.div`
  font-size: 1.8em;
  color: #ab6ea6;
  font-weight: bold;
  cursor: default;
`;

const Bar = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 40px;
`;

function NavBar() {
  return (
    <Bar>
      <Logo>Moneda</Logo>
      <div />
      <NavButton active="active" name="dashboard" />
      <NavButton name="settings" />
    </Bar>
  );
}

export default NavBar;
