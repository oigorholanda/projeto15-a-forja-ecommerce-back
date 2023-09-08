import { ObjectId } from "mongodb";
import { cartCollection } from "../database/db.js";

export async function saveCart(req, res) {
  const product = res.locals.product;
  const user = res.locals.user;
  
  try {
    await cartCollection.insertOne({ user:user._id, name: product.name, picture:product.picture, price: product.price });
    res.status(201).send("salvo!");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getCart(req, res) {
    const user = res.locals.user

    if (!user) return res.sendStatus(422)

  try {
    const items = await cartCollection.find( {user: user._id} ).toArray();
    res.status(201).send(items);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function delfromCart(req, res) {
    const  id  = req.params;
    console.log(id);
  
    try {
      await cartCollection.deleteOne({ _id: ObjectId(id) });
      res.status(202).send("apagado!");
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
