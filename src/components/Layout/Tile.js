import styled, { css } from "styled-components";

export const Tile = styled.div`
  padding: 20px 15px;
  transition: box-shadow 0.25s ease-in-out, background 5s ease-in;
  border-radius: 5px;

  background: white;
  box-shadow: 10px 10px 20px #d4d3d1, -10px -10px 20px #ffffff;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 3px 3px 8px #d4d3d1, -3px -3px 8px #ffffff;
    cursor: pointer;
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    box-shadow: 3px 3px 8px #e6a89c, -3px -3px 8px #ffffff;
  }
`;

export const DisabledTile = styled(Tile)`
  box-shadow: none;
  pointer-events: none;
  opacity: 0.8;
  color: gray;
  box-shadow: inset 5px 5px 10px #d4d3d1, inset -5px -5px 10px #ffffff;
`;
