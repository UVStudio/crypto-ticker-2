import React from "react";
import ReactDOM from "react-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>
              Copyright &copy;{" "}
              <a href="mailto:info@uvstudio.ca?Subject=Cryptick">UV Studio</a>{" "}
              2019
            </span>
          </div>
        </div>
      </footer>
    );
  }
}
