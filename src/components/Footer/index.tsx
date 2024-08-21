import React, { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import {
  copyRightContainer,
  copyRightIcon,
  copyRightText,
  footerContainer,
  socialsIcon,
} from "./styles";

const Footer: FC = () => {
  return (
    <Container fixed component="footer">
      <Grid container sx={footerContainer}>
        <Grid item>
          <LinkedInIcon sx={socialsIcon} />
          <EmailIcon sx={socialsIcon} />
        </Grid>
        <Grid item sx={copyRightContainer}>
          <CopyrightIcon sx={copyRightIcon} />
          <Typography sx={copyRightText}>
            2024 Laura Krey All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
