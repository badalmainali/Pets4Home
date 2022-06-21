import React, { useState } from "react";
import { Carousel, Card, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
const CarouselScreen = ({ products }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="fluid">
      <h2 style={{ textAlign: "center" }}>New Arrivals</h2>
      <Carousel
        controls="false"
        activeIndex={index}
        onSelect={handleSelect}
        className="container"
      >
        {/* {for(let x=1,x<==3,x++){

		}} */}
        <Carousel.Item interval={1000}>
          <Row>
            {products.map((product,key) => (
              <Col key={key}>
                <Card
                  className={styles.card}
                  style={{
                    maxWidth: 240,
                    maxHeight: 405,
                    backgroundColor: "rgb(255,255,255)!important",
                  }}
                >
                  <Link to={`/pet/${product._id}`}>
                    <Card.Img
                      src={product.image}
                      variant="top"
                      className={styles.image}
                    />
                  </Link>
                  <Card.Body>
                    <Link
                      to={`/pet/${product._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h5>
                        <strong>{product.name}</strong>
                      </h5>
                    </Link>
                    <Card.Text as="div">
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        // color='red'
                      />
                    </Card.Text>
                    <Card.Text as="h3">${product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselScreen;
