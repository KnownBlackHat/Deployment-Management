import connectDb from "@/mongo_db/MongooseMiddleware";
import model from '@/mongo_db/schemas/servers'

// TODO:  Secure this route

async function handler(req, res) {
	if (req.method === "POST") 
	{
		if (req.body.limit)
		{
			let data = await model.find().limit(req.body.limit)
			if (req.body.limit !== data.length)
			{
				res.status(200).json({next: false, data: data})
			}
			else
			{
				res.status(200).json({next: true, data: data})
			}
		}
		else
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

	}
	else {let data = await model.find()
		res.status(200).json(data)}
}

export default connectDb(handler)
