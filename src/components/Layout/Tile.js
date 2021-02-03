import styled, { css } from "styled-components";

export const Tile = styled.div`
  padding: 10px;
  border: 2px solid #928bae;
  border-radius: 3px;
  transition: 0.25s;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    border: 2px solid #46466f;
    box-shadow: 5px 5px 13px #bcbcbc, -5px -5px 13px #ffffff;
    cursor: pointer;
  }
`;
