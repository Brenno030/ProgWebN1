import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import "../App.css";

function CreatePost() {
  const user = JSON.parse(localStorage.getItem("user"));
  const initialValues = {
    title: "",
    posttext: "",
    username: user ? user.username : "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Você deve escrever um título!"),
    posttext: Yup.string().required("Digite a mensagem!"),
    username: Yup.string().min(3).max(15).required("Você deve se identificar!"),
  });

  const onSubmit = async (data, { resetForm }) => {
    try {
      await api.post("/posts", data);
      resetForm();
    } catch (err) {
      console.error("Erro ao enviar post:", err);
      alert("Não foi possível criar o post.");
    }
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Título:</label>
          <ErrorMessage name="title" component="span" />
          <Field id="inputCreatePost" name="title" placeholder="Digite o título..." />

          <label>Post:</label>
          <ErrorMessage name="posttext" component="span" />
          <Field id="inputCreatePost" name="posttext" placeholder="Escreva algo..." />

          {!user && (
            <>
              <label>Usuário:</label>
              <ErrorMessage name="username" component="span" />
              <Field
                id="inputCreatePost"
                name="username"
                placeholder="(Ex. John123...)"
              />
            </>
          )}

          <button type="submit">Criar Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;