import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db;

try {
  mongoClient.connect();
  db = mongoClient.db();
  console.log("Conectado com o banco de dados!");
} catch (err) {
 console.log("Erro no mongo.conect", err.message);
 }

export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const transactionsCollection = db.collection("transactions");