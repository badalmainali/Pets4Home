import React, { useEffect } from "react";
import { listBlogDetails } from "../action/blogAction";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";

const BlogScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogDetails(id));
  }, [dispatch, id]);

  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "700",
          lineHeight: "1.2",
          margin: "30px",
          fontSize: "28px",
          textTransform: "uppercase",
        }}
      >
        {blog.title}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
       

        }}
      >
        <img
          className="img-fluid"
          src={`/uploads/blogs/${blog.image}`}
          style={{ marginBottom: "25px", maxWidth: "100%", height: "auto" }}
        />
        <p style={{ fontSize: "16px", padding: "0px 100px 0px 100px",flexShrink:'1' }}>
          {blog.content}
        </p>
      </div>
    </div>
  );
};

export default BlogScreen;
