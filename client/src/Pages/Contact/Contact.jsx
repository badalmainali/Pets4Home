import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px 0px 40px 0px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Contact Form</h2>
      <Form style={{ width: "500px", maxWidth: "100%" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="Name" name="name" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Phone Number (Optional)</Form.Label>
          <Form.Control type="number" name="phone" placeholder="Phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Address</Form.Label>
          <Form.Control type="address" address="address" placeholder="Address" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
