import React from "react";

export default class Ticker extends React.Component {
  render() {
    const { id, name, price } = this.props.crypto;
    return (
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {name}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  <span className="text-info">
                    <small>$ </small>
                  </span>
                  {price}
                  <span className="text-info">
                    <small> USD</small>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="close"
                aria-label="Close"
                onClick={this.props.closeTicker.bind(this, id)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
