import React, { Component } from "react";
import {connect} from "react-redux"
import {removeFromCart} from "../ducks/users";
import "../styles/cartitem.css";

class CartItem extends Component{
    render(){
        return(
            <div className = 'item_container'>
                <div className = "item_image"><img src={this.props.image}/></div>
                <div className = "item_content">
                    <div className = "item_info">{this.props.name}</div>
                    <br/>
                    <br/>
                    <br/>
                    <div className = "button_box">
                    <button type='' className="" onClick={() => this.props.removeFromCart(this.props.index)}>Remove</button>
                    <button type='' className=''>Change Quantity</button></div> 
                </div> 
                <div className = "item_price">{this.props.price}</div>  
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        currentCart: state.currentCart,
        cartTotal: state.cartTotal
    }
}

export default connect(mapStateToProps, {removeFromCart})(CartItem)