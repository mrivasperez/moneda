import React from "react";
import Config from "./Config";
import { Tile } from "../../../Layout/Tile";
import { AppContext } from "../../../AppProvider/AppProvider";
import ReactHighcharts from "react-highcharts";
import ChartSelect from "./ChartSelect";

function PriceChart() {
  return (
    <AppContext.Consumer>
      {({ historical, changeChartSelect, timeInterval }) => (
        <Tile>
          {historical ? (
            <div>
              <ReactHighcharts config={Config(historical)} />
              <ChartSelect
                defaultValue={timeInterval}
                onChange={(e) => changeChartSelect(e.target.value)}
              >
                <option value="months">Months</option>
                <option value="weeks">Weeks</option>
                <option value="days">Days</option>
              </ChartSelect>
            </div>
          ) : (
            <h3>Loading Data...</h3>
          )}
        </Tile>
      )}
    </AppContext.Consumer>
  );
}

export default PriceChart;
