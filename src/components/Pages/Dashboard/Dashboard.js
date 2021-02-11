import React from "react";
import { Tile } from "../../Layout/Tile";
import Page from "../Page";
import ChartGrid from "./ChartGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceGrid from "./PriceGrid";

function Dashboard() {
  return (
    <Page name="dashboard">
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <Tile>Chart will go here!</Tile>
      </ChartGrid>
    </Page>
  );
}

export default Dashboard;
