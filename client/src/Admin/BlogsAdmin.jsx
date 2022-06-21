import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Col,
  Row,
  Table,
  Modal,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import { listBlogs } from "../action/blogAction";
import Loader from "../components/Loader";
import axios from "axios";
import UpdateBlog from "./Update/UpdateBlog";

const Blogs = () => {
  const [deleteMsg, setDeleteMsg] = useState(null);

  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  // Whatever We put in useEffect will run as soon as components load
  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);
  const handleDelete = async (blog) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/blogs/${blog._id}`
      );
      setDeleteMsg(true);
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
        <h2 style={{ margin: "20px 0px 20px 0px" }}>Blogs</h2>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ maxWidth: "600px" }}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Link to="/create/blogs">
          <Button>Create Blogs</Button>
        </Link>
        <Row className="mt-5">
          {loading && <Loader></Loader>}
          <Col md={10}>
            {deleteMsg && <Alert variant="success">Deleted Successfuly</Alert>}
            <Table className="table-success table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={`/uploads/blogs/${blog.image}`}
                        style={{ height: "80px" }}
                        className="img-fluid img"
                      />
                    </td>
                    <td>{blog.title}</td>
                    <td>{blog.description.slice(0, 100)}</td>
                    <td>{blog.content.slice(0, 100)}</td>
                    <td>
                      <UpdateBlog blog={blog} />
                      <Button
                      size='md'
                        variant="danger"
                        className="mt-3 rounded"
                        onClick={() => {
                          handleDelete(blog);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
