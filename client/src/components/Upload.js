import React, { useState } from 'react';
import Alert from './Alert';

export default function Upload() {
	const [fileInputState, setFileInputState] = useState('');
	const [previewSource, setPreviewSource] = useState('');
	const [selectedFile, setSelectedFile] = useState();
	const [successMsg, setSuccessMsg] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		previewFile(file);
		setSelectedFile(file);
		setFileInputState(e.target.value);
	};

	const previewFile = (file) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
	};

	const handleSubmitFile = (e) => {
		e.preventDefault();
		if (!selectedFile) return;
		const reader = new FileReader();
		reader.readAsDataURL(selectedFile);
		reader.onloadend = () => {
			uploadImage(reader.result);
		};
		reader.onerror = () => {
			console.error('AHHHH!!');
			setErrMsg('something went wrong!');
		};
	};

	const uploadImage = async (base64EncodedImage) => {
		try {
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			headers.append('Accept', 'application/json');
			headers.append('Origin', 'http://localhost:3001');
			await fetch('http://localhost:3001/image-upload', {
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify({ data: base64EncodedImage }),
				// headers: {
				// 	'Content-Type': 'application/json',
				// 	'Access-Control-Allow-Origin': 'http://localhost:3001',
				// },
			});
			setFileInputState('');
			setPreviewSource('');
			setSuccessMsg('File uploaded successfully');
		} catch (err) {
			console.error(err);
			setErrMsg('Something went wrong!');
		}
	};
	return (
		<div>
			<h1 className='title'>Upload a Video</h1>
			<Alert msg={errMsg} type='danger' />
			<Alert msg={successMsg} type='success' />
			<form onSubmit={handleSubmitFile} className='form'>
				<input
					id='fileInput'
					type='file'
					name='video'
					onChange={handleFileInputChange}
					value={fileInputState}
					className='form-input'
				/>
				<button className='btn' type='submit'>
					Submit
				</button>
			</form>
			{previewSource && (
				<img src={previewSource} alt='chosen' style={{ height: '300px' }} />
			)}
		</div>
	);
}
