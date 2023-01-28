import { productsCollection } from "../database/db.js";
import  productsList from "../database/products.js"
import {  ObjectId } from "mongodb";

export async function pushProducts(req,res) {

    try {
       const envitProducts = await productsCollection.find().toArray();
       res.send(envitProducts).status(200)
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }

}

export async function sendProduct(req,res) {

    const { id } = req.params

    try {
        const item = await productsCollection.findOne({ _id: ObjectId(id) })
        res.send(item).status(200)
    } catch (error) {
        console.log(err)
        return res.sendStatus(500)
    }
}