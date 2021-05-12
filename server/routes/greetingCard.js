const router = require('express').Router();
const greetingCardCtrl = require('../controllers/greetingCardCtrl')

router.get('/:id', greetingCardCtrl.view);
router.post('/', greetingCardCtrl.create);
router.put('/:id', greetingCardCtrl.update);
router.delete('/:id', greetingCardCtrl.destroy);

module.exports = router;