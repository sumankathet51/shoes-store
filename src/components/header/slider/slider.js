import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import Description from '../description/description';
import SideSlider from '../sideSlider/sideSlider';

export const Slider = ({ shoes, cart, setCart }) => {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [width, setWidth] = useState(100);


    setTimeout(() => {
        slideRight();
        }, 3000
    );

    const slide = (id) => {
        setCurrentProduct(id);
        setCurrentImage(0);
        // setWidth(0)
    }

    const slideLeft = () => {
        setCurrentImage((currentImage === 0) ? shoes[currentProduct].image.length - 1 : currentImage - 1);
        // setWidth(0);
    }

    const slideRight = () => {
        // setWidth(0);
        setCurrentImage((currentImage === shoes[currentProduct].image.length - 1) ? 0 : currentImage + 1);

    }

    let description = shoes[currentProduct].description;
    if(description.length > 30) {
        description =  React.createElement(
            "p",
            { className: 'slider-desc' },
            description.substr(0, 100) + '.... ',
            React.createElement('a', {href: '#', className: 'read-more'}, 'Read More')

        );
    } else {
        description =  React.createElement(
            "p",
            { className: 'slider-desc' },
            description
        );
    }

    return (
        <div className="slider container">
            <Description product={shoes[currentProduct]} currentImage={currentImage} slideLeft={slideLeft}  slideRight={slideRight} description={description} width={width} />
            <Card products={shoes[currentProduct]} currentImage={currentImage} cart={cart} setCart={setCart} />
            <SideSlider shoes={shoes} slide={slide} />
        </div>
    )
}

export default Slider
