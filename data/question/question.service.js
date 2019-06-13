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

async function create(questionParam) {
    const question = new Question(questionParam);
    await question.save();
}

async function update(id, questionParam) {
    const question = await Question.findById(id);
    if (!question) throw 'Question not found';
    Object.assign(question, questionParam);
    await question.save();
}

async function _delete(id) {
    await Question.findByIdAndRemove(id);
}