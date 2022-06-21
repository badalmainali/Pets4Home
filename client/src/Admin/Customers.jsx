import React from "react";
import { Container, Table,Form,Button,FormControl } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";

const Customers = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container>
          <h2 style={{margin:'20px 0px 20px 0px'}}>Customers</h2>
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Customers;
