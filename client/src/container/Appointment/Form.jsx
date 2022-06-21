import React,{useState} from "react";
import { Form, Button, Row, Col, Image, Container } from "react-bootstrap";

const FormDetails = () => {
    const [data,setData]=useState({
        "name":"",
        "email":"",
        "phone":"",
        "address":"",
        "sex":"",
        "date":"",
    });
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col sm={4}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Fullname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="name" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Your Address</Form.Label>
              <Form.Control type="address" placeholder="Your Address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="select">Sex</Form.Label>
              <Form.Select id="select">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Your Address" />
            </Form.Group>

            <Button variant="primary" className="mt-3 rounded" type="submit">
              Book Now
            </Button>
          </Form>
        </Col>
        <Col sm={4} className='m-4'>
          <Image fluid
            style={{ minHeight: "400px", minWidth: "100%",border:'0px' }}
            src="/images/doctor.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FormDetails;
