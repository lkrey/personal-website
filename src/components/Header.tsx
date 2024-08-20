import React, { Fragment } from "react";
import { Grid } from "@mui/material";

interface Tab {
  tabName: string;
  onClick: () => void;
}

const { headerContainer } = {
  headerContainer: {
    padding: "1rem 3rem",
    display: "flex",
    justifyContent: "space-between",
  },
};

const tabs: Tab[] = [
  {
    tabName: "ABOUT",
    onClick: () => {},
  },
  {
    tabName: "INTERESTS",
    onClick: () => {},
  },
  {
    tabName: "ACCOMPLISHMENTS",
    onClick: () => {},
  },
  {
    tabName: "EXPERIENCE",
    onClick: () => {},
  },
  {
    tabName: "GET IN TOUCH",
    onClick: () => {},
  },
];

const Header = () => {
  return (
    <Grid container component="header" style={headerContainer}>
      {tabs.map((tab: Tab, index: number) => (
        <Grid item key={index} onClick={() => tab.onClick()}>
          {tab.tabName}
        </Grid>
      ))}
    </Grid>
  );
};

export default Header;
