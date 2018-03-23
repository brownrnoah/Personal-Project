import React, { Component } from "react";
import Header from "./Header"
import "../styles/home.css";
import { Link } from "react-router-dom";
import HomeSlider from './HomeSlider';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home_slider"><HomeSlider /></div>
                <br />
                <Link to="/menu"><button className='button'>Vist Menu</button></Link>
            </div>
        )
    }
}

export default Home;