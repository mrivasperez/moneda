import React from "react";
import { AppContext } from "../../AppProvider/AppProvider";

function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            <h1>Welcome to Moneda!</h1>
            <p>Please select your favorite currencies to begin.</p>
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}

export default Welcome;
