import connectDb from '@/mongo_db/MongooseMiddleware';
import model from '@/mongo_db/schemas/servers'

function handler(req,res) {
	if (req.method === "POST") 
	{
		model.findByIdAndDelete( req.body.id ,function(err) {
			if (err)
			{
				res.status(400).json({error:err})
			} else {
				res.status(200).json({success:true})
			}
		} )
	}
	else
	{
		res.status(405).json({error:"Method Not Allowed"})
	}
}

export default connectDb(handler)
