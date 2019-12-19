import React from "react";
import ReactDOM from "react-dom";

import PieChart from "./PieChart";
import LineChart from "./LineChart";

export default class TwoCharts extends React.Component {
  render() {
    return (
      <div className="row">
        <LineChart {...this.props} />
        <PieChart />
      </div>
    );
  }
}
