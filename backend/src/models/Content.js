const mongoose = require('mongoose');
const SchoolDiscipline = require('./SchoolDiscipline');


const ContentSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    schoolDiscipline: { type: SchoolDiscipline, required: true }
});


const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;