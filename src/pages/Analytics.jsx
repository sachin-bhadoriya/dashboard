import "../assets/chartConfig"

import "./styles/analytics.scss"
import { Line, Bar, Doughnut } from "react-chartjs-2";
import TopNav from '../elements/TopNav'

const Analytics = () => {

  const salesData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 }
  ]

  const optionsSales = {
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 50,

        ticks: {
          stepSize: 2,
          color: "#555",
          font: {
            size: 12,
          },
        },

        grid: {
          color: "#eee",
        },

        title: {
          display: true,
          text: "Users",
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const chartStructure = {
    labels: salesData.map(item => item.year),
    datasets: [
      {
        label: "Sales Overview",
        data: salesData.map(item => item.count),
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <TopNav />

      <div className="analytics-main-container">
        <div className="monthly-sales-container">
          <h3>Monthly Sales</h3>
          <Line data={chartStructure} options={optionsSales} />
        </div>
        <div className="monthly-revenue-container">
          <h3>Monthly Revenue</h3>
          <Doughnut data={chartStructure} />
        </div>
        <div className="top-products-container">
          <h3>Top Products</h3>
          <Bar data={chartStructure} options={optionsSales} />
        </div>
      </div>
    </>
  )
}

export default Analytics