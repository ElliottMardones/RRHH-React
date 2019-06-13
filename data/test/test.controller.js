const express = require('express');
const router = express.Router();
const testService = require('./test.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    if (req.session.user._id) {
        testService.getAll()
            .then(tests => res.json(tests))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function getById(req, res, next) {
    if (req.session.user._id) {
        testService.getById(req.params.id)
            .then(test => test ? res.json(test) : res.status(404).json({ message: 'Not Found' }))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function create(req, res, next) {
    if (req.session.user._id) {
        testService.create(req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function update(req, res, next) {
    if (req.session.user._id) {
        testService.update(req.params.id, req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function _delete(req, res, next) {
    if (req.session.user._id) {
        testService.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}