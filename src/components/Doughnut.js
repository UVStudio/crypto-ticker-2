import React from "react";
import { Doughnut } from "react-chartjs-2";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        labels: ["Bitcoin", "Ethereum", "Ripple", "Tether", "bitcoin-cash"],
        datasets: [
          {
            data: [],
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
    let num;
    fetch("https://api.coincap.io/v2/assets")
      .then(response => response.json())
      //.then(data => console.log(data))
      .then(data => {
        for (let i = 0; i < 5; i++) {
          num = parseInt(data.data[i].marketCapUsd);
          topThreeCapArray.push(num);
        }
        this.setState({
          Data: {
            labels: [
              data.data[0].id,
              data.data[1].id,
              data.data[2].id,
              data.data[3].id,
              data.data[4].id
            ],
            datasets: [
              {
                data: [
                  data.data[0].marketCapUsd,
                  data.data[1].marketCapUsd,
                  data.data[2].marketCapUsd,
                  data.data[3].marketCapUsd,
                  data.data[4].marketCapUsd
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
