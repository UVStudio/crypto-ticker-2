import React from "react";
import ReactDOM from "react-dom";

import Footer from "./components/Footer";
import BarIllustrations from "./components/BarIllustrations";
import TwoCharts from "./components/TwoCharts";
import Tickers from "./components/Tickers";
import ScrollToTop from "./components/ScrollToTop";
import SearchForm from "./components/SearchForm";

class Content extends React.Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.handleDataTickers = this.handleDataTickers.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tickersElement = React.createRef();
    this.state = {
      fromChild: "",
      chartArray: ""
    };
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  handleDataTickers(dataTickers) {
    this.setState(
      {
        chartArray: dataTickers
      },
      () => console.log(this.state.chartArray)
    );
  }

  handleClick() {
    this.tickersElement.current.addTicker(this.state.fromChild);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <SearchForm searchResult={this.handleData} />
          <ul className="navbar-nav ml-auto">
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <h5 className="mr-2 d-lg-inline text-gray-600">
              Cryptick - <em className="h6">beta</em>
            </h5>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">
              Real-Time Cryptocurrency Tickers
            </h1>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleClick}
            >
              Add: {this.state.fromChild.toUpperCase()}
            </button>
          </div>
          <Tickers
            crypto={this.state.fromChild}
            ref={this.tickersElement}
            chartList={this.handleDataTickers}
          />
          <TwoCharts chartList={this.state.chartArray} />
          <BarIllustrations />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Content />, document.getElementById("content"));
