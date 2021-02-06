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
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      favorites: ["BTC", "ETH", "XMR", "DOGE"],
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
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

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: "dashboard" });

    localStorage.setItem("moneda", JSON.stringify({ test: "hello" }));
  };

  // check if a coin is already in favorites
  isInFavorites = (key) => _.includes(this.state.favorites, key);

  savedSettings() {
    let monedaData = JSON.parse(localStorage.getItem("moneda"));
    if (!monedaData) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  }

  setPage = (page) => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
