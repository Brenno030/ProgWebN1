import React from "react";

function PostCard({id, title, posttext, username, onClick, htmlId}){
    return( 
    <div 
    key={id} 
    className="post" 
    onClick={onClick ? () => onClick(id) : undefined}
    id= {htmlId ? "individual" : undefined}
    >
        <div className="title">{title}</div>
        <div className="body">{posttext}</div>
        <div className="footer">{username}</div>
    </div>
    )
}

export default PostCard;