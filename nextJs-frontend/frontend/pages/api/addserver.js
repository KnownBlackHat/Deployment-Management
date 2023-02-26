import connectDb from '@/mongo_db/MongooseMiddleware';
import model from '@/mongo_db/schemas/servers'

function handler(req,res) {
	if (req.method === "POST") {
		(new model({
			name: req.body.name,
			owner: req.body.owner,
			status: req.body.status

		})).save()
		res.status(200).json({success:"success"})
	}
	else {
		res.status(405).json({error:"Method Not Allowed"})
	}
}

export default connectDb(handler)
