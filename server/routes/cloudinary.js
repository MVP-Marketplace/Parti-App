const express = require('express')
const router = express.Router()
const cloudinaryController = require('../controllers/cloudinary.js')

router.post('/image-upload', cloudinaryController.uploadImage)

router.delete('/image-delete', cloudinaryController.deleteAsset)

module.exports = router