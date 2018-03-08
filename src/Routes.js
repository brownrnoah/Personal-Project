import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import ShoppingCart from "./components/ShoppingCart";
import UserProfile from "./components/UserProfile";

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/menu" component={Menu} />
                <Route path="/about" component={About} />
                <Route path="/cart" component={ShoppingCart} />
                <Route to="/userprofile" component={UserProfile} />
                <Route to="" component="" />
                <Route to="" component="" />
            </Switch>
        )
    }
}
