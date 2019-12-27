import React from "react";
import Bar from "./Bar";

export default class BarGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      markets: [
        {
          name: "test",
          marketshare: null
        },
        {
          name: "test",
          marketshare: null
        },
        {
          name: "test",
          marketshare: null
        },
        {
          name: "test",
          marketshare: null
        }
      ]
    };
  }
  componentDidMount() {
    let exchanges = [];
    fetch("https://api.coincap.io/v2/exchanges")
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => {
        for (let i = 0; i < 4; i++) {
          exchanges.push(data.data[i]);
        }
        this.setState({
          markets: [
            {
              name: exchanges[0].name,
              marketshare: parseFloat(exchanges[0].percentTotalVolume).toFixed(
                2
              )
            },
            {
              name: exchanges[1].name,
              marketshare: parseFloat(exchanges[1].percentTotalVolume).toFixed(
                2
              )
            },
            {
              name: exchanges[2].name,
              marketshare: parseFloat(exchanges[2].percentTotalVolume).toFixed(
                2
              )
            },
            {
              name: exchanges[3].name,
              marketshare: parseFloat(exchanges[3].percentTotalVolume).toFixed(
                2
              )
            }
          ]
        });
      });
  }
  render() {
    //console.log(this.state.markets[1].name);
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Crypto Exchanges Market Shares
            </h6>
          </div>
          <div className="card-body">
            <div className="bar">
              <h4 className="small font-weight-bold">
                {this.state.markets[0].name}
                <span className="float-right">
                  {this.state.markets[0].marketshare} %
                </span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: this.state.markets[0].marketshare + "%" }}
                  aria-valuenow={this.state.markets[0].marketshare}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Bar market={this.state.markets[1]} />
            <Bar market={this.state.markets[2]} />
            <Bar market={this.state.markets[3]} />
          </div>
        </div>
      </div>
    );
  }
}
