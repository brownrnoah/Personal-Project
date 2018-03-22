import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/header.css";

class Header extends Component{
    render(){
        return(
            <div className="main_header">
                <Link to="/"><div>Home</div></Link>
                <Link to="/menu"><div>Our Menu</div></Link>
                <Link to="/about"><div>About</div></Link>
                <Link to="/cart">Cart</Link>
                <Link to="/userprofile">Your Profile</Link>
                <a href={ process.env.REACT_APP_LOGIN }>Login</a>
                <a href={ process.env.REACT_APP_LOGOUT }>Logout</a>
            </div> 
        )
    }
}

export default Header;