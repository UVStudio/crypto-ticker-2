import React from "react";
import ReactDOM from "react-dom";

export default class ScrollToTop extends React.Component {
  render() {
    return (
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    );
  }
}
