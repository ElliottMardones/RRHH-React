const db = require('../../_helpers/db');
const Test = db.Test;

module.exports = {
    getAll,
    getById,
    create,
    evaluate,
    update,
    delete: _delete
};

async function getAll() {
    return await Test.find();
}

async function getById(id) {
    return await Test.findById(id);
}

async function create(testParam) {
    const test = new Test(testParam);
    await test.save();
}

async function evaluate(id, questions) {
    const test = await Test.findById(id);
    if (!test) throw 'Test not found';
    maxScore = 0;
    curScore = 0;
    questions.forEach(element => {
        maxScore += element.question.score;
        curScore += (element.question.answer === element.answer) ? element.question.score : 0;
    });
    const result = {}
    result.percentage = curScore * 100.0 / maxScore;
    result.aprove = result.percentage >= test.threshold;
    return result;
}

async function update(id, testParam) {
    const test = await Test.findById(id);
    if (!test) throw 'Test not found';
    Object.assign(test, testParam);
    await test.save();
}

async function _delete(id) {
    await Test.findByIdAndRemove(id);
}