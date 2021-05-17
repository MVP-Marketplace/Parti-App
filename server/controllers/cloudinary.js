const { cloudinary } = require("../utils/cloudinary");

const bodyParser = require('body-parser');

const uploadImage = (req, res) => {
	const data = {
        image: req.body.image,
      }
      // upload image here
      cloudinary.uploader.upload(data.image,{ resource_type: "raw" }) // raw allows uploading videos and images 
      .then((result) => {
        res.status(200).send({
          message: "success",
          result,
        });
      }).catch((error) => {
        res.status(500).send({
          message: "failure",
          error,
        });
      });
}

const deleteAsset = (req, res) => {
    const data = {
        image: req.body.image,
    }
    cloudinary.uploader.destroy(data.image)
    .then((result) => {
        res.status(200).send({
          message: "success",
        });
      }).catch((error) => {
        res.status(500).send({
          message: "failure",
          error,
        });
      });
};

module.exports = {
	uploadImage, 
    deleteAsset
};



