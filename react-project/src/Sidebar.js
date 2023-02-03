import './App.css';
import { MdDashboard, MdPeopleAlt, MdPayments, MdOutlineAllInbox, MdOutlineHelp } from 'react-icons/md';
import { SiCodesandbox } from 'react-icons/si';
import { FaHandsHelping, FaAward } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom';



function Sidebar() {
    return (
        <div className="leftSideBar">
            <div className="sidebar">
                <a href="#">
                    <img src="https://elred.io/wp-content/uploads/2022/03/el-red-logo-v4.svg" />
                </a>
            </div>
            <div className="sidebar">
                <Link to="dashboard"><MdDashboard />Dashboard</Link>
            </div>
            <div className="sidebar">
                <Link to="order"> <SiCodesandbox /> Orders</Link>
            </div>
            <div className="sidebar">
                <Link to="teams"> <MdPeopleAlt /> Team Members</Link>
            </div>
            <div className="sidebar">
                <Link to="partner"> <FaHandsHelping /> Partners</Link>
            </div>
            <div className="sidebar">
                <Link to="product"> <MdOutlineAllInbox /> Product Listing</Link>
            </div>
            <div className="sidebar">
                <Link to="award"> <FaAward /> Award & Owners</Link>
            </div>
            <div className="sidebar">
                <Link to="about"><FcAbout /> About Us</Link>
            </div>
            <div className="sidebar">
                <Link to="payment"> <MdPayments /> Payment Info</Link>
            </div>

            <div className='needHelp'>
                <MdOutlineHelp />
                Need Help ?
                <div className='teamSupport'> Our support team is at your disposal. </div>
                <button className='helpButton'>Get help</button>
            </div>
        </div>
    );
}

export default Sidebar;
