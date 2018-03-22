import React, { Component } from "react";
import Header from "./Header";
import "../styles/userprofile.css";
import {connect} from "react-redux"
import {getUser} from "../ducks/users";
import swal from 'sweetalert2';
import axios from "axios";

class UserProfile extends Component{

    componentDidMount() {
        this.props.getUser()
    }

    handler(){
        swal.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
          })
          
          var steps = [
            "Update First Name",
            'Update Last Name',
            'Update Address',
            "Update City",
            "Update Phone Number",
            "Update Email"
          ]
          
          swal.queue(steps).then((result) => {
            swal.resetDefaults()
          
            if (result.value) {
                console.log(result.value)
                axios.put("/api/updateUser",{
                    firstname: result.value[0],
                    lastname: result.value[1],
                    address: result.value[2],
                    city: result.value[3],
                    phone: result.value[4],
                    email: result.value[5]
                }).then(response => {
                    this.props.getUser()
                })
              swal({
                title: 'Profile Updated!',
                confirmButtonText: 'Finished'
              })
            }
          })
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
                        <div className="info_box"><div className="category">First Name</div><div className="info">{this.props.user.firstname}</div></div> 
                        <div className="info_box"><div className="category">Last Name</div><div className="info">{this.props.user.lastname}</div></div> 
                        <div className="info_box"><div className="category">Address</div><div className="info">{this.props.user.address}</div></div> 
                        <div className="info_box"><div className="category">City</div><div className="info">{this.props.user.city}</div></div> 
                        <div className="info_box"><div className="category">Phone</div><div className="info">{this.props.user.phone}</div></div> 
                        <div className="info_box"><div className="category">Email</div><div className="info">{this.props.user.email}</div></div> 
                        <button type='' onClick={()=> this.handler()} className=''>UPDATE PROFILE</button>
                    </div> 
                </div> 
            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log(state, "User info")
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(UserProfile)