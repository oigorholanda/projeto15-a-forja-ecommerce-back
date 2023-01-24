import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

//servidor
const app = express();
app.use(cors());
app.use(express.json());

// rotas
// app.use([]);


// porta e listen
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));