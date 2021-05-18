import React, { useEffect, useState } from 'react';
import { Video } from 'cloudinary-react';

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
				{imageIds &&
					imageIds.map((imageId, index) => (
						<Video
							key={index}
							cloudName={process.env.CLOUDINARY_NAME}
							publicId={imageId}
							width='300'
							crop='scale'
						/>
					))}
			</div>
		</div>
	);
}
