import React, { Component } from "react";
import "../styles/menu.css";

class Product extends Component{
    render(){
        console.log(this.props)
        return(
            <div className = 'product_box'>
                <div className = 'placeholder'>
                    <p>{this.props.name}</p>
                    <img src={this.props.image}/>
                </div>
                <div className="product_info">
                <p>${this.props.price} &nbsp; </p>
                <button type='' onClick={() => this.props.handler(this.props.name,this.props.price)} className=''>Add to Order</button>
                </div> 
            </div>
        )
    }
}

export default Product;