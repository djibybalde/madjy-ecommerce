import React, { createContext, useReducer } from "react"
import { CartReducer } from "./cartReducer"
export const cartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: [], quantity: 0, totalPrice: 0, }) // message: '' 

    return (
        <cartContext.Provider value={{ ...cart, dispatch }}>
            { props.children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
