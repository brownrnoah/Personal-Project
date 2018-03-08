import React, { Component } from "react";
import Header from "./Header"
import "../styles/home.css";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                    <div className="background">
                        <div className="home_text">
                        <h1>Welcome to Saigon Cafe!<br/>Click here to visit our menu</h1>
                        <br/>
                        <Link to="/menu"><button type='' className=''>Vist Menu</button></Link>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Home;