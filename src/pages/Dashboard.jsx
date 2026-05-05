import { Suspense, lazy } from "react"
import "../assets/chartConfig"
import "./styles/dashboard.scss"
import TopNav from "../elements/TopNav"
// import DisplayCard from "../components/DisplayCard"
import { MdBorderColor, MdOutlineCurrencyRupee } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { PiCardsFill } from "react-icons/pi";
import Loading from "../components/Loading";
import { Line } from "react-chartjs-2";
// const Line = lazy(() => import("react-chartjs-2"))
const DisplayCard = lazy(() => import("../components/DisplayCard"))

const Dashboard = () => {


  function getStatusStyle(style) {
    return {
      color: style === "Pending" ? "red" : "green"
    }
  }

  const data = [
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Pending", amount: "1,250" },
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Pending", amount: "1,250" },
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Completed", amount: "1,250" },
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Pending", amount: "1,250" },
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Completed", amount: "1,250" },
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Completed", amount: "1,250" },
    { orderId: "OI157141", customerName: "Sachin Bhadoriya", status: "Completed", amount: "1,250" }
  ]

  const salesData = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 }
  ]

  const options = {
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

      <div className="dashboard-main-container">
        <h1>Hello, Admin!</h1>

        <div className="main-number-hero">
          <Suspense fallback={<Loading />}>
            <DisplayCard heading="Total Orders" number="1,250" icon={<MdBorderColor />} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <DisplayCard heading="Total Revenue" number="45,320" icon={<MdOutlineCurrencyRupee />} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <DisplayCard heading="Total Users" number="320" icon={<FaUserAlt />} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <DisplayCard heading="Total Products" number="94" icon={<PiCardsFill />} />
          </Suspense>
        </div>

        <div className="data-graph-and-table-container">
          <div className="sales-overview-container">
            <h3>Sales Overview ( Last 7 Days )</h3>
            <div className="sales-chart-container">
              {/* <Suspense fallback={<Loading />}> */}
                <Line data={chartStructure} options={options} />
              {/* </Suspense> */}
            </div>
          </div>
          <div className="recent-order-container">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((i, index) => (
                  <tr key={index}>
                    <td>{i.orderId}</td>
                    <td>{i.customerName}</td>
                    <td style={getStatusStyle(i.status)}>{i.status}</td>
                    <td>₹ {i.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard