import React from 'react';

import './style.css';

const Imagecard = (props) => {

    return(
        <img
        className = "image-card"
        alt = "gallery pic"
        src={props.imageUrl}
        />
    )
}

export default Imagecard;