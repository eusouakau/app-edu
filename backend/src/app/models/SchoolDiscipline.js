const mongoose = require('../../db');
const bcrypt = require('bcryptjs');
const Content = require('./Content');


const SchoolDisciplineSchema = new mongoose.Schema({
    name: { type: String, require: true },
    area: {  type: String, required: true },
    content: { type: Content, required: false}
});


const SchoolDiscipline = mongoose.model('SchoolDiscipline', SchoolDisciplineSchema);

module.exports = SchoolDiscipline;