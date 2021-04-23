import React, { createContext, useReducer } from "react"
import { ProductReducer } from "./productReducer"

import headphone from "../assets/images/products/other/headphone.jpg"
import watchConnected from "../assets/images/products/other/watchConnect.jpg"
import watch from "../assets/images/products/other/watch.jpg"

import babouche from "../assets/images/products/pagne/babouche.jpg"
import ballerine from "../assets/images/products/pagne/ballerine.jpg"
import boubou from "../assets/images/products/pagne/boubou-homme.jpg"
import coqueTel from "../assets/images/products/pagne/coque-tel.jpg"
import robePagne from "../assets/images/products/pagne/robe-pagne.png"
import tennis from "../assets/images/products/pagne/tennis.png"

import samsungA70 from "../assets/images/products/samsung/samsung-a70.jpg"
import samsungA40 from "../assets/images/products/samsung/samsung-a40.jpg"
import samsungJ2 from "../assets/images/products/samsung/samsung-j2.jpg"
import samsungJ3 from "../assets/images/products/samsung/samsung-j3.jpg"
import samsungS7 from "../assets/images/products/samsung/samsung-s7.jpg"
import samsungS10 from "../assets/images/products/samsung/samsung-s10.jpg"

import iphone11 from "../assets/images/products/iPhone/iphone11.jpg"
import iphone10 from "../assets/images/products/iPhone/iphone10.jpg"
import iphone9 from "../assets/images/products/iPhone/iphone9.jpg"
import iphone8 from "../assets/images/products/iPhone/iphone8.jpg"
import iphone7 from "../assets/images/products/iPhone/iphone7.jpg"

export const productContext = createContext();

const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        { id: 3, name: 'Montre', price: 217.23, image: watch, productStatus: 'hot' },
        { id: 4, name: 'Connectée', price: 299.99, image: watchConnected, productStatus: 'new' },
        { id: 6, name: 'Casque sans fil', price: 499.99, image: headphone, productStatus: 'new' },

        { id: 9, name: 'Babouche', price: 15.12, image: babouche, productStatus: 'new' },
        { id: 10, name: 'Ballerine', price: 20.74, image: ballerine, productStatus: 'hot' },
        { id: 11, name: 'Boubou', price: 80.80, image: boubou, productStatus: 'new' },
        { id: 12, name: 'Coque SG-A40', price: 25.00, image: coqueTel, productStatus: 'hot' },
        { id: 13, name: 'Tennis', price: 67.50, image: tennis, productStatus: 'hot' },
        { id: 13, name: 'Robe en pagne', price: 30.07, image: robePagne, productStatus: 'hot' },

        { id: 14, name: 'Samsung A40', price: 219.99, image: samsungA40, productStatus: 'hot' },
        { id: 17, name: 'Samsung A70', price: 320.00, image: samsungA70, productStatus: 'new' },
        { id: 15, name: 'Samsung J2', price: 109.00, image: samsungJ2, productStatus: 'new' },
        { id: 16, name: 'Samsung J3', price: 120.74, image: samsungJ3, productStatus: 'hot' },
        { id: 18, name: 'Samsung S10', price: 359.99, image: samsungS10, productStatus: 'hot' },
        { id: 19, name: 'Samsung S7', price: 174.69, image: samsungS7, productStatus: 'new' },

        { id: 20, name: 'Iphone 11', price: 1207.29, image: iphone11, productStatus: 'hot' },
        { id: 21, name: 'Iphone 10', price: 990.73, image: iphone10, productStatus: 'new' },
        { id: 22, name: 'Iphone 9', price: 430.00, image: iphone9, productStatus: 'hot' },
        { id: 23, name: 'Iphone 8', price: 319.99, image: iphone8, productStatus: 'new' },
        { id: 24, name: 'Iphone 7', price: 244.19, image: iphone7, productStatus: 'hot' },

    ])

    return <div>
        <productContext.Provider value={{ products }}>
            {props.children}
        </productContext.Provider>
    </div>
}

export default ProductContextProvider;
