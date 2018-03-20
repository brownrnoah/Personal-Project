import axios from "axios";

const initialState = {
    user: {},
    currentCart: [],
    cartTotal: 0
}

const GET_USER = "GET_USER";
const ADDTOCART = "ADDTOCART";

export function getUser() {
    let userData = axios.get("/auth/me").then(res => {
        return res.data;
    })
    return {
        type: GET_USER,
        payload: userData
    }

}

export function addToCart(name, price) {
    return {
        type: ADDTOCART,
        payload: { name, price }
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
            newItem.push(action.payload.name);
            newTotal = (+newTotal + +action.payload.price).toFixed(2);
            return Object.assign({}, state, {currentCart:newItem, cartTotal:newTotal})
        default:
            return state;
    }
}