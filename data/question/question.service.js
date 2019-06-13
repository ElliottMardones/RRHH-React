const db = require('../../_helpers/db');
const Question = db.Question;
const Test = db.Test;

module.exports = {
    getAll,
    getById,
    getByTest,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Question.find();
}

async function getById(id) {
    return await Question.findById(id);
}

async function getByTest(test) {
    const test = await Test.findById(test);
    if (!test) throw 'Test not found';
    return await Question.find({ test: test._id });
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