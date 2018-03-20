import React, { Component } from "react";
import Header from "./Header";
import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import {addToCart} from "../ducks/users";

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="cart">
                    <div className="cart_body">
                        <div className="orderPreview">
                            <div className="your_cart"><h2>YOUR CART</h2></div>
                            <div className="order_list">
                                <p>You currently don't have any items on your order.</p>
                                <p>Return to <Link to="/menu">Menu</Link> to add items to your order.</p>
                            </div>
                        </div>
                        <div className="orderSummary">
                            <h2>Order Summary</h2>
                            <hr />
                            <h3>Subtotal:</h3>
                            <hr />
                            <h3>Estimated Tax:</h3>
                            <hr />
                            <h2>Total:</h2>
                            <hr />
                            <div><p>CHECKOUT</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        currentCart: state.currentCart,
        cartTotal: state.cartTotal
    }
    console.log(state)
}

export default connect(mapStateToProps, {})(ShoppingCart)