import { Grid, Card, Typography, CardMedia, CardActions } from "@mui/material";
import React from "react";

const Team = ({ person }) => {
  return (
   
      <Card
        sx={{ maxWidth: 280 }}
        style={{
          marginBottom: "30px",
          borderRadius: "20px",
          marginLeft: "20px",
          boxShadow:" -1px 5px 5px 0px rgba(0,0,0,0.75)"
        }}
      >
        <CardMedia
          style={{ borderRadius: "20px", width: "280px" ,height:'373px' }}
          component="img"
          src={`images/members/${person.image}`}
          alt="people"
        />

        <Typography
          align="center"
          gutterBottom
          style={{ fontSize: "25px", fontWeight: "600" }}
        >
          {person.name}
        </Typography>

        <CardActions>
          <Grid align="center"></Grid>
        </CardActions>
      </Card>
  
  );
};

export default Team;
