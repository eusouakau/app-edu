const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ForumSchema = new Schema({
	title: { type: String},
	content: { type: ObjectId},
	comment: {	type: String},
	user:{type:String},
  	create_at: { type: Date, default: Date.now }

});

const Forum = mongoose.model('Forum', ForumSchema);

module.exports = Forum;