import React, { FC } from "react";
import { Grid, Container } from "@mui/material";
import { headerContainer } from "./styles";

interface Tab {
  tabName: string;
  onClick: () => void;
}

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

const Header: FC = () => {
  return (
    <Container fixed style={headerContainer}>
      {tabs.map((tab: Tab, index: number) => (
        <Grid item key={index} onClick={() => tab.onClick()}>
          {tab.tabName}
        </Grid>
      ))}
    </Container>
  );
};

export default Header;
