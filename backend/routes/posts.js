import express from "express";
import Post from "../models/Post.js"; // importa o model certo

const router = express.Router();

// ➤ Buscar todos os posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); // busca tudo do Mongo
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar posts" });
  }
});

// ➤ Buscar um post específico
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post não encontrado" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar post" });
  }
});

// ➤ Criar um novo post
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar post" });
  }
});

export default router;