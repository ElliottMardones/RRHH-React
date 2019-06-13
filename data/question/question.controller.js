const express = require('express');
const router = express.Router();
const questionService = require('./question.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    if (req.session.user._id) {
        questionService.getAll()
            .then(questions => res.json(questions))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function getById(req, res, next) {
    if (req.session.user._id) {
        questionService.getById(req.params.id)
            .then(question => question ? res.json(question) : res.status(404).json({ message: 'Not Found' }))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function create(req, res, next) {
    if (req.session.user._id) {
        questionService.create(req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function update(req, res, next) {
    if (req.session.user._id) {
        questionService.update(req.params.id, req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function _delete(req, res, next) {
    if (req.session.user._id) {
        questionService.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}