import { ObjectId } from "mongodb"
import { productsCollection } from "../../database/db.js"

export async function validateProduct(req,res, next) {

    const { id } = req.body
    if (!id) return res.sendStatus(422)

    try {
        const item = await productsCollection.findOne({ _id: ObjectId(id) })
        res.locals.product = item
        console.log(item);
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }

    next()
}