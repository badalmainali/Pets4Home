import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Team from "./Team";

const About = () => {
  const persons = [
    { name: "Krishna Raut", image: "krishna.jpg" },
    { name: "Anup Giri", image: "anup.jpg" },
    { name: "Harish Saud", image: "harish.jpg" },
    { name: "Badal Mainali", image: "badal.jpg" },
    { name: "Aashish Silwal", image: "aashish.jpg" },
  ];
  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: "rgb(22,22,22)",
          color: "white",
          minHeight: "x",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Grid item xs={4}>
          {" "}
          <img src="/images/deer.jpg" alt="deer" className={styles.deer} />
        </Grid>
        <Grid item xs={8}>
          <p className={styles.About}>About Us</p>

          <p className={styles.started}>
            {" "}
            Its all started with the <br /> immense love for these <br />
            furry creatures
          </p>
        </Grid>
      </Grid>
      <Typography
        style={{ textAlign: "center", fontSize: "40px", fontWeight: 550,color:'black' }}
      >
        Our Team
      </Typography>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ justifyContent: "space-evenly", paddingTop: "60px" }}
      >
        {persons.map((person) => (
          <Team key={person} person={person} />
        ))}
      </Grid>
    </div>
  );
};

export default About;
