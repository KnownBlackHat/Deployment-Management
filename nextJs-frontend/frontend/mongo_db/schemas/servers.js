import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	owner: {type: String,required: true},
	name: {type: String,required: true},
	status: {type: String,required: true}
})

const model = mongoose.models.server || mongoose.model("server",Schema)

export default model
