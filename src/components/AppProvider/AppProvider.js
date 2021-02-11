import React from "react";
import _ from "lodash";
import moment from "moment";

const cc = require("cryptocompare");

cc.setApiKey(
  "cbf26307976c7b6d22b3a79623518475494cacea80ea3aae18ed0525e3ec472d"
);

export const AppContext = React.createContext();

const MAX_FAVORITES = 8;
const TIME_UNITS = 10;

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
      timeInterval: "months",
      setCurrentFavorite: this.setCurrentFavorite,
      changeChartSelect: this.changeChartSelect,
      ...this.savedSettings(),
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
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

  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    let results = await this.historical();
    let historical = [
      {
        name: this.state.currentFavorite,
        data: results.map((ticker, index) => [
          moment()
            .subtract({ [this.state.timeInterval]: TIME_UNITS - index })
            .valueOf(),
          ticker.USD,
        ]),
      },
    ];
    this.setState({ historical });
    console.log(historical);
  };

  historical = () => {
    let promises = [];
    for (let units = TIME_UNITS; units > 0; units--) {
      promises.push(
        cc.priceHistorical(
          this.state.currentFavorite,
          ["USD"],
          moment()
            .subtract({ [this.state.timeInterval]: units })
            .toDate()
        )
      );
    }
    return Promise.all(promises);
  };

  changeChartSelect = (value) => {
    console.log(value);
    this.setState(
      { timeInterval: value, historical: null },
      this.fetchHistorical
    );
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
    this.setState({ prices });
  };

  confirmFavorites = () => {
    let currentFavorite = this.state.favorites[0];
    this.setState(
      {
        firstVisit: false,
        page: "dashboard",
        currentFavorite,
        prices: null,
        historical: null,
      },
      () => {
        this.fetchPrices();
        this.fetchHistorical();
      }
    );
    localStorage.setItem(
      "moneda",
      JSON.stringify({ favorites: this.state.favorites, currentFavorite })
    );
  };

  // check if a coin is already in favorites
  isInFavorites = (key) => _.includes(this.state.favorites, key);

  // set the current favorite
  setCurrentFavorite = (sym) => {
    // set state of app to ahve current favorite

    this.setState(
      { currentFavorite: sym, historical: null },
      this.fetchHistorical
    );
    // save current favorite in localstorage
    localStorage.setItem(
      "moneda",
      JSON.stringify({ favorites: this.state.favorites, currentFavorite: sym })
    );
  };

  savedSettings() {
    let monedaData = JSON.parse(localStorage.getItem("moneda"));
    if (!monedaData) {
      return { page: "settings", firstVisit: true };
    }
    let { favorites, currentFavorite } = monedaData;
    return { favorites, currentFavorite };
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
