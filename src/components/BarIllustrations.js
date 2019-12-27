import React from "react";
import Illustrations from "./Illustrations";
import BarGraph from "./BarGraph";

export default class BarIllustrations extends React.Component {
  render() {
    return (
      <div className="row">
        <BarGraph />
        <Illustrations />
      </div>
    );
  }
}
