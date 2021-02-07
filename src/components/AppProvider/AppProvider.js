import React from "react";
import _ from "lodash";

const cc = require("cryptocompare");

cc.setApiKey(
  "cbf26307976c7b6d22b3a79623518475494cacea80ea3aae18ed0525e3ec472d"
);

export const AppContext = React.createContext();

const MAX_FAVORITES = 8;

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      favorites: ["BTC", "ETH", "LTC"],
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      setFilteredCoins: this.setFilteredCoins,
      ...this.savedSettings(),
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
  };

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) });
  };

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
    console.log(coinList);
  };

  prices = async () => {
    let returnData = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");
        returnData.push(priceData);
      } catch (e) {
        console.warn("Fetch Price Error", e);
      }
    }

    return returnData;
  };

  fetchPrices = async () => {
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    // filter empty price objects
    prices = prices.filter((price) => Object.keys(price).length);
    // set prices
    console.log(prices);
    this.setState({ prices });
  };

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: "dashboard" }, () => {
      this.fetchPrices();
    });
    localStorage.setItem(
      "moneda",
      JSON.stringify({ favorites: this.state.favorites })
    );
  };

  // check if a coin is already in favorites
  isInFavorites = (key) => _.includes(this.state.favorites, key);

  savedSettings() {
    let monedaData = JSON.parse(localStorage.getItem("moneda"));
    if (!monedaData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites } = monedaData;
    return { favorites };
  }

  setPage = (page) => this.setState({ page });

  setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
