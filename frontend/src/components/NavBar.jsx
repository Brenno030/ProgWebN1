import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/criarpost">Novo Post</Link>
      </div>
      <div className="nav-right">
        <Link to="/cadastro" className="btn-cadastrar">Cadastrar</Link>
      </div>
    </nav>
  );
}

export default NavBar;