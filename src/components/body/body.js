import React from 'react';
import MainCard from "../card/card";

export const Body = ({shoes, cart, setCart}) => {
    const marginStyle = {
        marginTop: "20px"
    }
    return (
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
    );
}

export default Body