import React from "react";
import { Container,Form,FormControl,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
const Products = () => {
  return (
    <div style={{display:'flex'}}>
      <Sidebar />
      <Container>
      <h2 style={{margin:'20px 0px 20px 0px'}}>Products</h2>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{maxWidth:'600px'}}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Link to='/create/product'><Button>Create Product</Button></Link>
      </Container>
    </div>
  );
};

export default Products;
