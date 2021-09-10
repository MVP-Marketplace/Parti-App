//For draft.js to write posts

const express = require('express');
const router = express.Router();

const Content = require('../../models/Content');

//routes get all posts
router.get('/', (req, res) => {
	Content.find().then((content) => res.json(content));
});

//routes get single post
router.get('/:id', (req, res) => {
	Content.findById(req.params.id)
		.then((content) => res.json(content))
		.catch((err) => res.json('Error: ', err));
});

//routes post a post
router.post('/', (req, res) => {
	console.log(req.body);
	const newPost = new Content({
		name: req.body.name,
		content: req.body.content,
	});

	newPost
		.save()
		.then((content) => res.json(content))
		.catch((err) => res.status(500).json({ Error: err }));
});

//routes Update a post
router.put('/:id', (req, res) => {
	Post.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, content) => {
			// Handle any possible database errors
			if (err) return res.status(500).send(err);
			return res.send(content);
		}
	);
});

module.exports = router;
