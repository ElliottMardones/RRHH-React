const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    body: { type: String, required: true },
    a: { type: String, required: true},
    b: { type: String, required: true },
    c: { type: String, required: true },
    d: { type: String, required: true },
    e: { type: String, required: true },
    answer: { type: String, required: true },
    score: {type: Number, required: true},
    test: {type: String, required: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Question', schema);