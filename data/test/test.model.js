const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    threshold: { type: Number, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Test', schema);