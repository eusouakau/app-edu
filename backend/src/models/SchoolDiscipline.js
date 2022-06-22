const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const SchoolDisciplineSchema = new Schema({
    name: { type: String, require: true },
    area: {  type: String, required: true },
});


const SchoolDiscipline = mongoose.model('SchoolDiscipline', SchoolDisciplineSchema);

module.exports = SchoolDiscipline;