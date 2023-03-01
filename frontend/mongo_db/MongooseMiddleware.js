import mongoose from 'mongoose';

const connectDb = handler=> async (req,res)=> {
	if (!mongoose.connections[0].readyState) {
		mongoose.set('strictQuery', true);
		 await mongoose.connect(process.env.MONGO_URI)
		}
	return handler(req, res)
	}

export default connectDb
