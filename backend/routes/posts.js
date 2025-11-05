import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// listar posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar posts" });
  }
});

// criar post
router.post("/", async (req, res) => {
  console.log("Recebido POST:", req.body); // <- adicione isto
  try {
    const newPost = new Post({
      username: req.body.username,
      title: req.body.title,
      posttext: req.body.posttext,
      comments: []
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
;

export default router;
