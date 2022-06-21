import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../action/cartAction";
import CheckOutSteps from "../components/CheckOutSteps";

import FormContainer from "../components/FormContainer";
const PaymentScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  if (!shippingAddress) {
    navigate("/shipping");
  }

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckOutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              className="mb-3"
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              className="mb-3"
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button className="mb-5" type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
