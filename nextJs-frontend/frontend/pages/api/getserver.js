import connectDb from "../../mongo_db/MongooseMiddleware";
import model from '../../mongo_db/schemas/servers'

async function handler(req, res) {
  let data = await model.find()
  res.status(200).json(data)
}

export default connectDb(handler)
