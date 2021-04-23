/**
 * https://github.com/YIZHUANG/react-multi-carousel
 */
import React from "react"
import Card from 'react-bootstrap/Card'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from "./../assets/images/ecommerce.jpg"
import img2 from "./../assets/images/news4.jpg"
import img3 from "./../assets/images/news3.jpg"
import img4 from "./../assets/images/satisfaction.jpg"

const carouselContain = [
    { img: img1, title: "Envie", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", footerText: "Livraison rapide chez soi" },
    { img: img2, title: "Achat", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", footerText: "Paiement sécurisé" },
    { img: img3, title: "Satisfaction", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", footerText: "Remboursement garanti" },
    { img: img4, title: "Remboursement", bodyText: "Chez Madjy, votre satisfaction est notre priorité !", footerText: "Produits variés" },
]
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const MultiBanner = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={true}
            showDots={true}
            renderDotsOutside={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            partialVisible={false}
            customTransition=""
            transitionDuration={1300}
            containerClass="multi-carousel-container"
            itemClass="multi-carousel-item"
            dotListClass="dot-list-style"
        >
            {carouselContain.map(data => (
                <Card>
                    <Card.Img className="w-100" variant="top" style={{ height: '12rem', width: 'auto' }} src={data.img} />
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text className="text-center_">{data.bodyText}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <small className="text-muted text-center">{data.footerText}</small>
                    </Card.Footer>
                </Card>
            ))}
        </Carousel>
    )
}

export default MultiBanner;
