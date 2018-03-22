import React, { Component } from "react";
import "../styles/menu.css";
import {connect} from "react-redux"
import {addToCart} from "../ducks/users";

class Product extends Component{
    render(){
        return(
            <div className = 'product_box'>
                <div className = 'placeholder'>
                    
                    <img alt="Product" src={this.props.image}/>
                    <p>{this.props.name}</p>
                </div>
                <div className="product_info">
                ${this.props.price} &nbsp;
                <button type='' onClick={() => this.props.addToCart({
                    name:this.props.name,
                    price:this.props.price,
                    image:this.props.image
                    })} className=''>Add to Order</button>
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
}

export default connect(mapStateToProps, {addToCart})(Product)