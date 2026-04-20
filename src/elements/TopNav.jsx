import { useState } from 'react';
import './styles/topNav.scss'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoChevronDownOutline } from "react-icons/io5";

const TopNav = () => {
    const [isProfileShow, setIsProfileShow] = useState(false)

    function profileToggle() {
        setIsProfileShow(!isProfileShow)
    }

    return (
        <div className='top-nav-container'>
            <ul className="list-items">

                <li><CiSearch /></li>

                <li><IoIosNotifications /></li>

                <li className='profile-container'>

                    <div className="profile">
                    </div>

                    <span onClick={profileToggle}><IoChevronDownOutline /></span>

                    <ul className={`details  ${isProfileShow ? "" : "profile-hide"}`}>
                        <li>Sachin Bhadoriya</li>
                        <li>bhadoriyasachin33@gmail.com</li>
                        <li>8839192534</li>
                        <li>Logout</li>
                    </ul>

                </li>
            </ul>
        </div>
    )
}

export default TopNav