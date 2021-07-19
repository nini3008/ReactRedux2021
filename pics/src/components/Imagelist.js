import React from 'react';
import ImageCard from './ImageCard';
import './Imagelist.css';

const Imagelist = (props) => {
    const imageListItems = props.images

    const images = imageListItems.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return (
        <div>
            <ul className="image-list"> {images} </ul>
        </div>
    );
}

export default Imagelist;