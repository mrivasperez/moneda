import React from "react";
import { Tile } from "../../Layout/Tile";
import Page from "../Page";
import ChartGrid from "./ChartGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from "./Highcharts/PriceChart";
import PriceGrid from "./PriceGrid";

function Dashboard() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <PriceChart />
      </ChartGrid>
    </Page>
  );
}

export default Dashboard;
