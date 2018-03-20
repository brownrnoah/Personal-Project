import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import "../styles/menu.css";
import Product from "./Product";
import {connect} from "react-redux"
import {addToCart} from "../ducks/users";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            // currentCart: [],
            // cartTotal: 0
        }
        // this.addToCart = this.addToCart.bind(this)
    }

    addToCart(name,price) {
        // var newItem = this.state.currentCart;
        // var newTotal = this.state.cartTotal;
        // newItem.push(name);
        // newTotal = (+newTotal + +price).toFixed(2);

        // this.setState({
        //     currentCart: newItem,
        //     cartTotal: newTotal
        // }) 

        addToCart(name,price)
    }

    componentDidMount() {
        axios.get("/api/displayProduct").then((res) => {
            this.setState({
                productList: res.data
            })
        })
    }

    render() {
        console.log(this.props.currentCart);
        console.log(this.props.cartTotal);
        var soups = this.state.productList.map(e => {
            if (e.producttype === "soup") {
                return (
                    <Product
                        name={e.productname}
                        image={e.productimg}
                        price={e.productprice}
                        handler={this.addToCart}
                    />
                )
            }
        })

        var appetizers = this.state.productList.map(e => {
            if (e.producttype === "appetizers") {
                return (
                    <Product
                        name={e.productname}
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var friedRice = this.state.productList.map(e => {
            if (e.producttype === "friedRice") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var loMein = this.state.productList.map(e => {
            if (e.producttype === "loMein") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var crunchyChowMein = this.state.productList.map(e => {
            if (e.producttype === "crunchyChowMein") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var chicken = this.state.productList.map(e => {
            if (e.producttype === "chicken") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var beef = this.state.productList.map(e => {
            if (e.producttype === "beef") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var pork = this.state.productList.map(e => {
            if (e.producttype === "pork") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var shrimp = this.state.productList.map(e => {
            if (e.producttype === "shrimp") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var vegetable = this.state.productList.map(e => {
            if (e.producttype === "vegetable") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var eggFooYoung = this.state.productList.map(e => {
            if (e.producttype === "eggFooYoung") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var sizzlingPlatter = this.state.productList.map(e => {
            if (e.producttype === "sizzlingPlatter") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var panFriedNoodles = this.state.productList.map(e => {
            if (e.producttype === "panFriedNoodles") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var noodleSoups = this.state.productList.map(e => {
            if (e.producttype === "noodleSoups") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var chefSpecials = this.state.productList.map(e => {
            if (e.producttype === "chefSpecials") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var specialCombination = this.state.productList.map(e => {
            if (e.producttype === "specialCombination") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var sideOrders = this.state.productList.map(e => {
            if (e.producttype === "sideOrders") {
                return (
                    <Product
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        return (
            <div>
                <Header />
                <div>
                    <div className="first_food_header"><h1>&darr; &emsp; Soups &emsp; &darr;</h1></div> 
                    <div className="wrapper soups">
                        {soups}
                    </div>
                    <div className="food_header"><h1>&darr; &emsp; Appetizers &emsp; &darr;</h1></div> 
                    <div className="wrapper appetizers">
                        {appetizers}
                    </div>
                    <div className="food_header"><h1>&darr; &emsp; Fried Rice &emsp; &darr;</h1></div> 
                    <div className="wrapper friedRice">
                        {friedRice}
                    </div>
                    <div className="food_header"><h1>&darr; &emsp; Lo Mein &emsp; &darr;</h1></div> 
                    <div className="wrapper loMein">
                        {loMein}
                    </div>
                    <div className="food_header"><h1>Crunchy Chow Mein</h1></div> 
                    <div className="wrapper crunchyChowMein">
                        {crunchyChowMein}
                    </div>
                    <div className="food_header"><h1>Chicken</h1></div> 
                    <div className="wrapper chicken">
                        {chicken}
                    </div>
                    <div className="food_header"><h1>Beef</h1></div> 
                    <div className="wrapper beef">
                        {beef}
                    </div>
                    <div className="food_header"><h1>Pork</h1></div> 
                    <div className="wrapper pork">
                        {pork}
                    </div>
                    <div className="food_header"><h1>Shrimp</h1></div> 
                    <div className="wrapper shrimp">
                        {shrimp}
                    </div>
                    <div className="food_header"><h1>Egg Foo Young</h1></div> 
                    <div className="wrapper eggFooYoung">
                        {eggFooYoung}
                    </div>
                    <div className="food_header"><h1>Sizzling Platters </h1></div> 
                    <div className="wrapper sizzlingPlatter">
                        {sizzlingPlatter}
                    </div>
                    <div className="food_header"><h1>Pan Fried Noodles</h1></div> 
                    <div className="wrapper panFriedNoodles">
                        {panFriedNoodles}
                    </div>
                    <div className="food_header"><h1>Noodle Soups</h1></div> 
                    <div className="wrapper noodleSoups">
                        {noodleSoups}
                    </div>
                    <div className="food_header"><h1>Chef Specials</h1></div> 
                    <div className="wrapper chefSpecials">
                        {chefSpecials}
                    </div>
                    <div className="food_header"><h1>Special Combination</h1></div> 
                    <div className="wrapper specialCombination">
                        {specialCombination}
                    </div>
                    <div className="food_header"><h1>Side Orders</h1></div> 
                    <div className="wrapper sideOrders">
                        {sideOrders}
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
}

export default connect(mapStateToProps, {addToCart})(Menu)