import React, { useContext } from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';

import { cartContext } from "../Global/cartContext"

import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col } from 'react-bootstrap'

import env from "react-dotenv"; // https://www.npmjs.com/package/react-dotenv

toast.configure();

function ToEuro({ value }) {
    const valueRounded = value.toFixed(2)
    const value1 = valueRounded.toString().split('.')[0];
    const value2 = valueRounded.toString().split('.')[1];
    return <div>{value1}<sup>€{value2}</sup></div>
}

const Cart = (props) => {
    const { dispatch, shoppingCart, quantity, totalPrice } = useContext(cartContext);
    const handleToken = async (token) => {
        const product = { name: 'Tous les produits', price: totalPrice }
        const response = await axios.post('https://w7gqb.sse.codesandbox.io/checkout', { token, product });
        const { status } = response.data;
        if (status === 'success') {
            dispatch({ type: 'EMPTY' });
            props.history.push(`/`)
            toast.success("Merci pour votre achat! Votre paiement a bien été enregistré. Votre colis vous sera livré d'ici 3 jours. À bientôt!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <Container className="cartContainer" style={{marginBottom: "3rem", }}> {/* justify-content-md-center */}
            <Col xs={12} sm={12} md={12} lg={8}>
                {shoppingCart.length ? shoppingCart.map(product => (
                    <Row key={product.id} className="cart">
                        <Col xs={2} sm={2} md={2} lg={2} className="cartProImage"><img src={product.image} alt="no find" /><span className="imageCount">{product.quantity}</span></Col>
                        <Col xs={5} sm={3} md={3} lg={3}>{product.name}</Col>
                        <Col xs={3} sm={2} md={1} lg={1}><ToEuro value={product.price}></ToEuro></Col>
                        <Col xs={2} sm={2} md={1} lg={1}><button type="button" class="btn btn-outline-primary" onClick={() => dispatch({ type: 'INC', id: product.id })} style={{ fontSize: 0 }}><i className="fas fa-plus" style={{ fontSize: 16 }}></i></button></Col>
                        <Col xs={2} sm={1} md={1} lg={1}>{product.quantity}</Col>
                        <Col xs={2} sm={2} md={1} lg={1}><button type="button" class="btn btn-outline-warning" onClick={() => dispatch({ type: 'DEC', id: product.id })} style={{ fontSize: 0 }}><i className="fas fa-minus" style={{ fontSize: 16 }}></i></button></Col>
                        <Col xs={3} sm={3} md={1} lg={1}><ToEuro value={product.quantity * product.price}></ToEuro></Col>
                        <Col xs={1} sm={1} md={1} lg={1}><button type="button" className="btn btn-outline-danger" onClick={() => dispatch({ type: 'DEL', id: product.id })} style={{ fontSize: 0 }}><i class="fas fa-trash" style={{ fontSize: 16 }}></i></button></Col>
                    </Row>

                )) : <div className="alert alert-warning">
                    <h4>Bonjour, votre panier est vide !</h4>
                    <p>Vous pouvez ajouter les produits que vous souhaitez commander, <a href="/#product">ici</a>.</p>
                    <h6>Avez-vous besoin d'aide ? </h6>
                    <p>Vous pouvez nous contacter en remplissant le formulaire de contact, <a href="/#footer">ici</a>.</p>
                </div>
                }
            </Col>

            {shoppingCart.length ? <Col xs={6} sm={6} md={5} lg={3} className="summary">
                <Row className="summary-title"><h5><strong>Total du panier</strong></h5></Row>
                <Row>
                    <Col>Articles</Col>
                    <Col><div className="summary-total">{quantity}</div></Col>
                </Row>
                <Row>
                    <Col>À payer</Col>
                    <Col className="summary-total"><ToEuro value={totalPrice}></ToEuro></Col>
                </Row>
                <Row className="stripeSection">
                    <StripeCheckout
                        stripeKey={env.REACT_APP_STRIPEKEY || "pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg"}
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={100 * totalPrice}
                        currency="eur"
                        name="Paiement"
                        description="Tous les champs sont requis!"
                        bitcoin={true}
                        reconfigureOnUpdate={false}
                        label="Passer la commande"
                        panelLabel="Payer {{amount}}"
                    />
                </Row>
            </Col> : ''}
        </Container>
    )
}

export default Cart;
