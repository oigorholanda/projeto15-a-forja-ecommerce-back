import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

//servidor
const app = express();

import authRoutes from "./routes/authRoutes.js"
import checkoutRoutes from "./routes/checkoutRoutes.js"

app.use(cors());
app.use(express.json());

// rotas
app.use(authRoutes, checkoutRoutes);

// porta e listen
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));