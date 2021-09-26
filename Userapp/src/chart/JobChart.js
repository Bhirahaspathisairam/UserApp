import React from "react";
import { Bar } from "react-chartjs-2";

class JobChart extends React.Component {
  getDataset() {
    let color = {
      ckb: "red",
      both: "blue",
      diab: "orange",
    };

    const [ckb] = this.props.details;
    let len = Object.keys(ckb).length;
    const LABELS = Object.keys(ckb).splice(0, len - 1);
    return this.props.details.map((detail) => {
      return {
        label: detail.POP,
        data: detail ? LABELS.map((val) => detail[val]) : [],
        backgroundColor: color[detail.POP],
        borderColor: [],
        borderWidth: 1,
      };
    });
  }
  render() {
    const [ckb] = this.props.details;
    let len = Object.keys(ckb).length;
    const LABELS = Object.keys(ckb).splice(0, len - 1);

    return (
      <div className="chart-details">
        <h3>Job interview assignment</h3>
        <Bar
          data={{
            labels: LABELS,
            datasets: this.getDataset(),
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 25,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default JobChart;
