import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.chartData}
          height={300}
          width={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
