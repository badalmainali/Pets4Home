import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import './Cards.css'

const Product = ({ product }) => {
  return (
    <Card className="cards"
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
        <CardMedia className="card-img"
         
          component="img"
          image={product.image}
          alt="Dog"
        />

        <Typography
          align="center"
          gutterBottom
          style={{ fontSize: "18px", fontWeight: "600" }}
        >
          Name : <span>{product.name}</span>
        </Typography>
      </Link>

      <Grid sx={{ textAlign: "center" }}>
        <h4 className="price">Price : Rs.{product.price}</h4>
         <Rating value={product.rating}  />
      </Grid>
    </Card>
  );
};

export default Product;
