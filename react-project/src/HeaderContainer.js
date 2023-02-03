import './App.css';
import { ImSearch } from 'react-icons/im'
import { TbTruckDelivery, TbUserCircle } from 'react-icons/tb';
import { RiArrowDropDownLine } from 'react-icons/ri'


function HeaderContainer() {
    return (
        <div className='headerContainer'>
            <div className='containerheader'>
                <div className='left-container'>
                    <a href="#">
                        <img src="https://elred.io/wp-content/uploads/2022/03/el-red-logo-v4.svg" />
                    </a>
                </div>
                <div className='right-container'>
                        <button type="submit" className="searchButton">
                            <ImSearch />
                            <input type="text" className="searchTerm" placeholder="Search" />
                        </button>
                    <div className='buttonContainer'>
                        <button className='checkout'> <TbTruckDelivery /> Checkout </button>
                        <button className='user'> <TbUserCircle /> User Admin <RiArrowDropDownLine /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderContainer;
