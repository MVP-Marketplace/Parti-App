const { cloudinary } = require("../utils/cloudinary");

const bodyParser = require('body-parser');

const uploadImage = (req, res) => {
	const data = {
        image: req.body.image,
      }
      // upload image here
      cloudinary.uploader.upload(data.image)
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

const test = (req, res) => {
	res.send("upload your image ");
};

module.exports = {
	uploadImage, 
    test
};



