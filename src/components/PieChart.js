import React from "react";
import Doughnut from "./Doughnut";

export default class PieChart extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Top 4 Crypto Market Cap
            </h6>
          </div>
          <div className="card-body">
            <Doughnut />
          </div>
        </div>
      </div>
    );
  }
}
