import React from "react";
import Chart from "./Chart";

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartArray: ["bitcoin", "ethereum"],
      chartData: {},
      chartInterval: "m1",
      chartCoin: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickChartSelection = this.handleClickChartSelection.bind(this);
    this.dateFormat = this.dateFormat.bind(this);
    this.handleClickIntervalMin = this.handleClickIntervalMin.bind(this);
    this.handleClickIntervalHour = this.handleClickIntervalHour.bind(this);
    this.handleClickIntervalDay = this.handleClickIntervalDay.bind(this);
  }

  handleClick() {
    this.setState({
      chartArray: this.props.chartList
    });
  }

  dateFormat(stamp) {
    const myDate = new Date(stamp);
    const myAbbrevDate = myDate.format("H:i:s");
    return myAbbrevDate;
  }

  dateFormatDay(stamp) {
    const myDate = new Date(stamp);
    const myAbbrevDate = myDate.format("d-m-Y");
    return myAbbrevDate;
  }

  handleClickIntervalMin() {
    this.setState({
      chartInterval: "m1"
    });
  }
  handleClickIntervalHour() {
    this.setState({
      chartInterval: "h1"
    });
  }
  handleClickIntervalDay() {
    this.setState({
      chartInterval: "d1"
    });
  }

  handleClickChartSelection(coin) {
    const fullChartData = [],
      fullChartDataTime = [],
      fullChartDataPrice = [];
    let fullChartDataTimeConverted = [];
    fetch(
      `https://api.coincap.io/v2/assets/${coin}/history?interval=${this.state.chartInterval}`
    )
      .then(response => response.json())
      .then(data => {
        for (let i = data.data.length - 30; i < data.data.length; i++) {
          fullChartData.push(data.data[i]);
          fullChartDataTime.push(data.data[i].time);
          fullChartDataPrice.push(data.data[i].priceUsd);
        }
        if (fullChartDataTime[29] - fullChartDataTime[0] == 2505600000) {
          fullChartDataTimeConverted = fullChartDataTime.map(time =>
            this.dateFormatDay(time)
          );
        } else {
          fullChartDataTimeConverted = fullChartDataTime.map(time =>
            this.dateFormat(time)
          );
        }
        this.setState({
          chartCoin: coin,
          chartData: {
            labels: fullChartDataTimeConverted,
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
                <a
                  className="dropdown-item"
                  id="m1"
                  onClick={() => {
                    this.handleClickIntervalMin();
                    setTimeout(() => {
                      this.handleClickChartSelection(this.state.chartCoin);
                    }, 1);
                  }}
                  href="#"
                >
                  1 minute
                </a>
                <a
                  className="dropdown-item"
                  id="h1"
                  onClick={() => {
                    this.handleClickIntervalHour();
                    setTimeout(() => {
                      this.handleClickChartSelection(this.state.chartCoin);
                    }, 1);
                  }}
                  href="#"
                >
                  1 hour
                </a>
                <a
                  className="dropdown-item"
                  id="d1"
                  onClick={() => {
                    this.handleClickIntervalDay();
                    setTimeout(() => {
                      this.handleClickChartSelection(this.state.chartCoin);
                    }, 1);
                  }}
                  href="#"
                >
                  1 day
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
