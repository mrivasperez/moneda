import styled, { css } from "styled-components";

export const Tile = styled.div`
  padding: 20px 15px;
  border: 1px solid #928bae;
  border-radius: 10px;
  transition: all 0.15s ease;

  background: linear-gradient(145deg, #f3f1fd, #cccbd4);
  box-shadow: 5px 5px 12px #d6d5d4, -5px -5px 12px #ffffff;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    background: linear-gradient(100deg, #f3f1fd);

    border: 1px solid #46466f;
    box-shadow: 5px 5px 13px #bcbcbc, -5px -5px 13px #ffffff;
    cursor: pointer;
  }
`;
