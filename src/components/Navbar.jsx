import React, { useContext } from "react"
import { cartContext } from "../Global/cartContext"
import { Link } from "react-router-dom"
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
} from 'react-bootstrap'

const TopNavbar = ({ cartToggle }) => {
    const { shoppingCart } = useContext(cartContext);

    return <div className="top-bar">
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light" fixed="top" className="top-nav-bar">
            <Navbar.Brand as={Link} to="/"><i class="fas fa-store-alt"></i> Madjy</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#footer">About</Nav.Link>
                    <Nav.Link href="/#footer">Contact</Nav.Link>
                </Nav>
                <Nav style={{ fontSize: 15 }} className="nav-search">
                    <NavDropdown title="Trier par catégories" id="category" className="dropdown-search">
                        <NavDropdown.Item as={Link} to="/#product">High-Tech</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/#product">Hygiène et Santé</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/#product">Vêtement et Accessoire</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/#product/3.2">Sports et Loisirs</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/#product/3.3">Cuisine et Maison</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/#product/3.4">Autres catégories</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" style={{ fontSize: 16 }}></FormControl>
                    <Button variant="light" className="search-icon" style={{ fontSize: 16 }}><i className="fas fa-search"></i></Button>
                </Form>
                <Nav className="text-left" variant="outline-warning">
                    <Nav.Link as={Link} to="/cart"> <i className="fas fa-user-circle" style={{ fontSize: 30 }}></i></Nav.Link>
                    <Nav.Link onClick={cartToggle} as={Link} to="/cart">
                        <strong className="total-cart-icon"><em>{shoppingCart ? shoppingCart.length : 0}</em></strong>
                        <i className="fas fa-cart-plus fa-cart-icon" style={{ fontSize: 27 }}></i>
                    </Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </div>
}

export default TopNavbar;
