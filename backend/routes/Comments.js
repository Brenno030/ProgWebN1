import express from "express";
import Comment from "../models/Comment.js";
const router = express.Router();

// Buscar comentários de um post
router.get("/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId });
    res.json(comments);
  } catch (error) {
    console.error("Erro ao buscar comentários:", error);
    res.status(500).json({ message: "Erro ao buscar comentários" });
  }
});

// Criar comentário
router.post("/", async (req, res) => {
  try {
    const { commentBody, PostId, username } = req.body;

    if (!commentBody || !PostId) {
      return res.status(400).json({ message: "Dados inválidos" });
    }

    const newComment = new Comment({
      text: commentBody,
      postId: PostId,
      username: username || "Anônimo",
    });

    const saved = await newComment.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Erro ao criar comentário:", error);
    res.status(500).json({ message: "Erro ao criar comentário" });
  }
});

export default router;