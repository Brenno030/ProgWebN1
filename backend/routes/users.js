import express from "express";
import User from "../models/User.js";

const router = express.Router();

// rota de cadastro
router.post("/", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Usuário já existe!" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({
      username: newUser.username,
      email: newUser.email,
      id: newUser._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Erro ao cadastrar usuário." });
  }
});

export default router;
