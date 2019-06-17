const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/logout', logout)
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => {
            if (user) {
                req.session.user = user;
                res.json(req.session.user)
            } else {
                req.session.user = {};
                res.status(400).json({ message: 'Username or password is incorrect' })
            }
        })
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function logout(req, res, next) {
    if (req.session.user) {
        req.session.user = {};
        res.json({});
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function getAll(req, res, next) {
    if (req.session.user) {
        userService.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function getCurrent(req, res, next) {
    if (req.session.user) {
        userService.getById(req.session.user._id)
            .then(user => user ? res.json(user) : res.status(404).json({ message: 'Not Found' }))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function getById(req, res, next) {
    if (req.session.user) {
        userService.getById(req.params.id)
            .then(user => user ? res.json(user) : res.status(404).json({ message: 'Not Found' }))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function update(req, res, next) {
    if (req.session.user) {
        userService.update(req.params.id, req.body)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}

function _delete(req, res, next) {
    if (req.session.user) {
        userService.delete(req.params.id)
            .then(() => res.json({}))
            .catch(err => next(err));
    } else {
        res.status(401).json({ message: 'Unauthorized Access' })
    }
}