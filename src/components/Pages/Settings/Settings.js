import React from "react";
import Page from "../Page";
import ConfirmButton from "./ConfirmButton";
import Welcome from "./Welcome";

function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <ConfirmButton />
    </Page>
  );
}

export default Settings;
