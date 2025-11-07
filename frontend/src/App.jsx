import {BrowserRouter, Routes, Route, Link
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import NavBar from "./components/NavBar";
import Post from "./pages/Post";
import Cadastro from "./pages/Cadastro"

function App() {

  return (
<div className="App">
   
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/criarpost" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<Post/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
       </Routes>
    </BrowserRouter>
 </div>
  );
}

export default App;