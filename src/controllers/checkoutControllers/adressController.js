
import { adressesCollection } from "../../database/db.js";

export async function adressAdd(req, res){
    const { streetName, houseNumber, postalCode, details } = req.body
    try {
        await adressesCollection.insertOne({ streetName, houseNumber, postalCode, details });
        res.sendStatus(201);
      } catch (err) {
        console.log(err);
        res.sendStatus(500);
      }
}