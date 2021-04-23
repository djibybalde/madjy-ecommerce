/**
 * Carousels: https://react-bootstrap.netlify.app/components/carousel/#example
 */

import React from "react"

import Card from 'react-bootstrap/Card'
import { Carousel } from 'react-bootstrap'

import img1 from "./../assets/images/ecommerce.jpg"
import img2 from "./../assets/images/news4.jpg"
import img3 from "./../assets/images/news3.jpg"
import img4 from "./../assets/images/testimonial.jpg"

const bannerContain = [
    { interval: 1200, img: img1, title: "Tout part d'une envie de se faire plaisir!", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", },
    { interval: 1000, img: img2, title: "Vous passez à l'acte en remplissant votre panier ", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", },
    { interval: 900, img: img3, title: "Vous recevez vos artiles chez vous dans les plus bref délais", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", },
    { interval: 1000, img: img4, title: "Vous nous faites part de votre satisfaction", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", },
]

const Banner = () => {
    return (
        <Carousel className="carousel" id="carousel">
            {bannerContain.map(data => (
                <Carousel.Item interval={data.interval}>
                    <Card>
                        <Card.Img className="w-100" variant="top" style={{ height: '30rem', width: 'auto' }} src={data.img} />
                    </Card>
                    <Carousel.Caption>
                        <h3>{data.title}</h3>
                        <p>{data.bodyText}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Banner;
