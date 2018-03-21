import React, { Component } from "react";
import Header from "./Header";
import "../styles/userprofile.css";
import {connect} from "react-redux"
import {getUser} from "../ducks/users";

class UserProfile extends Component{

    componentDidMount() {
        this.props.getUser()
    }

    render(){
        console.log(this.props, 'props in this component')
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

function mapStateToProps(state){
    console.log(state)
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(UserProfile)