const mongoose = require('mongoose');
const User = require('./User');


const SchoolClassSchema = new mongoose.Schema({
    name: { type: String, require: true },
    students: { type: [User], required: false },
    school: { type: String, required: true, },
    grade: { type: String, required: true },
});


const SchoolClass = mongoose.model('SchoolClass', SchoolClassSchema);

module.exports = SchoolClass;