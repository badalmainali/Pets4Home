import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Message from "../../components/Message";

const CreateBlogs = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", content);
      formData.append("image", image);

      setTitle("");
      setDescription("");
      setContent("");
      const { data: res } = await axios.post(
        "http://localhost:5000/api/blogs/create",
        formData
      );

      console.log(res);
      setSuccess(true);
      setMessage("Blog Added Successfully");
      // const interval = setInterval(() => {
      //   window.location.reload();
      // }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container p-5">
      <h2>Create a Blog</h2>
      <Grid>
        <Grid item>
          {success && <Message>{message}</Message>}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="title"
                aria-describedby="emailHelp"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                id="exampleFormControlTextarea1"
                description="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                rows="2"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                onChange={(e) => setContent(e.target.value)}
                value={content}
                rows="5"
                name="content"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Upload an Image
              </label>
              <input
                type="file"
                filname="image"
                className="form-control-file"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="image"
                onChange={handleFile}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateBlogs;
