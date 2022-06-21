import React, { useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import pets from "../../pets";
import CartProductScreen from "../../screens/CartProductScreen";
import OrderSummaryScreen from "../../screens/OrderSummaryScreen";
const Cart = () => {
  // const [products,setProducts]=useState([]);

  return (
    <Box sx={{ flexGrow: 1 ,backgroundColor:'rgb(244,244,244)',marginBottom:'30px'}}>
      <Typography sx={{ fontWeight: "700", fontSize: "30px", color: "black",marginLeft:'18px' }}>
        Shopping Cart
      </Typography>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={7}>
          {pets.map((pet) => (
            <CartProductScreen pet={pet} />
          ))}
        </Grid>
        <Grid item xs={4} >
         <OrderSummaryScreen/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
