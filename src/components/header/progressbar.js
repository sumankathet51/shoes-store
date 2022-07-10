import React, { useState, useEffect } from 'react'

export const Progressbar = ({ width }) => {
    const [style, setStyle] = useState({});
    useEffect(() => {
        const newStyle = {
            width: `${width}%`
        }
        setStyle(newStyle);
    }, [width])
    return (
        <div className="progress">
            <div className="progress-done" style={style}></div>
        </div>
    )
}

export default Progressbar

