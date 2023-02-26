import mongoose from 'mongoose';

const connectDb = handler=> async (req,res)=> {
	if (!mongoose.connections[0].readyState) {
		mongoose.set('strictQuery', true);
		 await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.7.1')
		}
	return handler(req, res)
	}

export default connectDb
