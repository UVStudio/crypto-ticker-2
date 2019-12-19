import React from "react";
import ReactDOM from "react-dom";

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartArray: ["bitcoin", "ethereum"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      chartArray: this.props.chartList
    });
  }

  render() {
    console.log(this.props.chartList);
    console.log(this.state.chartArray);
    const dropdownList = [];
    for (let i = 0; i < this.state.chartArray.length; i++) {
      dropdownList.push(
        <li className="dropdown-item click" key={i}>
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
              Update Charts
            </button>
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
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
