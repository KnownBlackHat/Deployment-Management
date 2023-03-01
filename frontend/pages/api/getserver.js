import connectDb from "@/mongo_db/MongooseMiddleware";
import model from '@/mongo_db/schemas/servers'

async function handler(req, res) {
	if (req.method === "POST") 
	{
		try {
		let data = await model.findById(req.body.id)
		if (data._id.toString()===req.body.id) 
		{
			res.status(200).json(data)
		}
		else
		{
			res.status(404).json({error: "User Not Found"})
		}}
		catch (error) {res.status(404).json({error: "User Not Found"})}
	}
	else {let data = await model.find()
	res.status(200).json(data)}
}

export default connectDb(handler)
