import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../styles/header.css";
// import 'font-awesome/css/font-awesome.min.css';

class Header extends Component{
    render(){
        return(
            <div className="main_header">
                <Link to="/"><div><i class="fa fa-home"></i></div></Link>
                <Link to="/menu"><div>Menu</div></Link>
                <Link to="/about"><div>About</div></Link>
                <Link to="/cart"><div><i class="fa fa-shopping-cart"></i></div></Link>
                <Link to="/userprofile"><div><i className="fa fa-user"></i></div></Link>
                <a href={ process.env.REACT_APP_LOGIN }><div>Login/Signup</div></a>
                <a href={ process.env.REACT_APP_LOGOUT }><div>Logout</div></a>
            </div> 
        )
    }
}

export default Header;