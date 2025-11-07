import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    username: { type: String, default: "Anônimo" }, // 👈 adiciona esta linha
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
