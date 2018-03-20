import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/header.css";

class Header extends Component{
    render(){
        return(
            <div className="main_header">
                <Link to="/"><button type='' className=''>Home</button></Link>
                <Link to="/menu"><button type='' className=''>Our Menu</button></Link>
                <Link to="/about"><button type='' className=''>About</button></Link>
                <Link to="/cart"><button type='' className=''>Cart</button></Link>
                <Link to="/userprofile"><button type='' className=''>Your Profile</button></Link>
                <a href={ process.env.REACT_APP_LOGIN }><button type='' className=''>Login</button></a>
                <a href='http://localhost:3005/auth/logout'><button type='' className=''>Logout</button></a>
            </div> 
        )
    }
}

export default Header;