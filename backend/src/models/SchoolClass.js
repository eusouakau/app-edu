const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const User = require('./User');


const SchoolClassSchema = new Schema({
    name: { type: String, require: true },
    students: { type: [Schema.Types.ObjectId], required: false },
    school: { type: String, required: true, },
    grade: { type: String, required: true },
});


const SchoolClass = mongoose.model('SchoolClass', SchoolClassSchema);

module.exports = SchoolClass;