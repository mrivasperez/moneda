import React from "react";
import Page from "../Page";
import CoinGrid from "./CoinGrid";
import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";

function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}

export default Settings;
