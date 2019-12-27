import React from "react";

export default class Bar extends React.Component {
  render() {
    return (
      <div className="bar">
        <h4 className="small font-weight-bold">
          {this.props.market.name}
          <span className="float-right">{this.props.market.marketshare} %</span>
        </h4>
        <div className="progress mb-4">
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{ width: this.props.market.marketshare + "%" }}
            aria-valuenow={this.props.market.marketshare}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}
