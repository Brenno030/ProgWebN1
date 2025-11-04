import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import api from "../services/api"
import "../App.css";


function CreatePost(){
     const initialValues = {
    title: "",
    posttext: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Você deve escrever um título!"),
    posttext: Yup.string().required("Digite a mensagem!"),
    username: Yup.string().min(3).max(15).required("Você deve se identificar!"),
  });

    const onSubmit = (data) =>{
      api.post("/posts", data).then((response) =>{
        console.log(data);
        console.log("Post adicionado com sucesso!!!")
      })
    }

    return (
    
        <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Título: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
          />
          <label>Post: </label>
          <ErrorMessage name="posttext" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="posttext"
            placeholder="(Ex. Post...)"
          />
          <label>Usuário: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <button type="submit">Criar Post</button>
        </Form>
      </Formik>
    </div>

    )
}
export default CreatePost;