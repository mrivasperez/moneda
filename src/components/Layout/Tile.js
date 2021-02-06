import styled, { css } from "styled-components";

export const Tile = styled.div`
  padding: 20px 15px;
  // border: 1px solid #928bae;

  transition: box-shadow 0.15s ease-in-out;
  border-radius: 5px;
  background: linear-gradient(145deg, #e0dfdd, #ffffff);
  box-shadow: 10px 10px 20px #e0dfdd, -10px -10px 20px #ffffff;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    background: linear-gradient(145deg, #e0dfdd, #ffffff);
    box-shadow: 5px 5px 10px #e0dfdd, -5px -5px 10px #ffffff;
    cursor: pointer;
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    box-shadow: 5px 5px 10px #e6a89c, -5px -5px 10px #ffffff;
  }
`;

export const DisabledTile = styled(Tile)`
  box-shadow: none;
  pointer-events: none;
  opacity: 0.6;
  color: gray;
  box-shadow: inset 5px 5px 10px #d4d3d1, inset -5px -5px 10px #ffffff;
`;
