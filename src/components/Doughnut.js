import React from "react";
import { Doughnut } from "react-chartjs-2";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        labels: ["Bitcoin", "Ethereum", "Ripple"],
        datasets: [
          {
            data: [131224951439, 13731791106, 8228946966],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)"
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10
        },
        legend: {
          display: false
        },
        cutoutPercentage: 80
      }
    };
  }

  componentDidMount() {
    const topThreeCapArray = [];
    let topThreeCapArraySum = [];
    let num;
    fetch("https://api.coincap.io/v2/assets")
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => {
        for (let i = 0; i < 3; i++) {
          num = parseInt(data.data[i].marketCapUsd);
          topThreeCapArray.push(num);
          topThreeCapArraySum = topThreeCapArray.reduce((acc, cur) => {
            return acc + cur;
          }, 0);
        }
        console.log(topThreeCapArray);
        // const test = parseInt(topThreeCapArray[0]);
        // console.log(test);
        console.log(topThreeCapArraySum);
        this.setState({
          Data: {
            labels: [data.data[0].id, data.data[1].id, data.data[2].id],
            datasets: [
              {
                data: [
                  data.data[0].marketCapUsd,
                  data.data[1].marketCapUsd,
                  data.data[2].marketCapUsd
                ]
              }
            ]
          }
        });
      });
  }

  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.Data}
          height={300}
          width={300}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
