import React from "react";
import { Grid } from "@mui/material";
import styles from "./styles.module.css";

const Heading = () => {
  return (
    <Grid
      container
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        backgroundColor: "rgb(22,22,22)",
        color: "white",
        overflow: "hidden",
        minHeight: "220px",
      }}
      className={styles.heading}
    >
      <Grid item>
        <div style={{display:'flex',flexDirection:'column'}}>
          <p className={styles.house}>
            Not only People <br/><span className={styles.span}>Need a house</span>
          </p>
          <button className={styles.makeFriend}>Make a friend</button>
        </div>
      </Grid>

      <img
        src="/images/dog.svg"
        style={{ maxWidth: "100%" }}
        className={styles.image}
        alt=""
      />
    </Grid>
  );
};

export default Heading;
