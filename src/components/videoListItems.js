import React from 'react';
// import VideoListItems from './videoListItems';

export const VideoListItems = ({ videos, onVideoSelect})=>{
    console.log(videos)
    const imgUrl = videos.snippet.thumbnails.default.url;
    
        return(
            <li onClick={()=> onVideoSelect(videos)} className="list-group-items">
                <div className="video-list-media">
                    <div className="media-left">
                        <img src={imgUrl} className="media-object" alt={videos.etag}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{videos.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
}

