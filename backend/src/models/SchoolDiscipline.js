const mongoose = require('mongoose');


const SchoolDisciplineSchema = new mongoose.Schema({
    name: { type: String, require: true },
    area: {  type: String, required: true },
});


const SchoolDiscipline = mongoose.model('SchoolDiscipline', SchoolDisciplineSchema);

module.exports = SchoolDiscipline;