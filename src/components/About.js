import React, { Component } from "react";
import Header from "./Header"
import "../styles/about.css"
import logo from "../images/facebook_logo.png"
import photo from "../images/about_photo.jpg"
import MyMapComponent from "./MyMapComponent";

class About extends Component {

    render() {
        return (
            <div className="about_page">
                <Header />
                <div className="about_body">
                    <div className="about_photo"><img alt="Product" src={photo} className="photo" /></div>
                    <div className="about_text">
                        <h1>Call us to ask a question or make an order</h1>
                        <h3>We do carry out or delivery<br/> Delivery must be a minumum order of $15.00</h3>
                        <h4>440 West 300 South | Provo, UT 84601</h4>
                        <h4>Telephone: 801-812-1173</h4>
                        <a href="https://www.facebook.com/Saigon-Cafe-237398185226/"><img alt="facebook" src={logo} className="facebook" /></a>
                    </div>
                    <div className="google_map">
                        <MyMapComponent 
                        isMarkerShown 
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDX8oov94YUXkuCfebwMS2JMSM7zZG6Mm4&callback=initMap"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;