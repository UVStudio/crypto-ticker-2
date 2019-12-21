import React from "react";
import Chart from "./Chart";

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartArray: ["bitcoin", "ethereum"],
      chartData: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickChartSelection = this.handleClickChartSelection.bind(this);
  }

  handleClick() {
    this.setState({
      chartArray: this.props.chartList
    });
  }

  handleClickChartSelection(coin) {
    const fullChartData = [],
      fullChartDataTime = [],
      fullChartDataTimeConverted = [],
      fullChartDataPrice = [];
    fetch(`https://api.coincap.io/v2/assets/${coin}/history?interval=m1`)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        for (let i = 0; i < 30; i++) {
          fullChartData.push(data.data[i]);
          fullChartDataTime.push(data.data[i].time);
          fullChartDataPrice.push(data.data[i].priceUsd);
          console.log(fullChartData);
          // console.log(fullChartDataTime);
          // console.log(fullChartDataPrice);
        }
        this.setState({
          chartData: {
            labels: fullChartDataTime,
            datasets: [
              {
                label: " Price",
                data: fullChartDataPrice,
                backgroundColor: ["green"]
              }
            ]
          }
        });
      });
    document.getElementById(
      "currentlyDisplaying"
    ).innerHTML = `Currently Displaying: ${coin.toUpperCase()}`;
  }

  render() {
    const dropdownList = [];
    for (let i = 0; i < this.state.chartArray.length; i++) {
      dropdownList.push(
        <li
          className="dropdown-item click"
          onClick={() =>
            this.handleClickChartSelection(this.state.chartArray[i])
          }
          key={i}
        >
          {this.state.chartArray[i].toUpperCase()}
        </li>
      );
    }
    return (
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <button
              type="button"
              class="btn btn-primary"
              onClick={this.handleClick}
            >
              Update Charts Options
            </button>
            <div id="currentlyDisplaying"></div>
            <div className="dropdown no-arrow">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">Pick a chart</div>
                {dropdownList}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart-area">
              <Chart chartData={this.state.chartData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
