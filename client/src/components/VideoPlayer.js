import React, { useState } from 'react';

function VideoPlayer(props) {
    // const url = `https://player.cloudinary.com/embed/?public_id=${props.options.publicId}&cloud_name=${props.options.cloudName}&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5Bsource_types%5D%5B0%5D=mp4`;
    
    return (
      <>
      <div className="iframe-container">
        <iframe className="responsive-iframe"
          title="Cloud Hosted Video Player"
        //   src={url}
          src= "https://player.cloudinary.com/embed/?cloud_name=demo&public_id=elephants&fluid=true&controls=true&source_types%5B0%5D=mp4"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        ></iframe>
        </div>

        <div>
        <iframe className="responsive-iframe" 
            src="https://player.cloudinary.com/embed/?public_id=elephants&cloud_name=demo&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bfont_face%5D=Kalam&player%5Bskin%5D=light&player%5Blogo_onclick_url%5D=http%3A%2F%2Flocalhost%3A3000%2F&player%5Blogo_image_url%5D=https%3A%2F%2Fres.cloudinary.com%2Fdemo%2Fimage%2Ffetch%2Fh_25%2Fhttps%3A%2F%2Fcdn.dribbble.com%2Fusers%2F1244615%2Fscreenshots%2F3679064%2Fapple.jpg&player%5Bhide_context_menu%5D=false&player%5Bautoplay%5D=true&source%5Binfo%5D%5Btitle%5D=video%20title%20&source%5Binfo%5D%5Bsubtitle%5D=video%20Subtitle&source%5Bsource_types%5D%5B0%5D=mp4"
            width="640"
            height="480"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            ></iframe>
		</div> 
      </>
    );
  }
  export default VideoPlayer;