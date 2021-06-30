import React, { useEffect, useState } from 'react';
import { Image, Video, Transformation } from 'cloudinary-react';
import DraftJS from './DraftJS/DraftJS';
import VideoPlayer from './VideoPlayer';

export default function Home() {
	const [imageIds, setImageIds] = useState();
	const loadImages = async () => {
		try {
			const res = await fetch('/images-view');
			const data = await res.json();
			setImageIds(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		loadImages();
	}, []);
	return (
		<div>
			<h1 className='title'>Card Videos</h1>
			<div className='gallery'>
				{/* {imageIds &&
					imageIds.map((imageId, index) => (
						<Image
							key={index}
							cloudName={process.env.CLOUDINARY_NAME}
							publicId={imageId}
							width='300'
							crop='scale'
						/>
					))} */}
			</div>
			<DraftJS />
			<VideoPlayer />
		</div>
	);
}
