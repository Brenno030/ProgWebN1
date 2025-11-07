# 🐦 Twitter Clone

O **Twitter Clone** é uma aplicação web inspirada no Twitter, onde os usuários podem **criar posts**, **ver posts de outros usuários**, e **comentar** sobre eles.  

O projeto foi desenvolvido com **React** no frontend e **Node.js/Express** no backend, unindo consumo de API, rotas, componentes reutilizáveis e estilização moderna.

---

## 🚀 Tecnologias Utilizadas

### Frontend
- React  
- React Router DOM  
- Axios  
- CSS Modularizado  

### Backend
- Node.js  
- Express  
- CORS  
- Nodemon  

---

## 📂 Estrutura do Projeto

twitter-clone/
├── backend/
│ ├── routes/ # Rotas da API
│ ├── controllers/ # Lógica das rotas
│ ├── app.js # Configuração do servidor
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── Components/ # Componentes reutilizáveis (PostCard, Navbar)
│ │ ├── Pages/ # Páginas (Home, Post)
│ │ ├── App.jsx # Roteamento principal
│ │ └── App.css # Estilos globais
│ ├── package.json
├── package.json
└── README.md

---

## ⚡ Funcionalidades

- Listagem de posts com título, conteúdo e usuário  
- Navegação para página individual de post  
- Formulário para criar posts  
- Comentários em posts  
- Estilização moderna com CSS e efeitos de hover  

---

## 🛠️ Rotas da API

### Posts
- **GET** `/posts` → Lista todos os posts  
- **POST** `/posts` → Cria um novo post  

### Comentários
- **GET** `/comments/:postId` → Lista comentários de um post  
- **POST** `/comments` → Cria um comentário em um post  

---

## 💻 Instalação

Clone o projeto:

```bash
git clone https://github.com/seu-usuario/twitter-clone.git
cd twitter-clone

Backend
cd backend
npm install
npm run dev


O servidor backend iniciará em: http://localhost:3000

Frontend
cd frontend
npm install
npm run dev


O servidor frontend iniciará em: http://localhost:5173 (ou a porta que o Vite usar)

📌 Observações

Certifique-se de que o backend esteja rodando antes de acessar o frontend

O frontend consome os endpoints do backend para listar e criar posts

O CSS é moderno, com sombras, transições e cores inspiradas no Twitter

👨‍💻 Autor

Sara Vieira Silva – Estudante de informática, apaixonada por programação e desenvolvimento web.