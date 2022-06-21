import React, { useEffect } from "react";

import { Grid, Box, Typography } from "@mui/material";
import Pet from "./Pet";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

export default function PetList({ products, loading, error }) {
  return (
    <Box flexGrow={2}>
      <Typography
        variant="h3"
        sx={{ marginTop: "10px" }}
        align="center"
        component="div"
      >
        Our Friends who <br /> are looking for house
      </Typography>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ justifyContent: "space-evenly", paddingTop: "60px" }}
        >
          {products.map((product) => (
            <Pet key={product._id} product={product} />
          ))}
        </Grid>
      )}
    </Box>
  );
}
