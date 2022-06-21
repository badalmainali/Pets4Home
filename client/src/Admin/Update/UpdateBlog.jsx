import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
const UpdateBlog = ({ blog }) => {
  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    if (blog.title) {
      setContent(blog.content);
      setTitle(blog.title);
    }
  });
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/blogs/${blog._id}`,
        { title, content }
      );
      console.log(response);
      return setSuccess(true);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Button variant="primary" size="md" className="rounded" onClick={handleShow}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Update a Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate} className="d-flex flex-column">
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                placeholder="Content"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Button className="mt-2 rounded" variant="success" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {success == true && (
            <Alert variant="success">Successfully Updated ! </Alert>
          )}
          <Button
            variant="secondary"
            onClick={() => {
              if (success === true) {
                handleClose();
                window.location.reload();
              } else {
                handleClose();
              }
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateBlog;
