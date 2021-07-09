import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { EditorState, Editor, convertToRaw } from "draft-js";
import "@draft-js-plugins/emoji/lib/plugin.css";
import Toolbar from "./StyleToolbar/toolbar.js";
import '@draft-js-plugins/static-toolbar/lib/plugin.css'
import { stateToHTML } from "draft-js-export-html";

export default function TextBox() {
  const [name, setName] = useState("");
  const [content, setContent] = useState(EditorState.createEmpty());
  const history = useHistory();

  const convertDescriptionFromJSONToHTML = () => {
    try {
      return { __html: stateToHTML(content.getCurrentContent()) };
    } catch (exp) {
      console.log(exp);
      return { __html: "Error" };
    }
  };

  const uploadCallback = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return new Promise((resolve, reject) => {
      fetch("http://localhost:3001/uploadImage", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((resData) => {
          console.log(resData);
          resolve({ data: { link: resData } });
        })
        .catch((error) => {
          console.log(error);
          reject(error.toString());
        });
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      name: name,
      content: convertToRaw(content.getCurrentContent()),
    };
    console.log("POST: ", newPost);
    fetch("http://localhost:3001/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContent(EditorState.createEmpty());
        history.goBack();
      })
      .catch((err) => console.log("ERROR:", err));
  };




  return (
    <div className="editorContainer" border="0">
      <form noValidate onSubmit={onSubmit}>
        <div className="editors">
       
          <Editor
            border="0"
            editorState={content}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            wrapperStyle={{ border: "2px solid green", marginBottom: "20px" }}
            editorStyle={{ height: "300px", padding: "10px" }}
            toolbar={{ image: { uploadCallback } }}
            onEditorStateChange={(editorState) => setContent(editorState)}
          />
          <Toolbar/>
        </div>
        <div dangerouslySetInnerHTML={convertDescriptionFromJSONToHTML()}></div>
      </form>
    </div>
  );
}