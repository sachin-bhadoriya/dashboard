import { useState } from "react";
import "./styles/sideBar.scss"
import { Link, Outlet } from "react-router-dom";
import { RiMenu3Fill, RiDashboardFill } from "react-icons/ri";
import { MdAnalytics, MdShoppingCart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";

const SideBar = () => {
  const [isBarOpen, setIsBarOpen] = useState(true)

  function handleBarToggle() {
    setIsBarOpen(!isBarOpen)
  }

  return (
    <div className={`layout , ${isBarOpen ? "" : "layout-short"}`} style={{ gridTemplateColumns: isBarOpen ? "250px 1fr" : "60px 1fr" }}>
      <div className='sidebar-container'>
        <div className="header">
          <h1 className="logo">Admin Pannel</h1>
          <div className="menu-icon" onClick={handleBarToggle}><RiMenu3Fill /></div>
        </div>
        <div className="links">
          
          <Link to="dashboard"><li>
            <RiDashboardFill />
            <span>Dashboard</span>
          </li></Link>

          <Link to="user-management"><li>
            <FaUser />
            <span>Users Management</span>
          </li></Link>

          <Link to="product-management"><li>
            <AiFillProduct />
            <span>Products Management</span>
          </li></Link>

          <Link to="order-management"><li>
            <MdShoppingCart />
            <span>Orders Management</span>
          </li></Link>

          <Link to="analytics"><li>
            <MdAnalytics />
            <span>Analytics</span>
          </li></Link>

          <Link to="settings"><li>
            <IoSettingsSharp />
            <span>Settings</span>
          </li></Link>

        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  )
}

export default SideBar