import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"
import TopNavbar from "./components/Navbar"
import FooterPage from "./components/Footer"
import Products from "./components/Products"
import Cart from "./components/Cart"
import './App.css';

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <TopNavbar />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
            </Switch>
            <FooterPage />
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
