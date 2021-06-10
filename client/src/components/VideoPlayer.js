import React, { useState } from 'react';
const qs = require('qs');
function VideoPlayer(props) {
    // const url = `https://player.cloudinary.com/embed/?public_id=${props.options.publicId}&cloud_name=${props.options.cloudName}&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5Bsource_types%5D%5B0%5D=mp4`;
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
			src="https://player.cloudinary.com/embed/?cloud_name=demo&public_id=elephants&fluid=true&controls=true&source_types%5B0%5D=mp4"
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