const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContentSchema = new Schema({
    title: { type: String, require: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    schoolDiscipline: { type: ObjectId, required: true },
    createdAt: { type: Date, default: Date.now  }
});


const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;