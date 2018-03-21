import axios from "axios";
import swal from 'sweetalert2';

const initialState = {
    user: {},
    currentCart: [],
    cartTotal: 0
}

const GET_USER = "GET_USER";
const ADDTOCART = "ADDTOCART";
const REMOVEFROMCART = "REMOVEFROMCART";

export function getUser() {
    let userData = axios.get("/auth/me").then(res => {
        console.log(res.data)
        return res.data;
    })
    return {
        type: GET_USER,
        payload: userData
    }

}

export function addToCart(product) {
    swal({
        title:"Success!",
        text: "Item was added to your cart",
        timer: 1000,
        showConfirmButton: false
    });
    return {
        type: ADDTOCART,
        payload: product
    }
}

export function removeFromCart(index) {
    swal({
        title:"Success!",
        text: "Item was removed from your cart",
        timer: 1000,
        showConfirmButton: false
    });
    return {
        type: REMOVEFROMCART,
        payload: index
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + "_FULFILLED":
            console.log("state", action)
            return Object.assign({}, state, { user: action.payload });
        case ADDTOCART:
            var newItem = state.currentCart;
            var newTotal = state.cartTotal;
            newItem.push(action.payload);
            newTotal = (+newTotal + +action.payload.price).toFixed(2);
            return Object.assign({}, state, {currentCart:newItem, cartTotal:newTotal})
        case REMOVEFROMCART:
            var newItem = state.currentCart;
            var newTotal = state.cartTotal;
            newItem.splice(action.payload,1)
            newTotal = (+newTotal + +action.payload.price).toFixed(2);
            return Object.assign({}, state, {currentCart:newItem, cartTotal:newTotal})
        default:
            return state;
    }
}