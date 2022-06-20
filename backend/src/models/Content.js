const mongoose = require('mongoose');
const SchoolDiscipline = require('./SchoolDiscipline');


const ContentSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    schoolDiscipline: { type: SchoolDiscipline, required: true },
    createdAt: { type: Date, default: Date.now  }
});


const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;