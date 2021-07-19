import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video }) => {
    const { title, thumbnails, description } = video.snippet
    return (
        <div className="video-item item">
            <img className="ui image" src={thumbnails.medium.url} alt={description} />
            <div className="content">
                <div className="header">
                    {title}
                </div>
            </div>
        </div>
    );
}

export default VideoItem;