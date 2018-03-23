import React, { Component } from "react";
import Header from "./Header";
import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import CartItem from "./CartItem";

class ShoppingCart extends Component {
    
    render() {
        var subtotal = (+this.props.cartTotal).toFixed(2);
        var tax = .0675;
        var estimatedTax = (this.props.cartTotal * tax).toFixed(2);
        var total = (+estimatedTax + +this.props.cartTotal).toFixed(2);

        var cartItem = this.props.currentCart.map((e, index) => {
            return <CartItem key={index}
                index={index}
                name={e.name}
                price={e.price}
                image={e.image} />
        })
        if (cartItem.length === 0) {
            cartItem = (
                <div className="emptyCart">
                    <p>You currently don't have any items on your order.</p>
                    <p>Return to <Link to="/menu">Menu</Link> to add items to your order.</p>
                </div>
            )
        }
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
                            <h3>Subtotal: $ {subtotal}</h3>
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
    console.log(state.cartTotal)
    return {
        currentCart: state.currentCart,
        cartTotal: state.cartTotal
    }
}

export default connect(mapStateToProps, {})(ShoppingCart)