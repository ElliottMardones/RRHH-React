const bcrypt = require('bcryptjs');
const db = require('../../_helpers/db');
const Question = db.Question;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Question.find().select('-hash');
}

async function getById(id) {
    return await Question.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await Question.findOne({ rut: userParam.rut })) {
        throw 'Questionname "' + userParam.rut + '" is already taken';
    }

    const user = new Question(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function update(id, userParam) {
    const user = await Question.findById(id);

    // validate
    if (!user) throw 'Question not found';
    if (user.rut !== userParam.rut && await Question.findOne({ rut: userParam.rut })) {
        throw 'Questionname "' + userParam.rut + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await Question.findByIdAndRemove(id);
}