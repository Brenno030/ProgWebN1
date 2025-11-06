import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    api.get("/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value) => (
        <div
          key={value._id}
          className="postCard-home"
          onClick={() => navigate(`/post/${value._id}`)}
        >
          <div className="postHeader">
            <h3>{value.title}</h3>
            <small className="authorHome">
              Postado por @{value.username} · {dayjs(value.createdAt).fromNow()}
            </small>
          </div>
          <p className="postBody">{value.posttext}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;