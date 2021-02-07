import { first } from "lodash";
import React from "react";
import { AppContext } from "./AppProvider/AppProvider";

function Content(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return (
            <div>
              <h1>Loading Coins...</h1>
            </div>
          );
        } else if (!firstVisit && !prices) {
          return (
            <div>
              <h1>Loading Prices...</h1>
            </div>
          );
        }
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}

export default Content;
