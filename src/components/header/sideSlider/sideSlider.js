import React from 'react';

export const SideSlider = ({shoes, slide}) => {
    return (
        <div className="secondary-slider">
                <div className="slider-container">
                    {
                        shoes.map((value) => {
                            return (
                                <div className="slider-img" key={value.id}>
                                    <img src={value.image[0].url} alt="" onClick={() => slide(value.id - 1)} className="cursor-pointer" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    );
}

export default SideSlider