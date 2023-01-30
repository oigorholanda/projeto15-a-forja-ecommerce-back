import { cartCollection } from "../database/db.js";

export async function saveCart(req, res) {
  const product = res.locals.product;
  const user = res.locals.user

  try {
    await cartCollection.insertOne({user:user._id, ...product});
    res.status(201).send("salvo!");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getCart(req, res) {
  const { user } = req.params;

  try {
    await cartCollection.find( {user} ).toArray();
    res.status(201).send("salvo!");
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function delfromCart(req, res) {
    const { product } = req.params;
  
    try {
      await cartCollection.deleteOne();
      res.status(201).send("salvo!");
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
