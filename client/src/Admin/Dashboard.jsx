import React, { useEffect } from "react";
import { Container, Col, Row, Table, ListGroup } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../action/productAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // Whatever We put in useEffect will run as soon as components load
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container
        className="mt-5"
        styel={{ marginLeft: "5rem", padding: "1rem" }}
      >
        <Row>
          <Col>
            <h2>Latest Products</h2>
            <ListGroup as="ol" numbered>
              {products.map((product,key) => (
                <ListGroup.Item key={key}>{product.name} </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col>
            <h2>Latest Orders</h2>
            <Table striped>
              <thead>
                <tr>
                  <th>Order </th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>Otto</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
