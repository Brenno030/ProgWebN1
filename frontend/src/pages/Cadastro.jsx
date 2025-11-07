import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom"; // 👈 importa o hook
import "../App.css";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 👈 cria a função de navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
  const response = await api.post("/users", {
    username,
    email,
    password,
  });

  console.log("Usuário cadastrado:", response.data);
  alert("Usuário cadastrado com sucesso!");

  // salva o usuário localmente
  localStorage.setItem("user", JSON.stringify({ username }));

  // limpa os campos
  setUsername("");
  setEmail("");
  setPassword("");

  navigate("/");
} catch (err) {
  console.error("Erro ao cadastrar:", err);
  alert("Erro ao cadastrar usuário. Verifique o console!");
}
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Crie sua conta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;