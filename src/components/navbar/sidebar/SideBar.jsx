import React from 'react';
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../../../context/darkModeContext';
import {useContext} from "react"


function SideBar() {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sideBar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: "none" }} >
        <span className='logo'>Admin logo</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: "none" }} >
          <li>
            <DashboardIcon  className='icon'/>
            <span>Dashboard</span>
          </li>
          </Link>
          <p className='title'>Lists</p>
          <Link to='/users' style={{ textDecoration: "none" }} >
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          </Link>
          <li>
            <CreditScoreOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <NotificationsOutlinedIcon  className='icon'/>
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICES</p>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Shipping</span>
          </li>
          <Link to='/products' style={{ textDecoration: "none" }} >
          <li>
            <StoreOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          </Link>
          
      
          <li>
            <SpaOutlinedIcon className='icon' />
            <span>Health</span>
          </li>
      
          <li>
            <ManageHistoryOutlinedIcon className='icon' />
            <span>History</span>
          </li>
       
         
          <li>
            <AssessmentOutlinedIcon  className='icon'/>
            <span>Reports</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LoginOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div onClick={()=> dispatch({type: "LIGTH"})} className="colorOption"></div>
        <div   onClick={()=> dispatch({type: "DARK"})} className="colorOption"></div>
       
      </div>
    </div>
  );
}

export default SideBar;