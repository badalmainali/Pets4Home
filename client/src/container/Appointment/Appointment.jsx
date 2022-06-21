import React from "react";
import { Box, Grid } from "@mui/material";
import FormDetails from "./Form";

const Appointment = () => {
  return (
    <Box sx={{ margin: "30px" }}>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Make an Appointment
      </h1>
      <FormDetails />
  
    </Box>
  );
};

export default Appointment;
