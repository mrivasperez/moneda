import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

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

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // get all coin symbols
  let coinSymbols = Object.keys(coinList);
  // get all coin names, map symbol to name
  let coinNames = coinSymbols.map((sym) => coinList[sym].CoinName);
  //   compile list of all the strings we can search
  let allStringsToSearch = coinSymbols.concat(coinNames);
  // Use fuzzy to search
  let searchResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map((result) => result.string);
  //
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(searchResults, symKey) || _.includes(searchResults, coinName)
    );
  });
  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (e, setFilteredCoins, coinList) => {
  let inputValue = e.target.value;
  if (inputValue === false || inputValue === "" || !inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
};

function Search() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <SearchInput
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
            placeholder="Search Coins..."
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}

export default Search;
