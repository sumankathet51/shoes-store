import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import MainCard from "../../components/card/card";

export const Products = ({shoes, setCart, cart}) => {
    const {id} = useParams();

    const shoe = shoes.filter((item) => {
        if(item.id == id) {
            return item;
        }
    });
    const [currentColor, setCurrentColor] = useState(shoe[0].colors[0].name);
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <div className={"container"}>
            <div className={"product-section"}>
                <div className="product-images">
                    <div className="all-images">
                        {
                            shoe[0].image && shoe[0].image.map((image, index) => {
                                return <img src={image.url} alt={image.alt} key={image.id} onClick={() => setCurrentImage(index)} />
                            })
                        }
                    </div>
                    <div className="main-product-image"><img src={shoe[0].image[currentImage].url} alt=""/> </div>
                </div>
                <div className="product-description">
                    <h1 className="product-name"> {shoe[0].name}</h1>
                    <p>Brand name: <span> {shoe[0].brand_name} </span> Category: <span> {shoe[0].category} </span> </p>
                    <p> {shoe[0].description} </p>
                    <div className={"colors-container"}>
                        <p> Colors: <span> {currentColor} </span> </p>
                        {
                            shoe[0].colors && shoe[0].colors.map((item) => {
                                return <div key={item.id} className={ ((currentColor === item.name) ? "active" : "") + " color " } style={{backgroundColor: item.color}} key={item.id} onClick={(e) => setCurrentColor(item.name)}></div>
                            })
                        }
                    </div>
                    <p> Size:
                        <select name="" id="">
                            {
                                shoe[0].sizes && shoe[0].sizes.map((size, index) => {
                                    return <option value={size} key={index}> {size} </option>
                                })
                            }
                        </select>
                    </p>
                    <button className={"btn btn-primary btn-cart"} onClick={() => {
                        if(!cart.includes(shoe[0])) {
                            let currentArray = cart.slice();
                            currentArray.push(shoe[0]);
                            setCart(currentArray);
                        }

                    } }>
                        Add to cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="20" viewBox="0 0 57.169 51">
                            <path id="shopping-cart" d="M16.526,66.878a1.881,1.881,0,0,1,0-3.763c6.942.024,25.25.006,32.413.012a4.164,4.164,0,0,0,4.076-3.242l4.067-17.611A3.385,3.385,0,0,0,53.8,38.128c-2.881,0-27.339-.111-39.866-.161L11.945,30.6a4.056,4.056,0,0,0-3.908-2.99H1.676a1.676,1.676,0,1,0,0,3.352H8.037a.7.7,0,0,1,.672.513l7.626,28.3a5.231,5.231,0,0,0-5.042,5.319,5.258,5.258,0,0,0,5.232,5.142h2.443a5.865,5.865,0,1,0,10.6,0H40.147A5.866,5.866,0,1,0,50.7,70.141a1.675,1.675,0,0,0-.534-3.263Zm10.256,5.865a2.514,2.514,0,1,1-2.516-2.514h0A2.517,2.517,0,0,1,26.781,72.744Zm18.665,2.513a2.514,2.514,0,0,1-.041-5.027h.082a2.514,2.514,0,0,1-.041,5.027Zm8.363-33.765a.026.026,0,0,1,.006.028L52.1,48.941H46.3l.988-7.488,6.5.026A.027.027,0,0,1,53.809,41.492ZM36.533,59.776V52.292h5.944l-.988,7.483Zm-8.31,0-1-7.483h5.954v7.483Zm-7.714,0H20.5a.908.908,0,0,1-.875-.668l-1.837-6.815h6.054l1,7.483Zm6.273-10.835-1.008-7.574,7.408.03v7.544Zm9.751,0V41.41l7.376.03-.99,7.5ZM22.39,41.353l1.01,7.588H16.888l-2.053-7.618ZM48.938,59.776H44.869l.988-7.483h5.471l-1.579,6.839A.827.827,0,0,1,48.938,59.776Z" transform="translate(0 -27.609)"/>
                        </svg>
                    </button>
                    <button className={"btn btn-primary"}>Buy now </button>
                </div>
            </div>
            <h3 className="section-header"> More In Category </h3>
            <div className={"card-container"}>
                {
                    shoes.map((shoe) => {
                        return (
                            <MainCard shoe={shoe} key={shoe.id} cart={cart} setCart={setCart} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products