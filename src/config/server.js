import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

//banco de dados 
const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

try {
  await mongoClient.connect();
  db = mongoClient.db();
  console.log("Conectado ao banco de dados");
} catch (err) {
  console.log("Erro no mongo.conect", err.message);
}

export default db