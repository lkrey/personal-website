import React from "react";
import { Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Grid sx={{ height: "100vh" }}>
      <Typography
        sx={{
          fontSize: "72px",
          background: "transparent",
          display: "flex",
          placeContent: "center",
          marginTop: "200px",
        }}
      >
        LAURA KREY
      </Typography>
    </Grid>
  );
};

export default Home;
