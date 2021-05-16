const express = require('express')
const router = express.Router()
const cloudinaryController = require('../controllers/cloudinary.js')

router.post('/image-upload', cloudinaryController.uploadImage)

module.exports = router