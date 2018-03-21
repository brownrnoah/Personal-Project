import React, { Component } from "react";
import Header from "./Header";
import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { addToCart } from "../ducks/users";
import CartItem from "./CartItem";

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productArray: this.props.currentCart,
            orderTotal: (+this.props.cartTotal).toFixed(2)
        }
    }

    componentWillReceiveProps(){
        
    }
    

    render() {
        console.log(this.state.productArray)
        var tax = .0675;
        var estimatedTax = (this.state.orderTotal * tax).toFixed(2);
        var total = (+estimatedTax + +this.state.orderTotal).toFixed(2);

        var cartItem = this.state.productArray.map((e,index) => {
            return <CartItem 
            index = {index}
            name= {e.name}
            price= {e.price}
            image= {e.image} />
        })
        if (cartItem.length === 0) {
            cartItem = (
                <div>
                    <p>You currently don't have any items on your order.</p>
                    <p>Return to <Link to="/menu">Menu</Link> to add items to your order.</p>
                </div>
            )
        }

        console.log(cartItem)
        return (
            <div>
                <Header />
                <div className="cart">
                    <div className="cart_body">
                        <div className="orderPreview">
                            <div className="your_cart"><h2>YOUR CART</h2></div>
                            <div className="order_list">
                                {cartItem}
                            </div>
                        </div>
                        <div className="orderSummary">
                            <h2>Order Summary</h2>
                            <hr />
                            <h3>Subtotal: $ {this.state.orderTotal}</h3>
                            <hr />
                            <h3>Estimated Tax: $ {estimatedTax}</h3>
                            <hr />
                            <h2>Total: $ {total}</h2>
                            <hr />
                            <div><p>CHECKOUT</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCart: state.currentCart,
        cartTotal: state.cartTotal
    }
    console.log(state)
}

export default connect(mapStateToProps, {})(ShoppingCart)