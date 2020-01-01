import React from "react";
import Bar from "./Bar";

export default class BarGraph extends React.Component {
  constructor() {
    super();
    this.state = {
      markets: [
        {
          name: "loading...",
          marketshare: null,
          color: ""
        },
        {
          name: "loading...",
          marketshare: null,
          color: ""
        },
        {
          name: "loading...",
          marketshare: null,
          color: ""
        },
        {
          name: "loading...",
          marketshare: null,
          color: ""
        },
        {
          name: "loading...",
          marketshare: null,
          color: ""
        },
        {
          name: "loading...",
          marketshare: null,
          color: ""
        }
      ]
    };
  }
  componentDidMount() {
    let exchanges = [];
    fetch("https://api.coincap.io/v2/exchanges")
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < 5; i++) {
          exchanges.push(data.data[i]);
        }
        let totalPercent = 0;
        for (let i = 0; i < exchanges.length; i++) {
          totalPercent += parseFloat(exchanges[i].percentTotalVolume);
        }
        this.setState({
          markets: [
            {
              name: exchanges[0].name,
              marketshare: parseFloat(exchanges[0].percentTotalVolume).toFixed(
                2
              ),
              color: "primary"
            },
            {
              name: exchanges[1].name,
              marketshare: parseFloat(exchanges[1].percentTotalVolume).toFixed(
                2
              ),
              color: "success"
            },
            {
              name: exchanges[2].name,
              marketshare: parseFloat(exchanges[2].percentTotalVolume).toFixed(
                2
              ),
              color: "warning"
            },
            {
              name: exchanges[3].name,
              marketshare: parseFloat(exchanges[3].percentTotalVolume).toFixed(
                2
              ),
              color: "info"
            },
            {
              name: exchanges[4].name,
              marketshare: parseFloat(exchanges[4].percentTotalVolume).toFixed(
                2
              ),
              color: "danger"
            },
            {
              name: "total of other exchanges",
              marketshare: (100 - totalPercent).toFixed(2),
              color: "secondary"
            }
          ]
        });
      });
  }
  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Crypto Exchanges Marketshares
            </h6>
          </div>
          <div className="card-body">
            {this.state.markets.map(market => (
              <Bar market={market} color={market.color} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
