import React, { Fragment } from "react";
import { Grid } from "@mui/material";
/*
TODO: 
 import { useRouter } from "next/router";
*/

const { headerContainer } = {
  headerContainer: {
    padding: "1rem 3rem",
    display: "flex",
    justifyContent: "space-between",
  },
};

interface Tab {
  tabName: string;
  onClick: () => void;
}

const App: React.FC = () => {

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

  return (
    <Fragment>
      <Grid
        component="header"
        data-testid="app-header-container"
        style={headerContainer}
      >
        {tabs.map((tab: Tab, index: number) => (
          <Grid key={index} onClick={() => tab.onClick()} item>
            {tab.tabName}
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default App;
