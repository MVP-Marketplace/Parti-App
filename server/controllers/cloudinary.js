const { cloudinary } = require('../utils/cloudinary');
const User = require('../models/User');
const bodyParser = require('body-parser');
const { createUser } = require('./users');


const uploadImage = async (req, res) => {
	const data = req.body;
    try {
        const uploadResponse = await cloudinary.uploader.upload_large(data.file,{
             resource_type: "raw",
			 chunk_size: 6000000,
    		 eager: [
					{ width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
					{ width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
			 eager_async: true,
        });
        res.json({ msg: uploadResponse,  });
		console.log(uploadResponse)
		// TODO
		//update user with asset ID
		// const user = User.findById(req.params.id)
	    // user.findByIdAndUpdate(req.params.id, data.image) 			
		// res.json(user)
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
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