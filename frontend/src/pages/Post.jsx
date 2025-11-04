import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import api from "../services/api";
import PostCard from "../Components/PostCard";

function Post(){
    let {id} = useParams();

    const [postObject, setPostObject] = useState({}); 
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        api.get(`/posts/${id}`).then((response) => {
            setPostObject(response.data);
            console.log(response.data);
        });

        api.get(`comments/${id}`).then((response) =>{
            setComments(response.data);
            console.log(response.data);
        })
    }, []);

    const addComment = () =>{
        api.post("/comments", {
            commentBody: newComment,
            PostId: id,
        }).then((response) =>{
            const commentToAdd = {commentBody: newComment};
            setComments([...comments, commentToAdd])
            console.log("Comentário adionado com sucesso")
            console.log(newComment);
        })
    }


    return (
        <div className="postPage">
            <div className="leftSide">
                <PostCard 
                htmlId
                title={postObject.title} 
                posttext={postObject.posttext}
                username={postObject.username}
                />
                {/* <div  className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.posttext}</div>
                    <div className="footer">{postObject.username}</div>
                </div> */}
            </div>

            <div className="rightSide">

                <div className="addCommentContainer">
                    <input type="text" placeholder="Digite o comentário" value={newComment} onChange={(event)=> {setNewComment(event.target.value)}}/>
                </div>
                <button onClick={addComment}>Add Comentário</button>

                <div className="listOfComments">
                    {comments.map((comment, key) =>{
                        return(
                            <div className="comment">
                                {comment.commentBody}
                            </div>
                        ) 
                    })
                    }
                </div>
        </div>
            </div>
    )
}

export default Post;