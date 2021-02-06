import React from "react";
import styled from "styled-components";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const SearchInput = styled.input`
  font-style: inherit;
  font-weight: normal;
  margin: 27px auto;
  border-radius: 50px;
  background: #fdfdfd;
  box-shadow: 5px 5px 10px #e0dfdd, -5px -5px 10px #ffffff;
  border: none;
  width: 50%;
  max-width: 1000px;
  padding: 12px 20px;
  cursor: default;
  transition: 0.33s ease-in-out;
  font-weight: bold;
  font-size: 16px;
  font-family: "IBM Plex Sans", sans-serif;
  &:hover {
    border-radius: 50px;
    box-shadow: 7px 7px 14px #e0dfdd, -7px -7px 14px #ffffff;
    transition: 0.3s ease-in-out;
  }

  &:focus {
    border-radius: 50px;
    box-shadow: 16px 16px 32px #e0dfdd, -16px -16px 32px #ffffff;
    color: black;
    outline: none;
    transition: 0.4s ease-in-out;
    // font-size: 18px;
  }
`;

function Search() {
  return (
    <SearchGrid>
      <SearchInput placeholder="Search Coins..." />
    </SearchGrid>
  );
}

export default Search;
