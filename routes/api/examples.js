const express = require('express');
const router = express.Router();

// Example Model
const Example = require('../../models/example');

// @route   GET api/examples
// @desc    Get All Examples
// @access  Public
router.get('/', (req, res) => {
    Example.find()
        .sort({ date: -1 }) //ORDER BY date DESC
        .then(examples => res.json(examples))
});

// @route   POST api/examples
// @desc    Create An Example
// @access  Public
router.post('/', (req, res) => {
    const newExample = new Example({
        name: req.body.name
    });
    newExample.save().then(example => res.json(example));
});

// @route   DELETE api/examples/:id
// @desc    Delete An Example
// @access  Public
router.delete('/:id', (req, res) => {
    Example.findById(req.params.id)
        .then(example => example.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router