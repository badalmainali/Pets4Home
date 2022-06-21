import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../action/blogAction";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const Blogs = () => {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  // Whatever We put in useEffect will run as soon as components load
  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <Grid
      style={{
        margin: "30px 0px 30px 0px",
        paddingTop: "60px",
        justifyContent: "space-evenly",
      }}
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {blogs.map((blog, key) => (
        <Card key={key} sx={{ width: "400px", marginBottom: "10px" }}>
          <Link style={{textDecoration:'none'}}  to={`/blog/${blog._id}`}>
            <CardHeader title={blog.title} />
            <CardMedia component="img" image={`/uploads/blogs/${blog.image}`} />
            <CardContent>
              <Typography variant="body2">{blog.description}</Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

export default Blogs;
