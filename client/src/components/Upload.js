import React, { useState } from 'react';
import Alert from './Alert';
import MediumGreenButton from './StyledComponents/Buttons/MediumGreenButton';
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
			console.log('reader.result' , reader.result )
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
		  console.log('line 56  UPLOAD ', response);
		})
		.catch(function (response) {
		  //handle error
		  console.log(response);
		});
}
	return (
		<div style={{
			padding:'100px',
			width: '150%',
			height:'calc(2.5em + .75rem + 2px)'}}>
			{/* <h1 className='title'>Upload a Video</h1> */}
			<Alert msg={errMsg} type='danger' />
			<Alert msg={successMsg} type='success' />
			<form  className='form' onSubmit={handleSubmitFile}>
				<input
					id='fileInput'
					type='file'
					name='file'
					onChange={handleFileInputChange}
					value={fileInputState}
					className='form-input'
					// tempFilePath = {fileInputState}
				/>
			<MediumGreenButton onSubmit={handleSubmitFile}> Upload </MediumGreenButton>
			</form>
			{previewSource && (
				<img src={previewSource} alt='chosen' style={{ height: '500px' }} />
			)}
		</div>
	);
}
