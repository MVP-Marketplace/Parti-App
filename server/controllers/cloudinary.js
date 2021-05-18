const { cloudinary } = require('../utils/cloudinary');
const User = require('../models/User');
const bodyParser = require('body-parser');
const { createUser } = require('./users');
const uploadImage = (req, res) => {
	// const data = {
	// 	image: req.body.image,
	// 	user: req.body.user,
	// };
	const data = req.body.data;
	// upload image here
	cloudinary.uploader
		.upload(data, { resource_type: 'raw', upload_preset: 'parti-app' }) // raw allows uploading videos and images
		.then((result) => {
			// TODO
			//update user with asset ID
			// const user = User.findById(req.params.id)
			// user.findByIdAndUpdate(req.params.id, data.image)
			// res.json(user)
			res.status(200).send({
				message: 'success',
				result,
			});
		})
		.catch((error) => {
			res.status(500).send({
				message: 'failure',
				error,
			});
		});
};
const showAssets = (req, res) => {
	cloudinary.search
		.expression('folder:samples')
		.sort_by('public_id', 'desc')
		.max_results(30)
		.execute()
		.then((result) => res.send(result));
	//TODO sort assets by user
};
const deleteAsset = (req, res) => {
	const data = {
		image: req.body.image,
	};
	//TODO delete assetID from user
	cloudinary.uploader
		.destroy(data.image)
		.then((result) => {
			res.status(200).send({
				message: 'success',
			});
		})
		.catch((error) => {
			res.status(500).send({
				message: 'failure',
				error,
			});
		});
};
module.exports = {
	uploadImage,
	showAssets,
	deleteAsset,
};
