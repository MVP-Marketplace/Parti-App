import React, { useState } from 'react';
const qs = require('qs');
function VideoPlayer(props) {

    // TODO: 
    // TRIM 
    // ADD Stickers 
    // DELETE video 
    const config = { cloud_name: "demo", public_id: "elephants", cloudinary: { cname: "myCname" }, player: { loop: true }, source: { source_types: ['mp4/h265', 'mp4']} };
    const params = qs.stringify(config);
    const url = "https://player.cloudinary.com/embed/?"+ params;
    return (
      <>
      <div className="iframe-container">
        <iframe className="responsive-iframe"
          title="Cloud Hosted Video Player"
          src={url}
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        </div>

        <div>
			<iframe
            
			// src="https://res.cloudinary.com/parti-app/video/upload/v1623368826/parti-app/jxfpte8dpnvtyijocntl.mp4"
			src="https://res.cloudinary.com/parti-app/video/upload/ac_none,c_crop,g_south,h_100,w_160/v1626058345/parti-app/wtqykfnnw0wayyw2we5q.mp4"
			width="640"
			height="400"
			allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
			allowfullscreen
			frameborder="0"
			></iframe>
		</div> 
      </>
    );
  }
  export default VideoPlayer;