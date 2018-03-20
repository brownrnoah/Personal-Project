import React, { Component } from "react";
import Header from "./Header";
import "../styles/userprofile.css";

class UserProfile extends Component{

    // componentDidMount() {
    //     axios.get("/api/displayProduct").then((res) => {
    //         this.setState({
    //             productList: res.data
    //         })
    //     })
    // }

    render(){
        return(
            <div>
                <Header/>                
                <div className="user_page">
                    <div className="order_history">
                        <div><h1>Past Order History</h1></div>
                    </div> 
                    <div className="user_info">
                        <div>First Name</div>
                        <div>Last Name</div> 
                        <div>Address</div> 
                        <div>City</div> 
                        <div>Phone</div> 
                        <div>Email</div>  
                    </div> 
                </div> 
            </div> 
        )
    }
}

export default UserProfile;