import React from "react";
import { Box, Button, Grid, Input, TextField } from "@mui/material";
import styles from "./styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from '@mui/icons-material/Delete';

const CartProductScreen = ({ pet }) => {
  return (
    <Box
      sx={{
        backgroundColor: " white",
        margin: "10px 10px 20px 10px",
        padding: "20px",
      }}
    >
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2}>
          <img src={pet.images} alt="" height={80} />
        </Grid>
        <Grid item xs={4} sx={{ overflow: "ellipse" }}>
          <p className={styles.name}>{pet.name}</p>
          <p style={{ color: "#757575" }}> {pet.category}</p>
        </Grid>
        <Grid item xs={3}>
          <p className={styles.name} style={{ color: "red" }}>
            Rs.{pet.price}
          </p>
          <Button><FavoriteIcon sm='small'/> </Button><Button><DeleteIcon/></Button>
        </Grid>
        <Grid item xs={3}>
          <TextField
            defaultValue={1}
            label="Qty"
            sx={{ width: 100 }}
            type="number"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartProductScreen;
