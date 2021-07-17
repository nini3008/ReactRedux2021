import React from 'react';

const Imagelist = (props) => {
    const imageListItems = props.images

    const images = imageListItems.map((item) => {
        return <li key={item.id}><img src={item.urls.regular} alt={item.id} /></li>
    })

    return (
        <div>
            <ul> {images} </ul>
        </div>
    );
}

export default Imagelist;