import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

// conexão com o banco (MongoDB, por exemplo)
mongoose.connect("mongodb+srv://twiterclone1_db_user:twiterdb@cluster0.z4iuw4h.mongodb.net/twiter")
  .then(() => console.log("Banco conectado!"))
  .catch((err) => console.error("Erro ao conectar ao banco:", err));

// rotas de teste
app.get("/", (req, res) => {
  res.send("Servidor tá de pé 😎");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

import postRoutes from "./routes/posts.js";
app.use("/posts", postRoutes);
