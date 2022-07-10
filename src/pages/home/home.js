import React, {useState} from 'react';
import Description from "../../components/header/description/description";
import Card from "../../components/header/card/card";
import SideSlider from "../../components/header/sideSlider/sideSlider";
import MainCard from "../../components/card/card";

export const Home = ({shoes, cart, setCart}) => {

    const [currentProduct, setCurrentProduct] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [width, setWidth] = useState(100);
    const marginStyle = {
        marginTop: "20px"
    }

    setInterval(() => {
        slideRight();
    }, 3000);
    // setTimeout(() => {
    //         slideRight();
    //     }, 3000
    // );

    const slide = (id) => {
        setCurrentProduct(id);
        setCurrentImage(0);
        
        // setWidth(0)
    }

    const slideLeft = () => {
        setCurrentImage((currentImage === 0) ? shoes[currentProduct].image.length - 1 : currentImage - 1);
        setInterval(() => {
        slideRight();
    }, 3000);
        // setWidth(0);
    }

    const slideRight = () => {
        // setWidth(0);
        setCurrentImage((currentImage === shoes[currentProduct].image.length - 1) ? 0 : currentImage + 1);
        setInterval(() => {
        slideRight();
    }, 3000);

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
        <div>
            <div className="slider container">
                <Description product={shoes[currentProduct]} currentImage={currentImage} slideLeft={slideLeft}  slideRight={slideRight} description={description} width={width} />
                <Card products={shoes[currentProduct]} currentImage={currentImage} cart={cart} setCart={setCart} />
                <SideSlider shoes={shoes} slide={slide} />
            </div>
            <div className={"container"}>
                <h3 className="section-header"> Recent Arrivals </h3>
                <div className={"card-container"}>
                    {
                        shoes.map((shoe) => {
                            return (
                                <MainCard shoe={shoe} key={shoe.id} cart={cart} setCart={setCart}/>
                            )
                        })
                    }
                </div>
                <img src="images/adimage.png" alt="" width={"100%"} style={marginStyle}/>
                <h3 className="section-header"> Trending Now </h3>
                <div className={"card-container"}>
                    {
                        shoes.map((shoe) => {
                            return (
                                <MainCard shoe={shoe} key={shoe.id} cart={cart} setCart={setCart}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default Home;