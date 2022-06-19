const mongoose = require('../../db');
const bcrypt = require('bcryptjs');
const User = require('./User');


const ClassSchema = new mongoose.Schema({
    name: { type: String, require: true },
    students: { type: [User], required: false },
    school: { type: String, required: true, },
    grade: { type: String, required: true },
});


const Class = mongoose.model('Class', ClassSchema);

module.exports = Class;