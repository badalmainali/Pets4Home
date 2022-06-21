import React, { useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart, removeFromCart } from "../action/cartAction";
import DeleteIcon from "@mui/icons-material/Delete";
import { withRouter } from "react-router-dom";

const CartScreen = ({ history }) => {
  const { id } = useParams();
  const productId = id;
  const navigate = useNavigate();
  const location = useLocation();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  // Remove Cart
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  
  };
  return (
    <Row className="g-0" style={{ overflow: "-moz-hidden-unscrollable" }}>
      <Col md={8}>
        <h1 style={{ textAlign: "center", margin: "30px" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row className="pt-3">
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      style={{ height: "80px", width: "100px" }}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/pet/${item.product}`}
                    >
                      <h5>{item.name}</h5>
                    </Link>
                  </Col>
                  <Col md={2}>
                    <h5>Rs.{item.price}</h5>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <DeleteIcon />{" "}
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={3} className="mt-5">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2 style={{ textDecoration: "underline" }}>Order Summary</h2>
              <p style={{ fontSize: "18px" }}>
                Subtotal({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </p>
              <Row>
                <Col>
                  <h4>Total</h4>{" "}
                </Col>
                <Col>
                  <h4 style={{ color: "rgb(245,114,36)" }}>
                    Rs.
                    {cartItems
                      .reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}
                  </h4>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;
