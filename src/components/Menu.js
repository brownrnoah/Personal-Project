import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import "../styles/menu.css";
import Product from "./Product";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
        axios.get("/api/displayProduct").then((res) => {
            this.setState({
                productList: res.data
            })
        })
    }

    render() {
        var soups = this.state.productList.map(e => {
            console.log(e)
            if (e.producttype === "soup") {
                return (
                    <Product
                        name={e.productname}
                        image={e.productimg}
                        price={e.productprice}
                    />
                )
            }
        })

        var appetizers = this.state.productList.map(e => {
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
            console.log(e)
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
                <div className="wrapper">
                    {/* <div className="soups"> */}
                    {soups}
                    {/* </div> */}
                    {/* <div className="appetizers">
                        {appetizers}
                    </div> */}
                    {appetizers}

                </div>
            </div>
        )
    }
}

export default Menu;