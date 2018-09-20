import React from 'react';

 const VideoDetail = ({videos})=>{
    if(!videos){
        return <div>loading....</div>
    }


    const videoId = videos.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId} `;

    return(
        <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-items" src={url} ></iframe>
            </div>
            <div className="details">
                <div>{videos.snippet.title}</div>
                <div>{videos.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;