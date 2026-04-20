import "./styles/dashboard.scss"
import TopNav from "../elements/TopNav"
import DisplayCard from "../components/DisplayCard"
import { MdBorderColor, MdOutlineCurrencyRupee } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { PiCardsFill } from "react-icons/pi";

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


  return (
    <>
      <TopNav />

      <div className="dashboard-main-container">
        <h1>Hello, Admin!</h1>

        <div className="main-number-hero">
          <DisplayCard heading="Total Orders" number="1,250" icon={<MdBorderColor></MdBorderColor>} />
          <DisplayCard heading="Total Revenue" number="45,320" icon={<MdOutlineCurrencyRupee></MdOutlineCurrencyRupee>} />
          <DisplayCard heading="Total Users" number="320" icon={<FaUserAlt></FaUserAlt>} />
          <DisplayCard heading="Total Products" number="94" icon={<PiCardsFill></PiCardsFill>} />
        </div>

        <div className="data-graph-and-table-container">
          <div className="sales-overview-container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae commodi voluptas ratione, molestiae aperiam explicabo quaerat dicta ad amet sapiente.
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