import React from "react";

import PieChart from "./PieChart";
import LineChart from "./LineChart";

// import { test } from "./LineChart";
// console.log(test);

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
