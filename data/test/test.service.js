const db = require('../../_helpers/db');
const Test = db.Test;

module.exports = {
    getAll,
    getById,
    create,
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

async function update(id, testParam) {
    const test = await Test.findById(id);
    if (!test) throw 'Test not found';
    Object.assign(test, testParam);
    await test.save();
}

async function _delete(id) {
    await Test.findByIdAndRemove(id);
}