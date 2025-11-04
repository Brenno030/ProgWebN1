import React, {useEffect, useState} from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import PostCard from '../Components/PostCard';

function Home(){
    const [listOfPosts, setOfPosts] = useState([]);
    let navigate = useNavigate();

    useEffect(() =>{
         api.get("/posts").then((response) => {
          console.log(response.data);
        setOfPosts(response.data);
  })
}, []);
    return(
      <div className="App" >
      {listOfPosts.map((value) => {
        return (
          <PostCard 
          id={value.id} 
          title={value.title} 
          posttext={value.posttext} 
          username={value.username}
          onClick={() => {navigate(`/post/${value.id}`)}}
          />

        //   <div className="post" onClick={() => {navigate(`/post/${value.id}`)}}>
        //     <div className="title"> {value.title} </div>
        //     <div className="body">{value.posttext}</div>
        //     <div className="footer">{value.username}</div>
        //   </div>
         );
      })}
    </div>
    
    )
}

export default Home;