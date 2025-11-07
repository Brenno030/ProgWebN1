import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "../App.css";

function Post() {
  const { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // ✅ Pega o usuário logado corretamente
  const usuarioLogado = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!id) return;

    // busca o post
    api.get(`/posts/${id}`).then((response) => {
      setPostObject(response.data);
    });

    // busca os comentários do post
    api.get(`/api/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  // ✅ Função corrigida
  const addComment = async () => {
    if (!newComment.trim()) return;

    const username = usuarioLogado ? usuarioLogado.username : "Anônimo";

    try {
      const response = await api.post("/api/comments", {
        commentBody: newComment,
        PostId: id,
        username, // manda o nome do usuário pro backend
      });

      setComments([...comments, response.data]);
      setNewComment("");
    } catch (err) {
      console.error("Erro ao adicionar comentário:", err);
    }
  };

  return (
    <div className="postPage">
      <div className="postCard">
        <h2>{postObject.title}</h2>
        <p>{postObject.posttext}</p>
        <small>
          Postado por: {postObject.username || "Anônimo"}
        </small>
      </div>

      <div className="commentSection">
        <h3>Comentários</h3>

        <div className="addCommentContainer">
          <input
            type="text"
            placeholder={
              usuarioLogado
                ? "Comente algo..."
                : "Comente como Anônimo..."
            }
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Adicionar</button>
        </div>

        <div className="listOfComments">
          {comments.length === 0 ? (
            <p style={{ color: "#657786", textAlign: "center" }}>
              Nenhum comentário ainda
            </p>
          ) : (
            comments.map((comment) => {
              const texto =
                comment.text ||
                comment.commentBody ||
                comment.commentText ||
                comment.body ||
                "Comentário sem texto 😅";

              const autor = comment.username || comment.user || "Anônimo";

              return (
                <div
                  className="comment"
                  key={comment._id || comment.id || Math.random()}
                >
                  <p>{texto}</p>
                  <small>{autor}</small>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
