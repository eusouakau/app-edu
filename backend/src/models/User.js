const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
//const SchoolClass = require('./SchoolClass');


const UserSchema = new Schema({
    name: { type: String, require: true},
    email: { type: String, unique: true, required: true, lowercase: true},
    password: { type: String, required: true, select: true },
    role: { type: String, required: true, enum: ['teacher', 'student']},
    school: { type: String, required: false },
    grade: { type: String, required: false },
    schoolClass: { type: Schema.Types.ObjectId, required: false },
    deleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now  },
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false }
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

UserSchema.pre('update', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

function setPassword(value, callback) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;