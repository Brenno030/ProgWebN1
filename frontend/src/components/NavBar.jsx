import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload(); // só pra atualizar o botão
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/criarpost">Novo Post</Link>
      </div>

      <div className="nav-right">
        {!user ? (
          <Link to="/cadastro">Cadastrar</Link>
        ) : (
          <button onClick={handleLogout} className="logoutButton">
            Sair ({user.username})
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
