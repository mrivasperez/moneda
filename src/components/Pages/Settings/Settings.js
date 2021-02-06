import React from "react";
import Page from "../Page";
import CoinGrid from "./CoinGrid";
import ConfirmButton from "./ConfirmButton";
import Search from "./Search";
import Welcome from "./Welcome";

function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
}

export default Settings;
