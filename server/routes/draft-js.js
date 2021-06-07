const router = require("express").Router();
const contentController = require("../controllers/draft-js");

router.get("/:id", contentController.view);
router.post("/posts", contentController.create);

module.exports = router;
