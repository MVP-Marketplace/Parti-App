import React, { useState } from 'react';
import Alert from './Alert';
import axios from 'axios';


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

	const uploadImage = async (data) => {
	await axios.post(
		'http://localhost:3001/image-upload',
		{'file': data},
		{headers: {'accept': 'application/json'}},
	  )
		.then(function (response) {
		  //handle success
		  setFileInputState('');
		  setPreviewSource('');
		  setSuccessMsg('File uploaded successfully');
		  console.log(response);
		})
		.catch(function (response) {
		  //handle error
		  console.log(response);
		});
}
	return (
		<div>
			<h1 className='title'>Upload a Video</h1>
			<Alert msg={errMsg} type='danger' />
			<Alert msg={successMsg} type='success' />
			<form onSubmit={handleSubmitFile} className='form'>
				<input
					id='fileInput'
					type='file'
					name='file'
					onChange={handleFileInputChange}
					value={fileInputState}
					className='form-input'
					// tempFilePath = {fileInputState}
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
