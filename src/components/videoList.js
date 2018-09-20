import React from 'react';
import { VideoListItems } from './videoListItems';

const VideoList = (props)=>{
    
    const videoItems = props.videos.map((videos)=>{
        return(
            <VideoListItems
            onVideoSelect = {props.onVideoSelect}
             key={videos.etag}
             videos={videos}/>
        ) 
    });

  return(  
    <ul className="list-group">
        {videoItems}
    </ul>
    );
};

export default VideoList;