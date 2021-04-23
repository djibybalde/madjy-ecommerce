import { Card } from 'react-bootstrap'
import React, { useContext } from "react"

import { productContext } from "../Global/productContext"
import { cartContext } from "../Global/cartContext"
import MultiBanner from "./MultiCarousel"
import Banner from "./Banner"

function ToEuro({ value }) {
  const valueRounded = value.toFixed(2)
  const value1 = valueRounded.toString().split('.')[0];
  const value2 = valueRounded.toString().split('.')[1];
  return <div>{value1}<sup>€{value2}</sup></div>
}

const Products = () => {
  const { products } = useContext(productContext);
  const { dispatch, message } = useContext(cartContext);

  return (
    <div>
      <Banner />
      <MultiBanner />
      <div className="product-cart-container" id="product">
        {products.map(product => (
          <Card style={{ width: '13rem', margin: '0.25rem' }} key={product.id}>
            <Card.Img className="w-100" variant="top" style={{ height: '12rem', width: '13rem' }} src={product.image} />
            {product.productStatus === 'new' ? <div className="new">En stock</div> : ''}
            {product.productStatus === 'hot' ? <div className="hot">Quantité limitée</div> : ''}
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <span className="product-price text-center"><ToEuro value={product.price}></ToEuro></span>
                <div className="add-product" data-toggle="modal" data-target="#add-product-modal" onClick={() => dispatch({ type: 'ADD', id: product.id, products })}>
                  <button type="button" className="btn btn-outline-warning btn-block"><i className="fas fa-cart-plus"></i> Ajouter au panier</button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/*Modal to show message*/}
      <div className="modal fade bd-example-modal-xl" id="add-product-modal" role="document">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          {/*<Modal content*/}
          <div className="modal-content" style={{ width: '24rem' }}>
            <div className="modal-body">
              <div className="message">{message}</div>
              <div className="text-center btn-block">
                <button type="button" className="btn btn-outline-dark mr-3" data-dismiss="modal" >&times; Fermer</button>
                <button type="submit" className="btn btn-outline-info" data-dismiss="modal">
                  <a ahref="/cart"></a><i className="fas fa-cart-plus"></i> Panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="#carousel" className="go-up">
          <i class="fas fa-arrow-alt-circle-up" style={{ fontSize: 27 }}></i>
        </a>
      </div>
    </div>
  )
}

export default Products;
