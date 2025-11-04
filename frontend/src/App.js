import {BrowserRouter, Routes, Route, Link
} from "react-router-dom";
import './App.css';
import Home from "../src/Pages/Home";
import CreatePost from "./Pages/CreatePost";
import NavBar from "./Components/NavBar";
import Post from "./Pages/Post";

function App() {

  return (
<div className="App">
   
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/criarpost" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<Post/>}/>
       </Routes>
    </BrowserRouter>
 </div>
  );
}

export default App;