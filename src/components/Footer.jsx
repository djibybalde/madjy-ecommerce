import React from "react";
import { Col, Row, } from 'react-bootstrap'

const FooterPage = () => {
    return (
        <footer className="text-center">
            <Row className="text-center footer" id="footer">
                <Col md={2}>
                    <h5 className="title">Nous suivre</h5>
                    <a target="_blank" rel="noreferrer" className="media-icon mr-3" href="https://github.com/djibybalde" ><i class="fab fa-github" aria-hidden="true"></i></a>
                    <a target="_blank" rel="noreferrer" className="media-icon mr-3" href="https://www.linkedin.com/in/djibybalde/"><i class="fab fa-linkedin"></i></a>
                    <a target="_blank" rel="noreferrer" className="media-icon mr-3" href="https://twitter.com/dysbalde"><i class="fab fa-twitter"></i></a>
                    <a target="_blank" rel="noreferrer" className="media-icon mr-0" href="https://www.instagram.com/dysbalde/"><i class="fab fa-instagram"></i></a>
                </Col>
                <Col md={3}>
                    <h5>Nous contacter</h5>
                    <address>
                        Mobile: 04 99 99 99 99 <br />
                        E-mail: <a href="mailto:service@madjy.fr?subject=Service après vente">service@madjy.fr</a>
                    </address>
                </Col>
                <Col md={7} className="text-right">
                    <iframe width="400" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=12%20rue%20Fructidor,%2093400%20Saint-Ouen&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </Col>
            </Row>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Copyright, Madjy
            </div>
        </footer>
    );
}

export default FooterPage;
