// Card content - uploaded by contributor and organizer

const router = require('express').Router();
const content = require('../controllers/content');
// linked to controllers/content.js create and view
router.post('/', content.create);
router.get('/:id', content.view);

module.exports = router;
