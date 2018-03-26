import React, { Component } from "react";
import Header from "./Header";
import "../styles/shoppingcart.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import CartItem from "./CartItem";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { emptyCart } from "../ducks/users";
import swal from 'sweetalert2';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state ={
            subtotal: 0,
            tax: .0675,
            total: 0,
            noDecimal: 0
        }
    }

    componentDidMount(){
        var estimatedTax = (this.props.cartTotal * this.state.tax).toFixed(2)
        this.setState({
            subtotal:(+this.props.cartTotal).toFixed(2),
            estimatedTax: estimatedTax,
            total:(+estimatedTax + +this.props.cartTotal).toFixed(2),
            noDecimal:(+estimatedTax + +this.props.cartTotal)*100
        })
    }

    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post("/api/payment", { token, amount: this.state.noDecimal } ).then(response => {
          this.props.emptyCart();
          swal({
            title:"Success!",
            text: "Your order has been placed, your food should be ready within 20 minutes!",
            showConfirmButton: true
        });
        });
    }

    render() {
        var subtotal = this.state.subtotal;
        var tax = .0675;
        var estimatedTax = this.state.estimatedTax;
        var total = this.state.total;
        var noDecimal = this.state.noDecimal;

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
                            <StripeCheckout
                                token={this.onToken}
                                stripeKey="pk_test_y7qfmukzRqOnsfggoDxcHaAN"
                                amount={noDecimal}
                                // data-label="CHECKOUT"
                            />
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

export default connect(mapStateToProps, {emptyCart})(ShoppingCart)