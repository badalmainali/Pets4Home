import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Product = ({ product }) => {
  return (
    <Card
      key={product._id}
      sx={{ maxWidth: 300 }}
      style={{
        marginBottom: "30px",
        borderRadius: "20px",
        marginLeft: "20px",
      }}
    >
      <Link
        to={`/pet/${product._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <CardMedia
          style={{ borderRadius: "20px", width: "280px", height: "240px" }}
          component="img"
          image={product.image}
          alt="Dog"
        />

        <Typography
          align="center"
          gutterBottom
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          {product.name}
        </Typography>
      </Link>

      <Grid sx={{ textAlign: "center" }}>
        <h4>Rs.{product.price}</h4> <Rating value={product.rating} readOnly />
      </Grid>
    </Card>
  );
};

export default Product;
