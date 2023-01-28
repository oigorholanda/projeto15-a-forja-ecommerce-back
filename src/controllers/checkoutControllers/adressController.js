
import { adressesCollection } from "../../database/db.js";

export async function adressAdd(req, res){
    const { streetName, houseNumber, postalCode, details, id } = req.body

    try {
        await adressesCollection.insertOne({ streetName, houseNumber, postalCode, details, id });
        res.sendStatus(201);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
}

export async function adressGet(req, res){
    const { id } = req.body
    // const { _id } = user
    try {
        const adress = await adressesCollection.findOne({ id });
        res.send(adress).status(200);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
}