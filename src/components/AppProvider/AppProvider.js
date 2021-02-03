import React from "react";

const cc = require("cryptocompare");

cc.setApiKey(
  "cbf26307976c7b6d22b3a79623518475494cacea80ea3aae18ed0525e3ec472d"
);

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
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
