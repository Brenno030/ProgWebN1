import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import '../App.css';

function Post() {
  const { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!id) return;
    
    api.get(`/posts/${id}`).then((response) => {
      setPostObject(response.data);
    });

    api.get(`/api/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const addComment = () => {
    if (!newComment.trim()) return;

    api.post("/api/comments", {
      commentBody: newComment,
      PostId: id,
    }).then((response) => {
      setComments([...comments, response.data]);
      setNewComment("");
    });
  };

  return (
    <div className="postPage">
      <div className="postCard">
        <h2>{postObject.title}</h2>
        <p>{postObject.posttext}</p>
        <small>Postado por: {postObject.username}</small>
      </div>

      <div className="commentSection">
        <h3>Comentários</h3>

        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Digite um comentário..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={addComment}>Adicionar</button>
        </div>

        <div className="listOfComments">
          {comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <p>{comment.text}</p>
              <small>{comment.username}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;