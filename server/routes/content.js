const router = require('express').Router();
const content = require('../controllers/content')

router.post('/', content.create);
router.get('/:id', content.view);

module.exports = router;